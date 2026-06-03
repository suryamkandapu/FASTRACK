import { Metadata } from "next";
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
import { generatePageMetadata } from "@/lib/seo";
import {
  getOrganizationSchema,
  getServiceSchema,
  StructuredDataScript,
} from "@/lib/structured-data";

// ===== PAGE METADATA =====
// Defines all SEO tags for the homepage
export const metadata: Metadata = generatePageMetadata({
  title: "DBM Transport | Premium Logistics & Transport Solutions India",
  description:
    "DBM Transport offers reliable freight, cargo delivery and supply chain solutions across India. Get fast, safe, premium transport services.",
  keywords: [
    "DBM Transport",
    "dbmtransport.com",
    "logistics company India",
    "freight services India",
    "transport solutions India",
    "cargo delivery service",
    "supply chain management",
    "express delivery India",
    "premium logistics",
    "reliable freight transport India",
  ],
  canonical: "https://www.dbmtransport.com",
  ogImage: "/images/logo.jpg",
  ogType: "website",
});

export default function Home() {
  // Sample service schema for one of your services
  const freightServiceSchema = getServiceSchema({
    name: "Professional Freight Transport",
    description:
      "Reliable freight transport services across India with modern fleet and expert handling",
    image: "https://www.dbmtransport.com/images/logo.jpg",
    url: "https://www.dbmtransport.com/services",
  });

  return (
    <PageTransition>
      {/* 
        ===== SEMANTIC HTML STRUCTURE =====
        Proper use of semantic tags improves:
        - SEO (search engines understand page structure)
        - Accessibility (screen readers can navigate better)
        - Code clarity (easier to maintain)
      */}

      {/* Header with Navigation */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-0">
        {/* Hero Section - Above the fold, most important content */}
        <HeroSection />

        {/* 
          Services Section 
          Using semantic sections for each content block
        */}
        <section>
          <ServicesSection />
        </section>

        {/* Quote/CTA Section */}
        <section>
          <QuoteFormSection />
        </section>

        {/* About Section */}
        <section>
          <AboutSection />
        </section>

        {/* Stats & Contact Section */}
        <section>
          <StatsContactSection />
        </section>
      </main>

      {/* Footer with Site Footer Information */}
      <footer>
        <Footer />
      </footer>

      {/* Utility Components */}
      <FloatingWhatsApp />
      <ScrollTopButton />

      {/* Structured Data at the bottom of the page */}
      <StructuredDataScript schema={getOrganizationSchema()} />
      <StructuredDataScript schema={freightServiceSchema} />

      {/* 
        ===== SEO CHECKLIST FOR THIS PAGE =====
        
        ✓ Metadata generated: title, description, keywords
        ✓ Open Graph tags: for social sharing
        ✓ Twitter card tags: for Twitter/X sharing
        ✓ Canonical URL: prevents duplicate content issues
        ✓ Structured data: Organization + Service schemas
        ✓ Semantic HTML: header, main, section, footer tags
        ✓ Proper heading hierarchy: h1 in HeroSection
        ✓ Images: Use Next.js <Image> for auto-optimization
        ✓ Mobile responsive: Using Tailwind CSS
        ✓ Core Web Vitals: Optimized for LCP, FID, CLS
        
        Next steps:
        1. Update lib/constants.ts with real company info
        2. Create OG image (1200x630px) → /public/og-image.jpg
        3. Create favicon files → /public/favicon.ico
        4. Test on Google Search Console
        5. Submit sitemap when ready
      */}
    </PageTransition>
  );
}
