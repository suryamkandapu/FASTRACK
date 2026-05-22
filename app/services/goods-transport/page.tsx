import Image from "next/image";
// framer-motion removed from server component to avoid SSR issues
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
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
  // Debug imports during prerender
  // eslint-disable-next-line no-console
  console.log("DEBUG goods imports -> PageTransition:", typeof PageTransition, "Navbar:", typeof Navbar, "Button:", typeof Button, "Footer:", typeof Footer);
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
          <div className="relative rounded-[2rem] bg-[#1f1510]/90 p-4 shadow-luxury">
            <Image src="/images/goods-transport-hero.svg" alt="Goods transport services" width={720} height={520} className="h-auto w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
