"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919505984225"
      target="_blank"
      rel="noreferrer"
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: [0, -6, 0], opacity: 1 }}
      transition={{
        duration: 2.4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_20px_45px_rgba(37,211,102,0.33)] ring-4 ring-white/10 transition sm:bottom-5 sm:right-5"
      aria-label="WhatsApp chat"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2.5A9.5 9.5 0 0 0 3.2 15.1L2.5 21.5l6.5-1.66a9.5 9.5 0 1 0 3.04-17.34Zm0 17.3a7.9 7.9 0 0 1-4-1.08l-.28-.17-3.86.99.98-3.77-.18-.29a7.9 7.9 0 1 1 7.34 4.32Zm4.36-5.93c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32 1 2.48.14.16 1.72 2.64 4.18 3.7.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </motion.a>
  );
}
