import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import React from "react";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
  icon?: "play" | "arrow";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};

type ButtonAsAnchor = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary: "bg-gradient-to-r from-[#7A3E1D] via-[#9e532c] to-[#4B240F] text-white shadow-[0_18px_40px_rgba(122,62,29,0.26)] hover:shadow-[0_24px_60px_rgba(122,62,29,0.32)]",
  secondary: "bg-white border border-[#7A3E1D] text-[#1f1f1f] shadow-sm hover:shadow-lg"
};

const MotionButton = motion.button;
const MotionAnchor = motion.a;

export function Button({ variant = "primary", icon, children, className = "", as = "button", ...props }: ButtonProps) {
  return as === "a" ? (
    <MotionAnchor
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-[1.25rem] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon === "play" ? <Play className="h-4 w-4" /> : icon === "arrow" ? <ChevronRight className="h-4 w-4" /> : null}
    </MotionAnchor>
  ) : (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-[1.25rem] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon === "play" ? <Play className="h-4 w-4" /> : icon === "arrow" ? <ChevronRight className="h-4 w-4" /> : null}
    </MotionButton>
  );
}
