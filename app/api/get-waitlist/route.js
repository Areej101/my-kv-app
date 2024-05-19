import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(req, ev) {
    const isWaitlist = await kv.get('isWaitlist');
    return NextResponse.json({ isWaitlist });
}