<script>
    import { createTodoStore } from "$lib/store/stores.js";
    import TodoList from "./todoList.svelte";

    const todos = createTodoStore([
        { done: false, description: "Go to the pool" },
        { done: false, description: "Feed the dog" },
        { done: false, description: "Water plants" },
        { done: false, description: "Ponder orb" },
        { done: false, description: "Let the tide drag you away" },
        { done: false, description: "Do laundry" },
    ]);
</script>

<div class="board">
    <input
            placeholder="what needs to be done?"
            on:keydown={(e) => {
			if (e.key !== 'Enter') return;

			todos.add(e.currentTarget.value);
			e.currentTarget.value = '';
		}}
    />

    <div class="todo">
        <h2>todo</h2>
        <TodoList store={todos} done={false} />
    </div>

    <div class="done">
        <h2>done</h2>
        <TodoList store={todos} done={true} />
    </div>
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        max-width: 50em;
        margin: 0 auto;
    }

    .board > input {
        font-size: 1.4em;
        grid-column: 1/3;
        padding: 0.5em;
        margin: 0 0 1rem 0;
    }

    h2 {
        font-size: 2em;
    }
</style>
