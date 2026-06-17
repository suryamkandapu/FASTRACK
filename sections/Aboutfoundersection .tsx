"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/animations";

export function AboutFounderSection() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="container relative mb-6 rounded-[1.25rem] bg-white/95 px-4 py-4 shadow-luxury backdrop-blur-xl md:mb-8 md:px-6 md:py-5"
    >
      {/* Section Header */}
      <div className="mb-4 rounded-[1.2rem] border border-[#ecd7c7] bg-[#fffaf4] p-4 shadow-sm sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#7a3e1d]/90">
          Our Story
        </p>
        <h2 className="mt-2 text-[26px] font-black uppercase tracking-[-0.04em] text-[#1f1f1f] sm:text-[32px]">
          Meet the Founder
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b6b6b] sm:text-base">
          The man behind Durga Bhavani Manikanta Transport — built on grit, loyalty, and an unshakable drive for independence.
        </p>
      </div>

      {/* Content Box */}
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">

        {/* Left — Story Content */}
        <div className="flex flex-col gap-3 rounded-[1.2rem] border border-[#ecd7c7] bg-[#fffaf4] p-5 shadow-soft">

          {/* Tagline */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#7a3e1d]">
              Building Success
            </p>
            <h3 className="mt-1 text-[20px] font-bold leading-snug text-[#1f1f1f] sm:text-[22px]">
              One Journey at a Time.
            </h3>
          </div>

          <hr className="border-[#ecd7c7]" />

          {/* Bio paragraphs */}
          <div className="space-y-3 text-sm leading-7 text-[#4a4a4a]">
            <p>
              <span className="font-semibold text-[#1f1f1f]">Mr. Arja Sathyanarayana</span> is the driving force behind{" "}
              <span className="font-semibold text-[#7a3e1d]">Durga Bhavani Manikanta Mini Transport (DBM)</span>.
              His story is defined by an unwavering resolve to be his own boss and an incredible dedication to service.
            </p>

            <p>
              Born in <span className="font-semibold text-[#1f1f1f]">1980</span> in{" "}
              <span className="font-semibold text-[#1f1f1f]">Akiveedu</span>, Mr. Sathyanarayana moved to Hyderabad in{" "}
              <span className="font-semibold text-[#1f1f1f]">1993</span>, beginning his professional life with a meager salary of{" "}
              <span className="font-semibold text-[#7a3e1d]">₹1,000</span>. Through sheer skill and diligence he quickly advanced — but his determination to achieve independence never faded.
            </p>

            <p>
              After an initial setback in scrap metal and dairy ventures, he launched{" "}
              <span className="font-semibold text-[#7a3e1d]">DBM in 2012</span>, buying his first{" "}
              <span className="font-semibold text-[#1f1f1f]">TATA Ace</span> on loan and officially starting his transport empire.
              That bold move turned early struggles into massive success — a journey from a{" "}
              <span className="font-semibold text-[#7a3e1d]">₹1,000</span> salary to earning in{" "}
              <span className="font-semibold text-[#7a3e1d]">lakhs</span> today.
            </p>

            <p>
              DBM's success is built on his foundational principle: dedication to customers and{" "}
              <span className="font-semibold text-[#7a3e1d]">respect</span> for every worker.
              This culture of <span className="font-semibold text-[#7a3e1d]">loyalty</span> and service ensures DBM operates{" "}
              <span className="font-semibold text-[#7a3e1d]">efficiently</span> and continues to thrive.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-1 grid grid-cols-3 gap-2">
            {[
              { value: "2012", label: "Founded" },
              { value: "14+", label: "Years of service" },
              { value: "₹1K→L", label: "Growth story" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[0.9rem] border border-[#d5c4b6]/60 bg-white px-3 py-2.5 text-center shadow-sm"
              >
                <p className="text-[18px] font-black text-[#7a3e1d]">{stat.value}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#6b6b6b]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Founder Photo */}
        <div className="flex items-stretch justify-center lg:w-[240px]">
          <div className="flex w-full flex-col items-center justify-between rounded-[1.2rem] border border-[#ecd7c7] bg-[#fffaf4] p-4 shadow-soft">

            {/* Photo frame */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-[1rem] bg-[#f0e6da] sm:h-[260px] lg:h-full lg:min-h-[280px]">
              <Image
                src="/images/founder.jpg"         
                alt="Mr. Arja Sathyanarayana — Founder, DBM Transport"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 240px"
              />
              {/* Subtle bottom gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fffaf4]/80 to-transparent" />
            </div>

            {/* Name plate */}
            <div className="mt-3 w-full text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]">
                Arja Sathyanarayana
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#7a3e1d]">
                Founder &amp; Director
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}