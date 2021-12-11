type BeforeInstallPromptEvent = {
  preventDefault?: CallableFunction
  prompt?(): Promise<unknown>
}

let event: false | BeforeInstallPromptEvent = false

let isTooSoon = true;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  event = e as unknown as BeforeInstallPromptEvent

  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      if(event && event.prompt)
        void event.prompt(); // Throws if called more than once or default not prevented
    }, 10000);
  }

})

export async function install(): Promise<boolean> {
  if(!event || !event.prompt)
    return false

  const response = (await event.prompt()) as { outcome: string }
  console.info('Installation request answer:', { response })
  return response.outcome === 'accepted'
}
