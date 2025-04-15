/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'
import { onShareTarget } from './share-target'
import { onNotificationClick, onPush } from './web-push-notifications'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})

const entries = self.__WB_MANIFEST
if (import.meta.env.DEV)
  entries.push({ url: '/', revision: Math.random().toString() })

precacheAndRoute(entries)

cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

// deny api and server page calls
let denylist: undefined | RegExp[]
if (import.meta.env.PROD) {
  denylist = [
    /^\/api\//,
    /^\/sign-in\//,
    /^\/sign-up\//,
    /^\/oauth\//,
    /^\/web-share-target\//,
    /^\/sw.js$/,
    /^\/manifest-(.*).webmanifest$/,
  ]
}

if (import.meta.env.PROD) {
  registerRoute(
    ({ request, sameOrigin }) => sameOrigin && request.destination === 'manifest',
    new NetworkFirst({
      cacheName: 'chinisik-webmanifest',
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({ maxEntries: 100 }),
      ],
    }),
  )
  // registerRoute(
  //   ({ sameOrigin, url }) =>
  //     sameOrigin
  //     && url.pathname.startsWith('/fonts/'),
  //   new StaleWhileRevalidate({
  //     cacheName: 'chinisik-fonts',
  //     plugins: [
  //       new CacheableResponsePlugin({ statuses: [200] }),
  //       new ExpirationPlugin({ purgeOnQuotaError: true, maxAgeSeconds: 60 * 60 * 24 * 15 }), // 15 days max
  //     ],
  //   }),
  // )
  // registerRoute(
  //   ({ sameOrigin, url }) =>
  //     sameOrigin
  //     && url.pathname.startsWith('/chinese-pinyin-sound/'),
  //   new StaleWhileRevalidate({
  //     cacheName: 'chinisik-pinyin',
  //     plugins: [
  //       new CacheableResponsePlugin({ statuses: [200] }),
  //       new ExpirationPlugin({ purgeOnQuotaError: true, maxAgeSeconds: 60 * 60 * 24 * 15 }), // 15 days max
  //     ],
  //   }),
  // )
}

registerRoute(new NavigationRoute(
  createHandlerBoundToURL('/'),
  { allowlist, denylist },
))

self.skipWaiting()
clientsClaim()

self.addEventListener('push', onPush)
self.addEventListener('notificationclick', onNotificationClick)
self.addEventListener('fetch', onShareTarget)
