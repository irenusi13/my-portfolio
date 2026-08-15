import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="border-t border-border/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">About</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Two disciplines, one way of thinking
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Nursing taught me to work inside systems where small failures have
          real consequences. Automation taught me to build systems that
          don&apos;t rely on someone catching every mistake by hand. I bring
          both to every workflow I design.
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
