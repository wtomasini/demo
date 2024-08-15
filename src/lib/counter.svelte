<script>
    let count = 1;
    let numbers = [1];

    function increment() {count += 1;}
    function reset() {count = 1; numbers = [1];}
    function addNumber() {
        numbers = [...numbers, numbers.length + 1];
    }
    function multiCount() {
        increment();
        addNumber();
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

    $: if (count >= 100) {alert('Okay, we get it. You can stop counting now.')}
</script>

<button on:click={multiCount}>
    Clicked {count - 1}
    {count === 2 ? 'time' : 'times'}
</button>
<button on:click={reset}>
    Reset
</button>

{#if count > 80}
    <p>That's enough numbers for now, don't you think?</p>
{:else if count < 2}
    <p>Go ahead, click the buttons</p>
{:else if count === 68}
    <p>That's my favorite number!</p>
{/if}

<h2>Math Time!</h2>
<p>{numbers.join(' + ')} = {sum}</p>

<style>
    h2 {
        color: goldenrod;
        font-size: 20px;
        font-family: "Papyrus", cursive;
    }
</style>