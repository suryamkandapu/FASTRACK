import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120907] px-6 text-white">
      <div className="rounded-[2rem] border border-white/10 bg-[#1f1510]/90 p-16 text-center shadow-luxury">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5eee8]/80">Page not found</p>
        <h1 className="mt-6 text-5xl font-black uppercase tracking-[-0.05em]">404</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-[#d9c9b9]">The page you are looking for does not exist. Return to the premium Fasttrack Logistics experience.</p>
        <Link href="/" className="mt-8 inline-block">
          <Button as="a" href="/">Go Home</Button>
        </Link>
      </div>
    </main>
  );
}
