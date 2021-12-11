import { service } from '@assets'

export async function register() {
  if (!window.navigator || !window.navigator.serviceWorker)
    return console.warn('This platform does not suppoert service workers.')

  const registrations = await navigator.serviceWorker.getRegistrations()

  if (0 === registrations.length) {
    console.info(`Service worker '${service}' has been registered.`)
    await navigator.serviceWorker.register(service, {
      type: 'module',
    })
    return window.dispatchEvent(new Event('beforeinstallprompt'))
  }

  let registration: false | ServiceWorkerRegistration = false

  for (const reg of registrations)
    if (!reg.active || reg.active.scriptURL !== window.location.origin + service) continue
    else registration = reg

  if (!registration) 
    return (
      window.dispatchEvent(new Event('beforeinstallprompt')) 
      && 
      console.warn(`Service worker '${service}' not found.`)
    )

  console.info(`Service worker '${service}' found and is already registered.`)
  window.dispatchEvent(new Event('beforeinstallprompt'))
}
