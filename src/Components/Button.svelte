<script>
    export let text = "";
    export let disabled = false;
</script>

<style>
    button {
        padding: 12px;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
        background-color: #59acff;
        outline: none;
        border: none;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
    }

    .disabled {
        background-color: #ddd;
        cursor: default;
    }

    button:hover {
        background-color: #0080ff;
    }
</style>

<button class:disabled="{disabled}" {disabled} on:click>
    {text}
</button>