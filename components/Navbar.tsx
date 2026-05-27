"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR IMPACT", href: "#impact" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#120907]/85 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-transparent bg-[#120907]/75 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-[82px] lg:px-10">
          <Link href="#home" className="relative z-50 flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="DBM Logo"
              width={40}
              height={40}
              className="shrink-0 rounded-lg"
            />
            <div className="flex flex-col items-start leading-[0.95]">
              <h1 className="text-[16px] font-black uppercase tracking-[0.34em] text-white sm:text-[18px]">
                DBM
              </h1>
              <p className="mt-[1px] text-[8px] uppercase tracking-[0.2em] text-[#f5eee8]/80 sm:text-[9px]">
                Durga Bavani Manikanta
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-[12px] font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#c56d38] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                as="a"
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[#8f4d22] to-[#6b3212] px-6 py-3 text-[11px] tracking-[0.24em] shadow-[0_10px_30px_rgba(143,77,34,0.35)]"
              >
                GET A QUOTE
              </Button>
            </div>

            <button
              aria-expanded={mobileMenu}
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 lg:hidden"
            >
              {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[86%] max-w-[340px] flex-col bg-[#120907] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden"
            >
              <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.jpg"
                    alt="DBM Logo"
                    width={40}
                    height={40}
                    className="shrink-0 rounded-lg"
                  />
                  <div className="leading-[0.95]">
                    <h2 className="text-[15px] font-black uppercase tracking-[0.28em] text-white">
                      DBM
                    </h2>
                    <p className="mt-[2px] text-[8px] uppercase tracking-[0.18em] text-white/70">
                      Durga Bavani Manikanta
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-5">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/85 transition hover:text-[#c56d38]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto grid gap-3">
                <a
                  href="https://wa.me/919505984225"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#25d366] px-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919505984225"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                >
                  Call Now
                </a>
                <Button
                  as="a"
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#8f4d22] to-[#6b3212] py-4 text-[11px] tracking-[0.24em]"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}