<script>
    import { createEventDispatcher } from 'svelte';
    import Menu from './Menu.svelte';

    export let activePage = "";

    const dispatch = createEventDispatcher();
    let showMobileMenu = false;
</script>

<style>
    header {
        height: auto;
        background-color: #000b30;
        color: white;

        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }

    header a, header button {
        float: right;
        display: block;
        color: white;
        text-align: center;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;

        background-color: inherit;
        border: none;
        outline: none;

        transition: 0.3s;
        text-decoration: none;
    }

    #desktop a {
        padding: 1rem 1.5rem;
    }

    #home {
        float: left;
    }

    img {
        width: 2.7rem;
        height: 2.7rem;
        padding: 0.2rem;
    }

    header a:hover, header button:hover {
        background-color: #bccbff;
        color: black;
    }

    .active {
        background-color: #2c48a8;
    }

    #mobile {
        display: none;
    }

    #mobile button {
        padding: 0.5rem 0.75rem;
    }

    #menuIcon {
        width: 2rem;
        height: 0.25rem;
        background-color: white;
        margin: 6px 0;
    }

    @media (max-width: 768px) {
        #desktop {
            display: none;
        }

        #mobile {
            display: block;
        }
    }
</style>

<header>
    <div id="home">
        <a href="/">
            <img src="Icons/logo.png" alt="">
        </a>
    </div>
    <div id="desktop">
        <a 
            class:active={activePage === "contact"} 
            href="/contact">
            Contact
        </a>
        <a 
            class:active={activePage === "education"} 
            href="/education">
            Education
        </a>
        <a 
            class:active={activePage === "projects"} 
            href="/projects">
            Projects
        </a>
        <a 
            class:active={activePage === "index"} 
            href="/">
            Home
        </a>
    </div>
    <div id="mobile">
        <!--Hamburger menu icon-->
        <button on:click={() => showMobileMenu = true}>
            <div id="menuIcon"></div>
            <div id="menuIcon"></div>
            <div id="menuIcon"></div>
        </button>
        {#if showMobileMenu}
            <Menu {activePage} on:close={() => showMobileMenu = false}/>
        {/if}
    </div>
</header>