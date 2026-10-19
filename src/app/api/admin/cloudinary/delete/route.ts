import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { cloudinaryConfig, cloudinarySignature } from "@/lib/cloudinary";

const schema = z.object({ publicId: z.string().startsWith("gazette/blog/").max(500) });

export async function POST(request: Request) {
  if (!await getAdminSession()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid image" }, { status: 400 });
  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = cloudinarySignature({ invalidate: "true", public_id: parsed.data.publicId, timestamp }, apiSecret);
    const body = new URLSearchParams({ public_id: parsed.data.publicId, timestamp: String(timestamp), invalidate: "true", api_key: apiKey, signature });
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, { method: "POST", body });
    const result = await response.json();
    if (!response.ok || !["ok", "not found"].includes(result.result)) throw new Error(result.error?.message || "Delete failed");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Cloudinary deletion failed", error);
    return NextResponse.json({ error: "The image could not be removed from Cloudinary." }, { status: 502 });
  }
}
