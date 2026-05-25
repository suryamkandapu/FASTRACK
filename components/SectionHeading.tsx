import React from "react";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-6">
      <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-[#7A3E1D]">{eyebrow}</p>
      <h2 className="text-[24px] font-[800] uppercase leading-tight tracking-[-0.04em] text-[#1f1f1f] sm:text-[30px] md:text-[36px]">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-[#6b6b6b] sm:text-base sm:leading-7">{description}</p> : null}
    </div>
  );
}
