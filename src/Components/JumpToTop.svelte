<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    $: position = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
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

{#if position >= 0}
    <section class="jumpToTop">
        <button on:click={() => dispatch('changepage', "")}>&#8593</button>
    </section>
{/if}