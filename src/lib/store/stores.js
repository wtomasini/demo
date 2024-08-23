import {derived, readable} from "svelte/store";
import {writable} from "svelte/store";

function createCount() {
    const {subscribe, set, update} = writable(0);

    return {
        subscribe,
        increment: () => update((n) => n + 1),
        decrement: () => update((n) => n - 1),
        reset: () => set(0),
        set: (n) => set(n)
    };
}

export const count = createCount();

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {set(new Date().getTime());}, 1000);

    return function stop() {
        clearInterval(interval);
    }
});

const start = new Date();

export const elapsed = derived(
    time, ($time) => Math.round(($time - start) / 1000));

export function createTodoStore(initial) {
    let uid = 1;

    const todos = initial.map(({ done, description }) => {
        return {
            id: uid++,
            done,
            description
        };
    });

    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        add: description => {
            const todo = {
                id: uid++,
                done: false,
                description
            };

            update($todos => [...$todos, todo])
        },
        remove: todo => {
            update($todos => $todos.filter((t) => t !== todo));
        },
        mark: (todo, done) => {
            update($todos => [
                ...$todos.filter((t) => t !== todo),
                { ...todo, done }
            ]);
        }
    };
}
