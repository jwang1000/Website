<script>
    import { createEventDispatcher } from 'svelte';

    // set by parent component, must be array of objects with name and event fields
    export let tabs = [];
    export let title = "";
    export let buttonsAlsoAtBottom = false;

    const dispatch = createEventDispatcher();
    let activeTab;

    if (tabs.length > 0) {
        activeTab = tabs[0];
    }

    function toggleActive(tab) {
        activeTab = tab;
    }
</script>

<style>
    section {
        text-align: center;
    }

    .tabs {
        overflow: hidden;
    }

    .tabs button {
        background-color: inherit;
        float: center;
        border: none;
        outline: none;
        border-radius: 8px;
        cursor: pointer;
        padding: 1rem 1.5rem;
        transition: 0.3s;
        font-family: Verdana, Trebuchet, Helvetica, Arial, sans-serif;
        font-size: 16px;
    }

    .tabs button:hover {
        background-color: #ddd;
    }

    .tabs button.active {
        background-color: #ccc;
    }
</style>

<section>
    {#if title}
        <h2>{title}</h2>
    {/if}

    <section class="tabs">
        {#each tabs as tab}
            <button class:active="{tab.name === activeTab.name}"
                text={tab.name} 
                on:click={() => {
                    dispatch('changetab', tab.event);
                    toggleActive(tab); 
                }}>
                {tab.name}
            </button>
        {/each}
    </section>
    
    <!--insert contents of each tab in the parent component
        choose which tab contents to show through if block, update using on:changetab-->
    <slot />

    {#if buttonsAlsoAtBottom}
        <section class="tabs">
            {#each tabs as tab}
                <button class:active="{tab.name === activeTab.name}"
                    text={tab.name} 
                    on:click={() => {
                        dispatch('changetab', tab.event);
                        toggleActive(tab); 
                    }}>
                    {tab.name}
                </button>
            {/each}
        </section>
    {/if}
</section>