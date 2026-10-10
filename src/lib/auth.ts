import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "gazette_admin_session";
const encoder = new TextEncoder();

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error("AUTH_SECRET must contain at least 32 characters");
  return encoder.encode(value);
}

export async function createAdminToken(email: string) {
  return new SignJWT({ role: "admin", email }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").setIssuer("gazette-admin").setAudience("gazette-admin").sign(secret());
}

export async function createUploadToken(leadId: string) {
  return new SignJWT({ purpose: "lead-upload", leadId }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("30m").setIssuer("gazette-upload").setAudience("gazette-upload").sign(secret());
}

export async function verifyUploadToken(token?: string) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret(), { issuer: "gazette-upload", audience: "gazette-upload" });
    return payload.purpose === "lead-upload" && typeof payload.leadId === "string" ? payload : null;
  } catch { return null; }
}

export async function verifyAdminToken(token?: string) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret(), { issuer: "gazette-admin", audience: "gazette-admin" });
    return payload.role === "admin" ? payload : null;
  } catch { return null; }
}

export async function getAdminSession() {
  return verifyAdminToken((await cookies()).get(SESSION_COOKIE)?.value);
}
