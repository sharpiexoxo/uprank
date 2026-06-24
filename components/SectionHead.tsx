export default function SectionHead({
  eyebrow,
  title,
  body,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-[640px] mb-12 ${className}`}>
      <div
        className={`font-mono uppercase tracking-wider text-xs ${
          dark ? "text-clay" : "text-clay-deep"
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="font-display text-[clamp(28px,3.2vw,38px)] font-semibold mt-3.5">
        {title}
      </h2>
      {body && (
        <p
          className={`mt-3.5 text-base leading-relaxed ${
            dark ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
