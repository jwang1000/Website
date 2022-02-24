<script>
    import PageIntro from '../Components/PageIntro.svelte';
    import Button from '../Components/Button.svelte';
    import Modal from '../Components/Modal.svelte';

    let showModal = false;
    let showEmail = false;
</script>

<style>
    .contact {
        padding: 2rem 4rem;
        background: #d2ddff;
    }

    @media screen and (max-width: 500px) {
        .contact {
            padding: 2rem;
        }
    }
</style>

<svelte:head>
    <title>Contact - jwang1000</title>
</svelte:head>

<PageIntro 
    title="Contact" 
    subtitle={["jwang1000"]}
    description={["Get in touch"]}
/>

<section class = "contact">
    <p>I'm always looking for new internship and job opportunities!</p>
    <p>If you have an opening, if you have an app or website idea that you've got funding for, or if you just want to chat, 
        shoot me an email:
    </p>

    {#if !showEmail}
        <Button text="See Email..." on:click={() => showModal = true}/>
    {/if}

    {#if showModal}
        <Modal
            title="A Note First..."
            cancelText="Never Mind"
            confirmText="See Email!"
            on:cancel={() => showModal = false}
            on:confirm={() => {
                showEmail = true;
                showModal = false;
            }}>
            <div class="skillExplanation">
                <p>Before you send me an email, I want to make sure you know that I only work for pay.</p>
                <p>I am not looking for unpaid internships or work experience. I also won't accept any website, app, or game 
                    propositions that are in the concept stage and don't have any funding yet from either you or investors.
                </p>
                <p>I'm really sorry about ruling out these opportunities, but my time is limited and I have too many passion projects of 
                    my own that are sitting unfinished. If you get funding at a later date, absolutely come back and email me then!
                </p>
                <p>I will help out for free if you know me personally, but in that case you should already know how to contact me, and 
                    it's not through this email.
                </p>
                <br>
                <p>One more thing: if you just wanted to chat, email is going to be slow. You'll probably have a better time sending me 
                    a message on <b>LinkedIn</b> - search for "jwang1000".
                </p>
                <p>(Please don't spam my LinkedIn with the things I outlined above, though.)</p>
                <br>
                <p>If you've cleared the hurdles above, great! Go ahead and click on the button below that shows you my email.</p>
            </div>
        </Modal>
    {/if}
    
    {#if showEmail}
        <h3>contactjwang1000<code>&#64</code>gmail.com</h3>
        <p>I'll get back to you as soon as possible! If you've emailed me during a crunch time or midterm/finals season though, be 
            aware that it might take a few days.
        </p>
    {/if}
</section>