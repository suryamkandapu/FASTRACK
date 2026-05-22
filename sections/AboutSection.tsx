"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { fadeInUp } from "@/lib/animations";
import { Users, Truck, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "5000+ Clients",
    subtitle: "Trusted nationwide",
  },
  {
    icon: Truck,
    title: "100+ Vehicles",
    subtitle: "Fast delivery fleet",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Delivery",
    subtitle: "Safe cargo handling",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-0"
    >
      <div className="container mx-auto px-4 space-y-0">

        {/* TOP SECTION */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-3"
        >

          {/* ABOUT TAG */}
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7a3e1d]">
              ABOUT US
            </p>

            <div className="mt-2 h-[2px] w-14 rounded-full bg-[#7a3e1d]" />

            <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-[#6b6b6b] md:text-base">
              Premium logistics solutions designed for secure,
              fast and reliable nationwide transport operations.
            </p>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-[#ead9cb] bg-white p-4 shadow-sm"
              >

                {/* ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7a3e1d]/10 text-[#7a3e1d]">
                  <item.icon className="h-5 w-5" />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-[15px] font-semibold text-[#1f1f1f]">
                    {item.title}
                  </p>

                  <p className="text-xs text-[#6b6b6b]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
        >

          {/* IMAGE */}
          <Image
            src="/images/aboutUs.jpg"
            alt="Premium truck fleet"
            width={1600}
            height={900}
            className="h-[540px] w-full object-cover object-left md:h-[700px]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 md:from-black/75 md:via-black/35" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-end px-5 py-7 sm:px-8 md:px-14 lg:px-20">

            <div className="max-w-[330px] sm:max-w-[420px] md:max-w-[560px] text-white">

              {/* SMALL TAG */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f5d1b8] sm:text-xs md:text-sm">
                OUR RESPONSIBILITY
              </p>

              {/* HEADING */}
              <h2 className="text-[38px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-[54px] md:text-[72px]">
                YOUR GOODS,
                <br />
                OUR
                <br />
                RESPONSIBILITY
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 text-[13px] leading-7 text-white/85 sm:text-[15px] md:mt-6 md:text-lg md:leading-9">
                Fasttrack Logistics blends premium transport service,
                secure operations, and luxury-class logistics care
                to deliver freight safely across India with speed,
                precision and reliability.
              </p>

              {/* BUTTON */}
              <div className="mt-6 md:mt-8">
                <Button
                  variant="secondary"
                  className="border-0 bg-white px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#1f1f1f] shadow-xl transition hover:bg-[#f3f3f3] sm:px-8 sm:text-sm"
                >
                  LEARN MORE
                </Button>
              </div>

            </div>
          </div>

          {/* BOTTOM FADE */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}