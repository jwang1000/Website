<script>
    export let text = "";
    export let disabled = false;
</script>

<style>
    button {
        padding: 10px;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
    }

    .disabled {
        background-color: #ddd;
    }
</style>

<button class:disabled="{disabled}" {disabled} on:click>
    {text}
</button>