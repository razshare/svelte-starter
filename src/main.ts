import App from './App.svelte'
import { register } from './lib/scripts/register'

void register()

const app = new App({
  target: document.getElementById('app') as Element,
})

export default app
