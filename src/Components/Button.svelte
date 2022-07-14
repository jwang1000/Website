<script>
    export let text = "";
    export let disabled = false;
    export let hyperlink = false;
    export let destination = "";
</script>

<style>
    button, a {
        padding: 12px;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
        background-color: #587fff;
        color: black;
        border: none;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
    }

    .disabled {
        background-color: #ddd;
        cursor: default;
    }

    button:hover, a:hover {
        background-color: #2c48a8;
        color: white;
    }
</style>

{#if hyperlink}
    <a class:disabled="{disabled}" {disabled} href="{destination}">
        {text}
    </a>
{:else}
    <button class:disabled="{disabled}" {disabled} on:click>
        {text}
    </button>
{/if}