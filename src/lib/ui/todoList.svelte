<script>
    import { flip } from "svelte/animate";
    import { send, receive } from './transition.js';

    export let store;
    export let done;
</script>

<ul class="todos">
    {#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
        <li
                class:done
                in:receive={{ key: todo.id }}
                out:send={{ key: todo.id }}
                animate:flip={{duration: 200}}
        >
            <label>
                <input
                        type="checkbox"
                        checked={todo.done}
                        on:change={(e) => store.mark(todo, e.currentTarget.checked)}
                />

                <span>{todo.description}</span>

                <button on:click={() => store.remove(todo)}></button>
            </label>
        </li>
    {/each}
</ul>

<style>
    button {
        border: none;
        background: url(/remove.svg) no-repeat 50% 50%;
        background-size: 1rem 1rem;
        cursor: pointer;
        height: 100%;
        aspect-ratio: 1;
        opacity: 1;
        transition: opacity 0.2s;
    }

    label {
        width: 100%;
        height: 100%;
        display: flex;
    }

    span {
        flex: 1;
    }
</style>