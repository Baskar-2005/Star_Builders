# Star Builders Puducherry

A luxury construction company website with an AI-powered cost estimator, built with React + Vite (frontend) and Express (backend).

## Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide React, Motion
- **Backend**: Express (TypeScript, tsx), served on port 5000
- **AI**: Google Gemini (`@google/genai`) — optional; falls back to static estimates if `GEMINI_API_KEY` is not set

## How to run
```bash
npm run dev
```
Starts the Express + Vite dev server on port 5000.

## Key features
- Intro animation splash screen
- Consultation / contact form (`POST /api/contact`)
- AI cost estimator (`POST /api/gemini/estimate`) — works in demo mode without a Gemini API key

## Environment variables
- `GEMINI_API_KEY` — optional; enables live Gemini AI cost estimates. Without it, the estimator uses realistic hardcoded fallback values.
- `PORT` — defaults to `5000`

## User preferences
