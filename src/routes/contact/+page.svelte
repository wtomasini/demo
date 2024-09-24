<script>
    import {enhance} from "$app/forms";
    import {fly, slide} from 'svelte/transition';

    export let data;
    export let form;
</script>

<h1>I'll get around to implementing this eventually.</h1>

<h3>When I'm done you'll actually be able to send me emails, and I might actually read them.</h3>

<span>In the meantime, you can </span>
<a href="https://www.instagram.com/wtomasinii/">follow me on Instagram</a>
<br>
<span>And until I set up that fancy message system you can always just </span>
<a href="mailto:will@bentomasini.com">email me the old-fashioned way.</a>

<p></p>

<div>
    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}

    <form method="POST" action="?/create" use:enhance>
        <label>
            New message
            <br>
            <input
                    name="subject"
                    autocomplete="off"
                    placeholder="Subject"
            />
            <br>
            <input
                    name="content"
                    autocomplete="off"
                    placeholder="Message"
                    required
            />
        </label>
        <br>
        <button type="submit">Send</button>
    </form>

    <h3>Previously sent messages:</h3>

    <ul class="todos">
        {#each data.messages as message (message.id)}
            <li in:fly={{ y: 20 }} out:slide>
                <form method="POST" action="?/delete" use:enhance>
                    <button aria-label="Mark as complete">Remove</button>
                    <input type="hidden" name="id" value={message.id} />
                    <span><strong>{message.subject} | </strong>{message.content}</span>
                </form>
            </li>
        {/each}
    </ul>
</div>