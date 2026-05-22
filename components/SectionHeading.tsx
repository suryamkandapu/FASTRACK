import React from "react";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl text-center mx-auto mb-12">
      <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-[#7A3E1D] mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-[800] uppercase leading-tight tracking-[-0.04em] text-[#1f1f1f]">{title}</h2>
      {description ? <p className="mt-5 text-base text-[#6b6b6b] leading-8">{description}</p> : null}
    </div>
  );
}
