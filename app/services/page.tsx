import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/Button";
import { servicesData } from "@/lib/data";

export default function ServicesIndexPage() {
  return (
    <PageTransition>
      <TopBar />
      <Navbar />
      <section className="bg-[#120907] py-24 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">OUR SERVICES</p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.04em]">Explore premium logistics solutions</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d9c9b9]">Select from our dedicated transport offerings and review the full premium service experience designed for modern shippers.</p>
        </div>
      </section>
      <section className="container mx-auto py-24 grid gap-6 md:grid-cols-3">
        {servicesData.map((service) => (
          <div key={service.title} className="rounded-[2rem] border border-[#e6d8c8] bg-white p-8 shadow-soft">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f5eee8] to-[#ecd7c7] text-2xl shadow-sm">{service.icon}</div>
            <h2 className="mt-6 text-2xl font-semibold text-[#1f1f1f]">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#6b6b6b]">{service.description}</p>
            <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#7a3e1d]">
              View service
            </Link>
          </div>
        ))}
      </section>
      <div className="container mx-auto pb-24 text-center">
        <Button as="a" href="#contact" className="px-10 py-3">REQUEST A CUSTOM PLAN</Button>
      </div>
      <Footer />
    </PageTransition>
  );
}
