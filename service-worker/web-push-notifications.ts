/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

declare const self: ServiceWorkerGlobalScope

self.addEventListener('message', () => {

})

export function onPush(event: PushEvent) {
  const promise = self.registration.showNotification(
    'title',
    {
      badge: '/pwa-192x192.png',
      body: 'Buzz! Buzz!',
      data: {
        access_token: 'access_token',
        preferred_locale: 'ru',
        url: `/`,
      },
      dir: 'auto',
      icon: '/apple-touch-icon-180x180.png',
      lang: 'ru',
      tag: 'vibration-sample',

      // @ts-expect-error error missing type, just ignore
      timestamp: new Date().getTime(),

    },
  )

  event.waitUntil(promise)
}

export function onNotificationClick(event: NotificationEvent) {
  const reactToNotificationClick = new Promise((resolve) => {
    event.notification.close()
    resolve(openUrl(event.notification.data.url))
  })

  event.waitUntil(reactToNotificationClick)
}

function findBestClient(clients: WindowClient[]) {
  const focusedClient = clients.find(client => client.focused)
  const visibleClient = clients.find(client => client.visibilityState === 'visible')

  return focusedClient || visibleClient || clients[0]
}

async function openUrl(url: string) {
  const clients = await self.clients.matchAll({ type: 'window' })
  // Chrome 42-48 does not support navigate
  if (clients.length !== 0 && 'navigate' in clients[0]) {
    const client = findBestClient(clients as WindowClient[])
    await client.navigate(url).then(client => client?.focus())
  }

  await self.clients.openWindow(url)
}
