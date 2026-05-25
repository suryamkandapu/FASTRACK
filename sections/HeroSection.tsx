"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Premium logistics truck"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120907]/93 via-[#120907]/80 to-[#f5eee8]/18" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,238,232,0.14),transparent_45%,rgba(122,62,29,0.12))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-[1400px] items-center px-4 pb-8 pt-5 sm:min-h-[72vh] sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[680px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="inline-flex max-w-[320px] items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.24em] text-[#f6d8c3] backdrop-blur-sm sm:text-[10px]"
          >
            DBMT • Durga Bhavani Manikanta Transports
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75 }}
            className="mt-3 text-[38px] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:mt-4 sm:text-[52px] md:text-[68px] lg:text-[80px]"
          >
            WE DELIVER
            <br />
            YOUR TRUST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-3 max-w-[560px] text-[14px] leading-7 text-[#f8efe8]/88 sm:mt-4 sm:text-base sm:leading-8"
          >
            Premium transport solutions for modern businesses that need nationwide reach, dependable execution, and refined customer experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <motion.a
              href="#services"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-[50px] items-center justify-center gap-3 rounded-[1rem] bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f1f1f] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition sm:h-[56px] sm:px-6 sm:text-[12px]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7a3e1d]/10 text-[#7a3e1d]">
                <Play size={14} className="ml-[1px]" />
              </span>
              Watch Video
            </motion.a>

            <Link
              href="#impact"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[1rem] border border-white/30 bg-white/10 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:border-[#f6d8c3]/70 hover:bg-white/15 sm:h-[56px] sm:px-6 sm:text-[12px]"
            >
              Our Impact
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#f5eee8] to-transparent sm:h-20" />
    </section>
  );
}