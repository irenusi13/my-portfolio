import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
          Have a repetitive workflow that's costing your team hours every
          week?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-paper-dim md:text-base">
          Tell me what's eating up your team's time — I'll tell you honestly
          whether automation is the right fix, and what that would look like.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          Start a conversation
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
