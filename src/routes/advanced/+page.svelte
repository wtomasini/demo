<script>
    import TickDemo from "$lib/tickDemo.svelte";
    import ClockStore from "$lib/store/clockStore.svelte";
    import NotAGptWrapper from "$lib/gptWrapper.svelte";
    import FocusTrap from "$lib/ui/trap.svelte";
</script>

<h1>This page showcases some more nitty-gritty stuff</h1>

<TickDemo/>

<ClockStore/>

<FocusTrap/>

<NotAGptWrapper/>

<style>
    h1 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>