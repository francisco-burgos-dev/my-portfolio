<script>
	import Cards from '$lib/Cards.svelte';
</script>

<div class="w-[25vw] absolute left-[35vw] top-[20vh]">
	<div class="img-1">
		<Cards img="Flag_of_Puerto_Rico.svg.png" alt="Puerto Rico Flag" />
	</div>
	<p>Originally born and raised in Puerto Rico and moved to the States in 2013.</p>
	<br />
	<div class="img-2">
		<Cards img="camping.png" alt="Campoing image" />
	</div>
	<p class="mt-6">
		I am a doted father of two! And I love having adventures with them, like camping, visiting new
		parks, and cycling.
	</p>
	<div class="img-3">
		<Cards img="developer.png" />
	</div>
	<p class="mt-11">
		While working for Legrand, my passion for technology ignited, so I began teaching myself
		programming languages like C#, Javascript, CSS, and HTML, and I continue to increase my
		knowledge every day. It is this drive and passion that I would be great for your team!
	</p>
</div>

<style>
	.img-1 {
		@apply mb-3;
		@apply relative;
		@apply left-40;
		animation-name: fadeInR;
		animation-duration: 5s;
	}
	.img-2 {
		@apply absolute;
		@apply left-[24vw];
		@apply top-[10vw];
		animation-name: fadeInL;
		animation-duration: 5s;
	}
	.img-3 {
		@apply absolute;
		@apply right-[26vw];
		@apply top-[17vw];
		animation-name: fadeInR;
		animation-duration: 5s;
	}
	@keyframes fadeInR {
		from {
			translate: -10vw 0;
			transform: rotate(-45deg);
		}
		to {
			translate: 0 0;
		}
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeInL {
		from {
			translate: 10vw 0;
			transform: rotate(45deg);
		}
		to {
			translate: 0 0;
		}
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
