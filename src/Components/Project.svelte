<script>
    import { fade } from 'svelte/transition';
    import Hyperlink from './Hyperlink.svelte';

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

    #highlight {
        padding: 0.25rem 0.5rem;
        max-width: auto;
        max-height: 25rem;
        width: auto;
        height: auto;
        text-align: center;
    }

    #link {
        padding: 1rem;
    }

    @media screen and (max-width: 1366px) {
        #highlight {
            max-width: 700px;
            padding: 0.25rem;
        }
    }
    
    @media screen and (max-width: 768px) {
        #highlight {
            max-width: 80vw;
        }
    }
</style>

<div id="project">
    <h3 in:fade>{title}</h3>

    {#each images as image}
        <img in:fade id="highlight" src={image} alt=""/>
    {/each}

    <slot />

    {#if link}
        <div id="link" in:fade>
            <Hyperlink {link} text={buttonText} />
        </div>
    {/if}
</div>