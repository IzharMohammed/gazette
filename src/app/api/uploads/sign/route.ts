import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUploadToken } from "@/lib/auth";
import { r2Bucket, r2Client } from "@/lib/r2";

const schema = z.object({ token:z.string(), filename:z.string().min(1).max(180), contentType:z.enum(["image/jpeg","image/png","image/webp","application/pdf"]), size:z.number().int().positive().max(10*1024*1024) });
export async function POST(request:Request){const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Unsupported file. Use PDF, JPG, PNG or WebP up to 10 MB."},{status:400});const session=await verifyUploadToken(parsed.data.token);if(!session)return NextResponse.json({error:"Upload session expired"},{status:401});const safe=parsed.data.filename.replace(/[^a-zA-Z0-9._-]/g,"-").toLowerCase();const key=`lead-documents/${session.leadId}/${crypto.randomUUID()}-${safe}`;const command=new PutObjectCommand({Bucket:r2Bucket("private"),Key:key,ContentType:parsed.data.contentType,ContentLength:parsed.data.size});const uploadUrl=await getSignedUrl(r2Client(),command,{expiresIn:300});return NextResponse.json({uploadUrl,key,expiresIn:300});}
