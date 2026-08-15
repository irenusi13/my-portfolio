import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, AI agents, workflow systems, API integrations, and AI-powered business operations.",
};

const offerings = [
  {
    title: "AI automation",
    description:
      "I design end-to-end workflows that take repetitive business processes from manual to automated, including lead capture, follow-up, customer communication, and internal operations.",
  },
  {
    title: "AI agents",
    description:
      "I build AI-powered agents that can understand requests, retrieve information, make decisions, and trigger actions across support, enquiries, voice, and task-specific workflows.",
  },
  {
    title: "Workflow & process automation",
    description:
      "I connect forms, spreadsheets, CRMs, email, messaging platforms, and other business tools so information moves automatically with fewer manual handoffs.",
  },
  {
    title: "API & tool integration",
    description:
      "I connect the systems your business already relies on, with careful attention to validation, data handling, authentication, and what should happen when an integration fails.",
  },
  {
    title: "AI-powered business operations",
    description:
      "I map the process as a whole and decide where AI adds value, where deterministic rules are safer, and where a human should remain in control.",
  },
];

const process = [
  {
    step: "Understand the process",
    detail:
      "We start with what happens today, where the time goes, where information gets lost, and what a better process should look like.",
  },
  {
    step: "Design the system",
    detail:
      "I map the triggers, data flow, decision points, human checkpoints, integrations, and failure paths before building.",
  },
  {
    step: "Build & test",
    detail:
      "The workflow is built and tested against normal inputs and edge cases, with error handling treated as part of the system rather than an afterthought.",
  },
  {
    step: "Handover",
    detail:
      "You get a working system, clear documentation, and an understanding of what to monitor as the workflow runs in production.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            Intelligent systems built around the way your business actually works
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-dim">
            I help businesses turn repetitive processes into dependable
            systems, using AI where it adds judgment and automation where
            predictable rules make more sense.
          </p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offer) => (
              <div
                key={offer.title}
                className="rounded-2xl border border-line bg-ink-raised p-7"
              >
                <Check className="text-teal" size={20} />
                <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                  {offer.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="font-display text-2xl font-semibold text-paper">
              How I work
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, i) => (
                <div key={item.step}>
                  <p className="font-mono text-xs text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold text-paper">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-2xl border border-teal/30 bg-ink-raised p-8 text-center md:p-14">
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Have a process that is taking too much manual effort?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper-dim">
              Tell me what is happening today. I&apos;ll give you a practical
              view of what can be automated and where a human should stay in
              the loop.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
