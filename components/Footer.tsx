import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper/70 pt-16 pb-8">
      <div className="max-w-wrap mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs text-paper mb-3.5">
              Bakke Digital
            </h4>
            <p className="text-sm mb-2.5 max-w-[280px]">
              A small web studio based in Silkeborg, working with clients
              across Denmark and the Nordics.
            </p>
            <a
              href="mailto:hello@bakkedigital.dk"
              className="inline-flex mt-1.5 px-[22px] py-3 rounded-lg bg-clay text-[#FFF8EF] text-sm font-semibold hover:bg-clay-deep transition-colors"
            >
              hello@bakkedigital.dk
            </a>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs text-paper mb-3.5">
              Services
            </h4>
            <Link href="/wordpress" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              WordPress
            </Link>
            <Link href="/#services" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              WooCommerce
            </Link>
            <Link href="/#services" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              Shopify
            </Link>
            <Link href="/#services" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              SEO
            </Link>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs text-paper mb-3.5">
              Studio
            </h4>
            <Link href="/#process" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              Our process
            </Link>
            <Link href="/#work" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              Case studies
            </Link>
            <Link href="/#contact" className="block text-sm mb-2.5 hover:text-clay transition-colors">
              Contact
            </Link>
          </div>
          <div>
            <h4 className="font-mono uppercase tracking-wider text-xs text-paper mb-3.5">
              Direct
            </h4>
            <p className="text-sm mb-2.5">+45 70 12 34 56</p>
            <p className="text-sm mb-2.5">Søndergade 12, 8600 Silkeborg</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-line-dark flex flex-wrap justify-between gap-2.5 text-xs text-paper/45">
          <span>© 2026 Bakke Digital. All rights reserved.</span>
          <span>Built on WordPress · WooCommerce · Shopify</span>
        </div>
      </div>
    </footer>
  );
}
