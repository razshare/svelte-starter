<script>
  import HomePage from ':pages/home-page.svelte'
  import { Route, Router } from 'svelte-routing'
  const a = function run() {}

  console.log(a)
</script>

<div class="grid justify-center content-center h-full w-full">
  <Router>
    <Route path="*">
      <HomePage />
    </Route>
  </Router>
</div>
