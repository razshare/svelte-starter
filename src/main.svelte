<script lang="ts">
  import { listen, register } from '@scripts/push-notifications'
  import { SplashScreen } from '@capacitor/splash-screen'
  import { onMount } from 'svelte'
  import { Route, Router } from 'svelte-routing'
  import Counter from '@components/Counter.svelte'

  //@ts-ignore
  if (window.cordova) {
    onMount(SplashScreen.hide)
    onMount(async () => {
      if (await register()) {
        listen({
          onregistration: token => console.log('token', { token }),
          onregistrationerror: error => console.log('token', { error }),
          onaction: action => console.log('action', { action }),
          onnotification: notification => console.log('notification', { notification }),
        })
      }
    })
  }
</script>

<div class="grid justify-center content-center h-full w-full">
  <Router>
    <Route path="*" component={Counter} />
  </Router>
</div>
