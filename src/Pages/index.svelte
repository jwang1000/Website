<script>
    import { fade } from 'svelte/transition';
    import PageIntro from '../Components/PageIntro.svelte';
    import Tab from '../Components/Tab.svelte';
    import IconLink from '../Components/IconLink.svelte';
    import SkillDesc from '../Components/SkillDescription.svelte';

    import skillstore from '../Stores/skill-store.js';

    let currentTab = "lang";
    let currentSkill = "";
    let skills;
    const unsubscribe = skillstore.subscribe(array => {
        skills = array;
    })
    unsubscribe();  // store is readable, won't change

    function changeTab(event) {
        if (event.detail !== currentTab) {
            currentTab = event.detail;
            currentSkill = "";
        }
    }

    function changeDescription(event) {
        if (event.detail !== currentSkill) {
            currentSkill = event.detail;
        }
    }
</script>

<style>
    /* Styling the main page's about section */
    .about {
        display: flex;
        flex-wrap: wrap;
        padding: 4rem 5rem;
        text-align: center;
        background: #d2ddff;
        color: black;
    }

    .aboutimg {
        flex: 20%;
    }

    .abouttext {
        flex: 60%;
        text-align: right;
    }

    .skills {
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    /* Section of icon buttons in skills section */
    #icons {
        flex: 55%;
        background-color: white;
        padding: 2rem;
    }

    /* The section for displaying information about each icon/skill */
    #info {
        flex: 45%;
        background-color: #ececec;
        padding: 3rem 4rem 2rem;
    }

    @media screen and (max-width: 750px) {
        .aboutimg {
            padding: 1rem 0rem;
        }
        .abouttext {
            text-align: center;
        }
        .skills {
            flex-direction: column;
        }
    }
</style>

<PageIntro 
    title="Jonathan Wang" 
    subtitle={["jwang1000", "Computer Science - University of Waterloo"]}
    description={["Vancouver, BC"]} />

<section class="about">
    <div class="aboutimg">
        <img src="Icons/logo1.png" alt="">
    </div>

    <div class="aboutimg">
        <img src="Icons/profile.png" alt="">
    </div>

    <div class="abouttext">
        <h2>About Me</h2>
        <p>I love writing code, playing music, and learning about math and physics!</p>
        <p>I am fascinated by the many technologies of software development, and I am continuously
            learning about new languages, algorithms, and techniques.
        </p>
    </div>
</section>

<section class="skills">
    <div id="icons">
        <Tab
            title="Skills"
            tabs={[
                {name: "Languages", event: "lang"},
                {name: "Technologies", event: "tech"},
                {name: "Software", event: "software"},
                {name: "General", event: "general"}
            ]}
            on:changetab={changeTab}>

        {#each skills as skill (skill.id)}
            {#if skill.tab === currentTab}
                <IconLink caption={skill.name} src={skill.icon} active={currentSkill === skill.name} on:click={changeDescription}/>
            {/if}
        {/each}
        </Tab>
    </div>
    <div id="info">
        {#if currentSkill === ""}
            <p in:fade >Click on an icon to learn more!</p>
        {:else}
            {#each skills as skill (skill.id)}
                {#if skill.name === currentSkill}
                    <SkillDesc {skill}/>
                {/if}
            {/each}
        {/if}
    </div>
</section>