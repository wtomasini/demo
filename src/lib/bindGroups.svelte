<script>
    let shift = 1;
    let hobbies = [];

    const formatter = new Intl.ListFormat('en', {style: 'long', type: 'conjunction'});
</script>

<h3>Now tell me a little about yourself</h3>

{#each [1, 2, 3, 4, 5, 22] as number}
    <label>
        <input
            type="radio"
            name="shift"
            value={number}
            bind:group={shift}
        />

        {number}{number % 10 === 1 ? 'st' : number % 10 === 2 ? 'nd' : number % 10 === 3 ? 'rd' : 'th'} shift
        <br>
    </label>
{/each}

<br>

{#each ['Swimming', 'Biking', 'Modelmaking', 'Volleyball', 'Guitar', 'Ballin\''] as hobby}
    <label>
        <input
            type="checkbox"
            name="hobbies"
            value={hobby}
            bind:group={hobbies}
        />
    </label>

    {hobby}
    <br>
{/each}

{#if shift === 3 && hobbies.includes('Swimming')}
    <p>Nice try, everyone knows 3rd shifters can't swim.</p>
{:else if hobbies.length > 0}
    <p>
        You're on {shift}{shift % 10 === 1 ? 'st' : shift % 10 === 2 ? 'nd' : shift % 10 === 3 ? 'rd' : 'th'} shift
        and you enjoy {formatter.format(hobbies)}
    </p>
{:else}
    <p>Oh come on, you can't be <strong>that</strong> boring. Pick at least one hobby.</p>
{/if}

<style>
    h3 {
        color: purple;
        outline: black 5px;
    }
</style>