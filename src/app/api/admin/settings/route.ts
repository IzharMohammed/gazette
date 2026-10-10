import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { setSetting, type JsonObject } from "@/lib/db";
const schema=z.object({key:z.enum(["integrations","business"]),value:z.record(z.string(),z.unknown())});
export async function POST(request:Request){if(!await getAdminSession())return NextResponse.json({error:"Unauthorized"},{status:401});const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Invalid settings"},{status:400});await setSetting(parsed.data.key,parsed.data.value as JsonObject);return NextResponse.json({ok:true});}
