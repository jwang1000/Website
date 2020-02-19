<script>
    import { createEventDispatcher } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    import Button from './Button.svelte';

    export let title;
    export let confirmText = "";
    export let cancelText = "Cancel";

    // allow the modal to be closed
    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('cancel');
    }

    function confirmModal() {
        dispatch('confirm');
    }
</script>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        background: #d2ddff;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow-y: auto;
        overflow-x: auto;
    }

    h1 {
        text-align: center;
        padding: 1rem;
        margin: 0;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
    }

    .content {
        padding: 1rem;
    }

    footer {
        padding: 1rem;
        text-align: center;
    }
    
    @media (min-width: 768px) {
        .modal {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }
</style>

<div transition:fade class="modal-backdrop" on:click={closeModal}></div>
<div transition:fly={{y: 300}} class="modal">
    <h1>{title}</h1>
    <div class="content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button text={cancelText} on:click={closeModal}></Button>
            {#if confirmText !== ""}
                <Button text={confirmText} on:click={confirmModal}></Button>
            {/if}
        </slot>
    </footer>
</div>