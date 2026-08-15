import Image from "next/image";
import type { Automation } from "@/lib/automations";

export default function AutomationEntry({
  automation,
}: {
  automation: Automation;
}) {
  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-ink-raised">
        <Image
          src={automation.image}
          alt={`${automation.title} workflow screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>

      <h2 className="mt-7 font-display text-2xl font-semibold text-paper md:text-3xl">
        {automation.title}
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {automation.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-teal"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {automation.description.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-paper-dim">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-amber/25 bg-ink-raised p-5">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-amber">
          Business impact
        </p>
        <p className="mt-2 text-sm leading-relaxed text-paper-dim">
          {automation.impact}
        </p>
      </div>
    </div>
  );
}
