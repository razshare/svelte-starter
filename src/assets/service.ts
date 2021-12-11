import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/** @ts-ignore */
const registration: ServiceWorkerRegistration =
  (self as unknown as {registration:unknown}).registration as ServiceWorkerRegistration

registerRoute(({ url }) => !url.pathname.endsWith('.version'), new CacheFirst())

async function notify(
  title: string,
  body: string,
  vibrate = [200, 100, 200],
  icon = '',
  tag = ''
) {
  await registration.showNotification(title, {
    body: body,
    icon: icon,
    vibrate: vibrate,
    tag: tag,
  })
}

self.addEventListener('message', function (event: { data: string }) {
  const data = JSON.parse(event.data) as {
    action: string
    body: {
      title: string
      body: string
      vibrate: [number, number, number]
      icon: string
      tag: string
    }
  }
  console.log('Service worker recieved a message:', { data })
  switch (data.action) {
    case 'send-notification':
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      void notify(
        data.body.title,
        data.body.body,
        data.body.vibrate,
        data.body.icon,
        data.body.tag
      )
      break
  }
})

self.addEventListener('install', function () {
  console.log('Website saved locally.')
})
