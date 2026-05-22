"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Truck,
  Headphones,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { fadeInUp, staggerIn } from "@/lib/animations";

const stats = [
  { value: "+10", label: "Years Experience", icon: Activity },
  { value: "+5000", label: "Happy Customers", icon: Users },
  { value: "+100", label: "Vehicles", icon: Truck },
  { value: "24/7", label: "Support", icon: Headphones },
];

export function StatsContactSection() {
  return (
    <section id="contact" className="py-2 md:py-4 lg:py-6">
      <div className="container mx-auto grid gap-4 lg:grid-cols-[0.8fr_0.9fr]">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerIn}
          className="rounded-[1.5rem] bg-gradient-to-br from-[#4b240f] via-[#7a3e1d] to-[#29120b] p-3 text-white shadow-xl"
        >
          <div className="relative overflow-hidden rounded-[1.3rem] bg-white/5 p-4 md:p-5">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_30%)]" />

            <div className="relative">
              
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5eee8]/90">
                OUR IMPACT
              </p>

              <h2 className="mt-2 max-w-[220px] text-[24px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white md:max-w-[260px] md:text-[34px] lg:text-[42px]">
                INDUSTRY TRUST IN EVERY MILE
              </h2>

              <p className="mt-3 max-w-[340px] text-[11px] leading-5 text-[#f5eee8]/80 md:text-[12px] md:leading-6">
                Years of premium logistics service with a fleet and
                team built to deliver goods with executive-level care.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {stats.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp}
                    className="rounded-[1rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl"
                  >
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                      <item.icon className="h-4 w-4" />
                    </div>

                    <p className="text-[26px] font-bold text-white md:text-[30px]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[10px] text-[#f5eee8]/80 md:text-[11px]">
                      {item.label}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="rounded-[1.5rem] border border-[#d7c5b5] bg-white p-5 shadow-lg md:p-6 lg:p-7"
        >

          {/* TAG */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7a3e1d]">
            CONTACT
          </p>

          {/* HEADING */}
          <h3 className="mt-2 max-w-[450px] text-[28px] font-bold leading-[1] tracking-[-0.04em] text-[#1f1f1f] md:text-[38px] lg:text-[46px]">
            Get in touch with our logistics team.
          </h3>

          {/* DESC */}
          <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-[#6b6b6b] md:text-[14px]">
            Reach out directly through phone or email for
            transport inquiries, business partnerships,
            shipment assistance and logistics support.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-6 grid gap-4">

            {/* CALL CARD */}
            <a
              href="tel:+6309635637"
              className="group flex items-center justify-between rounded-[1.2rem] border border-[#ead9cb] bg-[#faf6f1] p-4 transition hover:border-[#7a3e1d] hover:bg-[#fff]"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7a3e1d]/10 text-[#7a3e1d]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a3e1d]">
                    Call Us
                  </p>

                  <h4 className="mt-1 text-[18px] font-semibold text-[#1f1f1f]">
                    6309635637
                  </h4>

                  <p className="mt-1 text-[12px] text-[#6b6b6b]">
                    Available 24/7 for support
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-[#7a3e1d] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* EMAIL CARD */}
            <a
              href="mailto:hello@fasttrack.com"
              className="group flex items-center justify-between rounded-[1.2rem] border border-[#ead9cb] bg-[#faf6f1] p-4 transition hover:border-[#7a3e1d] hover:bg-[#fff]"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7a3e1d]/10 text-[#7a3e1d]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a3e1d]">
                    Email Us
                  </p>

                  <h4 className="mt-1 text-[18px] font-semibold text-[#1f1f1f]">
                    hello@fasttrack.com
                  </h4>

                  <p className="mt-1 text-[12px] text-[#6b6b6b]">
                    Quick response guaranteed
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-[#7a3e1d] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}