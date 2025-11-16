import type { WorkboxPlugin } from 'workbox-core'
import type { AssetType, CacheInfo } from '../model/types'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'

class AssetAnalyzer {
  private static cache = new Map<string, AssetType>()

  // Patterns for hashed files (Vite/Nuxt)
  static HASH_PATTERNS = [
    /\.[a-f0-9]{8,}\.(js|css|mjs)$/i, // Vite hashes
    /\.[a-f0-9]{6,12}\.(js|css|mjs)$/i, // Short hashes
    /assets\/.*\.[a-f0-9]{8,}\./i, // Assets with hashes
    /\?v=[a-f0-9]{8,}/i, // Query version parameters
  ]

  // Patterns for static libraries (safe to cache for a long time)
  static VENDOR_PATTERNS = [
    /node_modules/i,
    /vendor/i,
    /lib/i,
    /cdn\./i,
    /unpkg\.com/i,
    /jsdelivr\.net/i,
  ]

  static isHashedAsset(url: string): boolean {
    return this.HASH_PATTERNS.some(pattern => pattern.test(url))
  }

  static isVendorAsset(url: string): boolean {
    return this.VENDOR_PATTERNS.some(pattern => pattern.test(url))
  }

  static getAssetType(url: string): AssetType {
    if (this.cache.has(url)) {
      return this.cache.get(url)!
    }

    let type: AssetType = 'regular'

    if (this.isHashedAsset(url))
      type = 'hashed'
    else if (this.isVendorAsset(url))
      type = 'vendor'

    // Limit cache size to prevent memory leaks
    if (this.cache.size > 1000) {
      // Simple cache eviction: clear on overflow
      this.cache.clear()
    }

    this.cache.set(url, type)
    return type
  }
}

class CacheStrategyFactory {
  static createNetworkFirst(cacheName: string, options: {
    maxEntries: number
    maxAgeSeconds: number
  }) {
    return new NetworkFirst({
      cacheName,
      plugins: [
        createMonitoringPlugin(cacheName),
        new CacheableResponsePlugin({
          statuses: [0, 200], // Cache opaque responses
        }),
        new ExpirationPlugin({
          maxEntries: options.maxEntries,
          maxAgeSeconds: options.maxAgeSeconds,
          purgeOnQuotaError: true, // Automatically clean up if quota is exceeded
        }),
      ],
    })
  }

  static createCacheFirst(cacheName: string, options: {
    maxEntries: number
    maxAgeSeconds: number
  }) {
    return new CacheFirst({
      cacheName,
      plugins: [
        createMonitoringPlugin(cacheName),
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: options.maxEntries,
          maxAgeSeconds: options.maxAgeSeconds,
          purgeOnQuotaError: true,
        }),
      ],
    })
  }

  static createStaleWhileRevalidate(cacheName: string, options: {
    maxEntries: number
    maxAgeSeconds: number
  }) {
    return new StaleWhileRevalidate({
      cacheName,
      plugins: [
        createMonitoringPlugin(cacheName),
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        new ExpirationPlugin({
          maxEntries: options.maxEntries,
          maxAgeSeconds: options.maxAgeSeconds,
          purgeOnQuotaError: true,
        }),
      ],
    })
  }
}

class ServiceWorkerMonitor {
  static trackCacheHit(cacheName: string, url: string) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log(`🎯 Cache HIT on ${cacheName}: ${url}`)
    }
  }

  static trackCacheMiss(cacheName: string, url: string) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log(`❌ Cache MISS on ${cacheName}, fetching from network: ${url}`)
    }
  }

  static trackCachePut(cacheName: string, url: string) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log(`✅ Cache PUT to ${cacheName}: ${url}`)
    }
  }
}

/**
 * Creates a plugin to monitor cache hits, misses, and puts.
 * @param cacheName - The name of the cache to log.
 */
function createMonitoringPlugin(cacheName: string): WorkboxPlugin {
  return {
    cacheDidUpdate: async ({ request }) => {
      ServiceWorkerMonitor.trackCachePut(cacheName, request.url)
    },
    cachedResponseWillBeUsed: async ({ request, cachedResponse }) => {
      if (cachedResponse) {
        ServiceWorkerMonitor.trackCacheHit(cacheName, request.url)
      }
      else {
        ServiceWorkerMonitor.trackCacheMiss(cacheName, request.url)
      }
      return cachedResponse
    },
  }
}

async function getCacheInfo(): Promise<CacheInfo[]> {
  try {
    const cacheNames = await caches.keys()
    const infoPromises = cacheNames.map(async (name) => {
      try {
        const cache = await caches.open(name)
        const keys = await cache.keys()
        return {
          name,
          size: keys.length,
          urls: keys.slice(0, 5).map(req => req.url),
        }
      }
      catch (error) {
        console.warn(`Could not get info for cache ${name}:`, error)
        return null
      }
    })

    const info = (await Promise.all(infoPromises)).filter(Boolean) as CacheInfo[]
    return info
  }
  catch (error) {
    console.error('Failed to get cache info:', error)
    return []
  }
}

export {
  AssetAnalyzer,
  CacheStrategyFactory,
  getCacheInfo,
  ServiceWorkerMonitor,
}
