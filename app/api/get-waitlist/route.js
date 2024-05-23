import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(req, ev) {
    try {
        const value = await kv.get('users');
        return NextResponse.json({ 'users': value });
    } catch (error) {
        console.error('Error retrieving value from KV store:', error);
        return NextResponse.json({ error: 'Error retrieving data' }, { status: 500 });
    }
}