<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Project from '../Components/Project.svelte';
    import ButtonIcon from '../Components/ButtonIcon.svelte';

    import projectstore from '../Stores/project-store.js';

    let projects;
    const unsubscribe = projectstore.subscribe(array => {
        projects = array;
    })
    unsubscribe();

    let activeProject = -1;  // id of the project currently shown
    let windowWidth;
    let width;
    let height;
    let maxWidth;

    $: {
        if (windowWidth > 1366) {
            width = "auto";
            height = "16rem";
        }
        else if (windowWidth > 768) {
            width = "auto";
            height = "14rem";
        }
        else {
            width = "14rem";
            height = "auto";
            maxWidth = "80vw";
        }
    }
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<style>
    .projects {
        padding: 2rem 10rem;
        text-align: center;
        background: #d2ddff;
    }

    .project-entry {
        padding: 1rem;
    }

    @media screen and (max-width: 1366px) {
        .projects {
            padding: 2rem 5rem;
        }
    }
    
    @media screen and (max-width: 768px) {
        .projects {
            padding: 1rem;
        }
    }
</style>

<svelte:head>
    <title>Projects - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Projects" 
    subtitle={["jwang1000"]}
    description={["All current and past projects I've worked on"]}
/>

<section class="projects">
    <h2>Projects</h2>
    <p>Click an image to learn more about the project and to see the repository on GitHub!</p>

    {#each projects as project (project.id)}
        <div class="project-entry">
            <ButtonIcon 
                caption={project.name} 
                src={project.primaryImage} 
                width={width}
                height={height}
                maxWidth={maxWidth}
                on:click={() => activeProject = project.id}
            />
            {#if activeProject == project.id}
                <Project 
                    title={project.name}
                    images={project.images}
                    link={project.link}
                    buttonText={project.buttonText}
                    on:close={() => activeProject = -1}>

                    {#each project.description as para}
                        <p>{@html para}</p>
                    {/each}
                </Project>
            {/if}
        </div>
    {/each}
</section>

