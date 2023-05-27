<script>
	import Counter from ':components/counter.svelte'
	import { register } from ':scripts/push-notifications.js'
	import { Route, Router } from 'svelte-routing'

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
