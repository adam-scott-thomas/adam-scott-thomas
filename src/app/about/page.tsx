import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Adam Scott Thomas — Founder, Builder & Systems Engineer",
  description:
    "Learn about Adam Scott Thomas, a founder and systems-focused engineer working across forensic systems, AI governance, and resilient software design.",
  keywords: [
    "Adam Scott Thomas",
    "Adam Thomas",
    "about",
    "software engineer",
    "founder",
    "systems engineer",
    "forensic systems",
    "AI governance",
    "resilient software",
    "security architecture",
  ],
  alternates: { canonical: "https://adamscottthomas.com/about" },
  openGraph: {
    title: "About Adam Scott Thomas — Founder, Builder & Systems Engineer",
    description:
      "Learn about Adam Scott Thomas, a founder and systems-focused engineer working across forensic systems, AI governance, and resilient software design.",
    url: "https://adamscottthomas.com/about",
    siteName: "Adam Scott Thomas",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adam Scott Thomas",
    description:
      "Founder and systems-focused engineer working across forensic systems, AI governance, and resilient software design.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adam Scott Thomas",
  url: "https://adamscottthomas.com",
  jobTitle: "Software Engineer & Founder",
  description:
    "Founder and systems-focused engineer working across forensic systems, AI governance, and resilient software design.",
  knowsAbout: [
    "Forensic Infrastructure",
    "AI Governance",
    "Product Architecture",
    "Security Software",
    "Systems Engineering",
  ],
  sameAs: ["https://github.com/adam-scott-thomas"],
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
      name: "About",
      item: "https://adamscottthomas.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-200">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800/60">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
            <nav className="mb-8 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">About</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About Adam Scott Thomas
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Founder and systems-focused engineer building software for
              environments where trust, traceability, and correctness are not
              optional.
            </p>
          </div>
        </section>

        {/* Main Bio */}
        <section className="border-b border-slate-800/60 bg-slate-900/40">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                I am a software engineer and founder. I build systems where
                correctness is a hard requirement, not a nice-to-have. My work
                spans forensic evidence infrastructure, AI governance,
                security-minded architecture, and early-stage product execution.
              </p>
              <p>
                I started building because I kept encountering problems where
                the available tools were either too generic, too fragile, or
                built without understanding the domain they served. Forensic
                systems that could not prove their own integrity. AI pipelines
                with no audit trail. Products architected by committee and
                shipped by hope.
              </p>
              <p>
                So I build the alternatives. Systems designed around the hard
                constraints first. Software that works the way it needs to work
                when someone actually depends on it, when a legal team needs to
                trust an output, when a model decision needs to be explainable
                after the fact, when a product needs to survive its first
                thousand real users.
              </p>
              <p>
                My background is broad by necessity. Forensic evidence systems
                taught me about chain of custody, tamper detection, and building
                for adversarial conditions. AI governance work taught me about
                behavioral constraints, reproducibility, and the gap between
                what a model can do and what it should be allowed to do. Product
                work taught me that none of it matters if you cannot ship.
              </p>
              <p>
                I work across the full stack and across organizational
                boundaries. I am as comfortable designing a data model as I am
                defining a product roadmap, and I have done both in the same
                week more times than I can count.
              </p>
            </div>
          </div>
        </section>

        {/* What I Build */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              What I Build
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Three areas where most of my energy goes.
            </p>

            <div className="mt-10 space-y-8">
              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">GhostLogic</h3>
                <p className="mt-1 text-sm font-medium text-primary-400">
                  Forensic Infrastructure
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  A forensic evidence platform for capturing, sealing, and
                  verifying digital artifacts. GhostLogic is built for legal and
                  insurance use cases where evidence integrity is non-negotiable.
                  The system spans endpoint telemetry collection, immutable
                  evidence capsule storage, multi-pass forensic analysis, and
                  automated claims settlement. Every component is designed around
                  chain of custody, tamper detection, and adversarial
                  resilience.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">
                  Maelstrom Runtime
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-400">
                  Governed AI Orchestration
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  A runtime for orchestrating AI model interactions with
                  built-in governance, behavioral constraints, and full audit
                  trails. Maelstrom ensures that model outputs are reproducible,
                  accountable, and explainable. Built for environments where AI
                  decisions carry legal, financial, or safety consequences and
                  where &ldquo;it usually works&rdquo; is not an acceptable
                  standard.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">
                  Product Systems
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-400">
                  Architecture & Delivery
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  Beyond my own products, I do architecture and delivery work
                  for early-stage companies and complex technical problems.
                  This means defining system boundaries, choosing the right
                  technical approach, building prototypes that prove viability,
                  and shipping production systems that work. I focus on the
                  problems where getting the architecture right early saves
                  months of rework later.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* How I Think */}
        <section className="border-b border-slate-800/60 bg-slate-900/40">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              How I Think
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                I am a systems-first thinker. Before I write a line of code, I
                want to understand the boundaries. What are the inputs, the
                outputs, the failure modes, the trust boundaries? Who depends on
                this, and what happens when it breaks?
              </p>
              <p>
                I care about structure, not just features. A well-structured
                system is easier to debug, easier to extend, easier to hand off,
                and easier to trust. I optimize for clarity and reliability over
                cleverness.
              </p>
              <p>
                I think about the gap between an idea and a working product.
                That gap is where most projects die. It is where ambiguous
                requirements meet real technical constraints, where
                architectural shortcuts become permanent liabilities, and where
                the difference between a prototype and a production system gets
                decided. I spend most of my time in that gap, making sure what
                comes out the other side actually works.
              </p>
              <p>
                Practical implementation matters to me more than theoretical
                elegance. I have seen too many architecturally beautiful systems
                that never shipped. The best system is the one that runs, that
                handles edge cases, and that someone can maintain after you move
                on.
              </p>
            </div>
          </div>
        </section>

        {/* Working Style */}
        <section className="border-b border-slate-800/60">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Where I Work Best
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              I do my best work in environments that share certain
              characteristics.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  trait: "Technically dense",
                  detail:
                    "Problems with real technical depth, not just CRUD apps with a fresh coat of paint.",
                },
                {
                  trait: "Somewhat underdefined",
                  detail:
                    "Work where the problem space is not fully mapped yet and figuring out the right approach is part of the job.",
                },
                {
                  trait: "High-trust",
                  detail:
                    "Relationships where I have the autonomy to make technical decisions and the trust to execute on them.",
                },
                {
                  trait: "Fast-moving",
                  detail:
                    "Teams that ship frequently, iterate quickly, and treat velocity as a competitive advantage.",
                },
                {
                  trait: "Commercially important",
                  detail:
                    "Products that matter to the business, where engineering quality directly affects outcomes.",
                },
                {
                  trait: "Difficult to explain",
                  detail:
                    "Domains that are hard to summarize in a sentence, where the complexity is the point.",
                },
              ].map((item) => (
                <li
                  key={item.trait}
                  className="flex items-start gap-4 rounded-lg border border-slate-800/60 bg-slate-900/30 p-5"
                >
                  <span className="mt-0.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary-400" />
                  <div>
                    <span className="font-semibold text-white">
                      {item.trait}.
                    </span>{" "}
                    <span className="text-sm leading-relaxed text-slate-400">
                      {item.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
              If you are building something that requires real engineering rigor,
              forensic-grade trust, or just someone who can turn a hard problem
              into working software, I would like to hear about it.
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
