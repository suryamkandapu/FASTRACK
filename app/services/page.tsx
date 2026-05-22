import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { ServicesSection } from "@/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <PageTransition>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#120907] py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80 md:text-sm">
            OUR SERVICES
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
            Explore Premium Logistics Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#d9c9b9] md:text-base md:leading-8">
            Select from our dedicated transport offerings and connect instantly on WhatsApp for a premium, tailored logistics quote.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* CTA */}
      <div className="container mx-auto px-4 pb-20 text-center">
        <Button
          as="a"
          href="/#contact"
          className="px-8 py-3 text-[11px] tracking-[0.24em]"
        >
          REQUEST A CUSTOM PLAN
        </Button>
      </div>

      <Footer />
    </PageTransition>
  );
}