import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminSession } from "@/lib/auth";
import { setLeadStatus } from "@/lib/db";
const schema=z.object({id:z.string().uuid(),status:z.enum(["new","contacted","documents_pending","in_progress","completed","closed"])});
export async function PATCH(request:Request){if(!await getAdminSession())return NextResponse.json({error:"Unauthorized"},{status:401});const parsed=schema.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:"Invalid update"},{status:400});await setLeadStatus(parsed.data.id,parsed.data.status);return NextResponse.json({ok:true});}
