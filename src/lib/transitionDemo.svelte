<script>
    import { fly } from 'svelte/transition';
    import { elasticOut } from "svelte/easing";

    let render = false;

    function spin(node, {duration}) {
        return {
            duration,
            css: (t) => {
                const eased = elasticOut(t);

                return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
            }
        };
    }
</script>

<label>
    <input type="checkbox" bind:checked={render} />
    Check here for a surprise
</label>

{#if render}
    <div
        class="centered"
        in:spin={{duration: 6000}}
        out:fly={{y: 800, duration: 4000}}
        style="height: 15px"
    >
        <span>I have your IP address</span>
    </div>
{:else}
    <div style="height: 15px"></div>
{/if}

<style>
    span {
        position: relative;
        left: 37%;
        font-size: 2em;
    }
</style>