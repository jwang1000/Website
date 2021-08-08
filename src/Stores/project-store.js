import { readable } from 'svelte/store';

/**
 * Format of skill objects:
 * 
 * name: string
 * 
 * primaryImage: string (link to icon - the image to display in the slideshow)
 * 
 * images: array[string] (links to icons)
 * 
 * description: array[string] (each string = 1 paragraph) HTML tags are valid! This shouldn't
 * compromise anything, since there is no user input available.
 * 
 * link: string (hyperlink to web page, set to "" if not needed)
 * 
 * buttonText: string (text for hyperlink ubtton, set to "" if not needed)
 * 
 * id: int (assign manually - used for which point in the slideshow)
 */
const projects = readable([
    {
        name: "Pytimize",
        primaryImage: "Icons/pytimize.png",
        images: ["Icons/optimization1.PNG", "Icons/optimization2.PNG"],
        description: [
            "<b>Language: Python 3<br>Technologies: NumPy, MatPlotLib</b>",
            "A solver for various optimization problems, including linear and integer programs. Includes \
            methods for validating and computing solutions, graphing feasible regions, and step by step \
            solutions.",
            "Work in progress! Contributions are welcome—Pytimize is open source and licensed under \
            the Apache License 2.0."
        ],
        link: "https://github.com/TerrayTM/pytimize",
        buttonText: "See GitHub repository...",
        id: 0
    },
    {
        name: "jwang1000 Website",
        primaryImage: "Icons/logo.png",
        images: [""],
        description: [
            "<b>Languages: HTML, CSS, JavaScript<br>Technologies: Svelte</b>",
            "My personal responsive website, built from scratch without the use of external libraries or \
            stylesheets. You're on it right now!",
            "I wrote the second version of the website using the Svelte compiler, which enabled additional \
            enhancements and an easily maintainable codebase."
        ],
        link: "https://github.com/jwang1000/Website",
        buttonText: "See GitHub repository...",
        id: 1
    },
    {
        name: "Gesture Recognition",
        primaryImage: "Icons/recognition.png",
        images: ["Icons/recognition1.png", "Icons/recognition2.png", "Icons/recognition3.png"],
        description: [
            "<b>Language: Java<br>Technologies: Android API</b>",
            "A gesture recognition app for Android. Saves named gestures to compare against, then finds the \
            closest three matches to any drawn gesture. The saved gestures are kept in storage so they can be \
            used even after closing and reopening the app, and they can be replaced or deleted.",
            "The GitHub repository is private, due to this project being a course assignment. Access to the \
            repo is available on request."
        ],
        link: "",
        buttonText: "",
        id: 2
    },
    {
        name: "Game of Life",
        primaryImage: "Icons/life.png",
        images: ["Icons/life1.png"],
        description: [
            "<b>Language: Java<br>Technologies: JavaFX</b>",
            "A modified version of Conway's Game of Life. The board is a limited size, but additional \
            enhancements include manual mode and quality of life improvements.",
            "The GitHub repository is private, due to this project being a course assignment. Access to the \
            repo is available on request."
        ],
        link: "",
        buttonText: "",
        id: 3
    },
    {
        name: "Drawing Bezier Curves",
        primaryImage: "Icons/bezier.png",
        images: ["Icons/bezier1.png"],
        description: [
            "<b>Language: Java<br>Technologies: JavaFX</b>",
            "A program to draw <a href='https://en.wikipedia.org/wiki/B%C3%A9zier_curve'>Bezier Curves</a>. \
            Includes different colours, thicknesses, and styles of lines; erasing, cutting, copying, and \
            pasting lines; adjusting points and making sharp corners; and saving and loading the entire \
            canvas.",
            "The GitHub repository is private, due to this project being a course assignment. Access to the \
            repo is available on request."
        ],
        link: "",
        buttonText: "",
        id: 4
    },
    {
        name: "Biquadris",
        primaryImage: "Icons/biquadris.png",
        images: ["Icons/biquadris1.png", "Icons/biquadris2.png"],
        description: [
            "<b>Language: C++</b>",
            "A two-player, command line version of Tetris. Actions are non-realtime, and updates a graphical \
            representation of the two grids. Additional features such as negative effects (blindness, heaviness) \
            were added to enhance the multiplayer aspect.",
            "The GitLab repository is private, due to this project being a course assignment. Access to the \
            repo is available on request."
        ],
        link: "",
        buttonText: "",
        id: 5
    },
    {
        name: "Minesweeper Clone",
        primaryImage: "Icons/minesweeper.png",
        images: ["Icons/minesweeper1.PNG", "Icons/minesweeper2.PNG"],
        description: [
            "<b>Language: Java<br>Technologies: Java Swing</b>",
            "A clone of the game Minesweeper with the original early Windows graphics. Complete \
            with custom board sizes, pre-built difficulty settings, and persistent high scores."
        ],
        link: "https://github.com/jwang1000/Minesweeper",
        buttonText: "See GitHub repository...",
        id: 6
    },
    {
        name: "Star Fox 2D",
        primaryImage: "Icons/starfoxtitle.png",
        images: ["Icons/starfox1.PNG", "Icons/starfox2.PNG"],
        description: [
            "<b>Language: Python 2<br>Technologies: CodeSkulptor SimpleGUI</b>",
            "A 2D version of the Star Fox space shooter game, including unique enemy and boss AI as well as \
            multiple levels."
        ],
        link: "https://github.com/jwang1000/Star-Fox-2D",
        buttonText: "See GitHub repository...",
        id: 7
    }
]);

export default projects;