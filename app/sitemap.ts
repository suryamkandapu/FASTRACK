/**
 * Dynamic Sitemap Generation
 * Automatically generates sitemap.xml for search engines
 * 
 * Accessed at: https://yoursite.com/sitemap.xml
 */

import { MetadataRoute } from "next";
import { SITE_CONSTANTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONSTANTS.domain;

  // Main pages - update these based on your actual pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Service pages - if you have dynamic services
  // Example:
  // const services = [
  //   { slug: "freight-transport", title: "Freight Transport" },
  //   { slug: "local-delivery", title: "Local Delivery" },
  //   { slug: "warehouse", title: "Warehouse Services" },
  // ];
  // const servicePages = services.map((service) => ({
  //   url: `${baseUrl}/services/${service.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.8,
  // }));

  // Blog posts - if you add a blog later
  // const blogPages = blogs.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "never" as const,
  //   priority: 0.7,
  // }));

  return [
    ...mainPages,
    // ...servicePages, // Uncomment when you have dynamic services
    // ...blogPages,    // Uncomment when you have a blog
  ];
}

/**
 * IMPORTANT: When switching to a custom domain:
 * 
 * 1. Update SITE_CONSTANTS.domain in lib/constants.ts
 * 2. The sitemap will automatically use the new domain
 * 3. Resubmit sitemap to Google Search Console
 * 
 * To submit sitemap:
 * 1. Go to Google Search Console: https://search.google.com/search-console
 * 2. Select your property (add new property for custom domain)
 * 3. Go to Sitemaps section
 * 4. Submit URL: https://yourdomain.com/sitemap.xml
 */
