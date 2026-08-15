import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/projects";

export default function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-line bg-ink-raised p-6 transition-colors hover:border-teal/50 md:p-8"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-teal">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-paper md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-slate"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="ml-auto inline-flex items-center gap-1 font-sans text-sm text-teal opacity-0 transition-opacity group-hover:opacity-100">
          Read case study
          <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
