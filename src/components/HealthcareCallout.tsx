import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HealthcareCallout() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <div className="rounded-2xl border border-teal/30 bg-ink-raised p-8 md:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            The differentiator
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight text-paper md:text-3xl">
            Most automation builders learn a workflow from a client brief.
            I&apos;ve worked inside one.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-paper-dim md:text-base">
            As a Registered Nurse, I&apos;ve lived the operational reality of
            patient intake, scheduling, and coordination — where a missed
            reminder or a manual handoff isn&apos;t just inefficient, it has
            real consequences. That's the lens I bring to every system I
            build, healthcare or not: I design for the person actually doing
            the work, not just the API on the other end.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm text-teal transition-colors hover:text-paper"
          >
            More on my background
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
