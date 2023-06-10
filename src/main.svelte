<script>
	import DefaultPage from '$pages/default-page.svelte'
	import { Route, Router } from 'svelte-routing'
</script>

<div class="grid justify-center content-center h-full w-full">
	<Router>
		<Route path="*" component={DefaultPage} />
	</Router>
</div>
