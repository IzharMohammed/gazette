import { readFile } from "node:fs/promises";
import postgres from "postgres";
import { requireDatabaseUrl } from "./load-project-env.mjs";

try {
  const sql = postgres(requireDatabaseUrl(), { max: 1, connect_timeout: 10, prepare: false, ssl: "require" });
  const migration = await readFile(new URL("../database/001_initial.sql", import.meta.url), "utf8");
  const statements = migration
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await sql.unsafe(statement);
  }

  const rows = await sql`
    select table_name
    from information_schema.tables
    where table_schema = 'public' and table_name in ('leads', 'media')
    order by table_name
  `;
  console.log(`Migration complete. Tables ready: ${rows.map((row) => row.table_name).join(", ")}`);
  await sql.end();
} catch (error) {
  console.error("Migration failed:", error instanceof Error ? error.message : error);
  process.exit(1);
}
