<script>
    import { onMount } from 'svelte';
    import { paint } from '../../static/gradient.js';
    import { fade } from 'svelte/transition';

    let canvas;

    onMount(() => {
        let context;
        if (canvas) {
                context = canvas.getContext('2d');
        }

        let frame = requestAnimationFrame(function loop(t) {
            frame = requestAnimationFrame(loop);
            paint(context, t);
        });

        return () => {
                cancelAnimationFrame(frame);
        };
    });
</script>

<canvas
        bind:this={canvas}
        out:fade={{duration: 500}}
        width={32}
        height={32}
></canvas>

<style>
    canvas {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #666;
        mask: url(../../static/svelte-logo-mask.svg) 50% 50% no-repeat;
        mask-size: 60vmin;
        -webkit-mask: url(../../static/svelte-logo-mask.svg) 50% 50% no-repeat;
        -webkit-mask-size: 60vmin;
    }
</style>