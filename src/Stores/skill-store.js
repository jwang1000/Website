import { readable } from 'svelte/store';

/**
 * Format of skill objects:
 * 
 * name: string
 * 
 * tab: string (which tab they belong to - lang, tech, software, general)
 * 
 * icon: string (link to image location)
 * 
 * level: int (number of stars, 1 to 4)
 * 
 * description: array[string] (each string = 1 paragraph) HTML tags are valid! This shouldn't
 * compromise anything, since there is no user input available.
 * 
 * id: int (assign manually, for use in distinguishing which is which to svelte). 
 * Start at 0 for languages, 20 for tech, 40 for software, 60 for general.
 */
const skills = readable([
    {
        name: "Python",
        tab: "lang",
        icon: "Icons/python.png",
        level: 3,
        description: [
            "Using <b>Python 2</b> in the Codeskulptor online IDE, I built a 2D space shooter game based on the video game Star Fox.", 
            "I am currently using <b>Python 3</b> to work on <b>Pytimize</b>, a solver for optimization problems, including linear, \
            integer, and non-linear programming problems." 
        ],
        id: 0
    },
    {
        name: "Java",
        tab: "lang",
        icon: "Icons/java.png",
        level: 3,
        description: [
            "In Java, I created a fully-functioning clone of Minesweeper, including custom difficulty and board sizes, and high scores. \
            I used the <b>Java Swing</b> library to implement the graphics, and the scanner to implement file I/O." 
        ],
        id: 1
    },
    {
        name: "C#",
        tab: "lang",
        icon: "Icons/csharp.png",
        level: 3,
        description: [
            "I transitioned to C# from Java and I am learning to develop games in <b>Unity</b>. \
            I am currently working on GalakForce, a 3<sup>rd</sup> person top-down shooter." 
        ],
        id: 2
    },
    {
        name: "C++",
        tab: "lang",
        icon: "Icons/c++.png",
        level: 3,
        description: [
            "I learned C++ through CS246: Object-Oriented Software Development at the University of Waterloo. \
            Topics including object-oriented design principles, RAII, and several design patterns were covered.",
            "As a final project, I worked in a group to write Biquadris, a command line version of Tetris. \
            This project used most concepts covered in the course, such as smart pointers, the Model-View Controller, and polymorphism. \
            Access to the repo is available on request." 
        ],
        id: 3
    },
    {
        name: "C",
        tab: "lang",
        icon: "Icons/c.png",
        level: 2,
        description: [
            "I learned C through CS136: Elementary Algorithm Design and Data Abstraction at the University of Waterloo. \
            Several topics were covered, including data structures, memory management, and runtime." 
        ],
        id: 4
    },
    {
        name: "JavaScript",
        tab: "lang",
        icon: "Icons/javascript.png",
        level: 2,
        description: [
            "" 
        ],
        id: 5
    },
    {
        name: "HTML",
        tab: "lang",
        icon: "Icons/html5.png",
        level: 2,
        description: [
            "" 
        ],
        id: 6
    },
    {
        name: "CSS",
        tab: "lang",
        icon: "Icons/css3.png",
        level: 2,
        description: [
            "" 
        ],
        id: 7
    }
]);

export default skills;