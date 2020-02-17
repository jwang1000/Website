<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<style>
    noscript {
        padding: 1rem 2rem;
        background: #00ff15;
    }

    header {
        height: auto;
        background-color: #000b30;
        color: white;

        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }

    header button {
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

    #desktop button {
        padding: 1rem 1.5rem;
    }

    #home {
        float: left;
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.2rem;
    }

    header button:hover {
        background-color: #bccbff;
        color: black;
    }
</style>

<header>
    <div id="home">
        <button on:click={() => dispatch('changepage', "")}>
            <img src="Icons/logo1.png" alt="">
        </button>
    </div>
    <div id="desktop">
        <button on:click={() => dispatch('changepage', "contact")}>Contact</button>
        <button on:click={() => dispatch('changepage', "projects")}>Projects</button>
        <button on:click={() => dispatch('changepage', "index")}>Home</button>
    </div>
</header>

<noscript>
    <h2><br>If you're seeing this, you have JavaScript disabled. <br>
        Don't have JavaScript disabled. Browsing the internet sucks with JavaScript disabled.
    </h2>
</noscript>