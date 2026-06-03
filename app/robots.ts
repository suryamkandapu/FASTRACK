/**
 * Robots.txt Configuration
 * Controls how search engines crawl your site
 * 
 * Accessed at: https://yoursite.com/robots.txt
 */

import { MetadataRoute } from "next";
import { SITE_CONSTANTS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONSTANTS.domain;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

/**
 * Robots.txt Rules Explained:
 * 
 * - allow: Paths that search engines CAN crawl
 * - disallow: Paths that search engines CANNOT crawl
 * - crawlDelay: Wait time (in seconds) between requests
 * - userAgent: Specific search engine or bot
 * - *: Wildcard - applies to all bots
 * 
 * Common Disallow Paths:
 * - /admin: Admin panels
 * - /api: API endpoints
 * - /private: Private user areas
 * - /checkout: Shopping cart (already indexed once)
 * - /search: Search results (dynamic, not useful to index)
 * 
 * When switching to custom domain:
 * 1. Update SITE_CONSTANTS.domain in lib/constants.ts
 * 2. robots.txt will automatically update
 * 3. No further action needed!
 */
