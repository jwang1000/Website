<script>
    export let title;
    export let images;  // array of strings that are links
    export let link = "";
    export let buttonText = "";
</script>

<style>
    #project {
        padding: 1rem;
        text-align: center;
    }

    a {
        padding: 10px;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
    }

    #highlight {
        max-width: auto;
        max-height: 25rem;
        width: auto;
        height: auto;
    }

    @media screen and (max-width: 1366px) {
        #highlight {
            max-width: 700px;
        }
    }
    
    @media screen and (max-width: 768px) {
        #highlight {
            max-width: 400px;
        }
    }
</style>

<div id="project">
    <h3>{title}</h3>

    {#each images as image}
        <img id="highlight" src={image} alt=""/>
    {/each}

    <slot />

    {#if link}
        <a href={link}>{buttonText}</a>
    {/if}
</div>