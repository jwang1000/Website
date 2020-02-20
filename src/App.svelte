<script>
	import Index from './Pages/index.svelte';
	import Header from './Components/Header.svelte';
    import Footer from './Components/Footer.svelte';
    import Projects from './Pages/projects.svelte';
    import JumpToTop from './Components/JumpToTop.svelte';
    import Contact from './Pages/contact.svelte';

    let currentPage = "index";  // can be index, projects, contact
    
    function changePage(event) {
        if (event.detail !== "") {
            currentPage = event.detail;
        }
        window.scrollTo(0, 0);
    }
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="author" content="Jonathan Wang">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" type="image/png" href="Icons/logofavicon.png">
</svelte:head>

<Header activePage={currentPage} on:changepage={changePage}/>

{#if currentPage === "index"}
	<Index on:changepage={changePage}/>
{:else if currentPage === "projects"}
    <Projects />
{:else if currentPage === "contact"}
    <Contact />
{/if}

<JumpToTop on:changepage={changePage}/>

<Footer />
