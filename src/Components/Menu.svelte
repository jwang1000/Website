<script>
    import { createEventDispatcher } from 'svelte';
    import { fly, fade } from 'svelte/transition';

    export let activePage;

    // allow the modal to be closed
    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }
</script>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 10rem;
        height: 100vh;
        background-color: #000b30;
        z-index: 200;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        text-align: left;
    }

    h3 {
        padding: 1rem;
        margin: 0;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
    }

    button {
        display: block;
        color: white;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;

        background-color: inherit;
        border: none;
        outline: none;

        transition: 0.3s;
        text-decoration: none;
    }

    #page {
        text-align: center;
        width: 100%;
        padding: 1rem 1.5rem;
    }

    button:hover {
        background-color: #bccbff;
        color: black;
    }

    .active {
        background-color: #2c48a8;
    }

    #menuButton {
        text-align: right;
        padding: 0.5rem 0.75rem;
        position: fixed;
        top: 0;
        right: 0;
    }

    #menuIcon {
        width: 2rem;
        height: 0.25rem;
        background-color: white;
        margin: 6px 0;
    }
</style>

<div transition:fade class="backdrop" on:click={close}></div>
<div transition:fly={{x: 300}} class="menu">
    <button id="menuButton" on:click={close}>
        <div id="menuIcon"></div>
        <div id="menuIcon"></div>
        <div id="menuIcon"></div>
    </button>

    <h3>Menu</h3>
    <button id="page"
        class:active={activePage === "index"} 
        on:click={() => dispatch('changepage', "index")}>
        Home
    </button>
    <button id="page"
        class:active={activePage === "projects"} 
        on:click={() => dispatch('changepage', "projects")}>
        Projects
    </button>
    <button id="page"
        class:active={activePage === "education"} 
        on:click={() => dispatch('changepage', "education")}>
        Education
    </button>
    <button id="page"
        class:active={activePage === "contact"} 
        on:click={() => dispatch('changepage', "contact")}>
        Contact
    </button>
</div>