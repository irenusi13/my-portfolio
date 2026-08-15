export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  featured: boolean;
  stack: string[];
  problem: string;
  solution: string;
  workflow: string[];
  outcome: string[];
};

export const projects: CaseStudy[] = [
  {
    slug: "end-to-end-lead-workflow",
    title: "End-to-end sales lead workflow",
    category: "Sales operations",
    summary:
      "A lead pipeline that instantly acknowledges every submission, has an AI agent qualify it, upserts it in HubSpot, and catches failures instead of losing them silently.",
    featured: true,
    stack: ["n8n", "Webhook", "Groq / Llama 3.3", "HubSpot", "Gmail", "Slack", "Google Sheets"],
    problem:
      "Inbound leads sat waiting for someone to manually read, qualify, and log them — and when something in that manual process failed, there was no record of it. A lead could simply disappear.",
    solution:
      "A pipeline that responds to every submission within moments, uses an AI agent to score and summarize the lead, upserts the contact in HubSpot to avoid duplicates, and routes failures to their own alert and backup-log branch instead of letting them vanish.",
    workflow: [
      "A webhook receives the new lead and immediately responds with a 200 so the form never feels stuck",
      "A code node normalizes and validates the payload; invalid submissions are separated into their own branch",
      "An AI agent (Groq Llama 3.3, with a structured output parser) reads the lead and returns a priority, urgency level, and one-line summary",
      "The contact is upserted in HubSpot keyed on email, so a repeat submission updates the record instead of duplicating it",
      "A first-touch follow-up email sends automatically via Gmail while Slack notifies the sales team with the lead's details",
      "Any failure in the pipeline is caught by a dedicated error branch: an alert posts to a Slack channel and the failed lead is logged to a backup Google Sheet",
    ],
    outcome: [
      "No lead sits unacknowledged — confirmation and AI qualification happen within moments of submission",
      "Duplicate CRM records eliminated through upsert-on-email logic",
      "A dedicated error-handling branch means failures get an alert and a backup log instead of silently disappearing",
    ],
  },
  {
    slug: "bull-fitness-gym-subscription",
    title: "Bull Fitness gym subscription lifecycle",
    category: "Membership operations",
    summary:
      "Four connected workflows covering a gym member's full lifecycle — onboarding, expiry reminders, renewal, and automatic status updates — with zero manual date tracking.",
    featured: true,
    stack: ["n8n", "Fillout", "Airtable", "Gmail", "Telegram", "ImgBB"],
    problem:
      "Tracking who was due a subscription reminder, whose membership had expired, and who'd just renewed meant someone manually checking dates against a member list — an easy thing to fall behind on.",
    solution:
      "Four connected workflows that together handle a member's entire lifecycle: onboarding a new subscriber, sending a reminder before expiry, processing a renewal, and updating status automatically the day a subscription lapses.",
    workflow: [
      "A subscriber fills out an onboarding form; a profile picture upload is posted to a public URL, or the flow merges cleanly without one",
      "The new subscriber record is created in Airtable, a confirmation email sends after a short delay, and the gym owner is notified via Telegram",
      "A daily schedule trigger checks for subscriptions expiring in 3 days and sends a reminder email automatically",
      "A separate midnight trigger checks subscriptions expiring that day and updates the Airtable record to active or expired, notifying the owner either way",
      "A renewal webhook lets a subscriber submit renewal details, which update their existing record and notify the owner",
    ],
    outcome: [
      "Removes manual tracking of reminders, renewals, and expiry from the gym owner's day entirely",
      "Four independent lifecycle workflows stay in sync through a shared Airtable base as the single source of truth",
    ],
  },
  {
    slug: "mama-tees-kitchen",
    title: "Mama Tee's Kitchen — multi-channel request router",
    category: "Restaurant operations",
    summary:
      "A single backend that takes five different kinds of restaurant requests — orders, reservations, catering, callbacks, enquiries — and routes each to the right team automatically.",
    featured: true,
    stack: ["n8n", "Webhook", "Google Sheets", "Slack"],
    problem:
      "A restaurant taking requests through a voice assistant needed every type of request — an order, a reservation, a catering enquiry, a callback — sorted and sent to the right team without anyone manually reading and forwarding each one.",
    solution:
      "A single webhook endpoint that receives every request, extracts its intent, and routes it down one of five branches — each logging to its own sheet, alerting the right Slack channel, and confirming back to the caller that the request was handled.",
    workflow: [
      "A webhook receives the raw request from the voice agent",
      "A code node cleans the payload and extracts the intent and request type",
      "A switch node routes the request to one of five branches: orders, reservations, catering, callbacks, or enquiries",
      "Each branch logs its request to a dedicated Google Sheet tab and posts an alert to the matching Slack channel",
      "The webhook responds to confirm the request was handled successfully",
    ],
    outcome: [
      "Every incoming request, regardless of type, reaches the right team and is logged with no manual sorting",
      "Five independent branches keep each request type's data and alerts cleanly separated",
    ],
  },
  {
    slug: "date-triggered-whatsapp",
    title: "Date-triggered WhatsApp messages",
    category: "Operations automation",
    summary:
      "A scheduled workflow that reads dates from a spreadsheet and sends the right WhatsApp message automatically — no one has to remember who's due a message today.",
    featured: false,
    stack: ["n8n", "Google Sheets", "HTTP Request", "WhatsApp API"],
    problem:
      "Time-sensitive customer messages — before and after a scheduled event — were tracked manually against a spreadsheet, dependent entirely on someone remembering to check it.",
    solution:
      "A daily scheduled workflow that reads the tracking sheet, checks each row's dates against today, and sends the correct WhatsApp message automatically — marking it sent so it's never duplicated.",
    workflow: [
      "A daily 8am schedule trigger reads the tracking spreadsheet",
      "A switch node checks each row against today's date to determine if a pre- or post-event message is due",
      "The matching WhatsApp message sends via an HTTP request to the messaging API",
      "The spreadsheet is updated to mark the message as sent, preventing duplicates",
    ],
    outcome: [
      "Removed manual date-tracking from the daily routine entirely",
      "Consistent, on-time customer messaging with no staff intervention",
    ],
  },
  {
    slug: "toya-ai-study-assistant",
    title: "Toya — AI study assistant",
    category: "Independent build",
    summary:
      "A study assistant backend built to help a family member study more effectively — accepts a PDF or plain text and returns AI-generated study material.",
    featured: true,
    stack: ["n8n", "OpenAI", "Webhook", "React", "TypeScript", "Tailwind"],
    problem:
      "A family member was studying from dense material with no easy way to turn it into something interactive — just re-reading notes and hoping it stuck.",
    solution:
      "A study assistant that accepts either raw text or an uploaded PDF, extracts and prepares the content, and runs it through an AI agent that generates structured study material — returned to a custom frontend built for actually using it.",
    workflow: [
      "A webhook receives the request from the Toya frontend",
      "Input is routed by type: uploaded PDF or plain text",
      "PDF uploads are parsed and their text extracted before continuing",
      "An AI agent analyzes the prepared content and generates study material and quiz questions",
      "The response is formatted and sent back to the frontend through the webhook",
    ],
    outcome: [
      "Gave a real student a faster, more interactive way to test their own understanding",
      "Solved several non-obvious technical issues along the way — empty payloads, malformed AI output needing safe parsing, and default timeouts too short for real generation calls",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
