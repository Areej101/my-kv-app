import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {
    try {
        const data = await request.json();

        console.log('Setting value in KV store:', data);
        kv.lpush('users', data);
        console.log('Value set successfully');

        return NextResponse.json({ message: 'User Added Successfully!' });
    } catch (error) {
        console.error('Error storing user:', error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}