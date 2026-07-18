import { NextResponse } from 'next/server';import { z } from 'zod';import { sendWhatsAppComplaintUpdate } from '@/lib/notifications/whatsapp';
const schema=z.object({to:z.string().min(10),complaintId:z.string().min(3),status:z.string().min(2),summary:z.string().min(2),language:z.string().optional()});
export async function POST(req:Request){const payload=schema.parse(await req.json());return NextResponse.json(await sendWhatsAppComplaintUpdate(payload));}
