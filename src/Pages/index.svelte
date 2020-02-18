<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import PageIntro from '../Components/PageIntro.svelte';
    import Tab from '../Components/Tab.svelte';
    import ButtonIcon from '../Components/ButtonIcon.svelte';
    import SkillDesc from '../Components/SkillDescription.svelte';
    import Button from '../Components/Button.svelte';
    import Modal from '../Components/Modal.svelte';
    import Experience from '../Components/Experience.svelte';

    import skillstore from '../Stores/skill-store.js';
    import expstore from '../Stores/experience-store.js';

    const dispatch = createEventDispatcher();

    let currentTab = "lang";
    let currentSkill = "";
    let showSkillExplanation = false;
    let skills;
    let experience;

    const skillUnsubscribe = skillstore.subscribe(array => {
        skills = array;
    })
    skillUnsubscribe();  // store is readable, won't change
    const expUnsubscribe = expstore.subscribe(array => {
        experience = array;
    })
    expUnsubscribe();

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
        padding: 2rem 4rem;
        height: 100%;
        display: table;
    }

    /* Display: table in #info and table-row + vertical-align bottom + height 1px are necessary to stick the
        explanation button to the bottom of the div */
    #showSkillButton {
        padding: 0rem;
        display: table-row;
        vertical-align: bottom;
        height: 1px;
    }

    .experience {
        padding: 2rem 0rem;
        text-align: center;
        background: #d2ddff;
    }

    @media screen and (max-width: 768px) {
        .aboutimg {
            padding: 1rem 0rem;
        }

        .abouttext {
            text-align: center;
        }

        .skills {
            flex-direction: column;
        }

        #icons {
            padding: 0.5rem;
        }

        #info {
            flex: 45%;
            background-color: #ececec;
            padding: 1rem 2rem 5rem;
            display: block;
        }

        #showSkillButton {
            padding: 0rem;
            display: block;
        }
    }
</style>

<PageIntro 
    title="Jonathan Wang" 
    subtitle={["jwang1000", "Computer Science - University of Waterloo"]}
    description={["Vancouver, BC"]}
/>

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

{#if showSkillExplanation}
    <Modal
        title="Criteria for Skill Levels"
        cancelText="Close"
        on:cancel={() => showSkillExplanation = false}>

        <h3>Basic</h3>
        <p>A minimal working knowledge of the subject; enough to not need constant guidance when performing tasks.
            Basic syntax or controls are known, but not necessarily memorized.</p>
        <h3>Proficient</h3>
        <p>Common syntax or controls have been committed to memory. If errors or blockers arise, enough is known
            in order to find how to solve the problem. Using this skill for work is possible at this stage.</p>
        <h3>Intermediate</h3>
        <p>Several complex concepts or actions are known and can be explained. At least one major project has been
            built or several courses have been completed using this skill. Teaching the subject to others is
            possible at this stage.</p>
        <h3>Advanced</h3>
        <p>Many niche problems and concepts are recognizable and can be solved or explained with minimal searching
            online. If applicable, most mechanics of why things work in this subject are known.
            The skill has been used in many major projects or courses.</p>
    </Modal>
{/if}

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
                <ButtonIcon caption={skill.name} src={skill.icon} active={currentSkill === skill.name} on:click={changeDescription}/>
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
        <div id="showSkillButton">
            <Button text="Criteria for Skill Levels" on:click={() => showSkillExplanation = true} />
        </div>
    </div>
</section>

<section class="experience">
    <h2>Work Experience</h2>
    {#each experience as exp}
        <Experience name={exp.name} description={exp.description} src={exp.icon}/>
    {/each}
    <Button text="See Projects..." on:click={() => dispatch('changepage', "projects")}/>
</section>