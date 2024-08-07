<!-- eslint-disable no-console -->
<script lang="ts" setup>
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = `${base64String}${padding}`
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i)
    outputArray[i] = rawData.charCodeAt(i)

  return outputArray
}

async function onClick() {
  const supportsPushNotifications = typeof window !== 'undefined'
    && 'serviceWorker' in navigator
    && 'PushManager' in window
    && 'getKey' in PushSubscription.prototype

  const notificationPermission = ref<PermissionState | undefined>(
    Notification.permission === 'denied'
      ? 'denied'
      : Notification.permission === 'granted'
        ? 'granted'
        : Notification.permission === 'default'
          ? 'prompt'
          : undefined,
  )

  const permission = await Promise.resolve(
    Notification.requestPermission(),
  ).then((p) => {
    return p === 'default' ? 'prompt' : p
  })
  const registration = await navigator.serviceWorker.ready

  await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BLlY2J_P2bYgBUzl4431UivgNMjwjUW8OUR0w1JgBHpmPxkmnemC0y-HRqJEAo75ZxnQvZfV_Sxjrz5-s3vkYgE'),
  })

  const subscription = await registration.pushManager.getSubscription()

  console.log('registration', registration)
  console.log('subscription', JSON.parse(JSON.stringify(subscription)), subscription!.getKey('p256dh'))
  console.log('permission', permission)
  console.log('notificationPermission', notificationPermission.value)
  console.log('supportsPushNotifications', supportsPushNotifications)

  // eslint-disable-next-line no-new
  new Notification(`Message no ${1} from MDN.`, {
    tag: 'soManyNotification',
  })
}
</script>

<template>
  <button @click="onClick">
    BUTTON
  </button>
</template>
