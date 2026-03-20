import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GhostLogic — Forensic Evidence Platform by Adam Scott Thomas",
  description:
    "GhostLogic is a forensic infrastructure platform by Adam Scott Thomas focused on resilient evidence capture, reconstruction, and defensible reporting.",
  keywords: [
    "GhostLogic",
    "Adam Scott Thomas",
    "Adam Thomas",
    "forensic infrastructure",
    "evidence platform",
    "evidence capture",
    "forensic software",
    "chain of custody",
    "digital forensics",
  ],
  alternates: {
    canonical: "https://adamscottthomas.com/projects/ghostlogic",
  },
  openGraph: {
    title: "GhostLogic — Forensic Evidence Platform by Adam Scott Thomas",
    description:
      "GhostLogic is a forensic infrastructure platform focused on resilient evidence capture, reconstruction, and defensible reporting.",
    url: "https://adamscottthomas.com/projects/ghostlogic",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "GhostLogic",
      applicationCategory: "SecurityApplication",
      operatingSystem: "Cross-platform",
      description:
        "Forensic infrastructure platform for resilient evidence capture, structured event reconstruction, and defensible reporting.",
      author: {
        "@type": "Person",
        name: "Adam Scott Thomas",
        url: "https://adamscottthomas.com",
      },
      url: "https://adamscottthomas.com/projects/ghostlogic",
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Projects",
          item: "https://adamscottthomas.com/projects",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GhostLogic",
          item: "https://adamscottthomas.com/projects/ghostlogic",
        },
      ],
    },
  ],
};

const designPrinciples = [
  {
    title: "Reliability over convenience",
    description:
      "Evidence systems can't afford to be fragile. GhostLogic is built to capture and preserve data under adverse conditions — intermittent connectivity, contested environments, and systems that may not cooperate.",
  },
  {
    title: "Integrity by default",
    description:
      "Every piece of evidence is sealed, hashed, and chain-of-custody tracked from the moment it enters the system. Integrity isn't a feature you enable — it's the foundation everything else sits on.",
  },
  {
    title: "Clear outputs",
    description:
      "The value of evidence depends on whether it can be understood. GhostLogic produces structured timelines, executive summaries, and forensic reports that are built for review — not just storage.",
  },
  {
    title: "Practical handoff",
    description:
      "Evidence needs to move between systems, teams, and contexts without losing its integrity or meaning. Exports are structured, documented, and designed for downstream consumption.",
  },
];

const capabilities = [
  {
    title: "Resilient evidence capture",
    description:
      "Distributed collection agents that capture endpoint telemetry, system state, and behavioral signals — even when network conditions are unreliable or hosts are partially compromised.",
  },
  {
    title: "Structured event reconstruction",
    description:
      "A multi-pass forensic pipeline that parses, correlates, normalizes, and reconstructs events into coherent timelines. Absence detection identifies what should have happened but didn't.",
  },
  {
    title: "Chain-of-custody aware handling",
    description:
      "Every evidence capsule is sealed with cryptographic hashes and tracked through its full lifecycle. The system maintains provenance from capture through analysis to export.",
  },
  {
    title: "Integrity-preserving storage and export",
    description:
      "Evidence is stored in tamper-evident capsules with verification at rest and in transit. Exports maintain integrity proofs so downstream consumers can independently verify authenticity.",
  },
  {
    title: "Defensible reporting",
    description:
      "Automated generation of forensic timelines, executive summaries, and structured reports. Outputs are designed for review by analysts, legal teams, and decision-makers.",
  },
];

const audiences = [
  "Incident response teams that need reliable evidence collection under pressure",
  "Forensic workflows where chain-of-custody and integrity are non-negotiable",
  "Organizations that need to preserve evidence before they know what questions to ask",
  "Post-event reconstruction where timelines and absence patterns matter",
  "Trust-sensitive environments where evidence needs to survive scrutiny",
];

export default function GhostLogicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
            Forensic Infrastructure
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            GhostLogic
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Forensic infrastructure for resilient evidence capture,
            reconstruction, and defensible reporting.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Overview
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-300">
            <p>
              GhostLogic is a forensic evidence platform designed to capture,
              preserve, and reconstruct digital evidence with the kind of rigor
              that holds up under scrutiny. It covers the full lifecycle — from
              endpoint telemetry collection through structured analysis to
              defensible reporting.
            </p>
            <p>
              The system is built around a simple premise: evidence that
              can&apos;t be trusted isn&apos;t evidence. Every layer of the
              platform — capture, transport, storage, analysis, export — is
              designed with integrity as the default, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            The Problem
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-300">
            <p>
              Most systems treat data collection and evidence preservation as
              the same thing. They aren&apos;t. Collecting data is easy.
              Preserving it in a way that maintains integrity, establishes
              provenance, survives adversarial scrutiny, and remains useful
              months or years later — that&apos;s a fundamentally different
              problem.
            </p>
            <p>
              Standard logging and monitoring tools aren&apos;t built for
              forensic use. They drop data under load, lack chain-of-custody
              tracking, produce outputs that are difficult to verify, and
              weren&apos;t designed to answer the kinds of questions that come up
              during investigations, disputes, or compliance reviews.
            </p>
          </div>
        </div>
      </section>

      {/* What GhostLogic Does */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What GhostLogic Does
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-10">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-white">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Design Principles
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {designPrinciples.map((principle, index) => (
              <div key={principle.title} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600/20 text-sm font-bold text-primary-400">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Who It&apos;s For
          </h2>
          <ul className="mt-8 max-w-3xl space-y-4">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                <span className="leading-relaxed text-slate-300">
                  {audience}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want to learn more about GhostLogic?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            If you&apos;re working on incident response, forensic workflows, or
            evidence preservation and want to see how GhostLogic fits — let&apos;s
            talk.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              All projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
