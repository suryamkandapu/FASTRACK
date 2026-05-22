import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-[2rem] border border-[#e6d8c8] bg-white p-8 shadow-soft transition hover:shadow-luxury">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f5eee8] to-[#ecd7c7] text-2xl shadow-sm">{icon}</div>
      <h3 className="mt-6 text-2xl font-semibold text-[#1f1f1f]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#6b6b6b]">{description}</p>
      <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#7a3e1d] transition group-hover:translate-x-1">
        Read More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
