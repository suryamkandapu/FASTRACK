"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const whatsappText = `Hello DBMT Logistics, I am interested in your ${title} service. Can you please share complete details, pricing and availability?`;

  const handleWhatsAppClick = () => {
    const phoneNumber = "919505984225";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group h-full overflow-hidden rounded-[1.25rem] border border-[#e6d8c8] bg-white p-3 shadow-[0_16px_40px_rgba(55,24,8,0.08)] transition duration-300 hover:shadow-[0_22px_50px_rgba(55,24,8,0.12)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5eee8] to-[#ecd7c7] text-lg shadow-sm">
        {icon}
      </div>
      <h3 className="mt-3 text-[17px] font-semibold text-[#1f1f1f] tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">
        {description}
      </p>
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="mt-4 inline-flex items-center gap-2 rounded-[1rem] bg-[#7a3e1d] px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[#5d2f16]"
      >
        LET’S CONNECT
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}
