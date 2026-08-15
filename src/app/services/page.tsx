import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, lead routing systems, healthcare and operations automation, and workflow audits.",
};

const offerings = [
  {
    title: "AI support agents",
    description:
      "A support system that drafts replies grounded in your real knowledge base and escalates anything uncertain to a human — never auto-sending.",
  },
  {
    title: "Lead capture & routing",
    description:
      "Inbound leads qualified and routed to the right owner the moment they arrive, with full context attached.",
  },
  {
    title: "Operations & healthcare workflows",
    description:
      "Booking, reminders, internal handoffs, and reporting — automated with an understanding of the process, not just the API.",
  },
  {
    title: "Workflow audits",
    description:
      "A structured review of an existing automation: where it fails silently, where it's fragile, and what to fix first.",
  },
];

const process = [
  {
    step: "Discovery call",
    detail:
      "We talk through the actual repetitive process — what happens today, where the time goes, and where it breaks.",
  },
  {
    step: "Workflow design",
    detail:
      "I map the system before building anything: triggers, decision points, human checkpoints, and failure handling.",
  },
  {
    step: "Build & test",
    detail:
      "The workflow is built, tested against real edge cases, and refined — with error branches handled explicitly.",
  },
  {
    step: "Handover",
    detail:
      "You get a working system, documentation on how it runs, and a clear picture of what to monitor.",
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
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            Automation systems, designed and built end to end
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-dim">
            I work with founders and operations teams to turn a specific,
            repetitive process into a system that runs itself — with a human
            still in control of anything that matters.
          </p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
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
              How an engagement runs
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
              Not sure if your process is worth automating?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper-dim">
              Tell me what it is. I'll give you a straight answer, not a
              sales pitch.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
