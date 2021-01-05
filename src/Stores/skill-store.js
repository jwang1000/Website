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
    // LANGUAGES
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
            I used the <b>Java Swing</b> library to implement the graphics, and the scanner to implement file I/O. While working on this \
            project, I used <b>object-oriented design principles</b> to keep the codebase easily modifiable and to take advantage of \
            pre-existing code.",
            "Additionally, at MDA I used Java to work on the backend of the main web app. I fixed various bugs and refactored parts of \
            the codebase to remove redundancy."
        ],
        id: 1
    },
    {
        name: "C++",
        tab: "lang",
        icon: "Icons/c++.png",
        level: 3,
        description: [
            "I learned C++14 through CS 246: Object-Oriented Software Development at the University of Waterloo. \
            Topics including <b>object-oriented design principles</b>, <b>RAII</b>, and several <b>design patterns</b> were covered.",
            "As a final project, I worked in a group to write Biquadris, a two-player command line version of Tetris. \
            This project used most concepts covered in the course, such as <b>smart pointers</b>, the <b>Model-View Controller</b>, \
            and <b>polymorphism</b>." 
        ],
        id: 3
    },
    {
        name: "C#",
        tab: "lang",
        icon: "Icons/csharp.png",
        level: 3,
        description: [
            "I transitioned to C# from Java and I am learning to develop games in <b>Unity</b> and Microsoft's XNA Framework."
        ],
        id: 2
    },
    {
        name: "C",
        tab: "lang",
        icon: "Icons/c.png",
        level: 2,
        description: [
            "I learned C through CS 136: Elementary Algorithm Design and Data Abstraction at the University of Waterloo. \
            Several topics were covered, including data structures, memory management, and runtime." 
        ],
        id: 4
    },
    {
        name: "JavaScript",
        tab: "lang",
        icon: "Icons/javascript.png",
        level: 3,
        description: [
            "I used JavaScript in my second term as an intern at Terradatum. Using <b>Svelte</b>, I wrote TD-Admin from scratch, \
            a single-page web administration application.",
            "At MDA, I used TypeScript and <b>Angular</b> to work on the frontend of the main web app, including creating new \
            reusable components and fixing bugs.",
            "I also used JS and Svelte to build the current version of jwang1000.com."
        ],
        id: 5
    },
    {
        name: "TypeScript",
        tab: "lang",
        icon: "Icons/typescript.png",
        level: 3,
        description: [
            "I used TypeScript with <b>Angular</b> to develop the frontend of the main web app at MDA. I created reusable components \
            for the shared component library and improved parts of the documentation. I also helped improve the efficiency of the \
            app through refactoring redundant code and changing the code to use new components."
        ],
        id: 6
    },
    {
        name: "HTML",
        tab: "lang",
        icon: "Icons/html5.png",
        level: 3,
        description: [
            "I used HTML in my internships with Terradatum and MDA, as well as my personal website. I used online resources such \
            as W3Schools to teach myself, and wrote the original version of jwang1000.com as practice." 
        ],
        id: 7
    },
    {
        name: "CSS",
        tab: "lang",
        icon: "Icons/css3.png",
        level: 2,
        description: [
            "I used CSS to build my website and at my internships at Terradatum and MDA. Similarly to HTML, I used online resources to \
            learn the required knowledge. I did not use any external CSS libraries to write this site." 
        ],
        id: 8
    },

    // TECHNOLOGIES
    {
        name: "Angular",
        tab: "tech",
        icon: "Icons/angular.png",
        level: 3,
        description: [
            "I used Angular to work on the frontend of the primary web application being developed by MDA. I created reusable \
            components for the shared component library and refactored parts of the web app to follow best coding practices such \
            as avoiding redundancy and improving readability."
        ],
        id: 20
    },
    {
        name: "Svelte",
        tab: "tech",
        icon: "Icons/svelte.png",
        level: 3,
        description: [
            "I first learned Svelte, a JavaScript compiler, as part of my second internship at Terradatum. Using Svelte, \
            I built <b>TD-Admin</b> from scratch, which is a single-page web administrative application for Terradatum.",
            "I then used Svelte to create the current version of jwang1000.com (the website you're on!), which is much \
            more easily maintained than the previous codebase, made of the standard HTML, CSS, and JavaScript." 
        ],
        id: 21
    },
    {
        name: "Docker",
        tab: "tech",
        icon: "Icons/docker.png",
        level: 2,
        description: [
            "I used Docker to containerize several pre-existing applications for my first internship at Terradatum, \
            and coordinated multiple containers using <b>Docker Compose</b>. I used Docker again in my second term at \
            Terradatum to containerize TD-Admin for deployment." 
        ],
        id: 22
    },
    {
        name: "NumPy",
        tab: "tech",
        icon: "Icons/numpy.png",
        level: 2,
        description: [
            "I am currently using NumPy in Python 3 to work on <b>Pytimize</b>, a solver for various optimization problems." 
        ],
        id: 23
    },
    {
        name: "MatPlotLib",
        tab: "tech",
        icon: "Icons/matplotlib.png",
        level: 2,
        description: [
            "I used MatPlotLib in Python 3 to create a part of <b>Pytimize</b>; I wrote a method to graph feasible regions \
            of linear programs." 
        ],
        id: 24
    },
    {
        name: "Postman",
        tab: "tech",
        icon: "Icons/postman.png",
        level: 2,
        description: [
            "I used Postman to create collections to automate testing of APIs and bash scripts for my first internship \
            at Terradatum. I also exported these collections for use in <b>Newman</b>, the command-line based version of Postman." 
        ],
        id: 25
    },
    {
        name: "Microsoft XNA",
        tab: "tech",
        icon: "Icons/xna.png",
        level: 2,
        description: [
            "I am working on in-progress games in C# that use the Microsoft XNA Framework." 
        ],
        id: 26
    },

    // SOFTWARE
    {
        name: "VS Code",
        tab: "software",
        icon: "Icons/vs code.png",
        level: 3,
        description: [
            "I use Visual Studio Code for general software development, including my internships at Terradatum and MDA. I \
            use VS Code for all of my Python and web app development."
        ],
        id: 40
    },
    {
        name: "Visual Studio",
        tab: "software",
        icon: "Icons/visual studio.png",
        level: 2,
        description: [
            "Visual Studio is the default editor for Unity, and I do most of my C# programming using this IDE. I also \
            use the GitHub plugin for Visual Studio to directly push and pull changes."
        ],
        id: 41
    },
    {
        name: "Unity",
        tab: "software",
        icon: "Icons/unity.png",
        level: 2,
        description: [
            "I use Unity 3D for the development of various games. I primarily work with sprites for the graphics, and \
            I have used plugins and addons such as Introloop." 
        ],
        id: 42
    },
    {
        name: "GitHub",
        tab: "software",
        icon: "Icons/github.png",
        level: 2,
        description: [
            "I use GitHub for both solo and group projects as both backup and version control. I primarily use GitHub \
            through the command line and GitHub Desktop." 
        ],
        id: 43
    },
    {
        name: "NetBeans",
        tab: "software",
        icon: "Icons/netbeans.png",
        level: 2,
        description: [
            "I used NetBeans as the IDE for my Java projects, including the Minesweeper clone I created." 
        ],
        id: 44
    },
    {
        name: "Vim",
        tab: "software",
        icon: "Icons/vim.png",
        level: 2,
        description: [
            "I learned to use Vi and Vim through CS 246 at the University of Waterloo. I programmed my C++ assignments and \
            projects exclusively in Vim for the entire term, and used the g++ compiler to create executables." 
        ],
        id: 45
    },
    {
        name: "FL Studio",
        tab: "software",
        icon: "Icons/fl studio.png",
        level: 3,
        description: [
            "As a longtime musician, I use my experience in music to create soundtracks and songs. I have composed \
            several soundtracks for use in video games, and will continue to do so for upcoming projects." 
        ],
        id: 46
    },
    {
        name: "Microsoft Office",
        tab: "software",
        icon: "Icons/office.png",
        level: 3,
        description: [
            "I use various programs in the Microsoft Office Suite, such as Word and Excel, on a near-daily basis \
            for schoolwork and record keeping, as I have for more than seven years." 
        ],
        id: 47
    },
    {
        name: "Paint.NET",
        tab: "software",
        icon: "Icons/paint net.png",
        level: 3,
        description: [
            "I use Paint.NET as a general image editor, as well as to create sprites for various games." 
        ],
        id: 48
    },
    {
        name: "Piano",
        tab: "general",
        icon: "Icons/piano.png",
        level: 4,
        description: [
            "I have studied piano and music for over 14 years, and I have an <b>ARCT</b> (Associate of the Royal \
            Conservatory of Music) diploma with First Class Honours.",
            "I also taught piano for more than three years, including technique, ear training, and repertoire." 
        ],
        id: 60
    },
    {
        name: "Saxophone",
        tab: "general",
        icon: "Icons/saxophone.png",
        level: 3,
        description: [
            "I have played saxophone for over six years as a member of a concert band, jazz band, and wind \
            ensemble. I primarily play the alto and baritone saxophones." 
        ],
        id: 61
    },
    {
        name: "Bassoon",
        tab: "general",
        icon: "Icons/bassoon.png",
        level: 3,
        description: [
            "I have played bassoon for over two years as a member of a concert band and wind ensemble." 
        ],
        id: 62
    },
    {
        name: "Guitar",
        tab: "general",
        icon: "Icons/guitar.png",
        level: 2,
        description: [
            "I play guitar as a hobby, which I first learned over eight years ago." 
        ],
        id: 63
    },
    {
        name: "Music Theory",
        tab: "general",
        icon: "Icons/theory.png",
        level: 4,
        description: [
            "I took 10 courses in music theory as part of my piano diploma with RCM, including Harmony, Music \
            History, and Counterpoint, completing the highest available level in each.",
            "I also taught music theory as a part-time job to piano students. I taught various levels of rudiments to \
            several students. Every student scored very well when taking their theory exam from RCM, often achieving \
            First Class Honours with Distinction." 
        ],
        id: 64
    }
]);

export default skills;