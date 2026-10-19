import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifyAdminToken } from "@/lib/auth";
import { listRedirects } from "@/lib/db";

let redirectCache:{expires:number;items:Awaited<ReturnType<typeof listRedirects>>}={expires:0,items:[]};

export async function proxy(request: NextRequest) {
  if(request.nextUrl.pathname.startsWith("/admin")&&!request.nextUrl.pathname.startsWith("/admin/login")){
    const session = await verifyAdminToken(request.cookies.get(SESSION_COOKIE)?.value);
    if (!session) return NextResponse.redirect(new URL(`/admin/login?next=${encodeURIComponent(request.nextUrl.pathname)}`, request.url));
  }
  try{
    if(Date.now()>redirectCache.expires)redirectCache={items:await listRedirects(true),expires:Date.now()+300_000};
    const rule=redirectCache.items.find(item=>item.source_path===request.nextUrl.pathname);
    if(rule&&rule.destination_path!==request.nextUrl.pathname){const target=/^https?:\/\//.test(rule.destination_path)?new URL(rule.destination_path):new URL(rule.destination_path,request.url);return NextResponse.redirect(target,rule.permanent?301:307)}
  }catch(error){console.error("Redirect lookup failed",error)}
  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"] };
