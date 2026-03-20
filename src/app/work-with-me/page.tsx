import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Adam Scott Thomas — Consulting, Architecture & Build",
  description:
    "Work with Adam Scott Thomas on forensic systems, governed AI, product architecture, software delivery, and technical strategy.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "work with me",
    "consulting",
    "software consulting",
    "product architecture",
    "technical strategy",
    "hire software engineer",
  ],
  alternates: { canonical: "https://adamscottthomas.com/work-with-me" },
  openGraph: {
    title: "Work With Adam Scott Thomas — Consulting, Architecture & Build",
    description:
      "Work with Adam Scott Thomas on forensic systems, governed AI, product architecture, software delivery, and technical strategy.",
    url: "https://adamscottthomas.com/work-with-me",
  },
};

const engagements = [
  {
    title: "Product Architecture",
    description:
      "Defining system boundaries, data flows, and integration surfaces for products that need to hold up under real-world pressure. From early-stage architecture through production hardening.",
  },
  {
    title: "Technical Strategy",
    description:
      "Helping founders and leadership teams make decisions about stack, infrastructure, build vs. buy, and sequencing. Focused on what actually matters for your stage and constraints.",
  },
  {
    title: "Prototyping & Build",
    description:
      "Taking an idea from concept to working software. Rapid prototypes, functional demos, MVPs, and proof-of-concept systems built to learn fast and ship with confidence.",
  },
  {
    title: "Specialized Systems Work",
    description:
      "Forensic infrastructure, governed AI pipelines, evidence systems, security tooling, and runtime environments. Deep technical work in domains where correctness and auditability matter.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://adamscottthomas.com/work-with-me/#service",
      name: "Adam Scott Thomas — Consulting & Build",
      description:
        "Software consulting, product architecture, technical strategy, and specialized systems work by Adam Scott Thomas.",
      url: "https://adamscottthomas.com/work-with-me",
      provider: { "@id": "https://adamscottthomas.com/#person" },
      areaServed: "Worldwide",
      serviceType: [
        "Software Consulting",
        "Product Architecture",
        "Technical Strategy",
        "Prototyping",
        "Forensic Infrastructure",
        "Governed AI Systems",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://adamscottthomas.com/work-with-me/#breadcrumb",
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
          name: "Work With Me",
          item: "https://adamscottthomas.com/work-with-me",
        },
      ],
    },
  ],
};

export default function WorkWithMe() {
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
            Work With Me
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            I work with founders, teams, and organizations on technically complex
            projects that need clear architecture, working software, and
            considered execution.
          </p>
        </div>
      </section>

      {/* Who I Help */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold text-white">Who I Help</h2>
          <p className="mt-4 max-w-3xl text-slate-400">
            I work best with people building something real&mdash;whether
            that&rsquo;s a product, a platform, or a technical capability. My
            work spans architecture, product, implementation, prototyping,
            demos, and specialized domains like security systems and AI
            infrastructure.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
            {[
              "System and product architecture",
              "Implementation and delivery",
              "Prototypes and working demos",
              "Security and forensic infrastructure",
              "AI systems with governance requirements",
              "Technical strategy and sequencing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Types of Engagements */}
      <section className="border-b border-slate-800 bg-[#0a0f1a]/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold text-white">
            Types of Engagements
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {engagements.map((engagement) => (
              <article
                key={engagement.title}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700"
              >
                <h3 className="text-lg font-semibold text-white">
                  {engagement.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {engagement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold text-white">How I Work</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-400">
            <p>
              I communicate directly, work well in ambiguity, and don&rsquo;t
              need a lot of structure to be productive. I contribute across
              architecture, implementation, product direction, framing, demos,
              and refinement&mdash;wherever the work needs attention.
            </p>
            <p>
              I&rsquo;m most effective when I have enough context to make
              decisions and enough trust to move without waiting. I treat the
              work as mine, not as a ticket queue.
            </p>
          </div>
        </div>
      </section>

      {/* Best Fit */}
      <section className="border-b border-slate-800 bg-[#0a0f1a]/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold text-white">Best Fit</h2>
          <p className="mt-4 max-w-3xl text-slate-400">
            The projects I do my best work on tend to share a few qualities:
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              "Technically complex — not just CRUD or glue code",
              "Commercially important — the outcome matters to the business",
              "Underdefined — the shape of the solution isn't fully known yet",
              "High-trust — you want a collaborator, not a vendor",
              "Difficult to simplify — the problem resists easy abstractions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            I&rsquo;m open to new engagements. If you have a project that fits,
            I&rsquo;d like to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
