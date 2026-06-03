/**
 * Global Site Constants
 * Update these when switching to a custom domain
 */

// IMPORTANT: Change this when you connect a custom domain
// Currently uses Vercel deployment URL placeholder
export const SITE_CONSTANTS = {
  // ============================================
  // DOMAIN CONFIGURATION (Update when ready)
  // ============================================
  // Current: Vercel deployment URL
  // TODO: Replace with your custom domain after connecting it
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.dbmtransport.com",
  
  // ============================================
  // COMPANY INFORMATION
  // ============================================
  companyName: "DBM Transport",
  companyFullName: "DBM Transport",
  companySlogan: "Premium Logistics & Transport Solutions",
  
  description:
    "DBM Transport — Premium logistics and transport solutions across India. Reliable freight services, cargo delivery, and supply chain management.",
  
  shortDescription: "Premium logistics and transport solutions across India.",
  
  // ============================================
  // LOCATION & CONTACT
  // ============================================
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    countryCode: "IN",
  },
  
  contact: {
    email: "dbmminitransport@gmail.com",
    phone: "+91-95059-84225",
    whatsapp: "+91-95059-84225",
  },
  
  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    // TODO: Update with your actual social profiles after launch
    twitter: "https://twitter.com/dbmtlogistics",
    linkedin: "https://linkedin.com/company/dbmt-logistics",
    facebook: "https://facebook.com/dbmtlogistics",
    instagram: "https://instagram.com/dbmtlogistics",
    youtube: "https://youtube.com/@dbmtlogistics",
  },
  
  // ============================================
  // SEO & METADATA
  // ============================================
  seo: {
    // Primary keywords
    keywords: [
      "DBM Transport",
      "logistics company India",
      "freight services",
      "transport solutions India",
      "cargo delivery",
      "supply chain management",
      "express delivery",
      "DBM logistics",
      "dbmtransport.com",
      "premium transport India",
    ],
    
    // Locale
    locale: "en_IN",
    alternateLocales: ["en_US"],
  },
  
  // ============================================
  // OPEN GRAPH (Social Sharing)
  // ============================================
  openGraph: {
    type: "website",
    // Image should be 1200x630px for optimal social sharing
    image: {
      url: "https://www.dbmtransport.com/images/logo.jpg",
      width: 1200,
      height: 630,
      alt: "DBM Transport — Premium Logistics Solutions",
      type: "image/jpeg",
    },
  },
  
  // ============================================
  // TWITTER / X CARD
  // ============================================
  twitter: {
    cardType: "summary_large_image",
    handle: "@dbmtlogistics",
  },
  
  // ============================================
  // STRUCTURED DATA (JSON-LD)
  // ============================================
  organizationSchema: {
    type: "Organization",
    name: "DBM Transport",
    url: "https://www.dbmtransport.com",
    logo: "https://www.dbmtransport.com/images/logo.jpg",
    description:
      "DBM Transport — Premium logistics and freight transport solutions across India.",
    sameAs: [
      "https://twitter.com/dbmtlogistics",
      "https://linkedin.com/company/dbmt-logistics",
      "https://facebook.com/dbmtlogistics",
      "https://instagram.com/dbmtlogistics",
      "https://youtube.com/@dbmtlogistics",
    ],
  },
};

/**
 * IMPORTANT DOMAIN MIGRATION CHECKLIST
 * ================================
 * When you connect a custom domain later, update:
 *
 * 1. SITE_CONSTANTS.domain ✓
 * 2. app/layout.tsx metadataBase ✓
 * 3. app/sitemap.ts host URL
 * 4. public/manifest.json start_url (if using PWA)
 * 5. SITE_CONSTANTS.social (update after launch)
 * 6. SITE_CONSTANTS.contact (verify real info)
 * 7. Google Search Console - add new domain property
 * 8. Submit new sitemap to GSC
 * 9. Update robots.txt if needed
 * 10. 301 redirect from Vercel URL to custom domain
 */
