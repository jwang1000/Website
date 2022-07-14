<script>
    import PageIntro from '../Components/PageIntro.svelte';
</script>

<style>
    .body {
        padding: 2rem 4rem;
        background: #d2ddff;
    }

    @media screen and (max-width: 500px) {
        .body {
            padding: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Page Not Found - jwang1000</title>
</svelte:head>

<PageIntro 
    title="404" 
    subtitle={["jwang1000"]}
    description={["Page not found"]}
/>

<section class = "body">
    <p>Whoops, looks like this page doesn't exist.</p>
    <p>It's possible that the link you followed was incorrect, or you typed the URL incorrectly.
        I haven't removed any pages, so you shouldn't see this page just by navigating through the website using the buttons.
    </p>
    <p>If you got here by clicking a button on the website, please let me know! Go to the Contact page using the header bar.</p>
</section>