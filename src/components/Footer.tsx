import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/ghostlogic", label: "GhostLogic" },
  { href: "/projects/maelstrom", label: "Maelstrom" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#060a14]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Adam Scott Thomas</h3>
            <p className="mt-2 text-sm text-slate-400">
              Founder, builder, and systems-focused engineer working across forensic infrastructure, governed AI, and resilient software systems.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Pages</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <p className="mt-3 text-sm text-slate-400">
              <a href="mailto:adam@ghostlogic.tech" className="hover:text-white">
                adam@ghostlogic.tech
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <a href="https://github.com/adam-scott-thomas" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>Built with structure, clarity, and respect for how systems behave in the real world.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Adam Scott Thomas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
