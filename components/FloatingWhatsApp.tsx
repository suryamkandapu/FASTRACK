"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6309635637"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition"
      aria-label="WhatsApp chat"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
