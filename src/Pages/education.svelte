<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Tab from '../Components/Tab.svelte';
    import CourseDescription from '../Components/CourseDescription.svelte';
    
    import edustore from '../Stores/education-store.js';

    let currentSubject = "all";
    let education;

    const eduUnsubscribe = edustore.subscribe(array => {
        // sort array in reverse chronological order
        education = array.sort((a, b) => {
            if (a.term < b.term) {
                return 1;
            }
            else if (a.term > b.term) {
                return -1;
            }
            return 0;
        });
    })
    eduUnsubscribe();  // store is readable, won't change

    function changeTab(event) {
        if (event.detail !== currentSubject) {
            currentSubject = event.detail;
        }
    }
</script>

<style>
    .education {
        padding: 2rem 4rem;
        background: #d2ddff;
        text-align: center;
    }

    h3 {
        padding-bottom: 1rem;
    }

    @media screen and (max-width: 500px) {
        .education {
            padding: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Education - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Education" 
    subtitle={["jwang1000"]}
    description={["Relevant courses I've taken"]}
/>

<section class="education">
    <h2>Education</h2>
    <p>All relevant courses I've taken, listed in reverse chronological order and optionally filtered by subject.<br/></p>

    <div class="classes">
        <Tab
            buttonsAlsoAtBottom={true}
            tabs={[
                {name: "All", event: "all"},
                {name: "CS", event: "CS"},
                {name: "CO", event: "CO"},
                {name: "Math", event: "MATH"}
            ]}
            on:changetab={changeTab}>
        
        {#if currentSubject === "CS"}
            <h3>Computer Science</h3>
        {:else if currentSubject === "CO"}
            <h3>Combinatorics and Optimization</h3>
        {:else if currentSubject === "MATH"}
            <h3>Mathematics</h3>
        {:else}
            <h3>All Courses</h3>
        {/if}

        {#each education as edu}
            {#if currentSubject === "all"}
                <CourseDescription education={edu}/>
            {:else if edu.subject === currentSubject}
                <CourseDescription education={edu}/>
            {/if}
        {/each}
        </Tab>
    </div>

    <p>
        Note: this list contains only relevant courses; I have not listed general non-CS courses (Calculus, Linear Algebra,
        Statistics) nor many electives I've taken (Physics, English, Music).
    </p>
</section>