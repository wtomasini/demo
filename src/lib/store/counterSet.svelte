<script>
    import {count} from './stores.js';

    let ncount = 0;

    function reset() {
        ncount = 0;
    }
</script>

<input bind:value={ncount}>
<button on:click={() => count.set(ncount)} on:click={() => reset()}>Set count</button>