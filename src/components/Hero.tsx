"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PulseLine from "./PulseLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.2em] text-teal uppercase"
        >
          Registered Nurse · AI &amp; Automation Specialist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl md:text-6xl"
        >
          I spent years inside real workflows{" "}
          <span className="text-teal">before I started automating them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-paper-dim sm:text-lg"
        >
          I design and build AI-powered automation systems — support agents,
          lead pipelines, operational workflows — for teams buried in
          repetitive work. My clinical background means I don&apos;t just
          connect APIs; I understand the process on the other end of them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-paper-dim"
          >
            Start a project
          </Link>
        </motion.div>
      </div>

      {/* signature pulse-to-workflow line, anchored along the lower half of the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] w-full opacity-70 md:h-[240px]">
        <PulseLine />
      </div>
    </section>
  );
}
