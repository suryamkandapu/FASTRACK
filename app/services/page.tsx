import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { ServicesSection } from "@/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <PageTransition>
      <Navbar />

      <section className="bg-[#120907] py-12 text-white sm:py-14 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80 md:text-sm">
            OUR SERVICES
          </p>

          <h1 className="mt-3 text-[30px] font-black uppercase tracking-[-0.04em] sm:text-[40px] md:text-[52px]">
            Explore DBMT Logistics Solutions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#d9c9b9] md:text-base md:leading-8">
            Select from our dedicated transport offerings and connect instantly on WhatsApp for a premium, tailored logistics quote.
          </p>
        </div>
      </section>

      <ServicesSection />

      <div className="container mx-auto px-4 pb-12 text-center sm:pb-14">
        <Button as="a" href="/#contact" className="px-8 py-3 text-[11px] tracking-[0.24em]">
          REQUEST A CUSTOM PLAN
        </Button>
      </div>

      <Footer />
    </PageTransition>
  );
}