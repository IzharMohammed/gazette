import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminToken, SESSION_COOKIE } from "@/lib/auth";

const schema = z.object({ email: z.string().email(), password: z.string().min(8).max(200) });

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const expectedEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const hash = process.env.ADMIN_PASSWORD_HASH;
  const valid = Boolean(expectedEmail && hash && parsed.data.email.toLowerCase() === expectedEmail && await compare(parsed.data.password, hash));
  if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, await createAdminToken(expectedEmail!), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 60 * 60 * 8 });
  return response;
}
