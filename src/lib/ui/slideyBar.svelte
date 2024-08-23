<script>
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";

    const progress = tweened(0, {duration: 400, easing: cubicOut});
</script>

<h3>If you find all that boring, you can at least stay busy with this cool slidey bar.</h3>

<progress value={$progress}></progress>

<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1)}>100%</button>

<style>
    progress {
        display: block;
        width: 100%;
    }
    h3 {
        color: purple;
    }
</style>
