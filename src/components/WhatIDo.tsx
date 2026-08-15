import { Bot, Route, Stethoscope, LineChart } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "AI agents and support automation",
    description:
      "Assistants that draft, classify, and respond from a real knowledge base — with confidence thresholds that route uncertainty to a human, not a guess.",
  },
  {
    icon: Route,
    title: "Lead capture and routing systems",
    description:
      "End-to-end pipelines that qualify inbound leads the moment they arrive and route them to the right owner with context attached.",
  },
  {
    icon: Stethoscope,
    title: "Operational and healthcare workflows",
    description:
      "Appointment booking, reminders, and internal ops workflows designed with an understanding of the process on the other end — not just the API.",
  },
  {
    icon: LineChart,
    title: "Workflow audits",
    description:
      "Architecture reviews that catch what a first build misses: silent failure branches, unpopulated fields, redundant calls, missing error handling.",
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
          Four ways I remove repetitive work from a team
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
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
