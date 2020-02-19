<script>
    import { fade } from 'svelte/transition';
    import PageIntro from '../Components/PageIntro.svelte';
    import Project from '../Components/Project.svelte';

    import projectstore from '../Stores/project-store.js';

    let projects;
    const unsubscribe = projectstore.subscribe(array => {
        projects = array;
    })
    unsubscribe();

    let activeProject = 0;  // id of the project currently shown

    function changeProject(amount) {
        activeProject += amount;
        if (activeProject < 0) {
            activeProject += projects.length;
        }
        activeProject %= projects.length;
    }
</script>

<style>
    .projects {
        padding: 2rem 10rem;
        text-align: center;
        background: #d2ddff;
    }

    #slideshow {
        max-width: 1000px;
        margin: auto;
    }

    #image, img {
        width: auto;
        height: 16rem;
        background: inherit;
    }

    #controls {
        display: block;
    }

    #controls button {
        padding: 0.5rem 1rem;
        margin: 1rem;
        display: inline-block;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        outline: none;
        border-radius: 4px;
        transition: 0.3s;
    }

    #controls button:hover {
        background-color: #bccbff;
    }

    #controls p {
        margin: auto;
        display: inline-block;
    }

    #dot {
        height: 1rem;
        width: 1rem;
        margin: 1rem 0.25rem 0.5rem;
        background-color: #bbb;
        border: none;
        outline: none;
        border-radius: 50%;
        display: inline-block;
        transition: 0.3s;
    }

    #dot.active, #dot:hover {
        background-color: #717171;
    }

    @media screen and (max-width: 1366px) {
        .projects {
            padding: 2rem 5rem;
        }

        #slideshow, #image, img {
            width: auto;
            height: 14rem;
            margin-left: auto;
            margin-right: auto;
        }
    }
    
    @media screen and (max-width: 768px) {
        .projects {
            padding: 1rem;
        }

        #slideshow, #image, img {
            max-width: 80vw;
            height: auto;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>

<PageIntro 
    title="Projects" 
    subtitle={["jwang1000"]}
    description={["All current and past projects I've worked on"]}
/>

<section class="projects">
    <h2>Projects</h2>

    <div id="controls">
        <button id="prev" on:click={() => changeProject(-1)}>&#10094;</button>
        <p>{projects[activeProject].id + 1} / {projects.length}</p>
        <button id="next" on:click={() => changeProject(1)}>&#10095;</button>
    </div>

    <div id="slideshow">
        {#each projects as project (project.id)}
            <!--This is necessary to get the needed transition when switching projects-->
            {#if project.id === activeProject}
                <div in:fade id="image">
                    <img src={project.primaryImage} alt="">
                </div>
            {/if}
        {/each}
    </div>

    {#each projects as project (project.id)}
        <button 
            class:active="{activeProject === project.id}"
            id="dot"
            on:click={() => changeProject(project.id - activeProject)}>
        </button>
    {/each}

    <div id="description">
        {#each projects as project (project.id)}
            <!--This is necessary to get the needed transition when switching projects-->
            {#if project.id === activeProject}
                <Project 
                    title={project.name}
                    images={project.images}
                    link={project.link}
                    buttonText={project.buttonText}>
                    {#each project.description as para}
                        <p in:fade>{@html para}</p>
                    {/each}
                </Project>
            {/if}
        {/each}
    </div>

    <div id="controls">
        <button id="prev" on:click={() => changeProject(-1)}>&#10094;</button>
        <p>{projects[activeProject].id + 1} / {projects.length}</p>
        <button id="next" on:click={() => changeProject(1)}>&#10095;</button>
    </div>
</section>

