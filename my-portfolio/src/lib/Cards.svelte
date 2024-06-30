<script>
	export let img = '';
	export let alt = '';
</script>

<div class="outer-frame w-32 h-32 rounded-lg">
	<div class="inner-frame w-28 h-28 rounded">
		<img src={img} {alt} />
	</div>
</div>

<style>
	.outer-frame {
		background-color: #131b23;
		@apply shadow-xl;
	}
	.inner-frame {
		@apply relative;
		@apply left-[.5rem];
		@apply top-7;
	}
</style>
