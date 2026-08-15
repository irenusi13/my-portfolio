"use client";

import { motion } from "framer-motion";

const NODES = [
  { cx: 470, cy: 96 },
  { cx: 610, cy: 60 },
  { cx: 750, cy: 110 },
  { cx: 860, cy: 72 },
];

export default function PulseLine() {
  return (
    <svg
      viewBox="0 0 920 200"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* base line: heartbeat pulse morphing into workflow connectors */}
      <motion.path
        d="M0,100
           L60,100 L80,100 L95,40 L112,160 L128,20 L145,100
           L200,100 L260,100
           C 330,100 340,60 400,80
           C 430,90 445,105 470,96
           C 520,80 560,60 610,60
           C 670,60 690,110 750,110
           C 800,110 820,75 860,72
           L920,72"
        stroke="var(--color-teal)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
      />

      {/* workflow nodes fading in after the line settles */}
      {NODES.map((node, i) => (
        <g key={`${node.cx}-${node.cy}`}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="14"
            fill="var(--color-ink)"
            stroke="var(--color-teal)"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 + i * 0.18 }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="var(--color-amber)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6] }}
            transition={{
              duration: 0.6,
              delay: 2.0 + i * 0.18,
            }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="transparent"
            stroke="var(--color-amber)"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 2.6 + i * 0.4,
              ease: "easeOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}
