<script>
    import { fade } from 'svelte/transition';
    export let skill;  // object - for format, see skill-store.js

    const name = skill.name;
    const level = skill.level;
    const description = skill.description;
</script>

<style>
    img {
        width: 25px;
        height: 25px;
        border: 0;
        display: inline-block;
    }

    .description {
        text-align: justify;
    }
</style>

<div in:fade id="description">
    <p><b>{name.toUpperCase()}</b></p>

    <div id="stars">
        <img src="Icons/star.png" alt=""/>
        {#if level > 1}
            <img src="Icons/star.png" alt=""/>
        {/if}
        {#if level > 2}
            <img src="Icons/star.png" alt=""/>
        {/if}
        {#if level > 3}
            <img src="Icons/star.png" alt=""/>
        {/if}
    </div>

    {#if level === 1}
        <p>Basic</p>
    {:else if level === 2}
        <p>Proficient</p>
    {:else if level === 3}
        <p>Intermediate</p>
    {:else if level === 4}
        <p>Advanced</p>
    {/if}

    {#each description as para}
        <p class="description">{@html para}</p>
        <!--Though this is treated as html code, this should be safe since there is no user input.-->
    {/each}
</div>