import Link from "next/link";

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="flex-none mt-0.5 text-moss"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function PriceCard({
  name,
  price,
  priceNote,
  desc,
  features,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  priceNote?: string;
  desc: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`relative bg-[#FBF7EF] border rounded-2xl p-7 flex flex-col h-full ${
        featured
          ? "border-clay shadow-[0_20px_40px_-24px_rgba(217,98,43,0.4)]"
          : "border-line"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 bg-clay text-white font-mono text-[11px] px-2.5 py-1 rounded-full">
          Most chosen
        </span>
      )}
      <div className="font-mono uppercase tracking-wider text-xs text-clay-deep">
        {name}
      </div>
      <div className="font-display text-3xl font-semibold mt-2.5">
        {price}{" "}
        {priceNote && (
          <span className="text-sm font-medium text-ink-soft font-body">
            {priceNote}
          </span>
        )}
      </div>
      <p className="text-sm text-ink-soft mt-2 leading-relaxed">{desc}</p>
      <ul className="mt-6 mb-7 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 items-start text-[14.5px] leading-relaxed">
            <Check />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-[15px] transition-colors ${
          featured
            ? "bg-clay text-[#FFF8EF] hover:bg-clay-deep"
            : "border border-line text-ink hover:border-clay hover:text-clay-deep"
        }`}
      >
        {cta.label}
      </Link>
    </div>
  );
}
