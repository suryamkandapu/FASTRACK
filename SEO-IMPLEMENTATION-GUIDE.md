# 🚀 Production-Level SEO Setup Guide
## Complete Next.js App Router Implementation

---

## 📋 Executive Summary

Your Next.js project now has **enterprise-grade SEO** configured. This document explains everything and guides you through final setup and domain migration.

### ✅ What's Already Implemented

- ✓ Global metadata configuration with metadataBase
- ✓ Open Graph tags (OG) for social sharing
- ✓ Twitter Card tags
- ✓ Canonical URLs (prevents duplicate content)
- ✓ Robots meta tags (index/follow control)
- ✓ Dynamic sitemap generation (sitemap.xml)
- ✓ Robots.txt generation
- ✓ Breadcrumb structured data (JSON-LD)
- ✓ Organization schema (JSON-LD)
- ✓ Website schema (JSON-LD)
- ✓ Service schema template
- ✓ Semantic HTML structure (header, main, section, footer)
- ✓ Image optimization setup
- ✓ Font optimization guidance
- ✓ Web Manifest (manifest.json)
- ✓ PWA configuration
- ✓ Mobile-friendly setup

---

## 📁 Files Created/Updated

### Configuration Files
```
lib/
  ├── constants.ts              # Site configuration (UPDATE THIS FIRST!)
  ├── seo.ts                    # Metadata generation functions
  ├── structured-data.ts        # JSON-LD schema generators
  ├── image-optimization.ts     # Image best practices
  └── fonts.ts                  # Font optimization guide

app/
  ├── layout.tsx               # Root layout with metadata
  ├── page.tsx                 # Home page with metadata & structured data
  ├── sitemap.ts               # Auto-generated sitemap.xml
  ├── robots.ts                # Auto-generated robots.txt
  └── services/page.tsx        # Services page with metadata

components/
  └── ImageOptimizationExample.tsx  # Best practices reference

public/
  ├── manifest.json            # PWA manifest
  └── favicon-README.md        # Favicon setup guide
```

---

## ⚙️ IMMEDIATE SETUP STEPS

### Step 1: Update Site Constants (CRITICAL)
**File:** `lib/constants.ts`

Update these values with your **actual** information:

```typescript
// CHANGE FROM:
domain: process.env.NEXT_PUBLIC_SITE_URL || "https://fasttrack.vercel.app"

// TO YOUR VERCEL URL (find in Vercel dashboard):
domain: process.env.NEXT_PUBLIC_SITE_URL || "https://your-project.vercel.app"

// Update company info:
contact: {
  email: "your-email@example.com",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "+91-XXXXXXXXXX",
},

// Update location:
location: {
  city: "Your City",
  state: "Your State",
  country: "India",
},

// Update social media (after you create accounts):
social: {
  twitter: "https://twitter.com/yourhandle",
  linkedin: "https://linkedin.com/company/yourcompany",
  // ... other platforms
},
```

### Step 2: Create OG Image
**File:** `public/og-image.jpg`

1. **Dimensions:** 1200x630 pixels
2. **Content:** Your logo/brand + company name
3. **Format:** JPEG or PNG
4. **Tools:** Figma, Canva, Photoshop

This image shows when someone shares your site on social media.

### Step 3: Create Favicons
**Folder:** `public/`

Create these favicon files:
- `favicon.ico` (16x16, 32x32, 48x48, 64x64, 96x96)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Quick method:**
1. Create a 512x512 PNG with your logo
2. Go to: https://www.favicon-generator.org/
3. Upload PNG
4. Download all files
5. Save to `/public`

### Step 4: Test Everything
```bash
# Build the project
npm run build

# Check for any build errors
# If OK, test locally:
npm run start

# Visit http://localhost:3000
```

---

## 🔍 SEO Verification (Before Domain Connection)

### 1. **Check Metadata**
Open browser DevTools (F12) → Elements tab:
```html
<title>DBMT | Premium Logistics & Transport Solutions</title>
<meta name="description" content="...">
<meta property="og:image" content="https://fasttrack.vercel.app/og-image.jpg">
```

### 2. **Check Sitemap**
Visit: `https://your-project.vercel.app/sitemap.xml`
Should show XML with all your pages.

### 3. **Check Robots.txt**
Visit: `https://your-project.vercel.app/robots.txt`
Should show crawl rules.

### 4. **Social Media Preview**
- Twitter: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/tools/debug/

---

## 🌐 Domain Migration Checklist

### WHEN YOU CONNECT A CUSTOM DOMAIN

Follow these steps **AFTER** you have a custom domain (e.g., dbmt.com):

#### Step 1: Update Domain in Constants
**File:** `lib/constants.ts`

```typescript
// CHANGE:
domain: "https://fasttrack.vercel.app"

// TO:
domain: "https://www.dbmt.com" // or your domain
```

#### Step 2: Redeploy
```bash
git add .
git commit -m "Update domain to custom domain"
git push  # Vercel auto-deploys
```

All SEO tags automatically update! No other file changes needed.

#### Step 3: Set Up 301 Redirects
In Vercel dashboard:
1. Go to project settings
2. Add redirect from old Vercel URL to new domain
3. Use 301 (permanent) redirect

#### Step 4: Verify Google Search Console
1. Add new property in GSC: https://search.google.com/search-console
2. Verify domain ownership
3. Resubmit sitemap: `https://www.dbmt.com/sitemap.xml`
4. Check for any issues

#### Step 5: Update Other Services
- Social media profiles
- Email signatures
- Business listings (Google My Business, etc.)

---

## 📊 Next.js + Vercel SEO Features (Automatic)

These are **automatically handled by Vercel**:

✅ **HTTPS/SSL** - All connections encrypted
✅ **HTTP/2** - Faster delivery
✅ **Edge Caching** - Content cached globally
✅ **Automatic Sitemap Generation** - We implemented this
✅ **Image Optimization** - Next.js Image component
✅ **Code Splitting** - Smaller JS bundles
✅ **Font Optimization** - System fonts by default
✅ **Mobile-First** - Responsive design
✅ **Core Web Vitals** - Optimized by default
✅ **Compression** - GZIP automatically
✅ **Analytics** - Available in Vercel dashboard

---

## 🎯 Google Search Console Setup

### Initial Setup (Current Vercel URL)

1. **Go to:** https://search.google.com/search-console
2. **Click:** "+ Create property"
3. **Choose:** "URL prefix"
4. **Enter:** `https://your-project.vercel.app`
5. **Verify:** Use the meta tag method:
   - Copy the verification token
   - Add to `app/layout.tsx` (already prepared):
   
   ```typescript
   verification: {
     google: "YOUR_TOKEN_HERE",
   },
   ```

6. **Submit Sitemap:** 
   - URL: `https://your-project.vercel.app/sitemap.xml`
   - Wait for indexing

### After Custom Domain
- Create **new property** for custom domain
- Repeat verification steps
- Verify old domain redirects to new
- Monitor for indexing

---

## 📈 SEO Optimization Checklist

### ✅ Metadata
- [x] Global metadata configured
- [x] Page titles for each page
- [x] Meta descriptions for each page
- [x] Keywords configured
- [ ] Add Google Search Console verification token
- [ ] Add Bing Webmaster verification token

### ✅ Social Sharing
- [x] Open Graph tags configured
- [x] Twitter Card tags configured
- [ ] Test on Twitter: https://cards-dev.twitter.com/validator
- [ ] Test on Facebook: https://developers.facebook.com/tools/debug/

### ✅ Technical SEO
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Canonical URLs set
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Semantic HTML structure
- [ ] Test on Mobile Friendly: https://search.google.com/test/mobile-friendly

### ✅ Structured Data
- [x] Organization schema
- [x] Website schema
- [x] Breadcrumb schema
- [x] Service schema template
- [ ] Test JSON-LD: https://search.google.com/test/rich-results

### ✅ Performance
- [x] Image optimization setup
- [x] Font optimization setup
- [x] Next.js Image component used
- [ ] Check Core Web Vitals: https://pagespeed.web.dev/

### ✅ Accessibility (Improves SEO)
- [x] Semantic HTML tags
- [x] Proper heading hierarchy
- [ ] Add ARIA labels where needed
- [ ] Test with screen reader

### ✅ Mobile
- [x] Responsive design
- [x] Mobile viewport set
- [x] PWA manifest configured
- [ ] Test on mobile devices

### ✅ Security
- [x] HTTPS on Vercel
- [x] Content Security Policy ready
- [ ] Add security headers if needed

---

## 🚀 Performance Optimization Tools

### Test Your SEO

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Shows Core Web Vitals score
   - Recommendations for improvement

2. **Google Mobile Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Checks mobile responsiveness

3. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests JSON-LD schema markup

4. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Monitoring and issue detection
   - Sitemap submission

5. **Bing Webmaster Tools**
   - URL: https://www.bing.com/webmasters/
   - Alternative to GSC

---

## 💡 Best Practices by Component

### Page Metadata
```typescript
// Use generatePageMetadata for consistency
export const metadata = generatePageMetadata({
  title: "Page Title",
  description: "Page description",
  keywords: ["keyword1", "keyword2"],
  canonical: "/page-path",
});
```

### Images
```typescript
// Always use Next.js Image with width/height
<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={630}
  priority={true}  // Only for LCP images
  quality={80}
  sizes="(max-width: 640px) 640px, 1200px"
/>
```

### Semantic HTML
```typescript
<header>
  <Navbar />
</header>

<main>
  <section id="services">
    <h2>Our Services</h2>
    {/* Content */}
  </section>
</main>

<footer>
  <Footer />
</footer>
```

### Structured Data
```typescript
import { StructuredDataScript, getOrganizationSchema } from '@/lib/structured-data';

<StructuredDataScript schema={getOrganizationSchema()} />
```

---

## 🆘 Troubleshooting

### Sitemap Not Showing
- Check: `https://yoursite.com/sitemap.xml`
- Should return valid XML
- If not, check `app/sitemap.ts` file

### Robots.txt Not Working
- Check: `https://yoursite.com/robots.txt`
- Verify URL patterns match your routes

### Metadata Not Showing
- DevTools (F12) → Elements → Look for `<meta>` tags
- Check `app/layout.tsx` and specific page files

### Image Not Optimizing
- Ensure using `<Image>` from `next/image`
- Check width/height are specified
- Verify image path is correct

### Domain Migration Issues
- Ensure 301 redirects set up
- Resubmit sitemap to GSC
- Check both domain properties in GSC
- Wait 1-2 weeks for full migration

---

## 📚 Useful Resources

### Next.js SEO
- https://nextjs.org/learn/seo/introduction-to-seo
- https://nextjs.org/docs/app/building-your-application/optimizing/metadata

### General SEO
- https://developers.google.com/search/docs
- https://moz.com/beginners-guide-to-seo
- https://www.semrush.com/seo/seo-101/

### Tools
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster: https://www.bing.com/webmasters/
- Lighthouse: https://chromedevtools.io/

---

## 📞 Support

For Next.js SEO questions:
- Next.js Discord: https://discord.gg/nextjs
- Next.js Docs: https://nextjs.org/docs
- Stack Overflow: Tag with `next.js` and `seo`

---

**Last Updated:** May 2026
**Version:** 1.0
**Status:** Production Ready ✅
