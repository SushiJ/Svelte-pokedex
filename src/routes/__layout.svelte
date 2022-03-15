<script>
	import '../app.css';
</script>

<div class="p-8 max-w-6xl scroll">
	<slot />
</div>

<style>
	.scroll::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	.scroll::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	/* Handle */
	.scroll:-webkit-scrollbar-thumb {
		background: #f44336;
		border-radius: 5px;
	}

	/* Handle on hover */
	.scroll:-webkit-scrollbar-thumb:hover {
		background: #f44336;
	}
</style>
