<script>
    import {count} from './stores.js';
    import CounterStore from './counterStore.svelte';
    import CounterSet from './counterSet.svelte';
</script>

<h3>At first glance this looks the same as the counter at the top of the page, but this one uses a store, which is more fancy.</h3>

<p>The count is {$count}</p>
<CounterSet/>
<CounterStore/>