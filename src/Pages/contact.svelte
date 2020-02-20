<script>
    import PageIntro from '../Components/PageIntro.svelte';
</script>

<style>
    .contact {
        padding: 2rem 4rem;
        background: #d2ddff;
    }
</style>

<svelte:head>
    <title>Contact - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Contact" 
    subtitle={["jwang1000"]}
    description={["Get in touch"]}
/>

<section class = "contact">
    <p>I'm always looking for new internship and job opportunities!</p>
    <p>If you have an opening, or if you have an app or website idea, or if you just
        want to chat, shoot me an email:
    </p>
    <h3>contact<code>&#64</code>jwang1000.com</h3>
    <p>Embedded message box coming soon!</p>
</section>