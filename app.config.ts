export default defineAppConfig({
  titleTemplate: '%s',
  name: 'chinisik',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut_icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  ],
  meta: [
    { name: 'viewport', content: 'viewport-fit=cover, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'title', content: 'chinisik' },
    { hid: 'description', name: 'description', content: 'chinisik' },
    { property: 'og:title', content: '-' },
    { property: 'og:url', content: 'https://chinisik.vercel.app' },
    { property: 'og:image', content: 'https://chinisik.vercel.app/open-graph.png' },
    { property: 'og:image:width', content: '400' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:description', content: 'chinisik' },
    { name: 'twitter:card', content: 'summary' },
  ],
})
