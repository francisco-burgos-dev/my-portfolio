<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Francisco's Resume</title>
</svelte:head>

<nav
	class="text-xl bg-gradient-to-r from-cyan-600 from-60% to-indigo-700 h-20 flex justify-around pt-5"
>
	<a href="/">Home</a>
	<a href="#">About</a>
	<a href="#">Exp</a>
	<a href="#">Contact</a>
</nav>
<slot />
