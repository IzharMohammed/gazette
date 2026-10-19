import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { cloudinaryConfig, cloudinarySignature } from "@/lib/cloudinary";

export async function POST() {
  if (!await getAdminSession()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = "gazette/blog";
    const signature = cloudinarySignature({ folder, timestamp }, apiSecret);
    return NextResponse.json({ cloudName, apiKey, timestamp, folder, signature });
  } catch (error) {
    console.error("Cloudinary signing failed", error);
    return NextResponse.json({ error: "Cloudinary is not configured." }, { status: 503 });
  }
}
