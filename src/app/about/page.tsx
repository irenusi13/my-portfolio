import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Registered Nurse and AI & Automation Specialist — why I work at the intersection of clinical operations and automated systems.",
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
      "Slack",
      "WhatsApp / Telegram APIs",
      "OpenAI",
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
            Registered Nurse and AI &amp; Automation Specialist
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-paper-dim">
            <p>
              I work at the intersection of two fields that don&apos;t
              usually share a resume: clinical nursing and AI automation.
              I&apos;m a Registered Nurse, and I&apos;m also the person
              teams call when a repetitive process — one that used to take a
              person hours every week — needs to run itself.
            </p>
            <p>
              These aren&apos;t two separate chapters. They inform each
              other. Nursing gave me a close, sometimes uncomfortable view of
              how operational friction actually plays out — a missed
              reminder, a manual handoff, a form nobody follows up on. That's
              the lens I bring when I design automation: not &quot;what can
              this API do,&quot; but &quot;what does the person on the other
              end of this process actually need to happen.&quot;
            </p>
            <p>
              On the automation side, I design and build systems using n8n,
              AI agents, and LLM APIs — from AI support agents grounded in a
              real knowledge base, to lead qualification and routing
              pipelines, to healthcare workflows that handle scheduling and
              reminders without manual tracking. I hold a Bachelor of Nursing
              Science, alongside certifications in Data Analysis and AI
              Automation.
            </p>
            <p>
              I care about building systems a non-technical team can actually
              trust: AI drafts, humans decide. That principle runs through
              every workflow I build, healthcare or otherwise.
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
