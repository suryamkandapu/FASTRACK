"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export  function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[560px] overflow-hidden sm:h-[680px] lg:h-[760px]"
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero.png"
        alt="Luxury Truck"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f5eee8]/95 via-[#f5eee8]/80 to-transparent" />

      {/* MOBILE EXTRA OVERLAY */}
      <div className="absolute inset-0 z-10 bg-[#f5eee8]/25 lg:hidden" />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-center px-5 pt-8 sm:px-8 lg:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-[560px]"
        >
          {/* SMALL TEXT */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b3a1e] sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
            SAFE. RELIABLE. ON TIME.
          </p>

          {/* HEADING */}
          <h1 className="text-[44px] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#1f1f1f] sm:text-[58px] md:text-[78px] xl:text-[92px]">
            WE DELIVER
            <br />
            YOUR TRUST
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-[#4b4b4b] sm:mt-8 sm:text-lg sm:leading-9">
            Reliable transport solutions for your business.
            <br />
            On time. Every time. Anywhere in India.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            
            {/* GET QUOTE */}
            <button className="flex h-[54px] w-full items-center justify-center rounded-xl bg-[#6b3a1e] px-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#4b240f] sm:h-[58px] sm:min-w-[190px] sm:w-auto sm:px-8 sm:text-[15px]">
              GET A QUOTE
            </button>

            {/* WATCH VIDEO */}
            <button className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-[#d8c3b5] bg-white/95 px-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1f1f1f] shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-[58px] sm:min-w-[190px] sm:w-auto sm:px-8 sm:text-[15px]">
              
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6b3a1e] sm:h-9 sm:w-9">
                <Play
                  size={14}
                  className="ml-[2px] text-[#6b3a1e] sm:h-4 sm:w-4"
                />
              </span>

              WATCH VIDEO
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-[#f5eee8] to-transparent sm:h-32" />
    </section>
  );
}