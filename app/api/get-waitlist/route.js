import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(req, ev) {
    const waitListCheck = await kv.hgetall('waitListCheck');
    return NextResponse.json(waitListCheck);
}