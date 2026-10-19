import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { createMedia, deleteMediaByKey } from "@/lib/db";
import { r2Bucket, r2Client } from "@/lib/r2";
const schema=z.object({key:z.string().startsWith("site-images/"),filename:z.string().min(1).max(180),contentType:z.enum(["image/jpeg","image/png","image/webp"]),size:z.number().int().positive().max(10*1024*1024),altText:z.string().max(240).optional()});
export async function POST(request:Request){if(!await getAdminSession())return NextResponse.json({error:"Unauthorized"},{status:401});const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Invalid media"},{status:400});const item=await createMedia({object_key:parsed.data.key,original_name:parsed.data.filename,content_type:parsed.data.contentType,visibility:"public",size_bytes:parsed.data.size,alt_text:parsed.data.altText});return NextResponse.json({item});}
export async function DELETE(request:Request){if(!await getAdminSession())return NextResponse.json({error:"Unauthorized"},{status:401});const key=new URL(request.url).searchParams.get("key");if(!key?.startsWith("site-images/"))return NextResponse.json({error:"Invalid media key"},{status:400});await r2Client().send(new DeleteObjectCommand({Bucket:r2Bucket("public"),Key:key}));await deleteMediaByKey(key);return NextResponse.json({ok:true});}
