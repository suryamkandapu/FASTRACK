import Image from "next/image";
// framer-motion removed from server component to avoid SSR issues
import { Button } from "@/components/Button";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { featureGrid } from "@/lib/data";

export default function FullTruckLoadPage() {
  // Debug: log imported symbols during prerender to diagnose undefined component
  // (temporary - removed after debugging)
  // eslint-disable-next-line no-console
  console.log("DEBUG imports -> PageTransition:", typeof PageTransition, "Navbar:", typeof Navbar, "Button:", typeof Button, "Footer:", typeof Footer);
  return (
    <PageTransition>
      <Navbar />
      <div className="p-12 text-center">TEMP DEBUG: simplified page to isolate prerender error.</div>
    </PageTransition>
  );
}
