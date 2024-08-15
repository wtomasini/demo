<script>
    import Secret from "$lib/secret.svelte";
    import Email from "$lib/email.svelte";
    import {getApiData} from "$lib/utils.js";

    let emails = [
        { id: 1, content: 'Please confirm your email for glutenfreesingles.com' },
        { id: 2, content: 'Your order for 17 copies of \"White Fragility\" has been confirmed' },
        { id: 3, content: 'You\'re on thin ice, pal' },
        { id: 4, content: 'Re: Re: Re: Re: Re: Re: Sandwich theory' },  
        { id: 5, content: 'You used our service once in 2019. Here\'s our newsletter you can\'t unsubscribe from!' },
        { id: 6, content: 'Urgent: Jonesy from Fortnite is in trouble and needs your help!' }
    ];
    let allThings = emails;
    function handleClickEmail() {
        emails = emails.slice(1);
    }
    function restoreEmail() {
        emails = allThings;
    }

    let promise = getApiData();
    function apiReport() {
        promise = getApiData();
    }

    function catchSnooper(event) {
        alert(event.detail.text);
    }
</script>

<h3>You know, while you're here, you might as well check my email for me</h3>

<button on:click={handleClickEmail}>Mark email as read</button>

<button on:click={restoreEmail}>Mark all as unread</button>

<Secret on:message={catchSnooper}/>

{#each emails as email (email.id)}
    <Email content={email.content} />
{/each}

<br>

<h3>
    Check out this asynchronous function, it pulls data from some API. No idea what the data means or where it's from, though.
</h3>
<button on:click={apiReport}>Get some data</button>
{#await promise}
    <p>Waiting...</p>
{:then data}
    <p>{data}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}