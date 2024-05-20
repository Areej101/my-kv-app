import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {
    try {
        const { key, value } = await request.json();

        console.log('Setting value in KV store:', key, value);
        await kv.set(key, value);
        console.log('Value set successfully');

        return NextResponse.json({ message: 'waitList flag updated successfully!' });
    } catch (error) {
        console.error('Error setting value in KV store:', error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}