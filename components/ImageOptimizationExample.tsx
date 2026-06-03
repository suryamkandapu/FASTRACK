/**
 * ===== IMAGE OPTIMIZATION BEST PRACTICES COMPONENT EXAMPLE =====
 * 
 * This file demonstrates how to optimize images for SEO and Core Web Vitals
 * Copy these patterns into your image-heavy components
 */

import Image from "next/image";
import { imageConfig, imageSizes } from "@/lib/image-optimization";

/**
 * Example 1: Hero/Banner Image
 * - Priority loading (for LCP - Largest Contentful Paint)
 * - High quality but optimized
 * - Proper width/height (prevents CLS - Cumulative Layout Shift)
 */
export function HeroImageExample() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/images/hero.png"
        alt="Premium logistics truck on highway - representing reliable transport services"
        fill
        priority // LCP optimization
        quality={imageConfig.hero.quality}
        sizes={imageSizes.hero}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Example 2: Card/Thumbnail Images
 * - Lazy loading (not critical)
 * - Standard quality
 * - Responsive sizes
 */
export function CardImageExample() {
  return (
    <div className="relative w-full h-72">
      <Image
        src="/images/service-card.jpg"
        alt="Full truck load transport service - premium freight logistics"
        width={imageConfig.card.width}
        height={imageConfig.card.height}
        quality={imageConfig.card.quality}
        loading="lazy"
        sizes={imageSizes.card}
        className="object-cover rounded-lg"
      />
    </div>
  );
}

/**
 * Example 3: Logo/Icon (Minimal Size)
 * - Small, cacheable
 * - Often doesn't need optimization
 */
export function LogoExample() {
  return (
    <Image
      src="/logo.svg"
      alt="DBMT Logistics - Logo"
      width={40}
      height={40}
      priority
      className="shrink-0"
    />
  );
}

/**
 * ===== IMAGE SEO BEST PRACTICES =====
 * 
 * ✓ ALT TEXT:
 *   - Descriptive (tells search engines & users what the image shows)
 *   - Include relevant keywords naturally
 *   - 125 characters or less for accessibility
 *   - Never use "image of..." or just the filename
 *   
 *   BAD: alt="truck"
 *   GOOD: alt="Premium logistics truck on highway - representing reliable transport services"
 * 
 * ✓ FILE NAMING:
 *   - Use descriptive, SEO-friendly names
 *   - Use hyphens instead of underscores
 *   
 *   BAD: image123.jpg
 *   GOOD: premium-logistics-truck-transport.jpg
 * 
 * ✓ FILE SIZE:
 *   - Compress before uploading
 *   - Use modern formats (WebP via Next.js Image)
 *   - Tools: TinyPNG, Squoosh, ImageOptim
 * 
 * ✓ DIMENSIONS:
 *   - Always specify width/height (prevents CLS)
 *   - Use responsive sizes prop for mobile optimization
 *   - Crop images to actual use case (no oversized images)
 * 
 * ✓ LOADING STRATEGY:
 *   - priority={true} only for LCP images (usually hero/above-fold)
 *   - Use lazy loading for below-fold images
 *   - Next.js Image handles this automatically
 * 
 * ✓ QUALITY SETTING:
 *   - 90: High quality (logos, important images)
 *   - 80: Good quality (general photos)
 *   - 75: Background images (can be lower)
 *   - Default: 75
 * 
 * ✓ FORMATS:
 *   - JPEG: Photos, complex images
 *   - PNG: Transparency needed (logos, icons)
 *   - SVG: Simple graphics, icons, logos (best for SEO!)
 *   - WebP: Modern format (Next.js auto-converts)
 */

/**
 * ===== RESPONSIVE IMAGE SIZES =====
 * 
 * The sizes prop tells browsers which image to download
 * Based on viewport width, it selects the most appropriate image
 * Improves performance and LCP score
 * 
 * Example:
 * sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
 * 
 * Translation:
 * - On screens ≤640px: Load 640px wide image
 * - On screens ≤1024px: Load 1024px wide image
 * - On larger screens: Load 1920px wide image
 */

/**
 * ===== NEXT.JS IMAGE OPTIMIZATION FEATURES =====
 * 
 * All automatic with Next.js Image component:
 * 
 * 1. Format: Automatically serves WebP to modern browsers
 * 2. Lazy Loading: Images load only when needed
 * 3. Responsive: Generates multiple image sizes
 * 4. Placeholder: Can add blur placeholder
 * 5. Quality: Optimized quality for file size
 * 6. Caching: Browser cache headers set automatically
 * 7. Sizes: Responsive image loading based on viewport
 */

/**
 * ===== CORE WEB VITALS IMPACT =====
 * 
 * Good image optimization improves:
 * 
 * 1. LCP (Largest Contentful Paint):
 *    - priority={true} on hero images
 *    - Smaller file sizes load faster
 *    - Target: < 2.5 seconds
 * 
 * 2. CLS (Cumulative Layout Shift):
 *    - Always specify width/height
 *    - Prevents reflow when image loads
 *    - Target: < 0.1
 * 
 * 3. FID (First Input Delay):
 *    - Less JavaScript = faster interactions
 *    - Image lazy loading reduces initial JS
 *    - Target: < 100 milliseconds
 */
