<script>
    import TickDemo from "$lib/tickDemo.svelte";
    import ClockStore from "$lib/store/clockStore.svelte";
    import NotAGptWrapper from "$lib/gptWrapper.svelte";
    import FocusTrap from "$lib/ui/trap.svelte";

    import '@fontsource/comic-mono';
</script>

<h1>This page showcases some more nitty-gritty stuff</h1>

<TickDemo/>

<ClockStore/>

<FocusTrap/>

<NotAGptWrapper/>

<style>
    h1 {
        color: darkblue;
        font-family: "comic-mono", cursive;
        font-size: 2em;
    }
</style>