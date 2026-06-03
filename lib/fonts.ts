/**
 * Font Optimization
 * Improves Core Web Vitals and loading performance
 * 
 * Using system fonts for optimal performance
 * Can be replaced with Google Fonts variable fonts if needed
 */

// System font stack - no extra requests, optimal performance
export const systemFontStack = {
  sans: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
  ].join(", "),
  
  mono: [
    '"Fira Code"',
    '"Courier New"',
    "monospace",
  ].join(", "),
};

/**
 * Alternative: Google Fonts Variable Fonts (if you want branded fonts)
 * 
 * Add to your layout.tsx or globals.css:
 * 
 * @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
 * @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
 * 
 * Then use:
 * font-family: 'Inter', sans-serif;
 * font-family: 'Poppins', sans-serif;
 */

// Font loading strategies for optimal performance
export const fontOptimizationConfig = {
  // Strategy 1: System fonts (RECOMMENDED for fastest performance)
  strategy: "system-fonts",
  
  // Strategy 2: Google Fonts (optional, adds ~50KB)
  // googleFonts: {
  //   families: [
  //     'Inter:wght@400;500;600;700',
  //     'Poppins:wght@400;500;600;700'
  //   ]
  // },
  
  // Font display strategy for Google Fonts (if used)
  // 'swap' = show fallback until font loads (best for UX)
  fontDisplay: "swap",
};

/**
 * TailwindCSS Font Configuration
 * Already optimized in your tailwind.config.ts
 * 
 * Example configuration:
 * 
 * theme: {
 *   fontFamily: {
 *     sans: ['Inter', 'sans-serif'],
 *     serif: ['Georgia', 'serif'],
 *   },
 * }
 */

// Font size scale for semantic HTML hierarchy
export const fontSizeScale = {
  h1: "3.75rem", // 60px
  h2: "3rem",    // 48px
  h3: "2.25rem", // 36px
  h4: "1.875rem", // 30px
  h5: "1.5rem",  // 24px
  h6: "1.25rem", // 20px
  body: "1rem",  // 16px
  small: "0.875rem", // 14px
};
