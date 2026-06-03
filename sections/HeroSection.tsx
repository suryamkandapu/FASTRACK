"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";

// Collection of truck and transportation videos
const TRUCK_VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Premium Logistics in Motion" },
  { id: "9bZkp7q19f0", title: "Modern Transportation Solutions" },
  { id: "CsvF3CV4aaU", title: "Excellence in Freight Transport" },
  { id: "2Xc2owATREg", title: "Global Logistics Network" },
  { id: "o-YBDTqX_ZU", title: "Fast & Reliable Delivery" },
];

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo] = useState(() => TRUCK_VIDEOS[Math.floor(Math.random() * TRUCK_VIDEOS.length)]);

  return (
    <section id="home" className="relative overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Premium logistics truck"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="absolute inset-0 object-cover object-center scale-[1.03] blur-[0.3px] brightness-[1.08] contrast-[1.02] saturate-[0.88]"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.85),rgba(255,252,247,0.6),rgba(244,232,216,0.3),rgba(255,255,255,0.45))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(245,234,220,0.42),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_42%,rgba(255,255,255,0.14))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[74vh] max-w-[1400px] items-center px-5 pb-12 pt-5 sm:min-h-[72vh] sm:px-6 lg:min-h-[76vh] xl:min-h-[78vh] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[680px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="inline-flex max-w-[340px] items-center rounded-full border border-[#c8a788]/35 bg-white/72 px-3 py-1 text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.24em] text-[#5a3a25] shadow-[0_10px_30px_rgba(91,53,31,0.08)] backdrop-blur-sm sm:text-[10px]"
          >
            DBMT • Durga Bhavani Manikanta Transports
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75 }}
            className="mt-3 text-[34px] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#1f120c] drop-shadow-[0_8px_24px_rgba(255,255,255,0.55)] sm:mt-4 sm:text-[50px] md:text-[66px] lg:text-[80px]"
          >
            WE DELIVER
            <br />
            YOUR TRUST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-3 max-w-[560px] text-[14px] leading-7 text-[#4f3827] sm:mt-4 sm:text-base sm:leading-8"
          >
            Premium transport solutions for modern businesses that need nationwide reach, dependable execution, and refined customer experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <motion.button
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-[50px] items-center justify-center gap-3 rounded-[1rem] bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f1f1f] shadow-[0_18px_40px_rgba(91,53,31,0.14)] transition sm:h-[56px] sm:px-6 sm:text-[12px]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7a3e1d]/10 text-[#7a3e1d]">
                <Play size={14} className="ml-[1px]" />
              </span>
              Watch Video
            </motion.button>

            <Link
              href="#impact"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[1rem] border border-[#d8b79a]/50 bg-white/72 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f1f1f] shadow-[0_12px_28px_rgba(91,53,31,0.08)] backdrop-blur-sm transition hover:border-[#7a3e1d]/50 hover:bg-white sm:h-[56px] sm:px-6 sm:text-[12px]"
            >
              Our Impact
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f5eee8] to-transparent sm:h-20" />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={selectedVideo.id}
        title={selectedVideo.title}
      />
    </section>
  );
}