import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

export function requireDatabaseUrl() {
  const value = process.env.DATABASE_URL;
  if (!value || !value.startsWith("postgresql://")) {
    throw new Error("DATABASE_URL is missing or invalid in .env or .env.local");
  }
  return value;
}
