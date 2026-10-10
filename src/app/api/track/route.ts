import { NextResponse } from "next/server";
import { z } from "zod";
import { findApplication } from "@/lib/db";
const schema=z.object({trackingCode:z.string().trim().min(6).max(20),phoneLast4:z.string().regex(/^\d{4}$/)});
export async function POST(request:Request){const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Enter a valid tracking code and last 4 phone digits."},{status:400});const item=await findApplication(parsed.data.trackingCode,parsed.data.phoneLast4);if(!item)return NextResponse.json({error:"No matching application was found."},{status:404});return NextResponse.json({item});}
