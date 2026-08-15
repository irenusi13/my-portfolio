import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
          About
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          I care about what happens after the automation is built.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-paper-dim">
          I design systems around the people and processes using them. That
          means thinking about validation, edge cases, human review, failure
          handling, and whether the workflow will still make sense six months
          after it goes live.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-amber transition-opacity hover:opacity-80"
        >
          Read the full story →
        </Link>
      </div>
    </section>
  );
}
