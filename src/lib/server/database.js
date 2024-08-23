const db = new Map();

export function getMessages(userid) {
    if (!db.get(userid)) {
        db.set(userid, [{
            id: crypto.randomUUID(),
            subject: "Re: sandwich theory",
            content: "Then what role do croutons play in all of this?",
        }]);
    }

    return db.get(userid);
}

export function createMessage(userid, subject, content) {
    if (content === '') {
        throw new Error('Message cannot be empty');
    }

    const messages = db.get(userid);

    if (subject === 'drugs') {
        throw new Error('Don\'t talk about that');
    }

    messages.push({
        id: crypto.randomUUID(),
        subject,
        content,
    });
}

export function deleteMessage(userid, msgid) {
    const messages = db.get(userid);
    const index = messages.findIndex((message) => message.id === msgid);

    if (index !== -1) {
        messages.splice(index, 1);
    }
}

const tdb = new Map();

// API Stuff

export function getTodos(userid) {
    if (!tdb.has(userid)) {
        createTodo({ userid, description: 'Learn about API routes' });
    }

    return Array.from(tdb.get(userid).values());
}

export function createTodo({ userid, description }) {
    if (!tdb.has(userid)) {
        tdb.set(userid, new Map());
    }

    const todos = tdb.get(userid);

    const id = crypto.randomUUID();

    todos.set(id, {
        id,
        description,
        done: false
    });

    return {
        id
    };
}

export function toggleTodo({ userid, id, done }) {
    const todos = tdb.get(userid);
    todos.get(id).done = done;
}

export function deleteTodo({ userid, id }) {
    const todos = tdb.get(userid);
    todos.delete(id);
}
