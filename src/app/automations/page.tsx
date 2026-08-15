import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AutomationEntry from "@/components/AutomationEntry";
import { automations } from "@/lib/automations";

export const metadata: Metadata = {
  title: "Automations",
  description:
    "n8n automation workflows built for real operational problems — lead routing, support agents, healthcare scheduling, and more.",
};

export default function AutomationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            What I build with AI
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            AI Automations
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-dim">
            Workflows built to run real operational problems — routing leads,
            handling support, managing appointments, and keeping customers
            informed, without a person doing it manually every time.
          </p>

          <div className="mt-16 space-y-20">
            {automations.map((automation) => (
              <AutomationEntry key={automation.slug} automation={automation} />
            ))}
          </div>

          <div className="mt-24 rounded-2xl border border-teal/30 bg-ink-raised p-8 text-center md:p-14">
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Ready to automate your business?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper-dim">
              Let's talk about what processes are eating your team's time and
              how an automation can fix it.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Let's have a talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
