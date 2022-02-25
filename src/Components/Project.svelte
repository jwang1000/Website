<script>
    import { createEventDispatcher } from 'svelte';
    import Hyperlink from './Hyperlink.svelte';
    import Modal from '../Components/Modal.svelte';

    export let title;
    export let images;  // array of strings that are links
    export let link = "";
    export let buttonText = "";
    
    const dispatch = createEventDispatcher();

    function closeProject() {
        dispatch('close');
    }
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
        padding-bottom: 0;
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

        #link {
            padding: 1rem 0;
            padding-bottom: 0;
        }
    }
</style>

<Modal
    title={title}
    cancelText="Close"
    on:cancel={closeProject}>

    <div id="project">
        {#each images as image}
            <img id="highlight" src={image} alt="" />
        {/each}
    
        <slot />
    
        {#if link}
            <div id="link">
                <Hyperlink {link} text={buttonText} />
            </div>
        {/if}
    </div>
</Modal>