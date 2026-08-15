import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Automation Specialist focused on building dependable systems for sales, support, customer operations, and business workflows.",
};

const skillGroups = [
  {
    label: "AI & automation",
    skills: [
      "n8n",
      "Zapier",
      "Make",
      "AI agents",
      "Prompt engineering",
      "LLM APIs",
      "Webhooks",
      "API integrations",
    ],
  },
  {
    label: "Data",
    skills: ["Excel", "Power BI", "SQL", "Python"],
  },
  {
    label: "Platforms & tools",
    skills: [
      "Airtable",
      "Google Sheets",
      "Google Forms",
      "HubSpot",
      "Slack",
      "WhatsApp / Telegram APIs",
      "OpenAI",
      "Groq",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            About
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
            I build systems that make repetitive work easier to manage.
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-paper-dim">
            <p>
              I&apos;m an AI Automation Specialist focused on solving business
              problems with intelligent systems. I&apos;m interested in what
              happens behind the scenes: how a lead gets handled, how a
              customer receives a response, how a team knows what needs
              attention, and what happens when one part of a process fails.
            </p>
            <p>
              I design AI-powered workflows that connect the tools businesses
              already use and turn manual processes into systems that can
              capture information, make decisions, take action, and escalate
              when human input is needed.
            </p>
            <p>
              My work spans AI agents, workflow automation, API integrations,
              customer operations, lead management, and internal business
              processes. I use tools such as n8n, AI models, CRMs,
              communication platforms, databases, and custom APIs to build
              complete workflows rather than isolated automations.
            </p>
            <p>
              I care about more than getting a workflow to run once. I think
              about validation, edge cases, duplicate prevention, error
              handling, human review, and what happens when something goes
              wrong. Good automation is not just about making a process
              faster. It is about making the process dependable.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-lg font-semibold text-paper">
              Skills &amp; tools
            </h2>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-paper-dim"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
