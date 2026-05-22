import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { TopBar } from "@/components/TopBar";
import { fadeIn, fadeInUp, staggerIn } from "@/lib/animations";
import { fleetCategories } from "@/lib/data";

const safetyFeatures = [
  { title: "Secure handling", description: "Safety protocols with premium packaging care." },
  { title: "Temperature control", description: "Climate management for fragile cargo." },
  { title: "Cargo insurance", description: "Comprehensive cover for every movement." }
];

const reviews = [
  { message: "Nationwide coverage and elite freight service. Our goods arrived on time, every time.", author: "Ayesha R." },
  { message: "The network strength made our large shipments effortless to manage.", author: "Sabir P." }
];

export default function GoodsTransportPage() {
  return (
    <PageTransition>
      <Navbar />
      <section className="relative overflow-hidden bg-[#120907] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_20%)]" />
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">GOODS TRANSPORT SERVICES</p>
            <h1 className="text-5xl font-black uppercase tracking-[-0.04em]">Nationwide logistics for corporate freight movement.</h1>
            <p className="max-w-xl text-base leading-8 text-[#d9c9b9]">A modern logistics network that delivers large-scale goods across industry, retail and manufacturing with confidence, control and corporate-grade execution.</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#contact" icon="arrow" className="min-w-[170px]">Transport With Confidence</Button>
              <Button variant="secondary" className="min-w-[170px] text-[#1f1f1f] bg-white">Request Plan</Button>
            </div>
          </div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="relative rounded-[2rem] bg-[#1f1510]/90 p-4 shadow-luxury">
            <Image src="/images/goods-transport-hero.svg" alt="Goods transport services" width={720} height={520} className="h-auto w-full rounded-[2rem] object-cover" />
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">India Coverage</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Interactive logistics visualization</h2>
        </div>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="relative overflow-hidden rounded-[2rem] border border-[#e6d8c8] bg-[#faf3ed] p-8 shadow-soft">
          <div className="h-[420px] rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(122,62,29,0.12),_transparent_50%)] p-10">
            <div className="relative h-full rounded-[1.75rem] bg-[linear-gradient(180deg,_rgba(122,62,29,0.12),_rgba(245,238,232,0.9))]">
              <div className="absolute left-10 top-16 h-14 w-14 rounded-full bg-[#7a3e1d]/20" />
              <div className="absolute right-16 top-24 h-12 w-12 rounded-full bg-[#f5eee8]/70" />
              <div className="absolute bottom-16 left-16 h-12 w-12 rounded-full bg-[#7a3e1d]/15" />
              <div className="absolute inset-x-24 top-28 h-24 rounded-[2rem] bg-[#e4d2c1]/90" />
            </div>
          </div>
        </motion.div>
      </section>
      <section className="container mx-auto py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Transport categories</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">A tailored solution for every cargo class.</h2>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={staggerIn} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {fleetCategories.map((category) => (
            <motion.div key={category.title} variants={fadeInUp} className="overflow-hidden rounded-[1.8rem] border border-[#e6d8c8] bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
              <div className={`h-20 w-20 rounded-[1.6rem] bg-gradient-to-br ${category.color} shadow-sm`} />
              <h3 className="mt-6 text-xl font-semibold text-[#1f1f1f]">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b6b6b]">Reliable coverage and cargo-specific planning for your business needs.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="bg-[#faf4ee] py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Safety</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Protecting your goods from origin to destination.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6b6b6b]">Our nationwide network maintains strict safety protocols, secure cargo handling and advanced monitoring systems on every journey.</p>
          </div>
          <div className="grid gap-5">
            {safetyFeatures.map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[1.8rem] border border-[#e6d8c8] bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-[#1f1f1f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6b6b6b]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Fleet showcase</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Premium vehicles for every nationwide route.</h2>
          </div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="relative overflow-hidden rounded-[2rem] border border-[#e6d8c8] bg-[#1f1410] p-6 shadow-luxury">
            <Image src="/images/fleet-hero.svg" alt="Truck fleet showcase" width={900} height={520} className="h-auto w-full rounded-[2rem] object-cover" />
          </motion.div>
        </div>
      </section>
      <section className="bg-[#1f1510] py-24 text-white">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_0.75fr] items-center rounded-[2rem] border border-[#4d361f] bg-[#221710]/90 p-12 shadow-luxury">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">Customer reviews</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em]">Trusted feedback from our logistics partners.</h2>
          </div>
          <div className="space-y-4">
            {reviews.map((item) => (
              <motion.div key={item.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="rounded-[1.8rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <p className="text-base leading-7 text-[#f5eee8]">“{item.message}”</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f5eee8]">{item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}
