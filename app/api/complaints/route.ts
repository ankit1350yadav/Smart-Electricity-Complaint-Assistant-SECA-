import { NextResponse } from 'next/server';import { complaintInputSchema } from '@/lib/validators/complaint';import { analyzeComplaint } from '@/lib/ai/analyze';
export async function GET(){return NextResponse.json({data:[],page:1,total:0});}
export async function POST(req:Request){const input=complaintInputSchema.parse(await req.json());const ai=await analyzeComplaint({text:input.description,imageUrl:input.imageUrl});return NextResponse.json({id:crypto.randomUUID(),title:ai.category,description:input.description,address:input.address,ai,status:'submitted'},{status:201});}
