"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7a3e1d] text-white shadow-[0_20px_40px_rgba(122,62,29,0.24)] transition hover:scale-105"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  ) : null;
}
