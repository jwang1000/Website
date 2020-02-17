<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Project from '../Components/Project.svelte';

    import projectstore from '../Stores/project-store.js';

    let projects;
    const unsubscribe = projectstore.subscribe(array => {
        projects = array;
    })
    unsubscribe();
</script>

<style>
    .projects {
        padding: 2rem 10rem;
        text-align: center;
        background: #d2ddff;
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

<PageIntro 
    title="Projects" 
    subtitle={["jwang1000"]}
    description={["All current and past projects I've worked on"]}
/>

<section class="projects">
    <h2>Projects</h2>

    {#each projects as project}
        <Project title={project.name} images={project.images} link={project.link} buttonText={project.buttonText}>
            {#each project.description as para}
                <p>{@html para}</p>
            {/each}
        </Project>
    {/each}
</section>

