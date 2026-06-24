import Link from "next/link";

export default function CtaBanner({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="bg-gradient-to-br from-clay to-clay-deep text-[#FFF8EF] rounded-[18px] p-9 md:p-12 flex items-center justify-between gap-7 flex-wrap">
      <div>
        <h2 className="font-display text-[clamp(24px,2.8vw,32px)] font-semibold max-w-[480px]">
          {heading}
        </h2>
        <p className="mt-2.5 text-[#FFF8EF]/85 text-[15px]">{body}</p>
      </div>
      <div className="flex gap-3.5 flex-wrap">
        <Link
          href={primary.href}
          className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-lg font-semibold text-[15px] bg-ink text-[#FFF8EF] hover:bg-black transition-colors"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-lg font-semibold text-[15px] border border-[#FFF8EF]/45 text-[#FFF8EF] hover:border-ink hover:text-ink transition-colors"
        >
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}
