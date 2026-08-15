import { Bot, Route, Workflow, Cable, LineChart } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "AI automation",
    description:
      "End-to-end workflows that take repetitive business processes from manual to automated, from lead capture and follow-up to customer communication and internal operations.",
  },
  {
    icon: Route,
    title: "AI agents",
    description:
      "AI-powered agents that understand requests, retrieve information, make decisions, and trigger actions across support, enquiries, voice, and task-specific workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow and process automation",
    description:
      "Connected systems that move information between forms, CRMs, spreadsheets, email, messaging platforms, and other tools without relying on manual handoffs.",
  },
  {
    icon: Cable,
    title: "API and tool integration",
    description:
      "Reliable connections between the systems a business already uses, with the right validation, data handling, and failure paths built into the workflow.",
  },
  {
    icon: LineChart,
    title: "AI-powered business operations",
    description:
      "Process design that separates where AI adds judgment from where deterministic rules and human review make more sense.",
  },
];

export default function WhatIDo() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
          What I do
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
          Building systems around the work that needs to get done
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-ink p-7 md:p-8">
              <Icon className="text-teal" size={22} strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
