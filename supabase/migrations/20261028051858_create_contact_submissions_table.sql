/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) — name of the person submitting the form
- `email` (text, not null) — email of the person submitting the form
- `subject` (text) — optional subject line
- `message` (text, not null) — the message body
- `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `contact_submissions`.
- Grant INSERT to `anon` + `authenticated` so visitors can submit without signing in.
- Grant SELECT to `authenticated` so the portfolio owner can review submissions if signed in.
- Allow anon + authenticated INSERT (public contact form).
- No SELECT policy for anon — visitors cannot read other people's submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON contact_submissions TO authenticated;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "owner_select_contact" ON contact_submissions;
CREATE POLICY "owner_select_contact"
ON contact_submissions FOR SELECT
TO authenticated USING (true);
