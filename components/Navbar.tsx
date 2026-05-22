"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "FLEET", href: "#fleet" },
  { label: "TRACKING", href: "#tracking" },
  { label: "CONTACT US", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#120907]/92 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-[#120907]/70 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          
          {/* LOGO */}
          <Link href="#home" className="relative z-50 flex flex-col">
            <h1 className="text-[22px] font-black uppercase tracking-[0.35em] text-white">
              FASTTRACK.
            </h1>

            <div className="mt-1 text-[9px] uppercase leading-4 tracking-[0.28em] text-[#f5eee8]/75 sm:text-[10px]">
              <span>DURGA BAVANI</span>
              <br />
              <span>MANIKANTA TRANSPORT</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-[13px] font-medium uppercase tracking-[0.24em] text-white/80 transition hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#b76532] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            
            {/* DESKTOP BUTTON */}
            <div className="hidden lg:block">
              <Button
                as="a"
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[#8f4d22] to-[#6b3212] px-8 py-3 text-xs tracking-[0.24em] shadow-[0_10px_30px_rgba(143,77,34,0.35)] transition hover:scale-105 hover:from-[#a95a28] hover:to-[#7a3e1d]"
              >
                GET A QUOTE
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 lg:hidden"
            >
              {mobileMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-[340px] flex-col bg-[#120907] p-8 shadow-2xl lg:hidden"
            >
              
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-[0.28em] text-white">
                    FASTTRACK.
                  </h2>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-white/60">
                    Premium Logistics
                  </p>
                </div>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* LINKS */}
              <div className="mt-14 flex flex-col gap-7">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-[15px] font-medium uppercase tracking-[0.2em] text-white/85 transition hover:text-[#c56d38]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-auto">
                <Button
                  as="a"
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#8f4d22] to-[#6b3212] py-4 text-xs tracking-[0.24em]"
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