import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { fadeIn, fadeInUp, staggerIn } from "@/lib/animations";

const benefits = [
  "Cost-effective shared transport",
  "Flexible scheduling for smaller consignments",
  "Ideal for startups and regional trades",
  "Integrated load planning and consolidation"
];

const timeline = [
  { stage: "Quote", detail: "Submit cargo details and we plan the ideal shared solution." },
  { stage: "Collect", detail: "Cargo is picked up and consolidated with precision." },
  { stage: "Transit", detail: "Designed routes reduce cost while keeping delivery times competitive." },
  { stage: "Deliver", detail: "Safe delivery with full communication and support." }
];

const faqs = [
  { q: "How does part load reduce cost?", a: "By sharing truck capacity across consignments, costs are optimized without sacrificing safety." },
  { q: "Can I still track my shipment?", a: "Yes — every shipment gets live updates and dedicated customer support." },
  { q: "Are fragile items supported?", a: "Absolutely — specialized packing and handling are applied for sensitive goods." }
];

export default function PartLoadPage() {
  return (
    <PageTransition>
      <Navbar />
      <section className="relative overflow-hidden bg-[#1f1510] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_20%)]" />
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">PART LOAD SERVICES</p>
            <h1 className="text-5xl font-black uppercase tracking-[-0.04em]">Cost-effective logistics built for flexible shipping.</h1>
            <p className="max-w-xl text-base leading-8 text-[#d9c9b9]">Optimize small-to-medium shipments with shared capacity, reliable timelines, and premium route planning crafted for modern growing businesses.</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#contact" icon="arrow" className="min-w-[170px]">Start Shipping</Button>
              <Button variant="secondary" className="min-w-[170px] text-[#1f1f1f] bg-white">Talk To Expert</Button>
            </div>
          </div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="relative rounded-[2rem] bg-[#24170f]/90 p-4 shadow-luxury">
            <Image src="/images/part-load-hero.svg" alt="Part load services" width={720} height={520} className="h-auto w-full rounded-[2rem] object-cover" />
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Shared flexibility</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Economical logistics without compromise.</h2>
            <p className="max-w-xl text-base leading-8 text-[#6b6b6b]">Part load service is designed to keep your costs down while ensuring premium handling, secure packaging and trusted delivery timelines.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[1.8rem] border border-[#e6d8c8] bg-[#faf3ed] p-6 shadow-soft">
                <p className="text-base font-semibold text-[#1f1f1f]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Route efficiency</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Intelligent planning for every collection.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {timeline.map((item) => (
            <motion.div key={item.stage} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[1.8rem] border border-[#e6d8c8] bg-white p-8 text-[#1f1f1f] shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7a3e1d]">{item.stage}</p>
              <p className="mt-4 text-base leading-7 text-[#6b6b6b]">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container mx-auto py-24">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">FAQ</p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Answers for your part load journey.</h2>
            <p className="max-w-xl text-base leading-8 text-[#6b6b6b]">Confidently ship smaller volumes with an experienced logistics partner committed to transparency, efficiency and cargo safety.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <motion.details key={item.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.75rem] border border-[#e6d8c8] bg-[#faf3ed] p-6 shadow-soft">
                <summary className="cursor-pointer text-lg font-semibold text-[#1f1f1f]">{item.q}</summary>
                <p className="mt-4 text-sm leading-7 text-[#6b6b6b]">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#faf4ee] py-24">
        <div className="container mx-auto rounded-[2rem] border border-[#e6d8c8] bg-white p-12 shadow-soft">
          <div className="grid gap-6 md:grid-cols-[1fr_0.85fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">Testimonials</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">Happy customers choose our economy-driven carriers.</h2>
            </div>
            <div className="space-y-4">
              {[
                { quote: "The quality of service felt premium even for our part loads.", author: "Rohit K." },
                { quote: "Fasttrack turned our tight schedule into an elegant delivery experience.", author: "Neha S." }
              ].map((item) => (
                <div key={item.author} className="rounded-[1.8rem] border border-[#f0e2d7] bg-[#fff7f1] p-6">
                  <p className="text-base leading-7 text-[#4a4a4a]">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#7a3e1d]">{item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}
