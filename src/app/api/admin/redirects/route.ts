import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { deleteRedirect, saveRedirect } from "@/lib/db";
const schema=z.object({id:z.string().uuid().optional(),source_path:z.string().startsWith("/").max(500),destination_path:z.string().min(1).max(1000),permanent:z.boolean().default(true),active:z.boolean().default(true)});
async function auth(){return Boolean(await getAdminSession());}
export async function POST(request:Request){if(!await auth())return NextResponse.json({error:"Unauthorized"},{status:401});const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Invalid redirect"},{status:400});return NextResponse.json({item:await saveRedirect(parsed.data)});}
export async function DELETE(request:Request){if(!await auth())return NextResponse.json({error:"Unauthorized"},{status:401});const id=new URL(request.url).searchParams.get("id");if(!id)return NextResponse.json({error:"Missing id"},{status:400});await deleteRedirect(id);return NextResponse.json({ok:true});}
