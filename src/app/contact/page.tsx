import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link2, ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about an automation project or a role.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 md:pt-48">
        <div className="container-page max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-5 text-base leading-relaxed text-paper-dim">
            Whether it's a workflow you want automated or a role you think
            I'd be a fit for — tell me a bit about it below.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:oloriresanusi@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-sans text-sm text-paper-dim transition-colors hover:border-paper-dim hover:text-paper"
            >
              <Mail size={15} />
              oloriresanusi@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/olorire-sanusi"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-sans text-sm text-paper-dim transition-colors hover:border-paper-dim hover:text-paper"
            >
              <Link2 size={15} />
              LinkedIn
            </a>
            <a
              href="https://thestackedhq.com/builders/olorire-sanusi"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-sans text-sm text-paper-dim transition-colors hover:border-paper-dim hover:text-paper"
            >
              <ExternalLink size={15} />
              Stacked profile
            </a>
          </div>

          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
