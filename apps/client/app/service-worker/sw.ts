/* eslint-disable no-console */
import type { ServiceWorkerMessage } from './model/types'
import { clientsClaim } from 'workbox-core'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { messageHandlers } from './lib/message-handlers'
import { AssetAnalyzer, CacheStrategyFactory } from './lib/utils'
import { API_CACHE_RULES, CACHE_CONFIG } from './model/types'

declare let self: ServiceWorkerGlobalScope

clientsClaim()

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST || [])

// WEB APP MANIFEST
registerRoute(
  ({ request, sameOrigin }) => sameOrigin && request.destination === 'manifest',
  CacheStrategyFactory.createNetworkFirst(
    CACHE_CONFIG.names.webmanifest,
    {
      maxEntries: CACHE_CONFIG.limits.manifests,
      maxAgeSeconds: CACHE_CONFIG.durations.manifests,
    },
  ),
)

// FONTS (local and from Google Fonts)
registerRoute(
  ({ request }) => request.destination === 'font',
  CacheStrategyFactory.createCacheFirst(
    CACHE_CONFIG.names.fonts,
    {
      maxEntries: CACHE_CONFIG.limits.fonts,
      maxAgeSeconds: CACHE_CONFIG.durations.fonts,
    },
  ),
)

// ICONS from Iconify
registerRoute(
  ({ url }) => url.hostname === 'api.iconify.design',
  CacheStrategyFactory.createCacheFirst(
    CACHE_CONFIG.names.icons,
    {
      maxEntries: CACHE_CONFIG.limits.icons,
      maxAgeSeconds: CACHE_CONFIG.durations.icons,
    },
  ),
)

// IMAGES
registerRoute(
  ({ request, url }) =>
    request.destination === 'image'
    || /\.(?:png|gif|jpg|jpeg|svg|webp)$/i.test(url.pathname),
  CacheStrategyFactory.createStaleWhileRevalidate(
    CACHE_CONFIG.names.images,
    {
      maxEntries: CACHE_CONFIG.limits.images,
      maxAgeSeconds: CACHE_CONFIG.durations.images,
    },
  ),
)

// AUDIO
registerRoute(
  ({ request }) => request.destination === 'audio',
  CacheStrategyFactory.createCacheFirst(
    CACHE_CONFIG.names.audio,
    {
      maxEntries: CACHE_CONFIG.limits.audio,
      maxAgeSeconds: CACHE_CONFIG.durations.audio,
    },
  ),
)

const hashedAssetsStrategy = CacheStrategyFactory.createCacheFirst(
  CACHE_CONFIG.names.hashedAssets,
  {
    maxEntries: CACHE_CONFIG.limits.hashedAssets,
    maxAgeSeconds: CACHE_CONFIG.durations.static.hashed,
  },
)

const vendorAssetsStrategy = CacheStrategyFactory.createCacheFirst(
  CACHE_CONFIG.names.vendorAssets,
  {
    maxEntries: CACHE_CONFIG.limits.vendorAssets,
    maxAgeSeconds: CACHE_CONFIG.durations.static.vendor,
  },
)

const regularAssetsStrategy = CacheStrategyFactory.createStaleWhileRevalidate(
  CACHE_CONFIG.names.regularAssets,
  {
    maxEntries: CACHE_CONFIG.limits.regularAssets,
    maxAgeSeconds: CACHE_CONFIG.durations.static.regular,
  },
)

// JS/CSS
function isScriptOrStyle({ request, sameOrigin }: { request: Request, sameOrigin: boolean }) {
  return sameOrigin && (request.destination === 'script' || request.destination === 'style')
}

// Маршрут для хешированных ассетов
registerRoute(
  options => isScriptOrStyle(options) && AssetAnalyzer.getAssetType(options.url.href) === 'hashed',
  hashedAssetsStrategy,
)

// Маршрут для вендорных ассетов
registerRoute(
  options => isScriptOrStyle(options) && AssetAnalyzer.getAssetType(options.url.href) === 'vendor',
  vendorAssetsStrategy,
)

// Маршрут для обычных ассетов
registerRoute(
  options => isScriptOrStyle(options) && AssetAnalyzer.getAssetType(options.url.href) === 'regular',
  regularAssetsStrategy,
)

API_CACHE_RULES.forEach((rule) => {
  let strategy

  const options = {
    maxEntries: rule.maxEntries,
    maxAgeSeconds: rule.maxAgeSeconds,
  }

  switch (rule.strategy) {
    case 'CacheFirst':
      strategy = CacheStrategyFactory.createCacheFirst(rule.cacheName, options)
      break
    case 'NetworkFirst':
      strategy = CacheStrategyFactory.createNetworkFirst(rule.cacheName, options)
      break
    case 'StaleWhileRevalidate':
      strategy = CacheStrategyFactory.createStaleWhileRevalidate(rule.cacheName, options)
      break
    default:
      // This should not happen with TypeScript, but it's a good safeguard
      console.error(`Unknown cache strategy: ${rule.strategy}`)
      return
  }

  registerRoute(
    ({ request, url }) =>
      request.method === 'GET'
      // Ensure the request URL starts with the API path to avoid false positives
      && url.pathname.startsWith(rule.path),
    strategy,
  )
})

// This ensures that all navigations fall back to the main app shell,
// allowing the client-side router to handle the page.
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  {
    // Denylist API calls and service worker-related files to prevent them from being served the index.html
    denylist: [
      /^\/api\//,
      /^\/sw.js$/,
      /^\/manifest(.*).webmanifest$/,
      /^\/workbox-.*\.js$/,
    ],
  },
))

self.addEventListener('message', async (event) => {
  const { type, payload } = event.data as ServiceWorkerMessage
  // A port is passed for two-way communication
  const port = event.ports[0]

  if (!port)
    return

  const handler = messageHandlers[type]
  if (handler) {
    try {
      await handler(port, payload)
    }
    catch (error) {
      console.error(`Error processing message "${type}":`, error)
      port.postMessage({
        type: 'ERROR',
        payload: { message: `Internal error handling: ${type}` },
      })
    }
  }
  else {
    port.postMessage({
      type: 'ERROR',
      payload: { message: `Unknown message type: ${type}` },
    })
  }
})

if (import.meta.env.DEV) {
  console.log('🔧 Service Worker in development mode')

  self.addEventListener('fetch', (event) => {
    if (event.request.method === 'GET' && event.request.destination) {
      const assetType = AssetAnalyzer.getAssetType(event.request.url)
      console.log(`📥 [${event.request.destination}/${assetType}] ${event.request.url}`)
    }
  })
}
