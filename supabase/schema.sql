-- Run this file in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  level text not null check (level in ('Primary','Secondary','HSC')),
  class_name text not null,
  subject text not null,
  format text not null check (format in ('In-person','Online','Hybrid')),
  monthly_fee integer not null default 0 check (monthly_fee >= 0),
  registration_fee integer not null default 0 check (registration_fee >= 0),
  schedule text not null default '',
  description text not null default '',
  status text not null default 'open' check (status in ('open','limited','full')),
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  phone text not null,
  student_class text not null,
  course_title text,
  message text,
  status text not null default 'New' check (status in ('New','Contacted','Follow-up Required','Closed')),
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;
alter table public.inquiries enable row level security;

-- Visitors can read published course listings only.
create policy "Public can read published courses"
on public.courses for select to anon, authenticated
using (published = true);

-- Signed-in staff can manage all course rows.
create policy "Staff can manage courses"
on public.courses for all to authenticated
using (true) with check (true);

-- Signed-in staff can view and update inquiries. Public inserts go through the
-- server API route using the service role key, which must never be exposed to browsers.
create policy "Staff can read inquiries"
on public.inquiries for select to authenticated using (true);
create policy "Staff can update inquiries"
on public.inquiries for update to authenticated using (true) with check (true);

-- Optional starter records. Replace all sample values before launch.
insert into public.courses
(title,slug,level,class_name,subject,format,monthly_fee,registration_fee,schedule,description,status,published)
values
('Primary Learning Programme','primary-learning','Primary','Class 3–5','All subjects','In-person',2500,500,'Sat–Thu · Afternoon batches','A caring, structured foundation in core school subjects, with regular practice and individual guidance.','open',true),
('Junior School Academic Care','junior-academic-care','Secondary','Class 6–8','Math & Science','In-person',3000,500,'Sun, Tue & Thu · 4:00 PM','Build strong concepts in mathematics and science through guided lessons, practice and feedback.','limited',true),
('SSC Science Preparation','ssc-science','Secondary','Class 9–10','Physics, Chemistry & Math','Hybrid',4000,700,'Sun–Thu · Evening batches','Focused SSC preparation with topic-wise lessons, exam practice and progress reviews.','open',true),
('HSC Science Coaching','hsc-science','HSC','HSC 1st & 2nd Year','Physics, Chemistry & Biology','In-person',4500,700,'Sun, Tue & Thu · 6:00 PM','Concept-led HSC support designed to make challenging topics easier to understand.','limited',true)
on conflict (slug) do nothing;

-- IMPORTANT SECURITY NOTE:
-- Create staff accounts yourself in Supabase Authentication > Users.
-- Do not enable public sign-up for this small staff-only dashboard.
-- For a real multi-staff system, add a staff allow-list/role table and check
-- that role in policies instead of allowing every authenticated account.
