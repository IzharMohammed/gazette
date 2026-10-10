import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifyAdminToken } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await verifyAdminToken(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) return NextResponse.redirect(new URL(`/admin/login?next=${encodeURIComponent(request.nextUrl.pathname)}`, request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/((?!login).*)"] };
