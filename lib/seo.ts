/**
 * SEO Utilities & Configuration
 * Provides reusable metadata generation for all pages
 */

import { SITE_CONSTANTS } from "./constants";
import type { Metadata } from "next";

/**
 * Generate metadata for any page
 * Handles OG tags, Twitter cards, canonical URLs automatically
 */
export function generatePageMetadata({
  title,
  description,
  keywords = SITE_CONSTANTS.seo.keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  nofollow = false,
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const fullTitle =
    title.includes(SITE_CONSTANTS.companyName) ||
    title.includes(SITE_CONSTANTS.companyFullName)
      ? title
      : `${title} | ${SITE_CONSTANTS.companyName}`;
  const canonicalUrl = canonical
    ? canonical.startsWith("/")
      ? new URL(canonical, SITE_CONSTANTS.domain).toString()
      : canonical
    : SITE_CONSTANTS.domain;
  const image = ogImage || SITE_CONSTANTS.openGraph.image.url;
  const imageUrl = image.startsWith("http") ? image : new URL(image, SITE_CONSTANTS.domain).toString();

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_CONSTANTS.domain),
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Robots meta tags
    robots: {
      index: !noindex,
      follow: !nofollow,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    
    // Open Graph - Social Sharing
    openGraph: {
      title: fullTitle,
      description,
      type: ogType as any,
      locale: SITE_CONSTANTS.seo.locale,
      url: canonicalUrl,
      siteName: SITE_CONSTANTS.companyName,
      images: [
        {
          url: imageUrl,
          width: SITE_CONSTANTS.openGraph.image.width,
          height: SITE_CONSTANTS.openGraph.image.height,
          alt: SITE_CONSTANTS.openGraph.image.alt,
          type: SITE_CONSTANTS.openGraph.image.type,
        },
      ],
    },
    
    // Twitter / X Card
    twitter: {
      card: SITE_CONSTANTS.twitter.cardType as "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: SITE_CONSTANTS.twitter.handle,
    },

    // Author & copyright
    authors: [{ name: SITE_CONSTANTS.companyFullName }],
    
    // Description for search engines
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: SITE_CONSTANTS.companyName,
    },
  };
}

/**
 * Global metadata for root layout
 */
export const globalMetadata: Metadata = {
  title: {
    default: `${SITE_CONSTANTS.companyName} | ${SITE_CONSTANTS.companySlogan}`,
    template: `%s | ${SITE_CONSTANTS.companyName}`,
  },
  description: SITE_CONSTANTS.description,
  keywords: SITE_CONSTANTS.seo.keywords,
  metadataBase: new URL(SITE_CONSTANTS.domain),
  
  // Canonical
  alternates: {
    canonical: SITE_CONSTANTS.domain,
  },
  
  // Global robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  
  // Open Graph - Global
  openGraph: {
    type: SITE_CONSTANTS.openGraph.type as any,
    locale: SITE_CONSTANTS.seo.locale,
    url: SITE_CONSTANTS.domain,
    siteName: SITE_CONSTANTS.companyName,
    title: `${SITE_CONSTANTS.companyName} | ${SITE_CONSTANTS.companySlogan}`,
    description: SITE_CONSTANTS.description,
    images: [
      {
        url: SITE_CONSTANTS.openGraph.image.url,
        width: SITE_CONSTANTS.openGraph.image.width,
        height: SITE_CONSTANTS.openGraph.image.height,
        alt: SITE_CONSTANTS.openGraph.image.alt,
        type: SITE_CONSTANTS.openGraph.image.type as any,
      },
    ],
  },
  
  // Twitter / X - Global
  twitter: {
    card: SITE_CONSTANTS.twitter.cardType as "summary_large_image",
    site: SITE_CONSTANTS.twitter.handle,
    creator: SITE_CONSTANTS.twitter.handle,
    title: `${SITE_CONSTANTS.companyName} | ${SITE_CONSTANTS.companySlogan}`,
    description: SITE_CONSTANTS.description,
    images: [SITE_CONSTANTS.openGraph.image.url],
  },
  
  verification: {
    google: "KKbIhNmn-zQIqqH7MkZduxFoJY0Uysz65itkMUcMAq0",
    other: {
      "msvalidate.01": "",
    },
  },
  
  // Web App
  applicationName: SITE_CONSTANTS.companyName,
  authors: [{ name: SITE_CONSTANTS.companyName, url: SITE_CONSTANTS.domain }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_CONSTANTS.companyName,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  manifest: "/manifest.json",
};

/**
 * DOMAIN MIGRATION GUIDE
 * =======================
 * 
 * When replacing with a custom domain:
 * 
 * 1. Update SITE_CONSTANTS.domain in lib/constants.ts
 * 2. The metadataBase will automatically update here via SITE_CONSTANTS.domain
 * 3. All page metadata will inherit the new domain
 * 4. Canonical URLs will point to the new domain
 * 5. Sitemap will use the new domain
 * 6. No need to update individual page files!
 * 
 * After updating the domain:
 * - Resubmit sitemap to Google Search Console
 * - Add new domain as a property in GSC
 * - Set up 301 redirects from old Vercel URL to new domain
 * - Update social media profiles with new URL
 */
