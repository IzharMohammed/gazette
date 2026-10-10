import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import postgres from "postgres";
import { requireDatabaseUrl } from "./load-project-env.mjs";

try {
  const sql = postgres(requireDatabaseUrl(), { max: 1, connect_timeout: 10, prepare: false, ssl: "require" });
  const databaseDirectory = new URL("../database/", import.meta.url);
  const files = (await readdir(databaseDirectory)).filter((file) => /^\d+.*\.sql$/.test(file)).sort();
  for (const file of files) {
    const migration = await readFile(new URL(file, databaseDirectory), "utf8");
    const statements = migration.split(";").map((statement) => statement.trim()).filter(Boolean);
    for (const statement of statements) await sql.unsafe(statement);
    console.log(`Applied ${file}`);
  }

  const rows = await sql`
    select table_name
    from information_schema.tables
    where table_schema = 'public' and table_name in ('leads', 'media', 'cms_entries', 'site_settings', 'redirects', 'appointments')
    order by table_name
  `;
  console.log(`Migration complete. Tables ready: ${rows.map((row) => row.table_name).join(", ")}`);
  await sql.end();
} catch (error) {
  console.error("Migration failed:", error instanceof Error ? error.message : error);
  process.exit(1);
}
