<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Button from '../Components/Button.svelte';

    let showResume = false;
</script>

<style>
    .resume {
        padding: 2rem 4rem;
        background: #d2ddff;
        text-align: justify;
    }

    @media screen and (max-width: 500px) {
        .resume {
            padding: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Resume - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Résumé" 
    subtitle={["jwang1000"]}
    description={["By popular demand"]}
/>

<section class = "resume">
    <p>The analytics for this website show that people keep trying to find my résumé by going to this page.</p>

    {#if !showResume}
        <p>By popular demand, here it is: </p>
        <Button text="See Résumé..." on:click={() => showResume = true}/>
    {/if}

    {#if showResume}
        <p>
            No, I didn't actually upload my résumé. That's got some information that I don't want just randomly floating
            around the internet without being redacted.
        </p>
        <p>
            If you want the content of my résumé, it's on this website! All over it. I simply condensed the points I've
            described in the Work Experience section on the home page and put it in bullet point form.
        </p>
        <p>
            If you're looking for a good résumé format though, I always like to recommend 
            <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs">Jake's résumé.</a>
            It's not the format I use (mine is custom), but it's very clean and you can't go wrong with it.
        </p>

        <p>
            If you're a recruiter and want to see my résumé for a legitimate reason, visit the Contact page using the header bar!
        </p>
    {/if}
</section>