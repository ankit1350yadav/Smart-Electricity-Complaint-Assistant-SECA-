import { NextResponse } from 'next/server';import { z } from 'zod';import { answerFaq } from '@/lib/ai/chatbot';
const schema=z.object({message:z.string().min(2).max(1500)});
export async function POST(req:Request){const {message}=schema.parse(await req.json());return NextResponse.json(await answerFaq(message));}
