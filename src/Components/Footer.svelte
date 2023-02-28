<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<style>
    footer {
        margin-top: auto;
        padding: 0.25rem 1rem;
        text-align: left;
        background: #000b30;
        color: white;
    }

    p, a {
        color: white;
        font-size: 14px;
    }

    .copyright {
        float: left;
    }

    .version {
        float: right;
    }

    .link, .builtWith {
        display: inline-block;
    }

    .link {
        cursor: pointer;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        .version {
            float: left;
        }

        .copyright, .link {
            padding-left: 0.3rem;
        }
    }
</style>

<footer>
    <p class="copyright">Written by and &#169 Jonathan Wang 2019 - 2023.</p>

    <div class="version">
        <a class="link" href="/version">Version 2.7.</a>
        <p class="builtWith">Built with Svelte and ♥</p>
    </div>
</footer>