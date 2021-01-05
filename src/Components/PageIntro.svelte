<script>
    export let title;
    export let subtitle = [];
    export let description = [];
</script>

<style>
    /* Controls the page header (with title of the page) */
    .intro {
        padding: 60px;
        text-align: left;
        background: #00155a;
        color: white;
        font-size: 18px;
    }

    h1 {
        font-size: 40px;
    }

    @media screen and (max-width: 350px) {
        .intro {
            text-align: center;
        }
    }
</style>

<section class = "intro">
    <h1>{title}</h1>
    {#each subtitle as text}
        <h2>{text}</h2>
    {/each}
    {#each description as text}
        <p>{text}</p>
    {/each}
</section>