import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Impact", href: "#impact" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Full Truck Load", href: "/services" },
  { label: "Part Load", href: "/services" },
  { label: "Goods Transport", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-[#120907] text-[#f5eee8]">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="DBM Logo"
                width={40}
                height={40}
                className="shrink-0 rounded-lg"
              />
              <div className="leading-[0.95]">
                <p className="text-[17px] font-black uppercase tracking-[0.35em] text-white">DBM</p>
              </div>
            </div>

            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#c9b5a8]">
              Premium logistics support across India, built for dependable delivery, transparent communication, and polished client experience.
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#d8c4b8]">
              <a href="tel:+919505984225" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4" />
                +91 95059 84225
              </a>
              <a href="mailto:dbmtransport@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4" />
                dbmtransport@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-[#c9b5a8]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]">
              Services
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-[#c9b5a8]">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]">
              Connect
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919505984225"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#f6d8c3]/70 hover:bg-white/15"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12.04 2.5A9.5 9.5 0 0 0 3.2 15.1L2.5 21.5l6.5-1.66a9.5 9.5 0 1 0 3.04-17.34Zm0 17.3a7.9 7.9 0 0 1-4-1.08l-.28-.17-3.86.99.98-3.77-.18-.29a7.9 7.9 0 1 1 7.34 4.32Zm4.36-5.93c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32 1 2.48.14.16 1.72 2.64 4.18 3.7.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:dbmtransport@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#f6d8c3]/70 hover:bg-white/15"
              >
                <Mail className="h-4 w-4" />
                Email
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Link href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/15">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/15">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/15">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-[#a48d80]">
          © 2026 DBMT Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
