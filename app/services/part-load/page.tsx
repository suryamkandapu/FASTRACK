import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function PartLoadPage() {
  return (
    <PageTransition>
      <Navbar />

      <main className="min-h-screen bg-[#f5eee8] px-4 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-black uppercase text-[#1f1f1f]">
            Part Load Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b6b6b]">
            Flexible and cost-efficient logistics solutions
            for smaller consignments across India.
          </p>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
}