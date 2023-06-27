<script>
	import HomePage from '@pages/home-page.svelte'
	import { Route, Router } from 'svelte-routing'
</script>

<div class="grid justify-center content-center h-full w-full">
	<Router>
		<Route path="*">
			<HomePage />
		</Route>
	</Router>
</div>
