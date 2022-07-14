<script>
    import router from "page";

	import Index from './Pages/index.svelte';
    import Projects from './Pages/projects.svelte';
    import Contact from './Pages/contact.svelte';
    import Education from './Pages/education.svelte';
    import VersionHistory from './Pages/versionHistory.svelte';
    import NotFound from './Pages/notFound.svelte';

	import Header from './Components/Header.svelte';
    import Footer from './Components/Footer.svelte';
    import JumpToTop from './Components/JumpToTop.svelte';

    let currentPage = Index;
    let pageName = "index";

    function changePage(name) {
        pageName = name;
        switch (name) {
            case "index":
                currentPage = Index;
                break;
            case "projects":
                currentPage = Projects;
                break;
            case "contact":
                currentPage = Contact;
                break;
            case "education":
                currentPage = Education;
                break;
            case "version":
                currentPage = VersionHistory;
                break;
            default:
                currentPage = NotFound;
                break;
        }
        window.scrollTo(0, 0);
    }

    router('/', () => changePage("index"));
    router('/projects', () => changePage("projects"));
    router('/contact', () => changePage("contact"));
    router('/education', () => changePage("education"));
    router('/version', () => changePage("version"));
    router('/*', () => changePage("notFound"));

    router.start()
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="author" content="Jonathan Wang">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" type="image/png" href="Icons/logofavicon.png">
</svelte:head>

<Header activePage={pageName}/>

<svelte:component this={currentPage}/>

<JumpToTop/>

<Footer/>
