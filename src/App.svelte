<script>
	import Index from './Pages/index.svelte';
	import Header from './Components/Header.svelte';
	import Footer from './Components/Footer.svelte';

	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<svelte:head>
    <title>jwang1000</title>
    <meta charset = "UTF-8">
    <meta name = "author" content = "Jonathan Wang">
    <meta name = "viewport" content = "width=device-width,initial-scale=1.0">
</svelte:head>

<Header />

<Index />

<Footer />
