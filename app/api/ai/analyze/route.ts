import { NextResponse } from 'next/server';import { analyzeComplaint } from '@/lib/ai/analyze';
export async function POST(req:Request){const body=await req.json();return NextResponse.json(await analyzeComplaint({text:String(body.text||body.description||''),imageUrl:body.imageUrl}));}
