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
    slug: "toya-ai-study-assistant",
    title: "Toya AI Study Assistant",
    category: "AI product",
    summary:
      "An AI learning platform that turns notes and documents into concise summaries, flashcards, and quizzes through a structured content-generation workflow.",
    featured: true,
    stack: ["OpenAI", "n8n", "React", "TypeScript", "Tailwind CSS"],
    problem:
      "Students often spend significant time preparing study materials before they can begin actively testing what they know.",
    solution:
      "Toya turns uploaded study material into structured learning content, combining a custom frontend with an n8n and OpenAI backend designed for document processing, content generation, and reliable frontend-backend communication.",
    workflow: [
      "The Toya frontend sends study material to the backend through a webhook",
      "The workflow identifies and processes the submitted content, including document extraction for supported files",
      "The prepared material is passed to OpenAI for structured generation of summaries, flashcards, and multiple-choice questions",
      "Generated content is validated and formatted before being returned to the frontend",
      "The interface presents the material as an interactive study experience rather than a raw AI response",
    ],
    outcome: [
      "Turns static study material into multiple active-learning formats from a single input",
      "Designed to adapt across subjects, grade levels, exam goals, and different study needs",
      "Solved practical AI product challenges including structured outputs, file processing, frontend-backend synchronization, and long-running generation requests",
    ],
  },
  {
    slug: "end-to-end-lead-workflow",
    title: "End-to-End AI Sales Lead Workflow",
    category: "Sales operations",
    summary:
      "A lead operations system that captures website enquiries, qualifies them with AI, updates HubSpot, triggers follow-up, alerts sales, and catches failures before opportunities disappear.",
    featured: true,
    stack: ["n8n", "Groq / Llama 3.3", "HubSpot", "Gmail", "Slack", "Google Sheets"],
    problem:
      "Website enquiries can lose momentum when they depend on manual qualification, CRM entry, follow-up, and internal notification.",
    solution:
      "A single workflow takes a new enquiry from webhook submission to sales-ready lead. It validates the data, uses AI to assess priority and urgency, creates or updates the HubSpot record, sends the first follow-up, notifies the sales team, and logs failures instead of allowing them to disappear silently.",
    workflow: [
      "A webhook captures the website enquiry",
      "Incoming data is validated and normalized before entering the main workflow",
      "Groq Llama 3.3 assesses lead priority and urgency and returns structured qualification data",
      "HubSpot creates or updates the lead using the email address as the key",
      "Gmail sends the first follow-up while Slack gives the sales team immediate context",
      "Failures are routed to dedicated alerts and a backup Google Sheet so the team can recover from exceptions",
    ],
    outcome: [
      "Reduced the number of manual handoffs between enquiry, qualification, CRM, and sales notification",
      "Designed to prevent duplicate CRM records and silent workflow failures",
      "Recognised with Builder of the Week at STACKED HQ",
    ],
  },
  {
    slug: "bull-fitness-gym-subscription",
    title: "Bull Fitness Gym Subscription System",
    category: "Membership operations",
    summary:
      "A hands-free membership lifecycle system that automates onboarding, expiry reminders, renewal follow-up, and owner notifications from a single member record.",
    featured: true,
    stack: ["n8n", "Airtable", "Fillout", "Telegram", "ImgBB", "Gmail"],
    problem:
      "Gym membership administration can become a recurring cycle of manually recording members, checking expiry dates, sending reminders, and following up on renewals.",
    solution:
      "A connected automation system that captures a new member's details and profile image, sends a branded welcome email, monitors subscription dates, and alerts the gym owner when a member needs attention.",
    workflow: [
      "A member submits their details through a form",
      "The workflow processes the profile image and saves the member record in Airtable",
      "A branded welcome email is sent automatically after onboarding",
      "Scheduled checks identify subscriptions approaching expiry and trigger reminders",
      "The gym owner receives Telegram notifications with the member details when follow-up is required",
    ],
    outcome: [
      "Removes recurring manual tracking from member onboarding and renewal monitoring",
      "Keeps customer records, reminders, and owner notifications connected in one workflow",
      "Demonstrates practical API integration, scheduling, conditional logic, and automated communication",
    ],
  },
  {
    slug: "date-triggered-whatsapp",
    title: "Date-Triggered WhatsApp Customer Follow-Up",
    category: "Customer operations",
    summary:
      "A date-driven communication system that sends pre-trip and post-trip WhatsApp messages automatically while preventing the same customer from receiving a duplicate message.",
    featured: false,
    stack: ["n8n", "Google Sheets", "UltraMsg WhatsApp API"],
    problem:
      "Travel businesses can miss important pre-trip reminders and post-trip follow-ups when booking information lives in a spreadsheet and communication depends on someone checking dates manually.",
    solution:
      "A scheduled workflow checks the booking sheet each morning, identifies messages due that day, sends the correct WhatsApp message, and writes a SENT status back to the right row.",
    workflow: [
      "An 8am scheduled trigger reads the booking spreadsheet",
      "The workflow checks trip dates and message status before deciding whether a message is due",
      "A WhatsApp API request sends the appropriate pre-trip or post-trip message",
      "The exact spreadsheet row is updated immediately after sending to prevent duplicate delivery",
    ],
    outcome: [
      "Automates time-sensitive customer communication without daily manual checking",
      "Duplicate-prevention logic ensures a scheduled message is sent once and only once",
      "Tested against 10 sample trips with the correct customer, message, and timing",
    ],
  },
  {
    slug: "mama-tees-kitchen",
    title: "Mama Tee's Kitchen AI Voice Agent",
    category: "Voice AI",
    summary:
      "An AI voice receptionist that handles orders, reservations, catering requests, callbacks, and enquiries, then turns each conversation into a structured operational task.",
    featured: true,
    stack: ["Vapi", "n8n", "Google Sheets", "Slack"],
    problem:
      "Phone calls can create a second operational problem after they end: requests still need to be captured, sorted, logged, and delivered to the right team.",
    solution:
      "A voice agent handles the conversation and captures the request. After the call, n8n receives the structured data, routes it by request type, logs it to the appropriate Google Sheet tab, and alerts the relevant team in Slack.",
    workflow: [
      "Vapi handles the caller conversation and captures the required information",
      "The completed call data is passed to n8n",
      "The workflow identifies whether the request is an order, reservation, catering enquiry, callback, or general enquiry",
      "The request is logged to the appropriate Google Sheet location",
      "Slack notifies the relevant team so the request can be acted on immediately",
    ],
    outcome: [
      "Turns phone conversations into structured business records without manual transcription",
      "Routes different request types to the appropriate operational path",
      "Connects conversational AI to the downstream systems that actually need to act on the information",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
