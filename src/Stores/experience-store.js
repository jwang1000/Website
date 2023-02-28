import { readable } from 'svelte/store';

/**
 * Format of experience objects:
 * 
 * name: string
 * 
 * location: string
 * 
 * icon: string (link to image location)
 * 
 * description: array[string] (each string = 1 paragraph)
 * HTML tags are valid! This shouldn't cause XSS attacks, since there is no user input available.
 */
const experience = readable([
    {
        name: "Akuna Capital",
        location: "Chicago, IL",
        icon: "Icons/akuna capital.png",
        description: [
            "As a C++ developer intern, I worked on custom data structures in shared <b>C++</b> libraries and improved \
            common features used throughout the company. \
            I implemented features for new exchanges in trading simulator software used by Akuna, and added \
            support for more types of orders in the <b>low latency multithreaded</b> message processing layer.",
            "I also helped implement features on new trading engine testing software using <b>Python</b>."
        ]
    },
    {
        name: "Yugabyte",
        location: "Sunnyvale, CA",
        icon: "Icons/yugabyte.png",
        description: [
            "I worked as a software developer intern on the Cloud Infra and Full Stack team at Yugabyte.\
            I used <b>React</b> and <b>Java</b> to fix issues in and improve the frontend and backend, and learned \
            <b>Go</b> to create a custom <b>Terraform</b> provider for Yugabyte Cloud."
        ]
    },
    {
        name: "Thomson Reuters",
        location: "Toronto, ON",
        icon: "Icons/thomson reuters.png",
        description: [
            "As a software developer intern at Thomson Reuters, I worked as a full stack developer by fixing \
            bugs in both the frontend and backend of a major web application and aiding in the redesign \
            of the web app's landing page and main features.",
            "In the backend, I fixed and simplified the logic in many different locations and contexts, \
            gaining experience in <b>C#</b>, <b>ASP.NET MVC</b>, and <b>SQL</b>.",
            "I created multiple new <b>Angular</b> components as part of a major user interface redesign, \
            and set up the framework for passing and receiving data from the older ASP.NET MVC section of \
            the web app. As a result, the Angular portion of the web app communicates smoothly with the rest \
            of the app while the team creates new components for the remaining functionality."
        ]
    },
    {
        name: "MDA",
        location: "Halifax, NS",
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
        location: "Santa Rosa, CA",
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
        location: "Vancouver, BC",
        icon: "Icons/inova.png",
        description: [
            "ICA is a provincially registered nonprofit organization in British Columbia that \
            aims to promote computer science in youth. I was one of the founding members, and \
            I worked as the Director of Finance for two years."
        ]
    },
    {
        name: "Programming Teaching Assistant",
        location: "Vancouver, BC",
        icon: "Icons/python.png",
        description: [
            "I helped teach high school programming courses in Python and Java to fellow students. \
            I explained concepts such as data types, loops, classes, and objects, and also marked \
            and debugged code that was written by students."
        ]
    }
]);

export default experience;