export default function HeroSignature() {
  return (
    <svg
      viewBox="0 0 560 260"
      className="w-full max-w-xl"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="An ECG waveform resolving into a connected workflow diagram"
    >
      {/* baseline */}
      <line x1="10" y1="150" x2="550" y2="150" stroke="var(--color-border)" strokeWidth="1" />

      {/* ECG waveform, left half */}
      <path
        d="M10,150 L60,150 L75,150 L85,110 L95,190 L105,60 L115,150 L140,150 L155,150 L165,130 L175,150 L230,150"
        stroke="var(--color-teal)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
      />

      {/* transition connector */}
      <path
        d="M230,150 C260,150 250,90 290,90"
        stroke="var(--color-amber)"
        strokeWidth="2"
        strokeLinecap="round"
        className="ecg-path"
        style={{ animationDelay: "0.6s" }}
      />

      {/* workflow diagram, right half */}
      <g className="flow-group">
        <line x1="290" y1="90" x2="360" y2="60" stroke="var(--color-amber)" strokeWidth="1.5" />
        <line x1="290" y1="90" x2="360" y2="130" stroke="var(--color-amber)" strokeWidth="1.5" />
        <line x1="360" y1="60" x2="440" y2="60" stroke="var(--color-amber)" strokeWidth="1.5" />
        <line x1="360" y1="130" x2="440" y2="130" stroke="var(--color-amber)" strokeWidth="1.5" />
        <line x1="440" y1="60" x2="510" y2="95" stroke="var(--color-amber)" strokeWidth="1.5" />
        <line x1="440" y1="130" x2="510" y2="95" stroke="var(--color-amber)" strokeWidth="1.5" />

        <circle cx="290" cy="90" r="6" fill="var(--color-bg)" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="360" cy="60" r="5" fill="var(--color-bg)" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="360" cy="130" r="5" fill="var(--color-bg)" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="440" cy="60" r="5" fill="var(--color-bg)" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="440" cy="130" r="5" fill="var(--color-bg)" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="510" cy="95" r="7" fill="var(--color-amber)" className="pulse-node" />
      </g>

      <style>{`
        .ecg-path {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: draw 1.4s ease-out forwards;
        }
        .flow-group {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
          animation-delay: 1.1s;
        }
        .pulse-node {
          animation: pulse 2.2s ease-in-out infinite;
          animation-delay: 2s;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { r: 7; opacity: 1; }
          50% { r: 10; opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ecg-path { stroke-dashoffset: 0; animation: none; }
          .flow-group { opacity: 1; animation: none; }
          .pulse-node { animation: none; }
        }
      `}</style>
    </svg>
  );
}
