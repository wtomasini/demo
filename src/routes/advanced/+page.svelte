<script>
    import TickDemo from "$lib/tickDemo.svelte";
    import ClockStore from "$lib/store/clockStore.svelte";
    import NotAGptWrapper from "$lib/gptWrapper.svelte";
    import FocusTrap from "$lib/ui/trap.svelte";

    import '@fontsource/comic-mono';
</script>

<h1>This page showcases some more nitty-gritty stuff</h1>

<a href="https://linktr.ee/cidstation">
    Check this out if you live in the Seattle area. It's not related to the rest of the page but this is
    my website so I can put it here.
</a>

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