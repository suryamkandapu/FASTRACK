"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPinned, Phone } from "lucide-react";

export function StatsContactSection() {
  return (
    <section id="contact" className="pb-6 pt-1 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-2.5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] bg-[linear-gradient(140deg,#4b240f,#7a3e1d_55%,#28110b)] p-[1px] shadow-[0_24px_80px_rgba(122,62,29,0.2)]"
          >
            <div className="relative overflow-hidden rounded-[1.45rem] bg-[#1f120c] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_24%)]" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f5eee8]/85">
                  CONTACT
                </p>
                <h2 className="mt-2 max-w-[260px] text-[26px] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[30px]">
                  Speak with the DBMT team.
                </h2>
                <p className="mt-3 max-w-[360px] text-sm font-normal leading-[1.8] text-[rgba(255,255,255,0.88)]">
                  For transport planning, quote requests, and urgent support, connect directly with our logistics team using the details below.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#f5eee8]/75">Coverage</p>
                    <p className="mt-2 text-sm font-normal leading-[1.8] text-[rgba(255,255,255,0.88)]">Nationwide cargo support and regional coordination.</p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#f5eee8]/75">Response</p>
                    <p className="mt-2 text-sm font-normal leading-[1.8] text-[rgba(255,255,255,0.88)]">Fast assistance for priority shipments and logistics queries.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] border border-[#d7c5b5] bg-white p-4 shadow-[0_24px_60px_rgba(122,62,29,0.1)] sm:p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#7a3e1d]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a3e1d]">
                Premium contact
              </span>
              <span className="rounded-full bg-[#f5eee8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5c2d15]">
                Client-ready support
              </span>
            </div>

            <h3 className="mt-3 text-[24px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#1f1f1f] sm:text-[28px]">
              Reach us anytime.
            </h3>
            <p className="mt-2 max-w-[560px] text-sm leading-7 text-[#5f5a58]">
              Choose the fastest path to connect with our team for quotes, dispatch, or business support.
            </p>

            <div className="mt-4 grid gap-3">
              <a
                href="tel:+919505984225"
                className="group flex items-center justify-between rounded-[1.15rem] border border-[#ead9cb] bg-[#faf6f1] p-3 transition hover:-translate-y-0.5 hover:border-[#7a3e1d] hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7a3e1d]/10 text-[#7a3e1d]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a3e1d]">Call</p>
                    <p className="mt-1 text-[16px] font-semibold text-[#1f1f1f]">9505984225</p>
                    <p className="mt-1 text-sm text-[#6b6b6b]">24/7 support availability</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#7a3e1d] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="mailto:dbmtransport@gmail.com"
                className="group flex items-center justify-between rounded-[1.15rem] border border-[#ead9cb] bg-[#faf6f1] p-3 transition hover:-translate-y-0.5 hover:border-[#7a3e1d] hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7a3e1d]/10 text-[#7a3e1d]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a3e1d]">Email</p>
                    <p className="mt-1 text-[16px] font-semibold text-[#1f1f1f]">dbmtransport@gmail.com</p>
                    <p className="mt-1 text-sm text-[#6b6b6b]">Quick response for quotes and assistance</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#7a3e1d] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.1rem] bg-[#f8f2eb] px-3 py-3">
                <Clock3 className="h-4 w-4 text-[#7a3e1d]" />
                <p className="mt-2 text-[13px] font-semibold text-[#1f1f1f]">Business hours</p>
                <p className="mt-1 text-sm text-[#6b6b6b]">24 hours a day, 7 days a week</p>
              </div>
              <div className="rounded-[1.1rem] bg-[#f8f2eb] px-3 py-3">
                <MapPinned className="h-4 w-4 text-[#7a3e1d]" />
                <p className="mt-2 text-[13px] font-semibold text-[#1f1f1f]">Service reach</p>
                <p className="mt-1 text-sm text-[#6b6b6b]">Pan-India logistics support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}