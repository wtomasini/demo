<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function catchSnooper() {
        dispatch('message', {text: 'Nice try, the police are on their way now'});
    }
</script>

<button on:click={catchSnooper}>Click here to see my super secret private folder!</button>