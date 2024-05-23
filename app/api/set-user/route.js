import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request) {
    try {
        const data = await request.json();
        const newUser = kv.lpush('users', data);        
        return NextResponse.json({ 
            message: 'User Added Successfully!',
            data: data,
            newUsers: newUser
        });
    } catch (error) {
        console.error('Error storing user:', error);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}