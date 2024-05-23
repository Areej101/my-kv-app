import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(req, ev) {
    const key = req.query.get('key');
    try {
        const value = await kv.get(key);
        return NextResponse.json({ key: value });
    } catch (error) {
        console.error('Error retrieving value from KV store:', error);
        return NextResponse.json({ error: 'Error retrieving data' }, { status: 500 });
    }
}