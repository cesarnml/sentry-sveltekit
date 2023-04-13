<nav>
	<a href="/">Home</a>
	<a href="/host/homes">Airbnb your home</a>
</nav>
<slot />

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
		color: #000;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
