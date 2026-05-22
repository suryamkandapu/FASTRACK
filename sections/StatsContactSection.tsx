"use client";

import { motion } from "framer-motion";
import { Activity, Users, Truck, Headphones } from "lucide-react";
import { fadeInUp, staggerIn } from "@/lib/animations";

const stats = [
  { value: "+10", label: "Years Experience", icon: Activity },
  { value: "+5000", label: "Happy Customers", icon: Users },
  { value: "+100", label: "Vehicles", icon: Truck },
  { value: "24/7", label: "Support", icon: Headphones }
];

export function StatsContactSection() {
  return (
    <section className="py-2 md:py-4 lg:py-6">
      <div className="container mx-auto grid gap-4 lg:grid-cols-[0.8fr_0.9fr]">

        {/* LEFT CARD */}
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

              {/* TAG */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5eee8]/90">
                OUR IMPACT
              </p>

              {/* HEADING */}
              <h2 className="mt-2 max-w-[220px] text-[24px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white md:max-w-[260px] md:text-[34px] lg:text-[42px]">
                INDUSTRY TRUST IN EVERY MILE
              </h2>

              {/* DESC */}
              <p className="mt-3 max-w-[340px] text-[11px] leading-5 text-[#f5eee8]/80 md:text-[12px] md:leading-6">
                Years of premium logistics service with a fleet and
                team built to deliver goods with executive-level care.
              </p>

              {/* STATS */}
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

        {/* RIGHT FORM */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="rounded-[1.5rem] border border-[#d7c5b5] bg-white p-4 shadow-lg md:p-5 lg:p-6"
        >

          {/* TAG */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7a3e1d]">
            CONTACT
          </p>

          {/* HEADING */}
          <h3 className="mt-2 max-w-[420px] text-[26px] font-bold leading-[1] tracking-[-0.04em] text-[#1f1f1f] md:text-[34px] lg:text-[42px]">
            Get in touch with our logistics team.
          </h3>

          {/* FORM */}
          <form className="mt-5 space-y-3">

            {[
              {
                label: "Name",
                type: "text",
                placeholder: "John Doe"
              },
              {
                label: "Email",
                type: "email",
                placeholder: "info@fasttracktransport.com"
              },
              {
                label: "Phone",
                type: "tel",
                placeholder: "+91 99999 99999"
              }
            ].map((field) => (
              <label
                key={field.label}
                className="block space-y-1.5"
              >
                <span className="text-[11px] text-[#6b6b6b]">
                  {field.label}
                </span>

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-[44px] w-full rounded-xl border border-[#e4d7c7] bg-[#f9f4ee] px-4 text-[12px] text-[#1f1f1f] outline-none transition focus:border-[#7a3e1d]"
                />
              </label>
            ))}

            {/* MESSAGE */}
            <label className="block space-y-1.5">
              <span className="text-[11px] text-[#6b6b6b]">
                Message
              </span>

              <textarea
                placeholder="Tell us about your shipment"
                className="min-h-[110px] w-full rounded-xl border border-[#e4d7c7] bg-[#f9f4ee] px-4 py-3 text-[12px] text-[#1f1f1f] outline-none transition focus:border-[#7a3e1d]"
              />
            </label>

            {/* BUTTON */}
            <button className="mt-2 inline-flex h-[42px] items-center justify-center rounded-xl bg-[#4b240f] px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#7a3e1d]">
              SEND MESSAGE
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}