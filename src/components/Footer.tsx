import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate">
          © {new Date().getFullYear()} Olorire Sanusi
        </p>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/olorire-sanusi"
            target="_blank"
            className="font-sans text-sm text-paper-dim transition-colors hover:text-paper"
          >
            LinkedIn
          </Link>
          <Link
            href="https://thestackedhq.com/builders/olorire-sanusi"
            target="_blank"
            className="font-sans text-sm text-paper-dim transition-colors hover:text-paper"
          >
            Stacked
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sm text-paper-dim transition-colors hover:text-paper"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
