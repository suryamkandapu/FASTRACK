/**
 * JSON-LD Structured Data Schemas
 * Helps search engines understand your content better
 */

import { SITE_CONSTANTS } from "./constants";

/**
 * Organization Schema
 * Tells search engines about your business
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONSTANTS.companyName,
    alternateName: SITE_CONSTANTS.companyFullName,
    url: SITE_CONSTANTS.domain,
    logo: `${SITE_CONSTANTS.domain}/images/logo.jpg`,
    description: SITE_CONSTANTS.description,
    foundingDate: "2023",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: SITE_CONSTANTS.contact.phone,
      email: SITE_CONSTANTS.contact.email,
      url: SITE_CONSTANTS.domain,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad, Telangana",
      addressLocality: SITE_CONSTANTS.location.city,
      addressRegion: SITE_CONSTANTS.location.state,
      addressCountry: SITE_CONSTANTS.location.country,
    },
    sameAs: [
      SITE_CONSTANTS.social.twitter,
      SITE_CONSTANTS.social.linkedin,
      SITE_CONSTANTS.social.facebook,
      SITE_CONSTANTS.social.instagram,
      SITE_CONSTANTS.social.youtube,
    ].filter(Boolean),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * Website Schema
 * Helps with breadcrumb navigation and search results
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONSTANTS.companyName,
    url: SITE_CONSTANTS.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONSTANTS.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Breadcrumb Schema
 * Improves navigation in search results
 */
export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Service Schema
 * For highlighting your services/products
 */
export function getServiceSchema({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_CONSTANTS.companyFullName,
      url: SITE_CONSTANTS.domain,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * Article/Blog Post Schema
 * For blog posts and articles
 */
export function getArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = SITE_CONSTANTS.companyFullName,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_CONSTANTS.domain,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONSTANTS.companyFullName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONSTANTS.domain}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Local Business Schema
 * Helps with local search results
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONSTANTS.companyName,
    image: `${SITE_CONSTANTS.domain}/images/logo.jpg`,
    description: SITE_CONSTANTS.description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad, Telangana",
      addressLocality: SITE_CONSTANTS.location.city,
      addressRegion: SITE_CONSTANTS.location.state,
      addressCountry: SITE_CONSTANTS.location.country,
    },
    telephone: SITE_CONSTANTS.contact.phone,
    email: SITE_CONSTANTS.contact.email,
    url: SITE_CONSTANTS.domain,
    sameAs: [
      SITE_CONSTANTS.social.twitter,
      SITE_CONSTANTS.social.linkedin,
      SITE_CONSTANTS.social.facebook,
      SITE_CONSTANTS.social.instagram,
      SITE_CONSTANTS.social.youtube,
    ].filter(Boolean),
  };
}

/**
 * Component for rendering structured data
 * Use in your layout or specific pages
 */
export function StructuredDataScript({ schema }: { schema: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
