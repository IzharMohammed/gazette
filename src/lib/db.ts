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
  tracking_code: string;
  created_at: string;
};

export type ContentType = "page" | "service" | "faq" | "testimonial" | "blog" | "banner";
export type JsonObject = { [key: string]: postgres.JSONValue | undefined };
export type CmsEntry = {
  id: string; content_type: ContentType; title: string; slug: string | null; excerpt: string | null;
  body: string | null; data: JsonObject; image_key: string | null; seo_title: string | null;
  meta_description: string | null; published: boolean; sort_order: number; created_at: string; updated_at: string;
};
export type Appointment = {
  id: string; name: string; phone: string; email: string | null; service: string | null;
  preferred_date: string; preferred_time: string; contact_method: string; notes: string | null;
  status: string; created_at: string;
};
export type RedirectRule = { id: string; source_path: string; destination_path: string; permanent: boolean; active: boolean; created_at: string };
export type MediaItem = { id: string; object_key: string; original_name: string; content_type: string; visibility: string; lead_id: string | null; alt_text: string | null; size_bytes: number | null; created_at: string };

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

export async function createLead(input: Omit<Lead, "id" | "status" | "tracking_code" | "created_at">) {
  const sql = database();
  const rows = await sql<{ id: string; tracking_code: string }[]>`
    insert into leads (name, phone, email, city, service, message)
    values (${input.name}, ${input.phone}, ${input.email}, ${input.city}, ${input.service}, ${input.message})
    returning id, tracking_code
  `;
  return rows[0];
}

export async function listLeads() {
  const sql = database();
  return await sql<Lead[]>`select id, name, phone, email, city, service, message, status, tracking_code, created_at from leads order by created_at desc limit 500`;
}

export async function setLeadStatus(id: string, status: string) {
  const sql = database();
  await sql`update leads set status = ${status}, updated_at = now() where id = ${id}::uuid`;
}

export async function findApplication(trackingCode: string, phoneLast4: string) {
  const sql = database();
  const rows = await sql<Pick<Lead, "tracking_code" | "service" | "status" | "created_at">[]>`
    select tracking_code, service, status, created_at from leads
    where tracking_code = ${trackingCode.toUpperCase()} and right(regexp_replace(phone, '\\D', '', 'g'), 4) = ${phoneLast4}
    limit 1
  `;
  return rows[0] || null;
}

export async function listCmsEntries(contentType?: ContentType, publishedOnly = false):Promise<CmsEntry[]> {
  const sql = database();
  if (contentType && publishedOnly) return [...await sql<CmsEntry[]>`select * from cms_entries where content_type = ${contentType} and published = true order by sort_order, created_at desc`];
  if (contentType) return [...await sql<CmsEntry[]>`select * from cms_entries where content_type = ${contentType} order by sort_order, created_at desc`];
  return [...await sql<CmsEntry[]>`select * from cms_entries order by content_type, sort_order, created_at desc`];
}

export async function getCmsEntry(contentType: ContentType, slug: string) {
  const sql = database();
  const rows = await sql<CmsEntry[]>`select * from cms_entries where content_type = ${contentType} and slug = ${slug} and published = true limit 1`;
  return rows[0] || null;
}

export async function saveCmsEntry(input: Omit<CmsEntry, "id" | "created_at" | "updated_at"> & { id?: string }) {
  const sql = database();
  const slug = input.slug || null;
  if (input.id) {
    const rows = await sql<CmsEntry[]>`update cms_entries set content_type=${input.content_type}, title=${input.title}, slug=${slug}, excerpt=${input.excerpt}, body=${input.body}, data=${sql.json(input.data)}, image_key=${input.image_key}, seo_title=${input.seo_title}, meta_description=${input.meta_description}, published=${input.published}, sort_order=${input.sort_order}, updated_at=now() where id=${input.id}::uuid returning *`;
    return rows[0];
  }
  const rows = await sql<CmsEntry[]>`insert into cms_entries (content_type,title,slug,excerpt,body,data,image_key,seo_title,meta_description,published,sort_order) values (${input.content_type},${input.title},${slug},${input.excerpt},${input.body},${sql.json(input.data)},${input.image_key},${input.seo_title},${input.meta_description},${input.published},${input.sort_order}) returning *`;
  return rows[0];
}

export async function deleteCmsEntry(id: string) { const sql = database(); await sql`delete from cms_entries where id=${id}::uuid`; }

export async function listAppointments() { const sql = database(); return sql<Appointment[]>`select * from appointments order by preferred_date desc, preferred_time desc limit 500`; }
export async function createAppointment(input: Omit<Appointment, "id" | "status" | "created_at">) {
  const sql = database();
  const rows = await sql<Appointment[]>`insert into appointments (name,phone,email,service,preferred_date,preferred_time,contact_method,notes) values (${input.name},${input.phone},${input.email},${input.service},${input.preferred_date},${input.preferred_time},${input.contact_method},${input.notes}) returning *`;
  return rows[0];
}
export async function setAppointmentStatus(id: string, status: string) { const sql = database(); await sql`update appointments set status=${status}, updated_at=now() where id=${id}::uuid`; }

export async function listRedirects(activeOnly = false):Promise<RedirectRule[]> { const sql=database(); return activeOnly ? [...await sql<RedirectRule[]>`select * from redirects where active=true`] : [...await sql<RedirectRule[]>`select * from redirects order by created_at desc`]; }
export async function saveRedirect(input: Omit<RedirectRule,"id"|"created_at"> & { id?: string }) { const sql=database(); if(input.id){const rows=await sql<RedirectRule[]>`update redirects set source_path=${input.source_path},destination_path=${input.destination_path},permanent=${input.permanent},active=${input.active},updated_at=now() where id=${input.id}::uuid returning *`;return rows[0];} const rows=await sql<RedirectRule[]>`insert into redirects(source_path,destination_path,permanent,active) values(${input.source_path},${input.destination_path},${input.permanent},${input.active}) returning *`;return rows[0]; }
export async function deleteRedirect(id:string){const sql=database();await sql`delete from redirects where id=${id}::uuid`;}

export async function listMedia(){const sql=database();return sql<MediaItem[]>`select id,object_key,original_name,content_type,visibility,lead_id,alt_text,size_bytes,created_at from media order by created_at desc limit 500`;}
export async function createMedia(input:{object_key:string;original_name:string;content_type:string;visibility:"public"|"private";lead_id?:string|null;alt_text?:string|null;size_bytes?:number|null}){const sql=database();const rows=await sql<MediaItem[]>`insert into media(object_key,original_name,content_type,visibility,lead_id,alt_text,size_bytes) values(${input.object_key},${input.original_name},${input.content_type},${input.visibility},${input.lead_id||null},${input.alt_text||null},${input.size_bytes||null}) returning *`;return rows[0];}
export async function deleteMediaByKey(objectKey:string){const sql=database();await sql`delete from media where object_key=${objectKey} and visibility='public'`;}

export async function getSettings():Promise<Record<string,JsonObject>>{const sql=database();const rows=await sql<Array<{key:string;value:JsonObject}>>`select key,value from site_settings`;return Object.fromEntries(rows.map(row=>[row.key,row.value]));}
export async function setSetting(key:string,value:JsonObject){const sql=database();await sql`insert into site_settings(key,value) values(${key},${sql.json(value)}) on conflict(key) do update set value=excluded.value,updated_at=now()`;}
