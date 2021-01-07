import { readable } from "svelte/store";

/**
 * Format of version objects:
 * 
 * name: string (version number with dots)
 * 
 * additions: array[string] (each string = 1 paragraph)
 * 
 * changes: array[string] (modifications to css, text, pages, etc.)
 * 
 * removals: array[string]
 */
const versions = readable([
    {
        name: "2.3",
        additions: [
            "Added Education page, along with descriptions of all relevant courses",
            "Added Version History page",
            "Added various buttons in menu, footer, and homepage linking to the new pages",
            "Added prop to allow optional duplicate buttons at the bottom of a tab group"
        ],
        changes: [
            "Updated contact page CSS to better fit mobile screens",
            "Changed button colours slightly"
        ],
        removals: []
    },
    {
        name: "2.2",
        additions: [
            "Added descriptions of work term at MDA to work experience and skills",
            "Added Angular and TypeScript skills",
            "Added prop to allow optional centered text in modals",
            "Added stars in skill level explanation"
        ],
        changes: [
            "Simplified and reworded skill level explanations",
            "Simplified project descriptions",
            "Reworded some skill descriptions",
            "Updated footer copyright with 2021",
            "Updated CSS to better fit mobile screens"
        ],
        removals: []
    },
    {
        name: "2.1",
        additions: [
            "Added descriptions of second work term at Terradatum to work experience and skills"
        ],
        changes: [
            "Modified skill, experience, and project description wording",
            "Updated CSS to fix minor bugs with responsiveness"
        ],
        removals: []
    },
    {
        name: "2.0",
        additions: [
            "Ported website to use Svelte, enabling additional animations and features",
            "Added button to jump to the top of the current page",
            "Added descriptions for skill levels"
        ],
        changes: [
            "Changed projects to display in a slideshow format, rather than a long page",
            "Changed styling of buttons throughout the website for a more modern design",
            "Replaced progress bar in skills with stars",
            "Changed mobile menu to use hamburger icon, now slides in from right side",
            "Updated footer copyright with 2020",
            "Updated CSS"
        ],
        removals: [
            "Removed various unused files and images"
        ]
    },
    {
        name: "1.0",
        additions: [
            "First version of jwang1000.com, using vanilla HTML/CSS/JavaScript (no libraries or frameworks used)",
            "Included home (with skills and work experience), projects, and contact pages"
        ],
        changes: [],
        removals: []
    },
]);

export default versions;