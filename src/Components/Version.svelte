<script>
    import { fade } from 'svelte/transition';
    export let version;  // object - for format, see version-store.js

    const name = version.name;
    const additions = version.additions;
    const changes = version.changes;
    const removals = version.removals;
</script>

<style>
    div {
        text-align: left;
        padding-bottom: 1rem;
    }

    .note p {
        display: inline;
    }

    .add, .change, .remove {
        font-weight: bold;
    }

    .add {
        color: green;
    }

    .change {
        color: #fdfd96;
    }

    .remove {
        color: red;
    }
</style>

<div in:fade>
    <p><b>{name}:</b></p>

    {#each additions as para}
        <div class="note">
            <p class="add">+ </p>
            <p>{para}</p>
        </div>
    {/each}

    {#each changes as para}
        <div class="note">
            <p class="change">* </p>
            <p>{para}</p>
        </div>
    {/each}

    {#each removals as para}
        <div class="note">
            <p class="remove">- </p>
            <p>{para}</p>
        </div>
    {/each}
</div>