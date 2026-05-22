import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { fadeIn, fadeInUp, staggerIn } from "@/lib/animations";
import { featureGrid } from "@/lib/data";

export default function FullTruckLoadPage() {
  return (
    <PageTransition>
      <Navbar />
      <section className="relative overflow-hidden bg-[#120907] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_22%)]" />
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">FULL TRUCK LOAD SERVICES</p>
            <h1 className="text-5xl font-black uppercase leading-tight tracking-[-0.04em]">Reliable large-scale transportation solutions across India.</h1>
            <p className="max-w-xl text-base leading-8 text-[#ddd3c9]">Dedicated trucks, secure cargo handling, and premium long-haul service built for businesses that require full-capacity freight with executive-grade delivery control.</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="https://wa.me/919876543210" icon="arrow" className="min-w-[170px]">WhatsApp</Button>
              <Button variant="secondary" as="a" href="tel:+919876543210" className="min-w-[170px] text-[#1f1f1f] bg-white">Call Now</Button>
            </div>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="relative rounded-[2rem] bg-[#1f1510]/90 p-6 shadow-luxury">
            <Image src="/images/full-truck-hero.svg" alt="Full truck load service" width={760} height={520} className="h-auto w-full rounded-[2rem] object-cover" />
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Overview</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">A premium freight model for complete cargo control.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6b6b6b]">Every shipment receives dedicated vehicle allocation, tailored route planning, and executive-class handling from pickup through delivery. Full truck load logistics minimize transit complexity, accelerate schedules, and keep your cargo secure.</p>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-[#e6d8c8] bg-[#faf3ed] p-8 shadow-soft">
            {[
              "Dedicated trucks for high-volume cargo",
              "Fast delivery with lane optimization",
              "Secure handling for fragile freight",
              "Long-distance transportation excellence"
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-[#7a3e1d]/10 text-[#7a3e1d]">✓</span>
                <p className="text-sm leading-7 text-[#4a4a4a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Features</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Essential capabilities for executive cargo flow.</h2>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={staggerIn} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureGrid.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp} className="rounded-[1.8rem] border border-[#e6d8c8] bg-white p-8 text-[#1f1f1f] shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f5eee8] text-xl shadow-sm">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b6b6b]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="bg-[#faf4ee] py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">WHY CHOOSE US</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Trusted processes for premium full-load service</h2>
            <div className="mt-8 space-y-6">
              {[
                "Dedicated vehicle availability on every route.",
                "Strategic planning for optimal transit times.",
                "Secure regional hubs and cargo staging.",
                "Real-time monitoring with executive updates."
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-[#7a3e1d]" />
                  <p className="text-base text-[#5e5e5e]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#e6d8c8] bg-white p-8 shadow-soft">
            <div className="space-y-6">
              {[
                { step: "Booking", detail: "Confirm cargo details and route for premium FTL service." },
                { step: "Pickup", detail: "Scheduled collection from your warehouse or dock." },
                { step: "Transit", detail: "Real-time tracked travel across dedicated lanes." },
                { step: "Delivery", detail: "White glove delivery at destination with status updates." }
              ].map((item) => (
                <div key={item.step} className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7a3e1d]">{item.step}</p>
                  <p className="text-base leading-7 text-[#5e5e5e]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="rounded-[2rem] bg-[#1f1510] p-12 text-white shadow-luxury">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">BOOK YOUR TRUCK</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em]">Ship your full truck load with confidence</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d7c0b1]">Reach out to our operations specialists for a premium route proposal, dedicated vehicle assignment, and secure nationwide planning.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="https://wa.me/919876543210" icon="arrow" className="min-w-[170px]">WhatsApp</Button>
              <Button variant="secondary" as="a" href="tel:+919876543210" className="min-w-[170px] text-[#1f1f1f] bg-white">Get Quote</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}
