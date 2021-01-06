import { readable } from "svelte/store";

/**
 * Format of education objects:
 * 
 * name: string (official course name, not including subject/course number)
 * 
 * subject: string (CS, MATH, CO, etc.)
 * 
 * courseNumber: number
 * 
 * term: number (includes co-op terms: 0 = 1A, 1 = 1B, 2 = co-op 1, 3 = 2A, etc.)
 * 
 * description: array[string] (each string = 1 paragraph)
 * HTML tags are valid! This shouldn't cause XSS attacks, since there is no user input available.
 */
const education = readable([
    {
        name: "Designing Functional Programs",
        subject: "CS",
        courseNumber: 135,
        term: 0,
        description: [
            "An introduction to the fundamentals of computer science and functional programming.",
            "Covered the basics of recursion, documentation, tracing code, and data structures."
        ]
    },
    {
        name: "Elementary Algorithm Design and Data Abstraction",
        subject: "CS",
        courseNumber: 136,
        term: 1,
        description: [
            "An introduction to the design and analysis of algorithms as well as the management of data.",
            "Covered <b>C</b>, basic sorting algorithms, pointers and memory management, and more data \
            structures including lists, stacks, queues, and trees."
        ]
    },
    {
        name: "Introduction to Optimization",
        subject: "CO",
        courseNumber: 250,
        term: 3,
        description: [
            "An overview of many topics in the field of optimization.",
            "Covered various aspects of linear, nonlinear, and integer programs, duality, graphs, geometry; \
            applications of programs including min cost perfect matching, and algorithms such as simplex, \
            cutting plane, and branch-and-bound."
        ]
    },
    {
        name: "Logic and Computation",
        subject: "CS",
        courseNumber: 245,
        term: 3,
        description: [
            "Explored propositional and predicate logic, as well as soundness, completeness, unprovability, and \
            undecidability of problems. Covered correctness proofs for recursive and iterative programs."
        ]
    },
    {
        name: "Object-Oriented Software Development",
        subject: "CS",
        courseNumber: 246,
        term: 3,
        description: [
            "An introduction to object-oriented programming using <b>C++</b>.",
            "Explored Resource Acquisition is Initialization, <b>design patterns</b> such as Iterator, Factory, \
            Visitor, and Model-View Controller, and principles of OOP including encapsulation, abstraction, \
            inheritance, and polymorphism."
        ]
    },
    {
        name: "Network Flow Theory",
        subject: "CO",
        courseNumber: 351,
        term: 5,
        description: [
            "Explored various problems such as shortest path, minimum cost flow, max flow min cut, maximum matching, \
            and their applications.",
            "Many algorithms were covered, including network simplex, Bellman-Ford, Dijkstra, Ford-Fulkerson, and \
            preflow-push. Also included economic interpretations."
        ]
    },
    {
        name: "Data Structures and Data Management",
        subject: "CS",
        courseNumber: 240,
        term: 5,
        description: [
            "Explored many data structures, algorithms, and their performance in greater detail.",
            "The data structures covered include trees (AVL, tries, kd-trees, etc.), heaps, stacks, queues, \
            dictionaries, and skip lists.",
            "The algorithms covered include heapsort, quickselect/quicksort, MSD/LSD radix sort, interpolation \
            search, types of hashing, types of pattern matching algorithms, and encoding.",
            "All data structures and algorithms had various aspects of their performance analyzed, such as \
            the runtime for adding an element, finding an element, and sorting a data structure."
        ]
    },
    {
        name: "Foundations of Sequential Programs",
        subject: "CS",
        courseNumber: 241,
        term: 5,
        description: [
            "Explored the relationship between high-level languages and their lower-level implementation.",
            "Covered assembly language and MIPS, context free and context sensitive analysis, state machines \
            including DFAs and NFAs, regular languages, and code generation."
        ]
    },
    {
        name: "Computer Organization and Design",
        subject: "CS",
        courseNumber: 251,
        term: 5,
        description: [
            "An introduction to digital logic and processor design. Covered various aspects of data representation, \
            single/multicycle datapaths and pipelining, memory hierarchies, and multiprocessors. Included an overview \
            of the ARM instruction set."
        ]
    },
    {
        name: "Introduction to Combinatorics",
        subject: "MATH",
        courseNumber: 239,
        term: 5,
        description: [
            "An introduction to graph theory and combinatorial analysis.",
            "Explored colouring, matchings, connectivity, planarity, generating series, recurrence relations, binary \
            strings, and plane trees."
        ]
    },
    {
        name: "Nonlinear Optimization",
        subject: "CO",
        courseNumber: 367,
        term: 6,
        description: [
            "Explored the fundamentals of nonlinear optimization, particularly various algorithms.",
            "Covered convexity, constrained and unconstrained problems, steepest descent, Newton's method, BFGS, \
            trust region methods, conjugate direction, linear and nonlinear least squares, gradient projection, quadratic \
            penalty, and log-barrier. Also analyzed the rates convergence of these methods."
        ]
    },
    {
        name: "Applied Cryptography",
        subject: "CO",
        courseNumber: 487,
        term: 7,
        description: [
            // TODO
        ]
    },
    {
        name: "Algorithms",
        subject: "CS",
        courseNumber: 341,
        term: 7,
        description: [
            // TODO
        ]
    },
    {
        name: "User Interfaces",
        subject: "CS",
        courseNumber: 349,
        term: 7,
        description: [
            // TODO
        ]
    },
    {
        name: "Operating Systems",
        subject: "CS",
        courseNumber: 350,
        term: 7,
        description: [
            // TODO
        ]
    },
]);

export default education;
