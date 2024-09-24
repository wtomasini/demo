<script>
    import '@fontsource/creepster';
    import '@fontsource/quintessential';

    let name = "bossman";

    let ssn = 111552222;

    function isPrime(num) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    let affirms = false;
</script>

<h2>Now let's get some input from you, the user</h2>

<h3>Enter your name, {name}</h3>
<input bind:value={name}>
<br>
<br>

<label>
    <input type="checkbox" bind:checked={affirms}>
    Check this box to affirm that you are <strong>cool</strong> enough
</label>
<br>
<button disabled={!affirms} on:click={() => alert("Cool")} >Button that only <strong>cool</strong> people can press</button>

<style>
    h2 {
        color: darkcyan;
        font-family: "quintessential", cursive;
    }
    h3 {
        color: purple;
        outline: black 5px;
    }
    strong {
        color: blue;
        font-size: 18px;
        font-weight: lighter;
        font-family: "creepster", cursive;
        outline: black 5px;
    }
</style>