
## Current Supabase stuff

-- ----------------------------------------------------------------------
-- 0. Extensions
-- ----------------------------------------------------------------------
create extension if not exists pgcrypto;
create extension if not exists citext;

-- ----------------------------------------------------------------------
-- 1. Domain Types
-- ----------------------------------------------------------------------
do $$ begin
  create type plan as enum ('free','pro');
exception when duplicate_object then null; end $$;

do $$ begin
  create type quiz_paper as enum ('paper1','paper2');
exception when duplicate_object then null; end $$;

do $$ begin
  create type quiz_mode as enum ('practice','mock');
exception when duplicate_object then null; end $$;

-- ----------------------------------------------------------------------
-- 2. Core Tables
-- ----------------------------------------------------------------------
create table if not exists public.users (
  id              bigint generated always as identity primary key,
  email           citext not null unique,
  tier            plan   not null default 'free',
  is_active       boolean not null default true,
  created_at      timestamptz not null default timezone('utc', now()),
  updated_at      timestamptz not null default timezone('utc', now()),
  last_login_at   timestamptz
);

-- in case an older run created the column earlier
alter table public.users drop column if exists display_name;

create index if not exists users_tier_idx on public.users (tier);

create table if not exists public.user_credentials (
  user_id              bigint primary key references public.users(id) on delete cascade,
  password_hash        text        not null,
  password_set_at      timestamptz not null default timezone('utc', now()),
  needs_password_reset boolean     not null default false
);

create table if not exists public.user_quiz_scores (
  id               bigint generated always as identity primary key,
  user_id          bigint not null references public.users(id) on delete cascade,
  subject          text   not null check (subject <> ''),
  paper            quiz_paper not null,
  mode             quiz_mode  not null,
  score            smallint   not null check (score >= 0),
  total_questions  smallint   not null check (total_questions > 0 and score <= total_questions),
  created_at       timestamptz not null default timezone('utc', now())
);

create index if not exists user_quiz_scores_user_idx
  on public.user_quiz_scores (user_id, created_at desc);

create index if not exists user_quiz_scores_subject_idx
  on public.user_quiz_scores (subject, paper, mode);

create table if not exists public.quiz_attempts (
  id                 bigint generated always as identity primary key,
  user_id            bigint not null references public.users(id) on delete cascade,
  subject_slug       text   not null check (subject_slug <> ''),
  paper              quiz_paper not null generated always as (
                       case
                         when subject_slug ilike '%paper2%' then 'paper2'::quiz_paper
                         else 'paper1'::quiz_paper
                       end
                     ) stored,
  mode               quiz_mode not null,
  total_questions    smallint  not null check (total_questions > 0),
  correct_answers    smallint  not null check (correct_answers >= 0 and correct_answers <= total_questions),
  score_percent      numeric(5,2) generated always as (
                       round((correct_answers::numeric / nullif(total_questions, 0)) * 100, 2)
                     ) stored,
  time_spent_seconds integer check (time_spent_seconds is null or time_spent_seconds >= 0),
  completed_at       timestamptz not null default timezone('utc', now()),
  created_at         timestamptz not null default timezone('utc', now()),
  updated_at         timestamptz not null default timezone('utc', now())
);

create index if not exists quiz_attempts_user_idx
  on public.quiz_attempts (user_id, paper, mode, completed_at desc);

create index if not exists quiz_attempts_subject_idx
  on public.quiz_attempts (subject_slug, mode);

create table if not exists public.quiz_questions (
  id                 uuid primary key default gen_random_uuid(),
  subject_slug       text   not null check (subject_slug <> ''),
  source_question_id text,
  question           text   not null,
  options            text[] not null check (array_length(options, 1) >= 2),
  correct_answer     smallint not null check (correct_answer >= 0),
  explanation        text,
  created_at         timestamptz not null default timezone('utc', now()),
  updated_at         timestamptz not null default timezone('utc', now())
);

create index if not exists quiz_questions_subject_idx on public.quiz_questions (subject_slug);

create unique index if not exists quiz_questions_subject_source_idx
  on public.quiz_questions (subject_slug, source_question_id)
  where source_question_id is not null;

create table if not exists public.quiz_questions_urdu (
  id                 uuid primary key default gen_random_uuid(),
  subject_slug       text   not null check (subject_slug <> ''),
  source_question_id text,
  question           text   not null,
  options            text[] not null check (array_length(options, 1) >= 2),
  correct_answer     smallint not null check (correct_answer >= 0),
  explanation        text,
  created_at         timestamptz not null default timezone('utc', now()),
  updated_at         timestamptz not null default timezone('utc', now())
);

create index if not exists quiz_questions_urdu_subject_idx on public.quiz_questions_urdu (subject_slug);

create unique index if not exists quiz_questions_urdu_subject_source_idx
  on public.quiz_questions_urdu (subject_slug, source_question_id)
  where source_question_id is not null;

create table if not exists public.quiz_questions_telugu (
  id                 uuid primary key default gen_random_uuid(),
  subject_slug       text   not null check (subject_slug <> ''),
  source_question_id text,
  question           text   not null,
  options            text[] not null check (array_length(options, 1) >= 2),
  correct_answer     smallint not null check (correct_answer >= 0),
  explanation        text,
  created_at         timestamptz not null default timezone('utc', now()),
  updated_at         timestamptz not null default timezone('utc', now())
);

create index if not exists quiz_questions_telugu_subject_idx on public.quiz_questions_telugu (subject_slug);

create unique index if not exists quiz_questions_telugu_subject_source_idx
  on public.quiz_questions_telugu (subject_slug, source_question_id)
  where source_question_id is not null;

-- ----------------------------------------------------------------------
-- 3. Shared Utilities & Triggers
-- ----------------------------------------------------------------------
create or replace function public.tg_set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_users_updated_at'
      and tgrelid = 'public.users'::regclass
  ) then
    create trigger trg_users_updated_at
      before update on public.users
      for each row execute function public.tg_set_updated_at();
  end if;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_quiz_attempts_updated_at'
      and tgrelid = 'public.quiz_attempts'::regclass
  ) then
    create trigger trg_quiz_attempts_updated_at
      before update on public.quiz_attempts
      for each row execute function public.tg_set_updated_at();
  end if;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_quiz_questions_updated_at'
      and tgrelid = 'public.quiz_questions'::regclass
  ) then
    create trigger trg_quiz_questions_updated_at
      before update on public.quiz_questions
      for each row execute function public.tg_set_updated_at();
  end if;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_quiz_questions_urdu_updated_at'
      and tgrelid = 'public.quiz_questions_urdu'::regclass
  ) then
    create trigger trg_quiz_questions_urdu_updated_at
      before update on public.quiz_questions_urdu
      for each row execute function public.tg_set_updated_at();
  end if;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_quiz_questions_telugu_updated_at'
      and tgrelid = 'public.quiz_questions_telugu'::regclass
  ) then
    create trigger trg_quiz_questions_telugu_updated_at
      before update on public.quiz_questions_telugu
      for each row execute function public.tg_set_updated_at();
  end if;
end;
$$;

create or replace function public.tg_restrict_user_updates()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if auth.role() <> 'service_role' then
    if new.tier <> old.tier then
      raise exception 'Only the service role may change subscription tier';
    end if;

    if new.is_active <> old.is_active then
      raise exception 'Only the service role may change active status';
    end if;
  end if;

  if new.email <> old.email then
    raise exception 'Email addresses are immutable';
  end if;

  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = 'trg_users_restrict_updates'
      and tgrelid = 'public.users'::regclass
  ) then
    create trigger trg_users_restrict_updates
      before update on public.users
      for each row execute function public.tg_restrict_user_updates();
  end if;
end;
$$;

create or replace function public.current_user_id()
returns bigint
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  raw_claims text;
  claims jsonb;
  id_text text;
begin
  raw_claims := current_setting('request.jwt.claims', true);
  if raw_claims is null or raw_claims = '' then
    return null;
  end if;

  claims := raw_claims::jsonb;
  id_text := coalesce(claims->>'user_id', claims->>'sub', '');
  if id_text = '' then
    return null;
  end if;

  return id_text::bigint;
exception
  when others then
    return null;
end;
$$;

grant execute on function public.current_user_id() to authenticated, service_role;
revoke execute on function public.current_user_id() from public, anon;

create or replace function public.get_random_questions(
  p_subject_slug text,
  p_mode quiz_mode,
  p_limit integer default 30
)
returns table (
  id uuid,
  subject_slug text,
  mode quiz_mode,
  question text,
  options text[],
  correct_answer smallint,
  explanation text
)
language sql
security definer
set search_path = public
as $$
  select
    q.id,
    q.subject_slug,
    p_mode as mode,
    q.question,
    q.options,
    q.correct_answer,
    nullif(trim(coalesce(q.explanation, '')), '') as explanation
  from public.quiz_questions q
  where q.subject_slug = p_subject_slug
  order by random()
  limit greatest(p_limit, 0);
$$;

revoke all on function public.get_random_questions(text, quiz_mode, integer) from public, anon;
grant execute on function public.get_random_questions(text, quiz_mode, integer) to anon, authenticated, service_role;

create or replace function public.get_random_questions_multilang(
  p_subject_slug text,
  p_mode quiz_mode,
  p_limit integer default 30,
  p_language text default 'en'
)
returns table (
  id uuid,
  subject_slug text,
  mode quiz_mode,
  question text,
  options text[],
  correct_answer smallint,
  explanation text,
  language text
)
language sql
security definer
set search_path = public
as $$
  with normalized_language as (
    select case
             when lower(coalesce(nullif(trim(p_language), ''), 'en')) in ('ur', 'te') then lower(coalesce(nullif(trim(p_language), ''), 'en'))
             else 'en'
           end as language_code
  ),
  combined as (
    select 'en'::text as language_code, q.id, q.subject_slug, q.question, q.options, q.correct_answer, q.explanation
      from public.quiz_questions q
     where q.subject_slug = p_subject_slug
    union all
    select 'ur'::text as language_code, q.id, q.subject_slug, q.question, q.options, q.correct_answer, q.explanation
      from public.quiz_questions_urdu q
     where q.subject_slug = p_subject_slug
    union all
    select 'te'::text as language_code, q.id, q.subject_slug, q.question, q.options, q.correct_answer, q.explanation
      from public.quiz_questions_telugu q
     where q.subject_slug = p_subject_slug
  ),
  prioritized as (
    select
      c.*,
      case
        when c.language_code = nl.language_code then 0
        when c.language_code = 'en' then 1
        else 2
      end as language_priority
    from combined c
    cross join normalized_language nl
  ),
  filtered as (
    select *
      from prioritized
     where language_priority = (
       select min(language_priority) from prioritized
     )
  )
  select
    f.id,
    f.subject_slug,
    p_mode as mode,
    f.question,
    f.options,
    f.correct_answer,
    nullif(trim(coalesce(f.explanation, '')), '') as explanation,
    f.language_code as language
  from filtered f
  order by random()
  limit greatest(p_limit, 0);
$$;

revoke all on function public.get_random_questions_multilang(text, quiz_mode, integer, text) from public, anon;
grant execute on function public.get_random_questions_multilang(text, quiz_mode, integer, text) to anon, authenticated, service_role;

-- ----------------------------------------------------------------------
-- 4. Hardened create_pro_user workflow (no display_name)
-- ----------------------------------------------------------------------
create or replace function public.create_pro_user(
  p_email    text,
  p_password text
)
returns table (
  id bigint,
  email citext,
  tier plan,
  is_active boolean,
  created_at timestamptz,
  updated_at timestamptz,
  last_login_at timestamptz
)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_email citext := lower(trim(p_email))::citext;
  v_user_id bigint;
  v_password_hash text;
begin
  if p_email is null or trim(p_email) = '' then
    raise exception 'Email is required';
  end if;

  if p_password is null or length(p_password) < 8 then
    raise exception 'Password must be at least 8 characters';
  end if;

  v_password_hash := crypt(p_password, gen_salt('bf'));

  insert into public.users as u (email, tier, is_active)
  values (v_email, 'pro', true)
  on conflict on constraint users_email_key
    do update
      set tier = 'pro',
          updated_at = timezone('utc', now())
  returning u.id into v_user_id;  -- key change

  insert into public.user_credentials (user_id, password_hash, password_set_at, needs_password_reset)
  values (v_user_id, v_password_hash, timezone('utc', now()), false)
  on conflict (user_id)
    do update
      set password_hash        = excluded.password_hash,
          password_set_at      = excluded.password_set_at,
          needs_password_reset = false;

  return query
    select u.id,
           u.email,
           u.tier,
           u.is_active,
           u.created_at,
           u.updated_at,
           u.last_login_at
      from public.users u
     where u.id = v_user_id;  -- qualified above already prevents ambiguity
end;
$$;


revoke all on function public.create_pro_user(text, text) from public, anon, authenticated;
grant execute on function public.create_pro_user(text, text) to service_role;

-- Optional helper so backend code can fetch hashes without touching tables.
create or replace function public.get_user_credentials(p_email text)
returns table (
  user_id bigint,
  email   citext,
  password_hash text,
  needs_password_reset boolean
)
language sql
security definer
set search_path = public
as $$
  select u.id,
         u.email,
         uc.password_hash,
         uc.needs_password_reset
    from public.users u
    join public.user_credentials uc on uc.user_id = u.id
   where u.email = lower(trim(p_email))::citext;
$$;

revoke all on function public.get_user_credentials(text) from public, anon, authenticated;
grant execute on function public.get_user_credentials(text) to service_role;

-- ----------------------------------------------------------------------
-- 5. Privileges
-- ----------------------------------------------------------------------
revoke all on table public.users from public, anon;
grant select, update on table public.users to authenticated;
grant all     on table public.users to service_role;

revoke all on table public.user_credentials from public, anon, authenticated;
grant select, insert, update, delete on table public.user_credentials to service_role;

revoke all on table public.user_quiz_scores from public, anon;
grant select, insert, update, delete on table public.user_quiz_scores to authenticated;
grant all     on table public.user_quiz_scores to service_role;

revoke all on table public.quiz_attempts from public, anon;
grant select, insert, update, delete on table public.quiz_attempts to authenticated;
grant all     on table public.quiz_attempts to service_role;

revoke all on table public.quiz_questions from public, anon;
grant select on table public.quiz_questions to authenticated;
grant all    on table public.quiz_questions to service_role;

revoke all on table public.quiz_questions_urdu from public, anon;
grant select on table public.quiz_questions_urdu to authenticated;
grant all    on table public.quiz_questions_urdu to service_role;

revoke all on table public.quiz_questions_telugu from public, anon;
grant select on table public.quiz_questions_telugu to authenticated;
grant all    on table public.quiz_questions_telugu to service_role;



-- ----------------------------------------------------------------------
-- 6. Row-Level Security  (clean, idempotent)
-- ----------------------------------------------------------------------
alter table public.users            enable row level security;
alter table public.user_credentials enable row level security;
alter table public.user_quiz_scores enable row level security;
alter table public.quiz_attempts    enable row level security;
alter table public.quiz_questions   enable row level security;
alter table public.quiz_questions_urdu   enable row level security;
alter table public.quiz_questions_telugu enable row level security;

-- users
drop policy if exists "service role manages users" on public.users;
create policy "service role manages users"
  on public.users
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users select self" on public.users;
create policy "users select self"
  on public.users
  for select
  to authenticated
  using (id = public.current_user_id());

drop policy if exists "users update self" on public.users;
create policy "users update self"
  on public.users
  for update
  to authenticated
  using (id = public.current_user_id())
  with check (id = public.current_user_id());

-- user_credentials
drop policy if exists "service role manages credentials" on public.user_credentials;
create policy "service role manages credentials"
  on public.user_credentials
  for all
  to service_role
  using (true)
  with check (true);

-- user_quiz_scores
drop policy if exists "service role manages quiz scores" on public.user_quiz_scores;
create policy "service role manages quiz scores"
  on public.user_quiz_scores
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users own quiz scores" on public.user_quiz_scores;
create policy "users own quiz scores"
  on public.user_quiz_scores
  for all
  to authenticated
  using (user_id = public.current_user_id())
  with check (user_id = public.current_user_id());

-- quiz_attempts
drop policy if exists "service role manages quiz attempts" on public.quiz_attempts;
create policy "service role manages quiz attempts"
  on public.quiz_attempts
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users own quiz attempts" on public.quiz_attempts;
create policy "users own quiz attempts"
  on public.quiz_attempts
  for all
  to authenticated
  using (user_id = public.current_user_id())
  with check (user_id = public.current_user_id());

drop policy if exists "service role manages quiz questions" on public.quiz_questions;
create policy "service role manages quiz questions"
  on public.quiz_questions
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users read quiz questions" on public.quiz_questions;
create policy "users read quiz questions"
  on public.quiz_questions
  for select
  to authenticated
  using (true);

drop policy if exists "service role manages quiz questions urdu" on public.quiz_questions_urdu;
create policy "service role manages quiz questions urdu"
  on public.quiz_questions_urdu
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users read quiz questions urdu" on public.quiz_questions_urdu;
create policy "users read quiz questions urdu"
  on public.quiz_questions_urdu
  for select
  to authenticated
  using (true);

drop policy if exists "service role manages quiz questions telugu" on public.quiz_questions_telugu;
create policy "service role manages quiz questions telugu"
  on public.quiz_questions_telugu
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "users read quiz questions telugu" on public.quiz_questions_telugu;
create policy "users read quiz questions telugu"
  on public.quiz_questions_telugu
  for select
  to authenticated
  using (true);

-- Optional hardening
-- alter table public.users            force row level security;
-- alter table public.user_credentials force row level security;
-- alter table public.user_quiz_scores force row level security;
-- alter table public.quiz_attempts    force row level security;


-- create pro user
select * 
from public.create_pro_user('test@example.com', 'StrongPass123');



## Phone number leads

create extension if not exists "uuid-ossp";

create table if not exists public.trial_leads (
  id uuid primary key default uuid_generate_v4(),
  phone_number text not null,
  normalized_phone text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists trial_leads_normalized_idx
  on public.trial_leads (normalized_phone);

alter table public.trial_leads enable row level security;

create policy "service-role inserts trial leads"
  on public.trial_leads for insert
  to service_role
  with check (true);







## to fix warnings

create schema if not exists extensions;
alter extension citext set schema extensions;


  - The move itself doesn’t break existing objects: columns already created as citext, defaults
  like uuid_generate_v4(), and functions compiled earlier keep working because Postgres stores their
  dependency OIDs. No runtime regressions there.
  - The failure shows up the next time you replay your setup script or create a fresh database. In
  supabase.md:7-8 the raw create extension statements will put the extension back in public, and
  supabase.md:30 (plus later casts such as supabase.md:361) will raise ERROR: type "citext" does not
  exist if the session’s search_path is still just public.
  - The same applies if you move "uuid-ossp"—recreating the table at supabase.md:499 or any function that
  references uuid_generate_v4() will fail unless extensions is on the path or you qualify it.
  - To avoid that, either change the script to create the extensions in the extensions schema (create
  schema if not exists extensions; create extension if not exists citext with schema extensions;) and/or
  add extensions to the search_path for every role you use (e.g. alter role authenticated set search_path
  = public, extensions;).
  - Once those two pieces are in place, rerunning supabase.md on a blank database will succeed,
  Supabase’s warning stays gone, and you won’t run into surprises.
    do $$
  declare
    role_name text;
  begin
    foreach role_name in array ['anon', 'authenticated', 'service_role'] loop
      begin
        execute format(
          'alter role %I set search_path = public, extensions, pg_temp',
          role_name
        );
      exception
        when undefined_object then
          null; -- role not present yet; skip
      end;
    end loop;
  end
  $$;