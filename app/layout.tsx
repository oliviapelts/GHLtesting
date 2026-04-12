import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamie Molnar | Therapist & Clinical Supervisor",
  description:
    "Jamie Molnar offers individual therapy, couples therapy, clinical supervision, and business consultation. Warm, evidence-based care to help you thrive.",
  openGraph: {
    title: "Jamie Molnar | Therapist & Clinical Supervisor",
    description:
      "Compassionate therapy and clinical supervision services. Begin your journey toward healing and growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
