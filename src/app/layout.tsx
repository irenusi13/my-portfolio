import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olorire.dev"),
  title: {
    default: "Olorire Sanusi — Registered Nurse & AI Automation Specialist",
    template: "%s — Olorire Sanusi",
  },
  description:
    "I design and build AI-powered automation systems for support, sales, and operations — grounded in years of hands-on experience inside real-world workflows.",
  keywords: [
    "AI automation specialist",
    "n8n developer",
    "workflow automation",
    "AI agent developer",
    "healthcare automation",
    "Olorire Sanusi",
  ],
  openGraph: {
    title: "Olorire Sanusi — Registered Nurse & AI Automation Specialist",
    description:
      "AI-powered automation systems for support, sales, and operations — built by someone who has worked the real-world workflows first.",
    url: "https://olorire.dev",
    siteName: "Olorire Sanusi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olorire Sanusi — Registered Nurse & AI Automation Specialist",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
