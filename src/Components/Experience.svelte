<script>
    export let name;
    export let location;
    export let description;
    export let src;
</script>

<style>
    #experience {
        padding: 1rem 15rem 2rem;
    }

    #location {
        display: flex;
    }

    #pinAndName {
        margin: auto;
        display: flex;
        line-height: 0rem;
    }

    #pinAndName img {
        width: 2rem;
        height: 2rem;
    }
    
    #imgtext {
        display: flex;
    }

    #imgtext #text {
        text-align: justify;
    }

    #imgtext #image {
        padding: 1rem;
    }

    @media screen and (max-width: 1366px) {
        #experience {
            padding: 1rem 5rem;
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
    <div id="location">
        <div id="pinAndName">
            <img src="Icons/map-pin.png" alt=""/>
            <p>{location}</p>
        </div>
    </div>
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