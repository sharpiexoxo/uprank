"use client";

import { useRef, useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="max-w-[760px]">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full text-left bg-none border-none py-[22px] flex justify-between items-center cursor-pointer font-display text-[17px] font-medium text-ink"
            >
              {item.q}
              <span
                className={`text-xl text-clay flex-none ml-4 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="faq-a"
              style={{
                maxHeight: isOpen ? refs.current[i]?.scrollHeight ?? 200 : 0,
              }}
            >
              <p className="pb-[22px] text-[15px] leading-relaxed text-ink-soft max-w-[660px]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
