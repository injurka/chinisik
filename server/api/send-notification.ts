import webpush from 'web-push'

export default defineEventHandler(async () => {
  const vapidKeys = {
    publicKey: 'BLlY2J_P2bYgBUzl4431UivgNMjwjUW8OUR0w1JgBHpmPxkmnemC0y-HRqJEAo75ZxnQvZfV_Sxjrz5-s3vkYgE',
    privateKey: 'ryuZ9YjqdFRWlA-hZ-YnEpnf3s4L2q4kbOZd4njktYI',
  }

  webpush.setVapidDetails(
    'mailto:your-email@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey,
  )

  const payload = JSON.stringify({ title: 'Test Notification', body: 'Hello, world!' })

  await webpush.sendNotification({
    endpoint: 'https://fcm.googleapis.com/fcm/send/ctnP-X6fdnM:APA91bEVdXZdimoauvE4u1OxOfup3LPr-C07SlxFhA4-pWHAeWsLRfwiamt1tTR-78tVzxBQyrd7qgXKel-1_k4b0qG88CKno2CDWI6x75biRCfDNKplaBMQR4JvRwSy172rmfymVyjx',
    keys: {
      auth: 'lOcPPy-CSIPQJHCL2fYlDw',
      p256dh: 'BHmUTWr-U2ymrheCjUEb1DT0mzAu_62PLQGqJO9fffi_C6AL8S_mEJcXfcTwowh1vKx-NzSFBfKQlp-NOjFPfyM',
    },
  }, payload)

  return 'nice'
})
