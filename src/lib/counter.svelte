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
    Clicked {count}
    {count ===1 ? 'time' : 'times'}
</button>
<button on:click={reset}>
    Reset
</button>

<h3>Math time!</h3>
<p>{numbers.join(' + ')} = {sum}</p>

<style>
    h3 {
        color: goldenrod;
        font-size: 20px;
        font-family: cursive;
    }
</style>