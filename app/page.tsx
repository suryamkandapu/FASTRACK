import { Button } from "@/components/Button";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollTopButton } from "@/components/ScrollTopButton";
// import { TopBar } from "@/components/TopBar";
import { AboutSection } from "@/sections/AboutSection";
import { HeroSection } from "@/sections/HeroSection";
import { QuoteFormSection } from "@/sections/QuoteFormSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { StatsContactSection } from "@/sections/StatsContactSection";

export default function Home() {
  return (
    <PageTransition>
      {/* <TopBar /> */}
      <Navbar />
      <HeroSection />
      <QuoteFormSection />
      <main className="space-y-28">
        <ServicesSection />
        <AboutSection />
        {/* <section id="fleet" className="py-24">
          <div className="container mx-auto rounded-[2rem] bg-white p-10 shadow-soft">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a3e1d]">FLEET EXCELLENCE</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#1f1f1f]">A fleet built for premium reliability.</h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#6b6b6b]">From curtain-side carriers to heavy-duty trailers, every vehicle in our premium fleet is maintained for safe, swift and elegant cargo movement across India.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Executive capacity planning",
                  "GPS-assisted lane optimization",
                  "Climate-sensitive cargo care",
                  "Secure white-glove loading"
                ].map((item) => (
                  <div key={item} className="rounded-[1.8rem] border border-[#e6d8c8] bg-[#faf5f0] p-6">
                    <p className="font-semibold text-[#1f1f1f]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
        <StatsContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </PageTransition>
  );
}
