<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Tab from '../Components/Tab.svelte';
</script>

<style>
    /* Styling the main page's about section */
    .about {
        display: flex;
        flex-wrap: wrap;
        padding: 50px 60px;
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
    <Tab
        title="Skills"
        tabs={[
            {name: "Languages", event: "lang"},
            {name: "Technologies", event: "tech"},
            {name: "Software", event: "software"},
            {name: "General", event: "general"}
        ]}>
        
    </Tab>
</section>