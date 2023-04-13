<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let pathname: string;
	const duration = 150;
</script>

{#key pathname}
	<div
		in:fade={{ delay: duration, easing: cubicInOut }}
		out:fade={{ duration, easing: cubicInOut }}
	>
		<slot />
	</div>
{/key}
