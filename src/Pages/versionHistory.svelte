<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Version from '../Components/Version.svelte';
    import versionstore from '../Stores/version-store.js';
    
    let versionHistory;

    const versionUnsubscribe = versionstore.subscribe(array => {
        versionHistory = array;
    })
    versionUnsubscribe();  // store is readable, won't change
</script>

<style>
    .history {
        padding: 2rem 4rem;
        background: #d2ddff;
    }

    @media screen and (max-width: 500px) {
        .history {
            padding: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Version History - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Version History" 
    subtitle={["jwang1000"]}
    description={["What's changed"]}
/>

<section class = "history">
    {#each versionHistory as v}
        <Version version={v}/>
    {/each}
</section>