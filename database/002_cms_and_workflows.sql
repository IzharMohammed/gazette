alter table leads add column if not exists tracking_code varchar(12);
update leads set tracking_code = upper(substr(replace(id::text, '-', ''), 1, 10)) where tracking_code is null;
alter table leads alter column tracking_code set not null;
alter table leads alter column tracking_code set default upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 10));
create unique index if not exists leads_tracking_code_idx on leads (tracking_code);

update leads set status = 'in_progress' where status = 'qualified';
alter table leads drop constraint if exists leads_status_check;
alter table leads add constraint leads_status_check check (status in ('new', 'contacted', 'documents_pending', 'in_progress', 'completed', 'closed'));

alter table media add column if not exists alt_text varchar(240);
alter table media add column if not exists size_bytes bigint;
alter table media add column if not exists upload_status varchar(20) not null default 'ready';

create table if not exists cms_entries (
  id uuid primary key default gen_random_uuid(),
  content_type varchar(30) not null check (content_type in ('page', 'service', 'faq', 'testimonial', 'blog', 'banner')),
  title varchar(200) not null,
  slug varchar(220),
  excerpt text,
  body text,
  data jsonb not null default '{}'::jsonb,
  image_key text,
  seo_title varchar(200),
  meta_description varchar(320),
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists cms_entries_type_slug_idx on cms_entries (content_type, slug) where slug is not null;
create index if not exists cms_entries_public_idx on cms_entries (content_type, published, sort_order, created_at desc);

create table if not exists site_settings (
  key varchar(100) primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists redirects (
  id uuid primary key default gen_random_uuid(),
  source_path varchar(500) not null unique,
  destination_path varchar(1000) not null,
  permanent boolean not null default true,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  phone varchar(20) not null,
  email varchar(200),
  service varchar(120),
  preferred_date date not null,
  preferred_time varchar(30) not null,
  contact_method varchar(20) not null default 'phone' check (contact_method in ('phone', 'whatsapp', 'email')),
  notes text,
  status varchar(30) not null default 'requested' check (status in ('requested', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists appointments_date_idx on appointments (preferred_date, preferred_time);
