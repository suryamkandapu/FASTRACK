/**
 * Image Optimization Utilities
 * Uses Next.js Image component for automatic optimization
 */

/**
 * Image configuration for different use cases
 */
export const imageConfig = {
  // Hero/Banner images (Full width)
  hero: {
    width: 1920,
    height: 1080,
    quality: 85, // Reduced from 100 for better performance
    priority: true, // Lazy load disabled for LCP improvement
  },

  // Open Graph images (Social sharing)
  og: {
    width: 1200,
    height: 630,
    quality: 90,
    priority: false,
  },

  // Card/Thumbnail images
  card: {
    width: 400,
    height: 300,
    quality: 80,
    priority: false,
  },

  // Small images (Icons, avatars)
  small: {
    width: 100,
    height: 100,
    quality: 80,
    priority: false,
  },

  // Background images
  background: {
    width: 1920,
    height: 1080,
    quality: 75, // Lower quality for background
    priority: false,
  },
};

/**
 * Image srcset sizes for responsive images
 * Ensures appropriate image sizes on different devices
 */
export const imageSizes = {
  hero: "(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px",
  card: "(max-width: 640px) 640px, (max-width: 1024px) 400px, 400px",
  small: "(max-width: 640px) 100px, 100px",
  full: "100vw",
};

/**
 * Image placeholder strategy for better perceived performance
 * Use for blur placeholder effect
 */
export const getPlaceholder = (imageType: "dark" | "light") => {
  return imageType === "dark"
    ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23111111' width='400' height='300'/%3E%3C/svg%3E"
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f5f5f5' width='400' height='300'/%3E%3C/svg%3E";
};

/**
 * Image format recommendations
 * 
 * Format Strategy:
 * - Use WebP for modern browsers (automatic via Next.js)
 * - Use JPEG fallback for older browsers
 * - Use SVG for logos and icons
 * - Use PNG for images requiring transparency
 * 
 * Example usage in Image component:
 * <Image
 *   src="/image.jpg"
 *   alt="Description"
 *   width={400}
 *   height={300}
 *   quality={80}
 *   priority={false}
 *   loading="lazy"
 *   sizes={imageSizes.card}
 * />
 */

/**
 * Lazy loading strategy
 */
export const lazyLoadConfig = {
  // Images below viewport: lazy load
  loading: "lazy" as const,

  // First meaningful image (Hero, Above the fold): eager
  // priorityImages: ["hero", "logo"],

  // Threshold for lazy loading (pixels from viewport)
  threshold: 100,
};

/**
 * Image optimization checklist:
 * 
 * ✓ Use Next.js Image component (automatic optimization)
 * ✓ Specify width and height (prevents layout shift - reduces CLS)
 * ✓ Use quality: 80 for photos, 90 for logos
 * ✓ Set priority={true} only for LCP images
 * ✓ Use sizes prop for responsive images
 * ✓ Lazy load non-critical images (reduces initial load)
 * ✓ Use WebP format (automatic via Next.js)
 * ✓ Compress images before uploading
 * ✓ Use SVG for icons and logos
 * ✓ Implement placeholder for perceived performance
 */
