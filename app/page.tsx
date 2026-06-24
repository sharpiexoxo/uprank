import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloorRail from "@/components/FloorRail";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";

const floors = [
  { id: "hero", label: "G" },
  { id: "services", label: "1" },
  { id: "process", label: "2" },
  { id: "work", label: "3" },
  { id: "contact", label: "R" },
];

const services = [
  {
    tag: "WORDPRESS",
    title: "WordPress sites",
    body: "Custom-built or thoughtfully themed sites that load fast, stay easy to edit, and don't fall apart on the next plugin update.",
    href: "/wordpress",
  },
  {
    tag: "WOOCOMMERCE",
    title: "WooCommerce stores",
    body: "Stores built on the platform you already half-know, tuned for checkout speed, stock accuracy, and the payment methods your customers actually use.",
    href: "/#contact",
  },
  {
    tag: "SHOPIFY",
    title: "Shopify builds",
    body: "From first product upload to a custom theme that matches your brand — set up, migrated, or rebuilt, with apps kept to the ones you'll actually use.",
    href: "/#contact",
  },
  {
    tag: "SEO",
    title: "Search & growth",
    body: "Technical fixes, content that answers real questions, and monthly reporting in plain language — no vanity keywords, just visits that convert.",
    href: "/#contact",
  },
];

const processSteps = [
  {
    idx: "01 — Discover",
    title: "Scope & plan",
    body: "A working session on goals, catalogue size, and what \u201cdone\u201d looks like — then a fixed quote, no surprise invoices later.",
  },
  {
    idx: "02 — Build",
    title: "Design & development",
    body: "Weekly previews on a staging link, so you're reacting to a real site, not a slide deck.",
  },
  {
    idx: "03 — Launch",
    title: "Go live & test",
    body: "Checkout, forms, redirects and tracking all tested before the switch — plus a short team walkthrough so you can edit it yourselves.",
  },
  {
    idx: "04 — Grow",
    title: "Measure & improve",
    body: "Monthly SEO and performance check-ins, with changes prioritised by what's actually moving traffic and sales.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header current="" />
      <FloorRail floors={floors} />

      {/* HERO */}
      <section
        id="hero"
        className="bg-ink text-paper pt-24 pb-28 [background:radial-gradient(900px_500px_at_78%_10%,rgba(217,98,43,0.20),transparent_60%),#1F1B17]"
      >
        <div className="max-w-wrap mx-auto px-7 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 text-clay mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              <span className="font-mono uppercase tracking-wider text-xs">
                Web studio · Est. in Silkeborg
              </span>
            </div>
            <h1 className="font-display font-semibold text-[clamp(36px,4.6vw,58px)] leading-[1.06]">
              Online stores and websites that earn their keep,{" "}
              <em className="not-italic text-clay">not just their looks.</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-paper/78 max-w-[520px]">
              We build and grow WordPress sites, WooCommerce and Shopify
              stores, then make sure people actually find them. One small
              team, from first sketch to ranking on page one.
            </p>
            <div className="flex gap-3.5 mt-9 flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-lg font-semibold text-[15px] bg-clay text-[#FFF8EF] hover:bg-clay-deep transition-colors"
              >
                Get a free site audit
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-lg font-semibold text-[15px] border border-line-dark text-paper hover:border-clay hover:text-clay transition-colors"
              >
                See our work
              </Link>
            </div>
            <div className="flex gap-7 mt-12 flex-wrap">
              {[
                ["120+", "sites & stores launched"],
                ["1.3s", "avg. page load, post-launch"],
                ["4.9/5", "average client rating"],
              ].map(([num, lab]) => (
                <div key={lab}>
                  <div className="font-display text-[26px] font-semibold">
                    {num}
                  </div>
                  <div className="text-[13px] text-paper/55 mt-0.5">
                    {lab}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mock-tilt bg-[#FBF7EF] rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-paper-2 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8CDB8]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8CDB8]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8CDB8]" />
              <span className="ml-2.5 font-mono text-[11px] text-ink-soft bg-[#FBF7EF] px-2.5 py-1 rounded border border-line">
                yourstore.com/dashboard
              </span>
            </div>
            <div className="p-6">
              <div className="flex gap-3.5 mb-3.5">
                <div className="flex-1 bg-white border border-line rounded-[10px] p-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Organic traffic
                  </div>
                  <div className="font-display text-[22px] font-semibold mt-1.5 text-moss">
                    +64%
                  </div>
                </div>
                <div className="flex-1 bg-white border border-line rounded-[10px] p-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Conversion rate
                  </div>
                  <div className="font-display text-[22px] font-semibold mt-1.5 text-moss">
                    2.8%
                  </div>
                </div>
              </div>
              <div className="flex gap-3.5 mb-3.5">
                <div className="flex-1 bg-white border border-line rounded-[10px] p-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Checkout speed
                  </div>
                  <div className="font-display text-[22px] font-semibold mt-1.5">
                    1.1s
                  </div>
                </div>
                <div className="flex-1 bg-white border border-line rounded-[10px] p-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Cart abandonment
                  </div>
                  <div className="font-display text-[22px] font-semibold mt-1.5 text-moss">
                    -19%
                  </div>
                </div>
              </div>
              <div className="h-[90px] bg-white border border-line rounded-[10px] flex items-end gap-1.5 p-3">
                {[35, 48, 42, 60, 55, 74, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-b from-clay to-[#F0A372]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-paper-2 py-8 border-y border-line">
        <div className="max-w-wrap mx-auto px-7 flex justify-between flex-wrap gap-6">
          {[
            ["120+", "Projects shipped since 2017"],
            ["38", "Shopify & WooCommerce stores live"],
            ["92%", "Clients still with us after year one"],
            ["6", "People on the team — no hand-offs"],
          ].map(([num, lab]) => (
            <div key={lab}>
              <div className="font-display text-2xl font-semibold">{num}</div>
              <div className="text-[13px] text-ink-soft mt-0.5">{lab}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Four services, one team that talks to each other."
              body="No outsourcing chains and no separate “SEO department” that's never seen your site. The person who builds your store is the person who makes sure it ranks."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Reveal key={s.tag}>
                <div className="bg-[#FBF7EF] border border-line rounded-card p-6 h-full transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_-18px_rgba(31,27,23,0.25)] hover:border-clay/40">
                  <span className="inline-block px-2.5 py-1 rounded-[5px] bg-clay/10 text-clay-deep font-mono text-[11px] mb-4">
                    {s.tag}
                  </span>
                  <h3 className="font-display text-[19px] font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed mt-2.5">
                    {s.body}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-clay-deep group"
                  >
                    Talk about it
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-ink text-paper py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead
              eyebrow="How a project runs"
              title="Four stages. You'll always know which one you're in."
              dark
            />
          </Reveal>
          <div className="grid md:grid-cols-4 gap-7 md:gap-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.idx}>
                <div
                  className={`pr-0 md:pr-5 ${
                    i > 0
                      ? "border-t md:border-t-0 md:border-l border-line-dark pt-6 md:pt-0 md:pl-5"
                      : ""
                  }`}
                >
                  <div className="font-mono text-[13px] text-clay">
                    {step.idx}
                  </div>
                  <h3 className="mt-3.5 text-lg font-semibold font-display">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper/65">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="work" className="py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="bg-paper-2 border border-line rounded-2xl p-8">
                <div className="font-mono uppercase tracking-wider text-xs text-clay-deep">
                  Case · WooCommerce + SEO
                </div>
                <div className="grid grid-cols-2 gap-5 mt-2">
                  {[
                    ["+71%", "organic sessions, 6 months"],
                    ["-2.4s", "cut from load time"],
                    ["+34%", "add-to-cart rate"],
                    ["11", "keywords on page one"],
                  ].map(([num, lab]) => (
                    <div
                      key={lab}
                      className="bg-[#FBF7EF] border border-line rounded-[10px] p-4"
                    >
                      <div className="font-display text-2xl font-semibold text-clay-deep">
                        {num}
                      </div>
                      <div className="text-[13px] text-ink-soft mt-1">
                        {lab}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wider text-xs text-clay-deep mb-3.5">
                  Featured work
                </div>
                <h2 className="font-display text-[clamp(26px,3vw,34px)] font-semibold">
                  A regional outdoor-gear retailer, rebuilt on WooCommerce
                </h2>
                <p className="mt-4 text-ink-soft leading-relaxed text-[15.5px]">
                  Their old site took nine seconds to load on mobile and
                  ranked nowhere for the gear they actually sold. We rebuilt
                  the catalogue structure, moved hosting, and rewrote
                  category pages around how customers actually search — then
                  kept tuning month over month.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex mt-6 items-center gap-2 px-[22px] py-[13px] rounded-lg font-semibold text-[15px] border border-line text-ink hover:border-clay hover:text-clay-deep transition-colors"
                >
                  See the full breakdown
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-paper-2">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal className="max-w-[760px] mx-auto text-center">
            <blockquote className="font-display text-[clamp(20px,2.4vw,28px)] font-medium leading-snug">
              &ldquo;They didn&apos;t just hand over a finished store and
              disappear. Every month we get a short, honest report — and our
              search traffic has roughly doubled since launch.&rdquo;
            </blockquote>
            <div className="mt-6 text-[14.5px] text-ink-soft">
              <strong className="text-ink">Mette Holm</strong> — Owner,
              regional retail client
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <CtaBanner
              heading="Not sure where your site is losing customers?"
              body="We'll record a short video walking through your site or store, free, with three things to fix first."
              primary={{ label: "Request my free audit", href: "/#contact" }}
              secondary={{ label: "Or just say hi", href: "/#contact" }}
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
