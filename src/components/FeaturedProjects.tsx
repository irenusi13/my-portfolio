import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Selected work
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
              Systems I&apos;ve built to solve real operational problems
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm text-paper-dim transition-colors hover:text-paper"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
