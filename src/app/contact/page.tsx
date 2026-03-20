import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Adam Scott Thomas — Consulting & Project Inquiries",
  description:
    "Contact Adam Scott Thomas for consulting, pilot opportunities, software build work, forensic infrastructure, and governed AI projects.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "contact",
    "consulting",
    "hire",
    "forensic infrastructure",
    "governed AI",
    "software consulting",
  ],
  alternates: { canonical: "https://adamscottthomas.com/contact" },
  openGraph: {
    title: "Contact Adam Scott Thomas",
    description:
      "Contact Adam Scott Thomas for consulting, pilot opportunities, software build work, forensic infrastructure, and governed AI projects.",
    url: "https://adamscottthomas.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPoint",
      "@id": "https://adamscottthomas.com/contact/#contact",
      contactType: "business inquiries",
      email: "adam@ghostlogic.tech",
      url: "https://adamscottthomas.com/contact",
      availableLanguage: "English",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://adamscottthomas.com/contact/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://adamscottthomas.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://adamscottthomas.com/contact",
        },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-slate-800 bg-[#0a0f1a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            I&rsquo;m open to conversations about new projects, consulting
            engagements, and collaboration.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left column: copy + email */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Let&rsquo;s talk
              </h2>
              <div className="mt-6 space-y-4 text-slate-400">
                <p>
                  Whether you&rsquo;re building forensic infrastructure,
                  governed AI systems, a new product, or something that
                  doesn&rsquo;t fit neatly into a category&mdash;I&rsquo;m
                  interested in hearing about it.
                </p>
                <p>
                  I work with founders, engineering teams, and organizations on
                  product architecture, technical strategy, prototyping, and
                  specialized systems work. If you have a project that needs
                  clear thinking and real execution, reach out.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </h3>
                <a
                  href="mailto:adam@ghostlogic.tech"
                  className="mt-3 inline-flex items-center rounded-lg border border-primary-500/30 bg-primary-500/10 px-6 py-3 text-base font-semibold text-primary-400 transition-colors hover:border-primary-500/50 hover:bg-primary-500/20"
                >
                  adam@ghostlogic.tech
                </a>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                For project inquiries, include a brief description of what
                you&rsquo;re building and what kind of help you&rsquo;re looking
                for. I&rsquo;ll respond within a few business days.
              </p>
            </div>

            {/* Right column: contact form */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Send a message
              </h2>
              <form className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 block w-full resize-y rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
