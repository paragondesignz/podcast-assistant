# PodFlow 🎙️

PodFlow is a Micro SaaS for podcasters that turns podcast audio into a ready-to-publish content pack: show notes, chapters, titles, and social clip suggestions.

## Features
- **Show Notes Generator:** Summarize the episode into SEO-friendly notes.
- **Chapter Builder:** Extract timestamps and topics.
- **Social Clip Ideas:** Suggest short-form clip hooks + captions.
- **Brand Kit:** Optional templates for thumbnails and quote cards.

## Tech Stack
- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel-ready

## Getting Started
1. Clone the repo.
2. Run `npm install`.
3. Add your AI provider key (OpenAI/Gemini) to `.env.local`.
4. Run `npm run dev`.

## Roadmap
- Audio upload + transcription (Whisper/Deepgram)
- Automatic clip detection
- Exports to Notion, Google Docs, and YouTube descriptions
