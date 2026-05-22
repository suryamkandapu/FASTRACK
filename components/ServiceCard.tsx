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
  const whatsappText = `Hello Fasttrack Logistics, I am interested in your ${title} service. Can you please share complete details, pricing and availability?`;

  const handleWhatsAppClick = () => {
    const phoneNumber = "6309635637";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group h-full overflow-hidden rounded-[1.5rem] border border-[#e6d8c8] bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxury"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f5eee8] to-[#ecd7c7] text-xl shadow-sm">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#1f1f1f] tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#6b6b6b]">
        {description}
      </p>
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="mt-5 inline-flex items-center gap-2 rounded-[1rem] bg-[#7a3e1d] px-4 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-[#5d2f16]"
      >
        LET’S CONNECT
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}
