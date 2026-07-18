import { existsSync, readFileSync } from 'node:fs';
const required = ['app/page.tsx','app/api/complaints/route.ts','lib/ai/prompts.ts','supabase/schema.sql','README.md'];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing required project file: ${file}`);
}
const schema = readFileSync('supabase/schema.sql', 'utf8');
for (const table of ['users','complaints','images','notifications','engineers','status_logs','analytics']) {
  if (!schema.includes(`table public.${table}`)) throw new Error(`Schema missing ${table}`);
}
console.log('SECA project structure validated.');
