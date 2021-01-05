import { readable } from 'svelte/store';

/**
 * Format of experience objects:
 * 
 * name: string
 * 
 * icon: string (link to image location)
 * 
 * description: array[string] (each string = 1 paragraph)
 * HTML tags are valid! This shouldn't cause XSS attacks, since there is no user input available.
 */
const experience = readable([
    {
        name: "MDA",
        icon: "Icons/MDA.png",
        description: [
            "As an intern at MDA, I worked as a full stack developer by fixing bugs and adding features to \
            both the frontend and backend of the primary web application. I created reusable <b>Angular</b> \
            components for the shared component library and refactored parts of the web app to simplify the \
            codebase and follow best practices, including improving documentation and removing redundancies.",
            "I used <b>TypeScript</b> to work on the frontend of the web app and used <b>Java</b> in the \
            backend, where I gained experience in using the Lombok library and developing a REST API. I also \
            wrote and maintained <b>unit tests</b> using Mockito in the backend and Mocha in the frontend."
        ]
    },
    {
        name: "Terradatum",
        icon: "Icons/terradatum.png",
        description: [
            "At my first term as an intern at Terradatum, I used <b>Docker</b> and Docker Compose \
            to containerize the company's pre-existing applications, and used Postman and \
            Newman to automate testing of the APIs and scripts in use.",
            "During my second term as an intern, I used JavaScript and the <b>Svelte</b> compiler \
            to build TD-Admin, a single-page web application for administrative purposes. I also applied \
            my knowledge of Docker to containerize and deploy TD-Admin."
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