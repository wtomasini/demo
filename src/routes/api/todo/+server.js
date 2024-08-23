import {json} from '@sveltejs/kit';
import * as tdb from '$lib/server/database.js';

export async function POST({request, cookies}) {
    const {description} = await request.json;

    const userid = cookies.get('userid');
    const {id} = await tdb.createTodo({userid, description});

    return json({id}, {status: 201})
}

export async function PUT({params, request, cookies}){
    const {done} = await request.json;
    const userid = cookies.get('userid');

    await tdb.toggleTodo({userid, id: params.id, done});
    return new Response(null, {status: 204});
}

export async function DELETE({params, cookies}) {
    const userid = cookies.get('userid');

    await tdb.deleteTodo({userid, id: params.id});
    return new Response(null, {status: 204});
}