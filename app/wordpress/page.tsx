import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloorRail from "@/components/FloorRail";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";
import PriceCard from "@/components/PriceCard";
import FAQAccordion from "@/components/FAQAccordion";

const floors = [
  { id: "hero", label: "G" },
  { id: "included", label: "1" },
  { id: "process", label: "2" },
  { id: "pricing", label: "3" },
  { id: "contact", label: "R" },
];

const included = [
  {
    title: "Custom theme & design",
    body: "A site built around your content and brand, not a generic theme with your logo dropped in.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Speed & Core Web Vitals",
    body: "Image, caching, and code clean-up tuned for Google's real ranking metrics, not just a lab score.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Security & hardening",
    body: "Firewall rules, login protection, and malware clean-up if your current site's already been hit.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: "Content migration",
    body: "Moving from Wix, Squarespace, or an older WordPress install, with redirects so you don't lose your rankings.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>
    ),
  },
  {
    title: "Ongoing care plans",
    body: "Updates, backups, and uptime monitoring, with a real person to call when something looks off.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Editor handover & docs",
    body: "A short recorded walkthrough and a written guide, so your team can update pages without calling us.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
      </svg>
    ),
  },
];

const builtFor = [
  "Business & marketing sites",
  "Blogs & publications",
  "Membership & course sites",
  "Multilingual sites",
  "Booking & directory sites",
];

const steps = [
  {
    idx: "01 — Audit",
    title: "Site & goals review",
    body: "We look at your current site (or sketch, if starting fresh), agree the scope, and send a fixed quote.",
  },
  {
    idx: "02 — Build",
    title: "Design & development",
    body: "Weekly previews on a staging link. You're reviewing a real WordPress site the whole way through.",
  },
  {
    idx: "03 — Launch",
    title: "Go live & test",
    body: "Forms, redirects, speed and security checks done before the switch — and a recorded handover walkthrough.",
  },
  {
    idx: "04 — Care",
    title: "Ongoing support",
    body: "Updates, backups, and a monthly check-in if you're on a care plan — or just call us when you need to.",
  },
];

const faqs = [
  {
    q: "Can you fix our existing site instead of rebuilding it?",
    a: "Often, yes. We start with an audit to see whether the foundation is sound — if hosting and core structure are solid, we can rebuild around what's there instead of starting over.",
  },
  {
    q: "Do you build with Elementor, Divi, or plain Gutenberg?",
    a: "We pick the tool based on who'll be editing the site afterward. Gutenberg for lean, fast sites your team can manage alone; Elementor when you want more visual control. We'll recommend one and explain why.",
  },
  {
    q: "What happens after launch?",
    a: "You get a recorded walkthrough and written docs either way. If you're on a care plan, we also handle updates, backups, and monitoring — and you can reach us directly when something needs attention.",
  },
  {
    q: "How long does a typical project take?",
    a: "A Starter site usually takes 2–3 weeks. Growth projects run 4–7 weeks depending on content readiness. Custom builds are scoped individually after the audit.",
  },
  {
    q: "Do you write the content too?",
    a: "We can. It's usually quoted separately, since good content needs research into how your customers actually search — which ties into the SEO side of the project.",
  },
];

export default function WordPressPage() {
  return (
    <>
      <Header current="WordPress" />
      <FloorRail floors={floors} />

      {/* HERO */}
      <section
        id="hero"
        className="bg-ink text-paper pt-16 pb-24 [background:radial-gradient(900px_460px_at_80%_0%,rgba(217,98,43,0.20),transparent_60%),#1F1B17]"
      >
        <div className="max-w-wrap mx-auto px-7 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-paper/55 text-[13px] mb-5">
              <Link href="/" className="text-paper/78 hover:text-clay transition-colors">
                Home
              </Link>{" "}
              / <Link href="/#services" className="text-paper/78 hover:text-clay transition-colors">Services</Link> / WordPress
            </div>
            <div className="flex items-center gap-2.5 text-clay mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              <span className="font-mono uppercase tracking-wider text-xs">
                WordPress development
              </span>
            </div>
            <h1 className="font-display font-semibold text-[clamp(34px,4.2vw,52px)] leading-[1.08]">
              WordPress sites built to be edited,{" "}
              <em className="not-italic text-clay">not feared.</em>
            </h1>
            <p className="mt-5 text-[17.5px] leading-relaxed text-paper/78 max-w-[520px]">
              Custom builds, honest rebuilds, and ongoing care — for
              marketing sites, blogs, and membership sites that need to stay
              fast and stay yours to manage.
            </p>
            <div className="flex gap-3.5 mt-8 flex-wrap">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-[13px] rounded-lg font-semibold text-[15px] bg-clay text-[#FFF8EF] hover:bg-clay-deep transition-colors"
              >
                See pricing
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-[13px] rounded-lg font-semibold text-[15px] border border-line-dark text-paper hover:border-clay hover:text-clay transition-colors"
              >
                Get a free site audit
              </Link>
            </div>
            <div className="flex gap-7 mt-12 flex-wrap">
              {[
                ["60+", "WordPress sites shipped"],
                ["98%", "pass Core Web Vitals"],
                ["24h", "typical support reply time"],
              ].map(([num, lab]) => (
                <div key={lab}>
                  <div className="font-display text-2xl font-semibold">
                    {num}
                  </div>
                  <div className="text-[13px] text-paper/55 mt-0.5">{lab}</div>
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
                yoursite.com/wp-admin
              </span>
            </div>
            <div className="p-5">
              <div className="bg-white border border-line rounded-[10px] p-4 mb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Page speed score
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-moss/15 text-moss font-semibold">
                    94 / 100
                  </span>
                </div>
              </div>
              <div className="bg-white border border-line rounded-[10px] p-4 mb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                    Plugins active
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-moss/15 text-moss font-semibold">
                    9, all reviewed
                  </span>
                </div>
              </div>
              <div className="bg-white border border-line rounded-[10px] p-4">
                <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2.5">
                  Editing &ldquo;About us&rdquo; page
                </div>
                <div className="flex flex-col gap-2">
                  {[92, 78, 85, 60].map((w, i) => (
                    <span
                      key={i}
                      className="h-[7px] rounded bg-paper-2"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-paper-2 py-8 border-y border-line">
        <div className="max-w-wrap mx-auto px-7 flex justify-between flex-wrap gap-6">
          {[
            ["60+", "WordPress sites launched"],
            ["1.2s", "avg. load time, post-launch"],
            ["15+", "site rescues from broken hosting"],
            ["9yrs", "building on WordPress"],
          ].map(([num, lab]) => (
            <div key={lab}>
              <div className="font-display text-2xl font-semibold">{num}</div>
              <div className="text-[13px] text-ink-soft mt-0.5">{lab}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead
              eyebrow="What's included"
              title="Everything a WordPress project actually needs."
              body="No bloated page builders left running in the background, no fifty unused plugins. Just what your site needs to be fast, safe, and easy to update."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item) => (
              <Reveal key={item.title}>
                <div className="bg-[#FBF7EF] border border-line rounded-card p-6 h-full transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_-18px_rgba(31,27,23,0.25)] hover:border-clay/40">
                  <div className="w-[38px] h-[38px] rounded-[9px] bg-clay/10 flex items-center justify-center text-clay-deep mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed mt-2.5">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="pt-0 pb-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead eyebrow="Built for" title="Sites we build most often" className="mb-8" />
          </Reveal>
          <Reveal>
            <div className="flex gap-3.5 flex-wrap">
              {builtFor.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 bg-[#FBF7EF] border border-line rounded-full pl-2.5 pr-5 py-2.5 text-[14.5px] font-medium"
                >
                  <span className="w-7 h-7 rounded-full bg-moss text-white flex items-center justify-center font-mono text-[11px]">
                    {i + 1}
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-ink text-paper py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead eyebrow="How it runs" title="Four stages, start to finish." dark />
          </Reveal>
          <div className="grid md:grid-cols-4 gap-7 md:gap-0">
            {steps.map((step, i) => (
              <Reveal key={step.idx}>
                <div
                  className={`pr-0 md:pr-5 ${
                    i > 0
                      ? "border-t md:border-t-0 md:border-l border-line-dark pt-6 md:pt-0 md:pl-5"
                      : ""
                  }`}
                >
                  <div className="font-mono text-[13px] text-clay">{step.idx}</div>
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

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead
              eyebrow="Pricing"
              title="Three starting points — every quote is fixed before we start."
              body="Final price depends on page count, content you supply, and any custom features. These ranges reflect typical projects."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            <Reveal>
              <PriceCard
                name="Starter"
                price="kr 12,000"
                priceNote="from"
                desc="A focused brochure site for a small business or freelancer."
                features={[
                  "Up to 6 pages",
                  "Mobile-first custom design",
                  "Contact form & basic SEO setup",
                  "30-minute editor handover",
                ]}
                cta={{ label: "Get a quote", href: "/#contact" }}
              />
            </Reveal>
            <Reveal>
              <PriceCard
                name="Growth"
                price="kr 28,000"
                priceNote="from"
                desc="For sites that need a content strategy, not just pages."
                features={[
                  "Up to 20 pages or blog setup",
                  "Custom theme build",
                  "On-page SEO for every page",
                  "Speed tuning to pass Core Web Vitals",
                  "3 months of care plan included",
                ]}
                cta={{ label: "Get a quote", href: "/#contact" }}
                featured
              />
            </Reveal>
            <Reveal>
              <PriceCard
                name="Custom"
                price="Let's talk"
                desc="Membership sites, multilingual builds, or anything with moving parts."
                features={[
                  "Unlimited pages & custom features",
                  "Membership, LMS, or booking logic",
                  "Multilingual content structure",
                  "Dedicated project lead",
                ]}
                cta={{ label: "Talk to us", href: "/#contact" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <SectionHead eyebrow="Questions" title="Before you ask — a few common ones." />
          </Reveal>
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pb-24">
        <div className="max-w-wrap mx-auto px-7">
          <Reveal>
            <CtaBanner
              heading="Have a WordPress site that's slow or hard to edit?"
              body="Send it over — we'll record a short video showing what's worth fixing first, free."
              primary={{ label: "Request my free audit", href: "/#contact" }}
              secondary={{ label: "See pricing again", href: "#pricing" }}
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
