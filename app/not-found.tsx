import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120907] px-6 text-white">
      
      <div className="w-full max-w-[620px] rounded-[2rem] border border-white/10 bg-[#1f1510]/90 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-14">

        {/* SMALL TAG */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f5eee8]/75">
          Page not found
        </p>

        {/* 404 */}
        <h1 className="mt-5 text-[90px] font-black uppercase leading-none tracking-[-0.08em] text-white md:text-[140px]">
          404
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-7 text-[#d9c9b9] md:text-base md:leading-8">
          The page you are looking for does not exist.
          Return to the premium Fasttrack Logistics experience.
        </p>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center">
          <Button
            as="a"
            href="/"
            className="px-8 py-3 text-[11px] uppercase tracking-[0.24em]"
          >
            GO HOME
          </Button>
        </div>

      </div>

    </main>
  );
}