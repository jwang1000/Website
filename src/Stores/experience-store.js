import { readable } from 'svelte/store';

/**
 * Format of experience objects:
 * 
 * name: string
 * 
 * icon: string (link to image location)
 * 
 * description: array[string] (each string = 1 paragraph) HTML tags are valid! This shouldn't
 * compromise anything, since there is no user input available.
 */
const experience = readable([
    {
        name: "Terradatum",
        icon: "Icons/terradatum.png",
        description: [
            "At my first term as an intern at Terradatum, I used <b>Docker</b> and Docker Compose \
            to containerize the company's pre-existing applications, and used Postman and \
            Newman to automate testing of the APIs and scripts in use.",
            "During my second term as an intern, I am currently using JavaScript with the \
            <b>Svelte.js</b> compiler to build TD-Admin, a single-page web application for \
            administrative purposes."
        ]
    },
    {
        name: "Inova Computer Association",
        icon: "Icons/inova.png",
        description: [
            "ICA is a provincially registered nonprofit organization in British Columbia that \
            aims to promote computer science in youth. I was one of the founding members, and \
            I worked as the Director of Finance for two years."
        ]
    },
    {
        name: "Programming Teaching Assistant",
        icon: "Icons/python.png",
        description: [
            "I helped teach high school programming courses in Python and Java to fellow students. \
            I explained concepts such as data types, loops, classes, and objects, and also marked \
            and debugged code that was written by students."
        ]
    }
]);

export default experience;