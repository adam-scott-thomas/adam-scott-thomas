import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Adam Scott Thomas",
  description:
    "Explore projects by Adam Scott Thomas including GhostLogic, Maelstrom Runtime, and software built for trust, structure, and practical execution.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "projects",
    "GhostLogic",
    "Maelstrom Runtime",
    "forensic infrastructure",
    "governed AI",
    "software projects",
  ],
  alternates: { canonical: "https://adamscottthomas.com/projects" },
  openGraph: {
    title: "Projects — Adam Scott Thomas",
    description:
      "Explore projects by Adam Scott Thomas including GhostLogic, Maelstrom Runtime, and software built for trust, structure, and practical execution.",
    url: "https://adamscottthomas.com/projects",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
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
  ],
};

const projects = [
  {
    title: "GhostLogic",
    subtitle: "Forensic Infrastructure",
    description:
      "A platform built around resilient evidence capture, structured event reconstruction, integrity-preserving storage and export, chain-of-custody workflows, and defensible reporting. GhostLogic treats evidence as something that needs to survive scrutiny — not just get collected.",
    capabilities: [
      "Resilient evidence capture",
      "Structured event reconstruction",
      "Integrity-preserving export",
      "Chain-of-custody workflows",
      "Defensible reporting",
    ],
    status:
      "Active development / Demo available / Pilot discussions",
    href: "/projects/ghostlogic",
  },
  {
    title: "Maelstrom Runtime",
    subtitle: "Governed AI Runtime",
    description:
      "A runtime designed for AI systems that need structure, traceability, and control. Maelstrom treats the runtime as a first-class concern — bounded autonomy, policy-aware execution, trace-first design, structured decision pipelines, and runtime-level control over how AI systems behave.",
    capabilities: [
      "Bounded autonomy",
      "Policy-aware execution",
      "Trace-first design",
      "Structured decision pipelines",
      "Runtime-level control",
    ],
    href: "/projects/maelstrom",
  },
  {
    title: "Product and Delivery Work",
    subtitle: "Software That Gets Built",
    description:
      "Websites, frontend systems, backend APIs, infrastructure, prototypes, and demos. Practical software delivery across the full stack — designed to ship, structured to last, and built with real constraints in mind.",
    capabilities: [
      "Websites and frontend systems",
      "Backend APIs and services",
      "Infrastructure and deployment",
      "Prototypes and demos",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Selected work across forensic infrastructure, governed AI, and
            practical software delivery.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="max-w-3xl text-slate-300 leading-relaxed">
            These projects reflect a consistent set of priorities: structure over
            shortcuts, clarity over cleverness, and systems that hold up under
            real-world conditions. Each one addresses a different problem space,
            but they share a focus on trust, traceability, and building things
            that work the way they&apos;re supposed to.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-400">
                    {project.subtitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {project.status && (
                    <p className="mt-6 text-sm text-slate-500">
                      {project.status}
                    </p>
                  )}
                </div>

                {project.href && (
                  <div className="shrink-0 sm:mt-8">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-500"
                    >
                      Learn more
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Whether you need help with a specific project, want to explore a
            partnership, or just want to talk through a problem — I&apos;m
            available.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
            >
              How I work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
