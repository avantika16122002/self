/*
# Create project_inquiries table (single-tenant, no auth)

1. New Tables
- `project_inquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — submitter's full name
- `email` (text, not null) — submitter's email for replies
- `project_type` (text, not null) — category of work (Software Development, Bug Fixing, etc.)
- `budget_range` (text) — optional budget bracket
- `deadline` (text) — optional deadline description
- `message` (text, not null) — the project/task description
- `status` (text, default 'new') — tracking status for the inquiry
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `project_inquiries`.
- This is a no-auth public contact form, so anon + authenticated can INSERT.
- No SELECT/UPDATE/DELETE from the client — the studio owner views inquiries via the Supabase dashboard.
- Only INSERT is granted to anon/authenticated to prevent reading other people's submissions.
*/

CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget_range text,
  deadline text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON project_inquiries;
CREATE POLICY "anon_insert_inquiries" ON project_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
