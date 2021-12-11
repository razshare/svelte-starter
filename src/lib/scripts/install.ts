type BeforeInstallPromptEvent = {
  preventDefault: CallableFunction
  prompt?(): Promise<unknown>
}

let event: false | BeforeInstallPromptEvent = false

window.addEventListener('beforeinstallprompt', (e:BeforeInstallPromptEvent) => {
  e.preventDefault()
  event = e
})

export async function install(): Promise<boolean> {
  if(!event || !event.prompt)
    return false

  const response = (await event.prompt()) as { outcome: string }
  console.info('Installation request answer:', { response })
  return response.outcome === 'accepted'
}
