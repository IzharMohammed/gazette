import postgres from "postgres";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  city: string | null;
  service: string;
  message: string | null;
  status: string;
  created_at: string;
};

let client: ReturnType<typeof postgres> | undefined;

function database() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not configured");
  client ??= postgres(process.env.DATABASE_URL, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false,
    ssl: "require",
  });
  return client;
}

export async function createLead(input: Omit<Lead, "id" | "status" | "created_at">) {
  const sql = database();
  const rows = await sql<{ id: string }[]>`
    insert into leads (name, phone, email, city, service, message)
    values (${input.name}, ${input.phone}, ${input.email}, ${input.city}, ${input.service}, ${input.message})
    returning id
  `;
  return rows[0];
}

export async function listLeads() {
  const sql = database();
  return await sql<Lead[]>`select id, name, phone, email, city, service, message, status, created_at from leads order by created_at desc limit 250`;
}

export async function setLeadStatus(id: string, status: string) {
  const sql = database();
  await sql`update leads set status = ${status}, updated_at = now() where id = ${id}::uuid`;
}
