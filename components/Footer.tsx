import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

const services = [
  { label: "Full Truck Load", href: "/services/full-truck-load" },
  { label: "Part Load", href: "/services/part-load" },
  { label: "Goods Transport", href: "/services/goods-transport" }
];

export function Footer() {
  return (
    <footer className="bg-[#120907] text-[#f5eee8] py-16">
      <div className="container mx-auto grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-2xl font-black uppercase tracking-[0.4em]">fasttrack.</p>
          <p className="text-sm leading-7 text-[#c9b5a8]">Luxury logistics across India with premium fleet solutions and elegant cargo experiences.</p>
          <div className="flex items-center gap-3 text-sm text-[#c9b5a8]">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#c9b5a8]">
            <Mail className="h-4 w-4" />
            <span>hello@fasttrack.com</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8] mb-5">Quick Links</h3>
          <ul className="space-y-3 text-[#c9b5a8]">
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8] mb-5">Services</h3>
          <ul className="space-y-3 text-[#c9b5a8]">
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8] mb-5">Follow</h3>
          <div className="flex items-center gap-3">
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
      <div className="container mx-auto mt-12 border-t border-white/10 pt-6 text-sm text-[#a48d80] text-center">
        © 2026 Fasttrack Logistics. All rights reserved.
      </div>
    </footer>
  );
}
