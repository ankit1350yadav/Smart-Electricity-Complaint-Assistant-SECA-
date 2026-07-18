# ⚡ Smart Electricity Complaint Assistant (SECA)

SECA is a production-oriented AI web application for Indian electricity consumers to register, analyze, and track power-related complaints using text, voice, image upload, geolocation, and AI-generated engineer summaries.

## Features
- Secure Supabase Auth-ready architecture with protected consumer, engineer, and admin flows.
- Complaint intake via text, browser speech recognition, image upload endpoint, and GPS-ready location fields.
- OpenAI Responses API analysis for category, severity, priority, duplicate risk, safety guidance, and engineer briefs.
- Admin analytics dashboard with KPIs, charts, map/heatmap panel, filters-ready data model, and status workflows.
- PostgreSQL schema with indexes, foreign keys, triggers, Row Level Security policies, notifications, engineers, status logs, and analytics.
- Modern Next.js 15, TypeScript, Tailwind, ShadCN-style components, Framer Motion-ready UI, dark-mode-ready tokens, and glassmorphism.

## Folder Structure
- `app/` — Next.js App Router pages and REST API routes.
- `components/` — reusable UI, layout, complaint, chart, and map components.
- `lib/` — AI orchestration, Supabase clients, validators, shared types, and utilities.
- `supabase/schema.sql` — complete PostgreSQL schema, RLS, indexes, and triggers.
- `tests/` — Vitest unit and component tests.
- `public/` — static assets.
- `scripts/` — source validation helpers.

## Environment Variables
Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_APP_URL`

## Installation
```bash
npm install
npm run dev
```

## Testing
```bash
npm run lint
npm test
npm run build
```


## PWA, Offline, Multilingual, WhatsApp, and Demo Mode
- PWA assets live in `public/manifest.json`, `public/sw.js`, and `public/icons/` for installable mobile/desktop usage.
- Offline complaint submission is handled by `lib/offline/complaint-queue.ts`, `components/pwa/offline-sync.tsx`, and the enhanced complaint form.
- Multilingual UI strings are defined for English, Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, Gujarati, and Punjabi in `lib/i18n/dictionaries.ts`.
- WhatsApp Cloud API complaint updates are exposed through `POST /api/notifications/whatsapp`.
- SECA Copilot chatbot is available globally and is backed by `POST /api/chat`.
- Hackathon demo mode is available at `/demo` with a 3-minute judge walkthrough.
- Realistic seed data for judging is available in `supabase/seed/demo.sql`.

## Database Setup
Run `supabase/schema.sql` in the Supabase SQL editor, then create a private `complaint-images` storage bucket with authenticated upload policies.

## API
- `POST /api/complaints`
- `GET /api/complaints`
- `GET /api/complaints/:id`
- `PATCH /api/complaints/:id`
- `DELETE /api/complaints/:id`
- `POST /api/ai/analyze`
- `POST /api/upload`
- `POST /api/voice`

## Architecture
The app uses Next.js App Router for pages and route handlers, Supabase for authentication/database/storage, OpenAI Responses API for structured complaint analysis, and Tailwind/ShadCN-style primitives for a responsive accessible interface. API handlers validate input, call AI analysis, and are ready to be wired to Supabase persistence.

## Deployment
### Vercel
1. Import the GitHub repository in Vercel.
2. Add all environment variables.
3. Deploy with the Next.js preset.

### Docker
```bash
docker compose up --build
```

## Screenshots
Add screenshots to `public/screenshots/` after deployment:
- Landing page
- Complaint form
- Admin dashboard
- Analytics dashboard

## Future Improvements
- Native push notifications with service workers.
- SMS integration through an Indian DLT-compliant provider.
- Live Google Maps clustering and outage heatmaps.
- Engineer mobile PWA with offline updates.
- Multilingual complaint capture for Hindi and regional languages.
