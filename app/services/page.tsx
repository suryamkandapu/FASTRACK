import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";

import { servicesData } from "@/lib/data";

export default function ServicesPage() {
  return (
    <PageTransition>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#120907] py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80 md:text-sm">
            OUR SERVICES
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
            Explore Premium Logistics Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#d9c9b9] md:text-base md:leading-8">
            Select from our dedicated transport offerings and
            experience premium logistics built for modern
            businesses and nationwide delivery operations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto grid gap-6 px-4 py-14 md:grid-cols-3 md:py-20">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-[#e6d8c8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f5eee8] to-[#ecd7c7] text-2xl shadow-sm">
              {service.icon}
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-[#1f1f1f]">
              {service.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#6b6b6b]">
              {service.description}
            </p>

            <Link
              href={service.href}
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7a3e1d]"
            >
              VIEW SERVICE
            </Link>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="container mx-auto px-4 pb-20 text-center">
        <Button
          as="a"
          href="/#contact"
          className="px-8 py-3 text-[11px] tracking-[0.24em]"
        >
          REQUEST A CUSTOM PLAN
        </Button>
      </div>

      <Footer />
    </PageTransition>
  );
}