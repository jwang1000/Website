<script>
    export let name;
    export let description;
    export let src;
</script>

<style>
    #experience {
        padding: 1rem 15rem 2rem;
    }
    
    #imgtext {
        display: flex;
    }

    #imgtext #image {
        padding: 1rem;
    }

    @media screen and (max-width: 1024px) {
        #experience {
            padding: 3rem 5rem;
        }
    }

    @media screen and (max-width: 768px) {
        #imgtext {
            flex-direction: column;
        }

        #experience {
            padding: 1rem 3rem;
        }
    }
</style>

<div id="experience">
    <h3>{name}</h3>
    <div id="imgtext">
        <div id="text">
            {#each description as para}
                <p>{@html para}</p>
            {/each}
        </div>
        <div id="image">
            <img {src} alt=""/>
        </div>
    </div>
</div>