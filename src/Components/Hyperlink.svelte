<script>
    export let text = "";
    export let disabled = false;
    export let link;
</script>

<style>
    a {
        padding: 12px;
        font-size: 16px;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
        background-color: #587fff;
        color: black;
        outline: none;
        border: none;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
    }

    .disabled {
        background-color: #ddd;
    }

    a:hover {
        background-color: #2c48a8;
        color: white;
    }
</style>

<a class:disabled={disabled} href={link}>{text}</a>