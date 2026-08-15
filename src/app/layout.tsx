import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olorire.dev"),
  title: {
    default: "Olorire Sanusi — AI Automation Specialist",
    template: "%s — Olorire Sanusi",
  },
  description:
    "I design and build AI-powered systems for sales, support, customer operations, and repetitive business processes.",
  keywords: [
    "AI automation specialist",
    "n8n developer",
    "workflow automation",
    "AI agent developer",
    "business automation",
    "Olorire Sanusi",
  ],
  openGraph: {
    title: "Olorire Sanusi — AI Automation Specialist",
    description:
      "AI-powered systems for sales, support, customer operations, and repetitive business processes.",
    url: "https://olorire.dev",
    siteName: "Olorire Sanusi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olorire Sanusi — AI Automation Specialist",
    description:
      "AI-powered automation systems for support, sales, and operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
