import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Adam Scott Thomas — Software Engineer | Forensic Systems, Governed AI, Product Architecture",
  description:
    "Adam Scott Thomas builds software systems focused on forensic infrastructure, governed AI, product architecture, security, and real-world execution. Founder of GhostLogic and Maelstrom Runtime.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "software engineer",
    "forensic infrastructure",
    "governed AI",
    "product architecture",
    "GhostLogic",
    "Maelstrom Runtime",
    "security software",
    "AI governance",
    "systems engineer",
  ],
  alternates: { canonical: "https://adamscottthomas.com" },
  openGraph: {
    title:
      "Adam Scott Thomas — Software Engineer | Forensic Systems, Governed AI, Product Architecture",
    description:
      "Adam Scott Thomas builds software systems focused on forensic infrastructure, governed AI, product architecture, and real-world execution.",
    url: "https://adamscottthomas.com",
    siteName: "Adam Scott Thomas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Scott Thomas — Software Engineer",
    description:
      "Forensic infrastructure, governed AI, product architecture, and real-world execution.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://adamscottthomas.com",
    },
  ],
};

const areas = [
  {
    title: "Forensic Systems",
    description:
      "Evidence infrastructure built for integrity, traceability, and legal defensibility. Systems that capture, seal, and verify digital evidence under adversarial conditions.",
  },
  {
    title: "Governed AI",
    description:
      "AI orchestration with built-in governance, audit trails, and behavioral constraints. Making model outputs accountable and reproducible.",
  },
  {
    title: "Product Architecture",
    description:
      "Turning ambiguous requirements into coherent technical systems. Defining boundaries, data flows, and interfaces that survive contact with real users.",
  },
  {
    title: "Software Delivery",
    description:
      "End-to-end execution from architecture through deployment. Building the thing, not just designing it. Shipping code that works in production.",
  },
  {
    title: "Technical Strategy",
    description:
      "Helping teams and founders make sound technical decisions early. Stack selection, build-vs-buy analysis, infrastructure planning, and roadmap clarity.",
  },
];

const principles = [
  {
    name: "Clarity matters",
    description:
      "If you cannot explain what a system does and why, it is not ready to ship.",
  },
  {
    name: "Constraints matter",
    description:
      "Good systems are shaped by their boundaries, not just their features.",
  },
  {
    name: "Traceability matters",
    description:
      "Every decision, every state change, every output should be explainable after the fact.",
  },
  {
    name: "Real-world behavior matters",
    description:
      "What happens under load, under failure, under adversarial conditions is the real design.",
  },
  {
    name: "Shipping matters",
    description:
      "Architecture without execution is just a diagram. The work is not done until it runs.",
  },
];

const projects = [
  {
    title: "GhostLogic",
    subtitle: "Forensic Infrastructure",
    description:
      "A forensic evidence platform that captures, seals, and verifies digital artifacts for legal and insurance use cases. Multi-component system spanning telemetry collection, evidence capsule storage, forensic analysis, and claims settlement.",
    href: "/projects/ghostlogic",
  },
  {
    title: "Maelstrom Runtime",
    subtitle: "Governed AI",
    description:
      "A governed AI orchestration runtime that enforces behavioral constraints, maintains audit trails, and ensures model outputs are reproducible and accountable. Built for environments where AI decisions carry real consequences.",
    href: "/projects/maelstrom",
  },
  {
    title: "Product + Build Work",
    subtitle: "Architecture & Delivery",
    description:
      "Product architecture, technical prototyping, and full-stack delivery for early-stage companies and complex technical problems. Turning ambiguous requirements into working software.",
    href: "/work-with-me",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-200">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800/60">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
          <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-32 text-center sm:pb-32 sm:pt-44">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Adam Scott Thomas
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Software engineer building forensic systems, governed AI, and
              product architecture for high-trust, high-stakes environments.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                View Projects
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/work-with-me"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="border-b border-slate-800/60 bg-slate-900/40">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              I build software for situations where clarity matters.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
              My work sits at the intersection of engineering and trust. I focus
              on systems where correctness is not optional, where outputs need to
              be defensible, and where the gap between &ldquo;it works&rdquo; and
              &ldquo;it holds up&rdquo; determines whether the product matters.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Forensic infrastructure",
                "Governed AI systems",
                "Product architecture",
                "Software delivery",
                "Technical prototyping",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About Preview */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Building software that holds up in the real world
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              <p>
                I am a founder and systems-focused engineer. I build
                GhostLogic, a forensic evidence platform, and Maelstrom
                Runtime, a governed AI orchestration system. My product work
                spans early-stage architecture, technical prototyping, and
                full-stack delivery.
              </p>
              <p>
                I care about structure, failure modes, boundaries, and
                building software that behaves reliably under real
                conditions. I work best in environments that are technically
                dense, high-trust, and commercially important.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-primary-400 transition hover:text-primary-300"
              >
                Learn More
                <svg
                  className="ml-1.5 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="border-b border-slate-800/60 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-400 sm:text-lg">
              Systems built for trust, traceability, and real-world execution.
            </p>
            {/* Maelstrom Gate — Featured Block */}
            <div className="mt-12 rounded-xl border-2 border-primary-500/40 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
                Runtime AI Governance
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Maelstrom Gate
              </h3>
              <p className="mt-2 text-lg font-medium text-slate-300">
                Runtime governance for tool-using AI agents.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
                Same model. Same task. Different threat level. Dangerous tools
                disappear from the model&apos;s visible action surface under
                elevated risk.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Open source on GitHub. Live demo available. Paid pilots now
                open.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects/maelstrom"
                  className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View Project
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <a
                  href="https://ghostlogic.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-primary-500/30 bg-primary-500/10 px-6 py-3 text-sm font-semibold text-primary-400 transition hover:border-primary-500/50 hover:bg-primary-500/20"
                >
                  Try Demo
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-400">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={project.href}
                      className="inline-flex items-center text-sm font-semibold text-primary-400 transition group-hover:text-primary-300"
                    >
                      Learn More
                      <svg
                        className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              What I Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-400 sm:text-lg">
              Five areas of focus, unified by a commitment to systems that work
              under pressure.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, i) => (
                <div
                  key={area.title}
                  className={`rounded-xl border border-slate-800 bg-slate-900/40 p-6 ${
                    i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-slate-800/60 bg-slate-900/40">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How I approach the work
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Five principles that shape everything I build.
            </p>
            <div className="mt-10 space-y-6">
              {principles.map((principle, i) => (
                <div
                  key={principle.name}
                  className="flex gap-4 rounded-lg border border-slate-800/60 bg-slate-950/40 p-5"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-sm font-bold text-primary-400">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">
                      {principle.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who I Work With */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Who I Work With
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              I tend to work with people navigating complex, high-stakes
              technical problems.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Founders",
                  detail:
                    "who need a technical co-builder, not just a developer.",
                },
                {
                  label: "Operators",
                  detail:
                    "running systems where failure has legal, financial, or safety consequences.",
                },
                {
                  label: "Technical teams",
                  detail:
                    "working on problems too complex for off-the-shelf solutions.",
                },
                {
                  label: "Companies",
                  detail:
                    "building products that require evidence integrity, AI governance, or regulatory compliance.",
                },
                {
                  label: "Early-stage startups",
                  detail:
                    "that need architecture decisions made well, the first time.",
                },
                {
                  label: "Legal and insurance professionals",
                  detail:
                    "who need technology that produces defensible, auditable outputs.",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg border border-slate-800/40 bg-slate-900/30 p-4"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                  <p className="text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-white">
                      {item.label}
                    </span>{" "}
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Founder Post */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <div className="border-l-4 border-primary-500/60 pl-6 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
                Founder Post
              </p>
              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                I open-sourced the enforcement primitive behind my live AI
                governance demo
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>
                  Most AI safety still depends on the model refusing to do
                  something dangerous. I think that&apos;s the wrong layer.
                </p>
                <p>
                  Maelstrom Gate governs the model&apos;s available action
                  surface itself. Under elevated risk, dangerous tools vanish
                  from context before the model can select them. No refusal
                  theater. No jailbreak argument. Just control upstream of
                  action.
                </p>
                <p>
                  The enforcement primitive is open source. The broader
                  runtime and pilot work are live.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://ghostlogic.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Try the Demo
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/adam-scott-thomas/maelstrom-gate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View the Repo
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://ghostlogic.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Visit GhostLogic
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Working on something complex, high-trust, or technically unusual?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              I am always interested in hearing about hard problems. If what
              you are building requires real engineering rigor, let&apos;s
              talk.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get in Touch
              </Link>
              <Link
                href="/work-with-me"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                How I Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
