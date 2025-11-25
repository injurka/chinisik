/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
/// <reference types="@types/workbox-sw" />

type AssetType = 'hashed' | 'vendor' | 'regular'

interface ServiceWorkerMessage {
  type: 'SKIP_WAITING' | 'GET_CACHE_INFO' | 'CLEAR_CACHE'
  payload?: {
    cacheName?: string
  }
}

interface CacheInfo {
  name: string
  size: number
  urls: string[]
}

const CACHE_CONFIG = {
  names: {
    // PWA & Core Assets
    webmanifest: 'chinisik-pwa-webmanifest',
    fonts: 'chinisik-fonts',
    icons: 'chinisik-icons',
    images: 'chinisik-images', // For general images
    audio: 'chinisik-audio',
    // Static JS/CSS Assets
    hashedAssets: 'chinisik-hashed-assets',
    vendorAssets: 'chinisik-vendor-assets',
    regularAssets: 'chinisik-regular-assets',
    // API Caches
    apiStatic: 'chinisik-api-static', // For immutable API data
    apiDynamic: 'chinisik-api-dynamic', // For frequently updated API data
  },
  durations: {
    // PWA & Core Assets
    fonts: 365 * 24 * 60 * 60, // 1 year
    icons: 30 * 24 * 60 * 60, // 30 days
    images: 7 * 24 * 60 * 60, // 7 days
    audio: 30 * 24 * 60 * 60, // 30 days
    manifests: 7 * 24 * 60 * 60, // 7 days
    // Static JS/CSS Assets
    static: {
      hashed: 365 * 24 * 60 * 60, // 1 year
      vendor: 30 * 24 * 60 * 60, // 30 days
      regular: 1 * 24 * 60 * 60, // 1 day
    },
    // API Caches
    api: {
      static: 30 * 24 * 60 * 60, // 30 days
      dynamic: 1 * 24 * 60 * 60, // 1 day
      daily: 1 * 24 * 60 * 60, // 1 day
    },
  },
  limits: {
    fonts: 30,
    icons: 100, // Reduced from 500 to be more reasonable
    images: 100,
    audio: 50,
    hashedAssets: 200,
    vendorAssets: 100,
    regularAssets: 50,
    manifests: 5, // Reduced from 100
    apiStatic: 50,
    apiDynamic: 100,
    apiDaily: 5,
  },
} as const

interface ApiCacheRule {
  path: string
  cacheName: string
  strategy: 'CacheFirst' | 'NetworkFirst' | 'StaleWhileRevalidate'
  maxAgeSeconds: number
  maxEntries: number
}

// Populated API rules
const API_CACHE_RULES: ApiCacheRule[] = [
  {
    path: '/api/v1/keys',
    cacheName: CACHE_CONFIG.names.apiStatic,
    strategy: 'CacheFirst',
    maxAgeSeconds: CACHE_CONFIG.durations.api.static,
    maxEntries: CACHE_CONFIG.limits.apiStatic,
  },
  {
    path: '/api/v1/pinyin',
    cacheName: CACHE_CONFIG.names.apiStatic,
    strategy: 'CacheFirst',
    maxAgeSeconds: CACHE_CONFIG.durations.api.static,
    maxEntries: CACHE_CONFIG.limits.apiStatic,
  },
  {
    path: '/api/v1/hsk/hieroglyphs/',
    cacheName: CACHE_CONFIG.names.apiStatic,
    strategy: 'CacheFirst',
    maxAgeSeconds: CACHE_CONFIG.durations.api.static,
    maxEntries: CACHE_CONFIG.limits.apiStatic,
  },
  {
    path: '/api/v1/cms/description/',
    cacheName: CACHE_CONFIG.names.apiStatic,
    strategy: 'CacheFirst',
    maxAgeSeconds: CACHE_CONFIG.durations.api.static,
    maxEntries: CACHE_CONFIG.limits.apiStatic,
  },
  {
    path: '/api/v1/books',
    cacheName: CACHE_CONFIG.names.apiDynamic,
    strategy: 'StaleWhileRevalidate',
    maxAgeSeconds: CACHE_CONFIG.durations.api.dynamic,
    maxEntries: CACHE_CONFIG.limits.apiDynamic,
  },
]

interface MessageHandlers {
  SKIP_WAITING: () => Promise<void>
  GET_CACHE_INFO: (port: MessagePort) => Promise<void>
  CLEAR_CACHE: (port: MessagePort, payload?: { cacheName?: string }) => Promise<void>
}

export {
  API_CACHE_RULES,
  type AssetType,
  CACHE_CONFIG,
  type CacheInfo,
  type MessageHandlers,
  type ServiceWorkerMessage,
}
