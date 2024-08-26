<script>
    import Eliza from 'elizabot';
    import '@fontsource/comic-mono';
    import {
        beforeUpdate,
        afterUpdate
    } from 'svelte';

    let div;
    let autoscroll = false;

    beforeUpdate(() => {
        if (div) {
            const scrollableDistance = div.scrollHeight - div.offsetHeight;
            autoscroll = div.scrollTop > scrollableDistance - 20;
        }
    });

    afterUpdate(() => {
        if (autoscroll) {
            div.scrollTo(0, div.scrollHeight);
        }
    });

    const eliza = new Eliza();
    const pause = (ms) => new Promise((fulfil) => setTimeout(fulfil, ms));

    const typing = { author: 'eliza', text: '...' };

    let comments = [];

    async function handleKeydown(event) {
        if (event.key === 'Enter' && event.target.value) {
            const comment = {
                author: 'user',
                text: event.target.value
            };

            const reply = {
                author: 'eliza',
                text: eliza.transform(comment.text)
            };

            event.target.value = '';
            comments = [...comments, comment];

            await pause(200 * (1 + Math.random()));
            comments = [...comments, typing];

            await pause(500 * (1 + Math.random()));
            comments = [...comments, reply].filter(comment => comment !== typing);
        }
    }
</script>

<div class="container">
    <h2>Since every website these days has to have a chatbot, here's mine.</h2>
    <h3>It's not that smart, but at least it's not a ChatGPT wrapper!</h3>
    <div class="phone">
        <div class="chat" bind:this={div}>
            <header>
                <h1>Robo-William</h1>

                <article class="eliza">
                    <span>{eliza.getInitial()}</span>
                </article>
            </header>

            {#each comments as comment}
                <article class={comment.author}>
                    <span>{comment.text}</span>
                </article>
            {/each}
        </div>

        <input on:keydown={handleKeydown} />
    </div>
</div>

<style>
    h2, h3 {
        font-family: "comic-mono", "cursive";
        color: darkblue;
    }

    .container {
        display: grid;
        align-items: center;
        height: 100%;
    }

    .phone {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50%;
    }

    header {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 4em 0 0 0;
        box-sizing: border-box;
    }

    h1 {
        flex: 1;
        font-size: 1.4em;
        text-align: center;
    }

    .chat {
        height: 0;
        flex: 1 1 auto;
        padding: 0 1em;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    article {
        margin: 0 0 0.5em 0;
    }

    .user {
        text-align: right;
    }

    span {
        padding: 0.5em 1em;
        display: inline-block;
    }

    .eliza span {
        background-color: #555;
        border-radius: 1em 1em 1em 0;
        color: #f8f8f8;
    }

    .user span {
        background-color: #0074d9;
        color: white;
        border-radius: 1em 1em 0 1em;
        word-break: break-all;
    }

    input {
        margin: 0.5em 1em 1em 1em;
    }

    @media (min-width: 400px) {
        .phone {
            background: #5e60a6;
            position: relative;
            font-size: min(2.5vh, 1rem);
            width: auto;
            height: 36em;
            aspect-ratio: 9 / 16;
            border: 0.2em solid #222;
            border-radius: 1em;
            box-sizing: border-box;
            filter: drop-shadow(1px 1px 0px #222) drop-shadow(2px 2px 0px #222) drop-shadow(3px 3px 0px #222)
        }
    }

    @media (prefers-reduced-motion) {
        .chat {
            scroll-behavior: auto;
        }
    }
</style>
