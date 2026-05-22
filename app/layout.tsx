import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fasttrack Logistics | Premium Transport Solutions",
  description: "Luxury logistics services across India — full truck load, part load, and goods transport with a cinematic premium experience.",
  metadataBase: new URL("https://fasttrack.example.com"),
  openGraph: {
    title: "Fasttrack Logistics",
    description: "Premium transport services for businesses across India.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
