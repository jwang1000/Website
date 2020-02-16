<script>
    import { fade } from 'svelte/transition';
    export let skill;  // object - for format, see skill-store.js

    const name = skill.name;
    const level = skill.level;
    const description = skill.description;
</script>

<div in:fade id="description">
    <p><b>{name.toUpperCase()}</b></p>

    <!--insert stars for skill level here-->

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
        <p>{@html para}</p>
        <!--Though this is treated as html code, this should be safe since there is no user input.-->
    {/each}
</div>