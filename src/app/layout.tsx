import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-KM4V7D4NVX";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adamscottthomas.com"),
  title: {
    default: "Adam Scott Thomas — Software Engineer | Forensic Systems, Governed AI, Product Architecture",
    template: "%s | Adam Scott Thomas",
  },
  description:
    "Adam Scott Thomas builds software systems focused on forensic infrastructure, governed AI, product architecture, security, and real-world execution. Founder of GhostLogic and Maelstrom Runtime.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "Adam Thomas software engineer",
    "Adam Scott Thomas developer",
    "forensic infrastructure",
    "governed AI",
    "AI governance",
    "product architecture",
    "software engineer",
    "GhostLogic",
    "Maelstrom Runtime",
    "security software",
    "evidence platform",
    "AI runtime",
    "systems engineer",
    "software delivery",
    "technical strategy",
  ],
  authors: [{ name: "Adam Scott Thomas", url: "https://adamscottthomas.com" }],
  creator: "Adam Scott Thomas",
  publisher: "Adam Scott Thomas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adamscottthomas.com",
    siteName: "Adam Scott Thomas",
    title: "Adam Scott Thomas — Software Engineer | Forensic Systems, Governed AI, Product Architecture",
    description:
      "Adam Scott Thomas builds software systems focused on forensic infrastructure, governed AI, product architecture, and real-world execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Scott Thomas — Software Engineer",
    description:
      "Software systems focused on forensic infrastructure, governed AI, product architecture, and real-world execution.",
    creator: "@adamscottthomas",
  },
  alternates: {
    canonical: "https://adamscottthomas.com",
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://adamscottthomas.com/#website",
      url: "https://adamscottthomas.com",
      name: "Adam Scott Thomas",
      description: "Software engineer specializing in forensic infrastructure, governed AI, and product architecture.",
      publisher: { "@id": "https://adamscottthomas.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://adamscottthomas.com/#person",
      name: "Adam Scott Thomas",
      alternateName: ["Adam Thomas", "Adam S. Thomas"],
      url: "https://adamscottthomas.com",
      jobTitle: "Software Engineer & Founder",
      description:
        "Founder, builder, and systems-focused engineer working across forensic infrastructure, governed AI, product architecture, and software delivery.",
      email: "adam@ghostlogic.tech",
      sameAs: [
        "https://github.com/adam-scott-thomas",
      ],
      knowsAbout: [
        "Forensic Infrastructure",
        "Governed AI Systems",
        "Product Architecture",
        "Software Delivery",
        "Technical Strategy",
        "AI Governance",
        "Evidence Systems",
        "Security Software",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
