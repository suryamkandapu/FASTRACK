import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBMT | Durga Bhavani Manikanta Transports",
  description: "Reliable freight and transport solutions across India with a premium, modern client experience.",
  metadataBase: new URL("https://dbmt.example.com"),
  openGraph: {
    title: "DBMT | Durga Bhavani Manikanta Transports",
    description: "Reliable freight and transport solutions across India.",
    type: "website",
    locale: "en_IN",
  },
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
