<script lang="ts">
  import { SplashScreen } from '@capacitor/splash-screen'
  import { listen, register } from '@scripts/push-notifications'
  import { onMount } from 'svelte'

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

  let counter = 0
</script>

<div class="grid justify-center content-center h-full w-full">
  <div class="btn btn-primary" on:mousedown={() => counter++}>
    Counter: {counter}
  </div>
</div>
