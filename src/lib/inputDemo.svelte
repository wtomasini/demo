<script>
    let name = "bossman";

    let ssn = 111552222;

    function isPrime(num) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    let affirms = false;

    let questions = [
        { id: 1, text: "Who made this website?" },
        { id: 2, text: "What's Authwise?" },
        { id: 3, text: "Where are you located?" },
        { id: 4, text: "What are your three favorite colors?" },
        { id: 5, text: "Wow, you're sooo cool! Can I be your girlfriend?" }
    ];

    let answers = [
        { id: 1, text: "This website was made by me, Will Tomasini, as practice to work on Authwise's website."},
        {
            id: 2,
            text: "Authwise is an upcoming identity provider that features near-endless scalability, support for " +
                "OAuth, OIDC, and SAML, an integrated SCIM API, universal login compatibility, total " +
                "administrative flexibility, and more. It's still in active development, so features may change."
        },
        {
            id: 3,
            text: "I live in Snohomish, Washington, United States, but spend most of my waking hours in the nearby city " +
                "of Bothell. Authwise is based in downtown Seattle, and you can find us at 1201 2nd Ave, 9th floor, room 942B."},
        {
            id: 4,
            text: "Purple, slate gray, and sea green."
        },
        {
            id: 5,
            text: "Due to some unforeseen personal circumstances, I am not accepting girlfriend applications at the moment. " +
                "Thank you for understanding, and I apologize for the inconvenience."
        }
    ];

    let selected = questions[0];
</script>

<h2>Now let's get some input from you, the user</h2>

<h3>Enter your name, {name}</h3>
<input bind:value={name}>

<h3>Great now enter your social security number</h3>
<input bind:value={ssn}>
{isPrime(ssn) ? "That's a prime number!" : "That's not a prime number"}
<br>
<br>

<label>
    <input type="checkbox" bind:checked={affirms}>
    Check this box to affirm that I am <strong>cooler</strong> than you
</label>
<br>
<button disabled={!affirms} on:click={() => alert("You're aight")} >Button that only <strong>cool</strong> people can press</button>
<br>
<h3>Now you get to do the talking, ask away.</h3>

<select bind:value={selected}>
    {#each questions as question}
        <option value={question}>{question.text}</option>
    {/each}
</select>
<p>{answers?.at(selected.id - 1)?.text}</p>

<style>
    h2 {
        color: darkcyan;
        font-family: "Papyrus", cursive;
    }
    h3 {
        color: purple;
        outline: black 5px;
    }
    strong {
        color: blue;
        font-size: 20px;
        font-family: "Chiller", cursive;
        outline: black 5px;
    }
</style>