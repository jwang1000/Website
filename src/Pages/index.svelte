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

    .skillCriteriaTitle {
        display: inline-block;
    }

    .skillCriteriaTitle img {
        width: 25px;
        height: 25px;
        border: 0;
        display: inline-block;

        position: relative;
        top: 5px;
    }

    .skillCriteriaTitle h3 {
        display: inline;
        padding-right: 1rem;
        padding-top: 1.5rem;
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
        max-width: 55%;
    }

    /* The section for displaying information about each icon/skill */
    #info {
        flex: 2 1 45%;
        background-color: #ececec;
        padding: 2rem 4rem;
        display: flex;
        flex-direction: column;
        max-width: 45%;
    }

    /* Display: table in #info and table-row + vertical-align bottom + height 1px are necessary to stick the
        explanation button to the bottom of the div */
    #showSkillButton {
        padding: 0rem;
        margin-top: auto;
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

        .skillExplanation {
            text-align: center;
        }

        .skills {
            flex-direction: column;
        }

        #icons {
            padding: 0.5rem;
            max-width: 100%;
        }

        #info {
            flex: 45%;
            background-color: #ececec;
            padding: 1rem 2rem 2rem;
            display: block;
            max-width: 100vw;
        }

        #showSkillButton {
            padding: 0rem;
            display: block;
        }
    }

    @media screen and (max-width: 350px) {
        /* Display skill title and stars on different lines */
        .skillCriteriaTitle h3 {
            display: block;
            padding: 0;
        }

        .skillCriteriaTitle img {
            top: 0;
        }
    }
</style>

<svelte:head>
    <title>Home - jwang1000</title>
</svelte:head>

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
        <div class="skillExplanation">
            <p>All skills listed can be used for work; the differences are in the levels of guidance needed.</p>

            <div class="skillCriteriaTitle">
                <h3>Basic</h3>
                <img src="Icons/star.png" alt=""/>
            </div>
            <p>A minimal working knowledge of the subject; enough to not need constant guidance when performing tasks.</p>

            <div class="skillCriteriaTitle">
                <h3>Proficient</h3>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
            </div>
            <p>Enough is known in order to find solutions to various situations and problems independently.</p>

            <div class="skillCriteriaTitle">
                <h3>Intermediate</h3>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
            </div>
            <p>Various features of the skill have been explored or experimented with. The skill is well understood enough
                to teach others.</p>
                
            <div class="skillCriteriaTitle">
                <h3>Advanced</h3>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
                <img src="Icons/star.png" alt=""/>
            </div>
            <p>Prior experience in many niche problems and concepts, which can be solved or explained with minimal searching.
                Recognized as an expert or authority in this skill.</p>
        </div>
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