import { readable } from 'svelte/store';

/**
 * Format of skill objects:
 * 
 * name: string
 * 
 * images: array[string] (links to icons)
 * 
 * description: array[string] (each string = 1 paragraph) HTML tags are valid! This shouldn't
 * compromise anything, since there is no user input available.
 * 
 * link: string (hyperlink to web page, set to "" if not needed)
 * 
 * buttonText: string (text for hyperlink ubtton, set to "" if not needed)
 */
const projects = readable([
    {
        name: "Minesweeper Clone",
        images: ["Icons/minesweeper1.PNG", "Icons/minesweeper2.PNG"],
        description: [
            "Language: Java<br>Technologies: Java Swing Library",
            "A clone of the game Minesweeper with the original early Windows graphics. Complete \
            with custom board sizes, pre-built difficulty settings, and persistent high scores."
        ],
        link: "https://github.com/jwang1000/Minesweeper",
        buttonText: "See GitHub repo..."
    }
]);

export default projects;