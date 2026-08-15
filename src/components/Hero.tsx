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
          AI Automation Specialist · AI Agents · Workflow Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl md:text-6xl"
        >
          I build AI-powered systems that{" "}
          <span className="text-teal">make businesses run better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-paper-dim sm:text-lg"
        >
          I design and automate the workflows behind customer operations,
          sales, support, and everyday business processes. From AI agents to
          end-to-end automations, I turn repetitive work and disconnected
          tools into reliable systems that actually get things done.
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
            View my work
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-paper-dim"
          >
            Let&apos;s work together
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] w-full opacity-70 md:h-[240px]">
        <PulseLine />
      </div>
    </section>
  );
}
