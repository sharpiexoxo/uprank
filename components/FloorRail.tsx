"use client";

import { useEffect, useState } from "react";

export type Floor = { id: string; label: string };

export default function FloorRail({ floors }: { floors: Floor[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    function update() {
      let idx = 0;
      floors.forEach((f, i) => {
        const el = document.getElementById(f.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) idx = i;
      });
      setActiveIdx(idx);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [floors]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3.5">
      {floors.map((f, i) => (
        <div key={f.id} className="flex flex-col items-center gap-3.5">
          {i > 0 && <span className="w-px h-3.5 bg-line" />}
          <button
            onClick={() => goTo(f.id)}
            aria-label={`Go to ${f.label}`}
            className={`w-[34px] h-[34px] rounded-full border font-mono text-[11px] flex items-center justify-center transition-all duration-200 ${
              i === activeIdx
                ? "bg-clay text-white border-clay scale-110"
                : "bg-paper/60 text-ink-soft border-line"
            }`}
          >
            {f.label}
          </button>
        </div>
      ))}
    </div>
  );
}
