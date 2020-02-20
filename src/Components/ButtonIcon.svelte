<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';

    export let caption;  // should match name of the skill/object
    export let src;
    export let active = false;

    const dispatch = createEventDispatcher();
</script>

<style>
    #buttonIcon {
        display: inline-block;
        padding: 1rem 2rem 0rem;
    }

    button {
        background-color: inherit;
        float: center;
        border: none;
        outline: none;
        border-radius: 8px;
        transition: 0.3s;
    }

    button:hover {
        background-color: #ddd;
    }

    button.active {
        background-color: #ccc;
    }

    img {
        width: 75px;
        height: 75px;
        border: 0;
    }

    p {
        display: block;
        font-size: 16px;
    }
</style>

<div in:fade id="buttonIcon">
    <button class:active={active} on:click={() => dispatch('click', caption)}>
        <img {src} alt="">
    </button>
    <p>{caption}</p>
</div>