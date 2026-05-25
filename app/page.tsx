import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { AboutSection } from "@/sections/AboutSection";
import { HeroSection } from "@/sections/HeroSection";
import { QuoteFormSection } from "@/sections/QuoteFormSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { StatsContactSection } from "@/sections/StatsContactSection";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection />

      <main className="space-y-10 md:space-y-14">
        <ServicesSection />
        <QuoteFormSection />
        <AboutSection />
        <StatsContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </PageTransition>
  );
}
