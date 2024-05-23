import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {
    try {
        const data = await request.json();
        kv.lpush('users', data);        
        return NextResponse.json({ 
            message: 'User Added Successfully!',
            data: data 
        });
    } catch (error) {
        console.error('Error storing user:', error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}