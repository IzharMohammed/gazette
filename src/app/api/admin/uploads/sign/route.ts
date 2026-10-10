import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { r2Bucket, r2Client } from "@/lib/r2";

const schema = z.object({ filename: z.string().min(1).max(180), contentType: z.enum(["image/jpeg", "image/png", "image/webp", "application/pdf"]), folder: z.enum(["site-images", "lead-documents"]) });
export async function POST(request: Request) {
  if (!await getAdminSession()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Unsupported upload" }, { status: 400 });
  const safeName = parsed.data.filename.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const key = `${parsed.data.folder}/${crypto.randomUUID()}-${safeName}`;
  const command = new PutObjectCommand({ Bucket: r2Bucket(), Key: key, ContentType: parsed.data.contentType });
  const uploadUrl = await getSignedUrl(r2Client(), command, { expiresIn: 300 });
  return NextResponse.json({ uploadUrl, key, expiresIn: 300 });
}
