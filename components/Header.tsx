import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/wordpress", label: "WordPress" },
  { href: "/#process", label: "Process" },
  { href: "/#work", label: "Work" },
];

export default function Header({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur-md border-b border-line-dark">
      <div className="max-w-wrap mx-auto px-7 h-[72px] flex items-center justify-between text-paper">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-clay to-clay-deep flex items-center justify-center font-display font-bold text-sm text-white">
            B
          </span>
          Bakke Digital
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[14.5px] transition-colors ${
                    current === link.label
                      ? "text-clay"
                      : "text-paper/78 hover:text-clay"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-lg border border-line-dark text-sm font-semibold hover:border-clay hover:text-clay transition-colors"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
