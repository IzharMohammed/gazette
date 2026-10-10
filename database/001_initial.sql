create extension if not exists pgcrypto;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  phone varchar(20) not null,
  email varchar(200),
  city varchar(100),
  service varchar(120) not null,
  message text,
  status varchar(30) not null default 'new' check (status in ('new', 'contacted', 'qualified', 'completed', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_status_idx on leads (status);

create table if not exists media (
  id uuid primary key default gen_random_uuid(),
  object_key text not null unique,
  original_name varchar(180) not null,
  content_type varchar(100) not null,
  visibility varchar(20) not null default 'private' check (visibility in ('public', 'private')),
  lead_id uuid references leads(id) on delete set null,
  created_at timestamptz not null default now()
);
