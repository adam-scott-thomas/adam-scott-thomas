import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maelstrom Runtime — Governed AI Runtime by Adam Scott Thomas",
  description:
    "Maelstrom Runtime by Adam Scott Thomas is a governed AI runtime designed for traceability, structure, policy-aware execution, and stronger control over AI systems.",
  keywords: [
    "Maelstrom Runtime",
    "Adam Scott Thomas",
    "Adam Thomas",
    "governed AI",
    "AI runtime",
    "AI governance",
    "AI control",
    "bounded autonomy",
    "policy-aware execution",
    "AI traceability",
  ],
  alternates: {
    canonical: "https://adamscottthomas.com/projects/maelstrom",
  },
  openGraph: {
    title: "Maelstrom Runtime — Governed AI Runtime by Adam Scott Thomas",
    description:
      "Maelstrom Runtime is a governed AI runtime designed for traceability, structure, policy-aware execution, and stronger control.",
    url: "https://adamscottthomas.com/projects/maelstrom",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Maelstrom Runtime",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Cross-platform",
      description:
        "A governed runtime for AI systems designed for traceability, structure, policy-aware execution, and stronger control over how AI systems behave.",
      author: {
        "@type": "Person",
        name: "Adam Scott Thomas",
        url: "https://adamscottthomas.com",
      },
      url: "https://adamscottthomas.com/projects/maelstrom",
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
          name: "Maelstrom Runtime",
          item: "https://adamscottthomas.com/projects/maelstrom",
        },
      ],
    },
  ],
};

const capabilities = [
  {
    title: "Governed AI behavior",
    description:
      "Define what an AI system is allowed to do — and enforce it at the runtime level. Policies aren't suggestions; they're constraints that shape every action the system takes.",
  },
  {
    title: "Bounded tool access",
    description:
      "AI systems that use tools need guardrails around which tools they can access, when, and under what conditions. Maelstrom makes tool access explicit, scoped, and auditable.",
  },
  {
    title: "Policy-aware execution",
    description:
      "Every decision flows through a policy layer that evaluates context, constraints, and authorization before allowing action. The runtime knows the rules — and applies them.",
  },
  {
    title: "Structured autonomy",
    description:
      "Autonomy doesn't have to mean uncontrolled. Maelstrom provides structured decision pipelines that give AI systems room to operate while keeping their behavior within defined boundaries.",
  },
  {
    title: "Traceable decision histories",
    description:
      "Every action, decision, and policy evaluation is recorded in a structured trace. When something goes wrong — or right — you can reconstruct exactly what happened and why.",
  },
  {
    title: "Stronger runtime control",
    description:
      "The runtime itself becomes a control surface. Instead of relying on prompt engineering or hope, you get infrastructure-level mechanisms for managing AI behavior.",
  },
];

const useCases = [
  "Stronger governance over AI systems that take real-world actions",
  "Operational control for AI-powered workflows and decision pipelines",
  "Explainable action pipelines where every step can be traced and reviewed",
  "Structured autonomy for AI agents that need freedom within boundaries",
  "Runtime-level accountability for regulated or trust-sensitive environments",
];

export default function MaelstromPage() {
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
            Governed AI Runtime
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Maelstrom Runtime
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            A governed runtime for AI systems that need structure,
            traceability, and control.
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
              Maelstrom Runtime starts from a straightforward observation: the
              runtime matters as much as the model. How an AI system executes —
              what it&apos;s allowed to do, how its decisions are tracked, what
              policies govern its behavior — is just as important as the quality
              of its outputs.
            </p>
            <p>
              Most AI infrastructure focuses on model serving, prompt
              management, or orchestration. Maelstrom focuses on the layer below
              that: the runtime environment where decisions become actions and
              where governance either exists or doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Idea */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            The Core Idea
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-300">
            <p>
              When AI systems move from generating text to taking actions —
              calling APIs, modifying data, making decisions that affect
              real-world outcomes — the question shifts from &quot;is the output
              good?&quot; to &quot;is the behavior governed?&quot;
            </p>
            <p>
              Model output alone breaks down the moment you need accountability.
              You can&apos;t audit a prompt. You can&apos;t enforce a policy
              through instructions alone. You can&apos;t trace a decision if the
              runtime doesn&apos;t record it. And you can&apos;t control
              behavior if the infrastructure doesn&apos;t support boundaries.
            </p>
            <p>
              Maelstrom treats these as infrastructure problems — not model
              problems — and solves them at the runtime level.
            </p>
          </div>
        </div>
      </section>

      {/* What It Enables */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What It Enables
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

      {/* Why It Matters */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Why It Matters
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-300">
            <p>
              AI systems are moving from content generation to action execution.
              They&apos;re calling tools, making decisions, and operating with
              increasing autonomy. That shift changes the risk profile entirely.
            </p>
            <p>
              A model that generates bad text is a quality problem. A model that
              takes unauthorized actions is a governance problem. And governance
              problems don&apos;t get solved by better prompts — they get solved
              by better infrastructure.
            </p>
            <p>
              Maelstrom provides that infrastructure. It gives teams the ability
              to deploy AI systems with confidence that behavior is bounded,
              decisions are traceable, and policies are enforced — not hoped for.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-slate-800/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Use Cases
          </h2>
          <ul className="mt-8 max-w-3xl space-y-4">
            {useCases.map((useCase) => (
              <li key={useCase} className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                <span className="leading-relaxed text-slate-300">
                  {useCase}
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
            Interested in governed AI infrastructure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            If you&apos;re building AI systems that need stronger governance,
            traceability, or runtime control — I&apos;d like to hear about what
            you&apos;re working on.
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
