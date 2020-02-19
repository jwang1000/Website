<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    const position = 200;  // how far down to display button
    let display = false;

    window.onscroll = () => {
        if (document.body.scrollTop > position || document.documentElement.scrollTop > position) {
            display = true;
        }
        else {
            display = false;
        }
    }
</script>

<style>
    section {
        height: auto;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
    }

    button {
        background-color: #000b30b0;
        color: white;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 0.5rem 1.25rem 0.75rem;
        font-size: 1.5rem;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
        transition: 0.3s;
    }

    button:hover {
        background-color: #000b30;
    }

    @media screen and (max-width: 768px) {
        section {
            right: 1rem;
            bottom: 1rem;
        }
    }
</style>

{#if display}
    <section transition:fly={{x:0, y:100}} class="jumpToTop">
        <button on:click={() => dispatch('changepage', "")}>&#8593</button>
    </section>
{/if}