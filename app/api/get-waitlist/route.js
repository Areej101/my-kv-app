import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(req, ev) {
    try {
        const waitListCheck = await kv.get('ischeck');
        console.log('Retrieved value from KV store:', waitListCheck);

        return NextResponse.json({ isWaitList: waitListCheck });
    } catch (error) {
        console.error('Error retrieving value from KV store:', error);
        return NextResponse.json({ error: 'Error retrieving data' }, { status: 500 });
    }
}