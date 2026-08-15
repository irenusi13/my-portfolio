# Olorire Sanusi — Portfolio

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Structure

- `src/app/` — pages (Home, Projects, Projects/[slug], About, Services, Contact)
- `src/components/` — Nav, Hero, PulseLine (signature animation), ProjectCard, sections, Footer
- `src/lib/projects.ts` — all case study content lives here as structured data. Add a new project by adding a new object to the array — no need to touch any page code.

## Run it locally

You'll need Node.js 18.18+ installed.

1. Open a terminal in this folder.
2. Install dependencies:
   npm install
3. Start the dev server:
   npm run dev
4. Open http://localhost:3000 in your browser.

## Deploy to Vercel

1. Push this project to a new GitHub repository (see steps below).
2. Go to https://vercel.com and sign in with GitHub.
3. Click "Add New Project," select your repository, and click Deploy.
   Vercel auto-detects Next.js — no configuration needed.
4. You'll get a live .vercel.app URL immediately. Attach a custom domain later under Project Settings -> Domains.

## Push to GitHub

cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

## Adding a new project

Open src/lib/projects.ts and add a new object to the projects array following the existing shape (problem, solution, workflow steps, outcome, stack). It automatically appears on /projects and gets its own case study page at /projects/your-slug. Set featured: true to also show it on the homepage.

## Before going live

- Update the placeholder email hello@olorire.dev in src/app/contact/page.tsx and src/components/ContactForm.tsx to your real email.
- Update metadataBase in src/app/layout.tsx to your real domain once you have one.
- The contact form currently opens the visitor's email client via a mailto: link. If you want submissions to land straight in your inbox without that step, a form service like Formspree or Resend, or a small Vercel API route, can replace it later.
