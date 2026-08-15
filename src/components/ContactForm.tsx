"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Fill in your name, email, and a short message first.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:oloriresanusi@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-xs uppercase tracking-[0.1em] text-slate"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-lg border border-line bg-ink-raised px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-slate focus:border-teal"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-mono text-xs uppercase tracking-[0.1em] text-slate"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg border border-line bg-ink-raised px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-slate focus:border-teal"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-[0.1em] text-slate"
        >
          What are you looking to automate?
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell me about the process, the team, and what's not working today."
          className="mt-2 w-full resize-none rounded-lg border border-line bg-ink-raised px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-slate focus:border-teal"
        />
      </div>

      {error && <p className="text-sm text-amber">{error}</p>}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
      >
        Send message
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
