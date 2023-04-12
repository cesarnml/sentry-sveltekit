<script lang="ts">
	const triggerServerError = async () => {
		try {
			await fetch('/');
		} catch (error) {
			console.log(error);
		}
		await fetch('/');
	};
</script>

<div class="container">
	<div>
		<button
			on:click={() => {
				throw new Error('This is a client error');
			}}>Throw Client Error</button
		>

		<button on:click={triggerServerError}>Throw Server Error</button>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
	}
	.container {
		display: grid;
		place-items: center;
		height: 100vh;
		background-color: darkslategrey;
	}
</style>
