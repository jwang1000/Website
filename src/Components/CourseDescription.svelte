<script>
    import { fade } from 'svelte/transition';
    export let education;  // object - for format, see education-store.js
    export let currentTermNum;

    const name = education.name;
    const subject = education.subject;
    const courseNumber = education.courseNumber;
    const term = education.term;
    const description = education.description;

    // given term index, generates the full term name
    function getTermName(termNum) {
        let result = "";
        switch (termNum % 3) {
            case 0: {
                result += "Fall ";
                break;
            }
            case 1: {
                result += "Winter ";
                break;
            }
            case 2: {
                result += "Spring ";
                break;
            }
        }
        result += 2018 + Math.ceil(termNum / 3);

        if (termNum === currentTermNum) {
            result += " - I'm taking this right now! The description may be modified once I finish the course.";
        }

        return result;
    }
</script>

<style>
    div {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .course-description {
        text-align: justify;
    }
</style>

<div in:fade>
    <p><b>{subject} {courseNumber}: {name}</b></p>
    <p>{getTermName(term)}</p>

    {#each description as para}
        <p class="course-description">{@html para}</p>
        <!--Though this is treated as html code, this should be safe since there is no user input.-->
    {/each}
</div>