export type Automation = {
  slug: string;
  title: string;
  stack: string[];
  image: string;
  description: string[];
  impact: string;
};

export const automations: Automation[] = [
  {
    slug: "end-to-end-lead-workflow",
    title: "End-to-End Sales Lead Workflow",
    stack: ["n8n", "Groq / Llama 3.3", "HubSpot", "Gmail", "Slack", "Google Sheets"],
    image: "/automations/end-to-end-lead-workflow.png",
    description: [
      "Built a lead pipeline that responds the instant someone submits a form, hands the lead to an AI agent for qualification, and logs it in HubSpot without creating duplicates — with a dedicated safety net so nothing fails silently.",
      "A webhook fires an instant response so the form never feels stuck, then a code node normalizes and validates the payload before an AI agent — Groq's Llama 3.3 behind a structured output parser — scores the lead's priority and urgency and writes a one-line summary. The contact is upserted in HubSpot keyed on email, a first-touch email goes out automatically, and Slack notifies the sales team. If anything breaks along the way, a separate error branch posts an alert to Slack and backs the failed lead up to a Google Sheet.",
    ],
    impact:
      "No lead sits unacknowledged, no contact gets duplicated in the CRM, and if the pipeline ever fails, the team gets an alert and a backup record instead of a lead quietly disappearing.",
  },
  {
    slug: "bull-fitness-gym-subscription",
    title: "Bull Fitness Gym Subscription",
    stack: ["n8n", "Fillout", "Airtable", "Gmail", "Telegram", "ImgBB"],
    image: "/automations/bull-fitness-gym-subscription.png",
    description: [
      "Built a four-workflow system covering a gym member's entire subscription lifecycle — onboarding, expiry reminders, renewal, and automatic status updates — for a business that was previously tracking all of it by hand.",
      "A new member's onboarding form feeds straight into Airtable, with a confirmation email and a Telegram alert to the gym owner. A daily schedule checks for subscriptions expiring in 3 days and sends a reminder automatically, while a separate midnight trigger checks what's expiring that day and flips the Airtable record to active or expired without anyone touching it. A renewal webhook lets a member submit renewal details straight into the same record.",
    ],
    impact:
      "The gym owner no longer tracks a single expiry date manually — reminders, renewals, and status changes all run themselves, and every member's full history stays in one Airtable base.",
  },
  {
    slug: "mama-tees-kitchen",
    title: "Mama Tee's Kitchen — Request Router",
    stack: ["n8n", "Webhook", "Google Sheets", "Slack"],
    image: "/automations/mama-tees-kitchen.jpeg",
    description: [
      "Built the backend routing system for a restaurant's voice assistant — handling five distinct request types (orders, reservations, catering, callbacks, general enquiries) through a single webhook, with each type logged and alerted independently.",
      "Every request lands on one webhook, gets cleaned and intent-classified by a code node, and is routed by a switch node down the matching branch. Each branch appends the request to its own Google Sheet tab, posts an alert to the right Slack channel for that team, and confirms back to the caller that it was received — all without a person reading and manually forwarding a single message.",
    ],
    impact:
      "Every request — whatever kind it is — reaches the right team and gets logged automatically, with zero manual sorting even during a busy service.",
  },
  {
    slug: "toya-ai-study-assistant",
    title: "Toya — AI Study Assistant",
    stack: ["n8n", "OpenAI", "Webhook", "React", "TypeScript"],
    image: "/automations/toya-ai-study-assistant.png",
    description: [
      "Built the automation backend behind Toya, a study assistant made for a family member who needed a faster way to turn dense study material into something interactive.",
      "A webhook takes requests from the Toya frontend and routes them by input type — plain text goes straight through, while an uploaded PDF is parsed and its text extracted first. An AI agent then analyzes the prepared content and generates structured study material and quiz questions, which get formatted and sent back through the same webhook to render in the app.",
    ],
    impact:
      "Turns a static PDF or a page of notes into ready-to-use study material and quiz questions in the time it takes to upload the file.",
  },
  {
    slug: "date-triggered-whatsapp",
    title: "Date-Triggered WhatsApp Messages",
    stack: ["n8n", "Google Sheets", "HTTP Request", "WhatsApp API"],
    image: "/automations/date-triggered-whatsapp.png",
    description: [
      "Built a scheduled workflow that reads dates straight from a spreadsheet and sends the right WhatsApp message automatically, replacing a process that depended on someone remembering to check who needed a message that day.",
      "A daily trigger reads the tracking sheet each morning, and a switch node checks every row's dates against today to decide whether a pre- or post-event message is due. The matching WhatsApp message sends via an HTTP request, and the sheet is updated immediately to mark it sent — so nobody gets the same message twice.",
    ],
    impact:
      "Replaced manual date-tracking with consistent, on-time messaging that runs every morning without anyone checking a spreadsheet.",
  },
];
