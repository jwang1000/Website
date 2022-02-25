<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';

    export let caption;  // should match name of the skill/object
    export let src;
    export let active = false;
    export let width = "75px";
    export let height = "75px";
    export let maxWidth = "none";

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
        padding: 5px;
    }

    button:hover {
        background-color: #ddd;
    }

    button.active {
        background-color: #ccc;
    }

    img {
        width: var(--width);
        height: var(--height);
        max-width: var(--maxWidth);
        border: 0;
        vertical-align: middle;
    }

    p {
        display: block;
        font-size: 16px;
    }
</style>

<div in:fade id="buttonIcon">
    <button class:active={active} on:click={() => dispatch('click', caption)}>
        <img {src} alt="" style="--width:{width};--height:{height};--max-width:{maxWidth};">
    </button>
    <p>{caption}</p>
</div>