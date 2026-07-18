import { NextResponse } from 'next/server';import { statusSchema } from '@/lib/validators/complaint';
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){return NextResponse.json({id:(await params).id,status:'submitted'});}
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){return NextResponse.json({id:(await params).id,...statusSchema.parse(await req.json())});}
export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}){return NextResponse.json({id:(await params).id,deleted:true});}
