import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-paper-dim transition-colors hover:text-paper"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-teal">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-slate"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-14 space-y-12">
            <section>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-amber">
                Problem
              </h2>
              <p className="mt-3 text-base leading-relaxed text-paper-dim">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-amber">
                Solution
              </h2>
              <p className="mt-3 text-base leading-relaxed text-paper-dim">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-amber">
                How it works
              </h2>
              <ol className="mt-4 space-y-3 border-l border-line pl-6">
                {project.workflow.map((step, i) => (
                  <li key={i} className="relative text-base leading-relaxed text-paper-dim">
                    <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-teal" />
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-amber">
                Outcome
              </h2>
              <ul className="mt-4 space-y-3">
                {project.outcome.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base leading-relaxed text-paper-dim"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <Link
            href="/contact"
            className="mt-16 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Discuss a similar project
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
