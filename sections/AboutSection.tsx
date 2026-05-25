"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Headphones, ShieldCheck, Sparkles, Truck, Users } from "lucide-react";
import { fadeInUp, staggerIn } from "@/lib/animations";

const impactItems = [
  {
    title: "14+ Years Experience",
    subtitle: "Trusted logistics expertise",
    value: 14,
    suffix: "+",
    icon: ShieldCheck,
    accent: "from-[#7a3e1d] to-[#b8683e]",
  },
  {
    title: "5000+ Happy Customers",
    subtitle: "Serving clients nationwide",
    value: 5000,
    suffix: "+",
    icon: Users,
    accent: "from-[#9e532c] to-[#ceb091]",
  },
  {
    title: "14000+ Safe Deliveries Completed",
    subtitle: "Fast and secure transport",
    value: 14000,
    suffix: "+",
    icon: Truck,
    accent: "from-[#5c2d15] to-[#8f4d22]",
  },
  {
    title: "24/7 Support",
    subtitle: "Always available for assistance",
    value: 24,
    suffix: "/7",
    icon: Headphones,
    accent: "from-[#8f4d22] to-[#d79a6a]",
  },
];

function AnimatedValue({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="impact" className="py-2 sm:py-3">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-[#ead9cb] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(250,244,237,0.98))] p-5 shadow-[0_24px_80px_rgba(122,62,29,0.12)] sm:p-7"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a3e1d] sm:text-[11px]">
                OUR IMPACT
              </p>
              <h2 className="mt-3 text-[28px] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#1f1f1f] sm:text-[36px] md:text-[42px]">
                Premium logistics with measurable trust.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#605551] sm:text-[15px]">
                Every shipment is handled with a premium, dependable process built around speed, safety, and long-term client confidence.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8d4c7] bg-[#fffdfa] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c2d15]">
              <Sparkles size={14} className="text-[#7a3e1d]" />
              Premium performance
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerIn}
            className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {impactItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-[1.5rem] border border-[#ead9cb] bg-white/90 p-4 shadow-[0_20px_40px_rgba(55,24,8,0.08)] transition"
                >
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-[0_18px_30px_rgba(122,62,29,0.22)]`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-4 text-[24px] font-black text-[#1f1f1f] sm:text-[26px]">
                    <AnimatedValue value={item.value} suffix={item.suffix} />
                  </p>

                  <p className="mt-2 text-[15px] font-semibold text-[#1f1f1f]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#6b6b6b]">
                    {item.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3e1d]">
                    Premium delivery
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}