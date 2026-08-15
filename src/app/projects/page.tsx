import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in AI agents, lead routing, healthcare workflows, and operations automation.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            Work
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            Systems I&apos;ve designed and built
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-dim">
            Each project below follows the same structure: the problem, what
            I built, how it works, the stack, and what it actually improves.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
