import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        messages: db.getMessages(id)
    };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        try {
            db.createMessage(cookies.get('userid'), data.get('subject'), data.get('content'));
        } catch (error) {
            return fail(422, {
                description: data.get('subject'),
                error: error.message
            });
        }
    },

    delete: async ({cookies, request}) => {
        const data = await request.formData();
        db.deleteMessage(cookies.get('userid'), data.get('id'));
    }
};
