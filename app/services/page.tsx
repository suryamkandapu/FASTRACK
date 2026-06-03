import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { ServicesSection } from "@/sections/ServicesSection";
import { generatePageMetadata } from "@/lib/seo";
import { StructuredDataScript } from "@/lib/structured-data";
import { getBreadcrumbSchema } from "@/lib/structured-data";

// SEO Metadata for Services Page
export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | DBM Transport Logistics Solutions",
  description:
    "Explore DBM Transport's full range of logistics services — freight forwarding, express delivery, cargo handling and supply chain management.",
  keywords: [
    "DBM Transport services",
    "logistics company India",
    "freight forwarding",
    "cargo delivery service",
    "transport solutions India",
    "supply chain management",
    "express delivery India",
    "premium logistics",
    "freight services India",
  ],
  canonical: "https://www.dbmtransport.com/services",
  ogImage: "/images/logo.jpg",
});

export default function ServicesPage() {
  // Breadcrumb schema for better navigation in search results
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.dbmtransport.com" },
    { name: "Services", url: "https://www.dbmtransport.com/services" },
  ]);

  return (
    <PageTransition>
      <Navbar />

      {/* 
        ===== SEMANTIC HTML HERO SECTION =====
        Using <section> + <header> inside for semantic meaning
      */}
      <section
        className="bg-[#120907] py-12 text-white sm:py-14 md:py-16"
        aria-label="Services Page Hero"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80 md:text-sm">
            OUR SERVICES
          </p>

          {/* Proper H1 - should be unique per page, first on page */}
          <h1 className="mt-3 text-[30px] font-black uppercase tracking-[-0.04em] sm:text-[40px] md:text-[52px]">
            Explore DBMT Logistics Solutions
          </h1>

          {/* Description for context */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#d9c9b9] md:text-base md:leading-8">
            Select from our dedicated transport offerings and connect instantly on WhatsApp for a premium, tailored logistics quote.
          </p>
        </div>
      </section>

      {/* 
        ===== MAIN CONTENT AREA =====
        Wrapped in <main> semantic tag
      */}
      <main>
        <ServicesSection />

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 pb-12 text-center sm:pb-14">
          <Button as="a" href="/#contact" className="px-8 py-3 text-[11px] tracking-[0.24em]">
            REQUEST A CUSTOM PLAN
          </Button>
        </section>
      </main>

      <Footer />

      <StructuredDataScript schema={breadcrumbSchema} />
    </PageTransition>
  );
}