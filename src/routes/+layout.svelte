<script>
	import { page } from '$app/stores';
	import PageTransition from '../lib/components/PageTransition.svelte';
	export let data;

	$: ({ pathname } = data);
</script>

<nav>
	<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
	<a href="/host/homes" class:active={$page.url.pathname === '/host/homes'}>Airbnb your home</a>
</nav>
<PageTransition {pathname}>
	<slot />
</PageTransition>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	a {
		color: rgb(15, 134, 134);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		color: rgb(9, 90, 90);
		font-weight: bold;
	}
</style>
