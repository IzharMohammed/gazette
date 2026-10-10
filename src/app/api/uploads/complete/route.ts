import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUploadToken } from "@/lib/auth";
import { createMedia } from "@/lib/db";

const schema=z.object({token:z.string(),key:z.string().startsWith("lead-documents/"),filename:z.string().min(1).max(180),contentType:z.string().max(100),size:z.number().int().positive().max(10*1024*1024)});
export async function POST(request:Request){const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Invalid upload"},{status:400});const session=await verifyUploadToken(parsed.data.token);if(!session||!parsed.data.key.startsWith(`lead-documents/${session.leadId}/`))return NextResponse.json({error:"Unauthorized"},{status:401});const media=await createMedia({object_key:parsed.data.key,original_name:parsed.data.filename,content_type:parsed.data.contentType,visibility:"private",lead_id:session.leadId as string,size_bytes:parsed.data.size});return NextResponse.json({ok:true,id:media.id});}
