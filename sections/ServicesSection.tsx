"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { fadeInUp, staggerIn } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="WHAT WE OFFER"
          description="Premium logistics services designed for modern enterprises and trusted supply chains."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerIn}
          className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
