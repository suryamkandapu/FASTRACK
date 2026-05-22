"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import React from "react";

type SharedButtonProps = {
  variant?: "primary" | "secondary";
  icon?: "play" | "arrow";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = SharedButtonProps & {
  as?: "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonAsAnchor = SharedButtonProps & {
  as: "a";
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary: "bg-gradient-to-r from-[#7A3E1D] via-[#9e532c] to-[#4B240F] text-white shadow-[0_18px_40px_rgba(122,62,29,0.26)] hover:shadow-[0_24px_60px_rgba(122,62,29,0.32)]",
  secondary: "bg-white border border-[#7A3E1D] text-[#1f1f1f] shadow-sm hover:shadow-lg"
};

const MotionButton = motion.button;
const MotionAnchor = motion.a;

export  function Button(props: ButtonProps) {
  const { variant = "primary", icon, children, className = "", as = "button", onClick } = props;
  const href = "href" in props ? props.href : undefined;

  return as === "a" ? (
    <MotionAnchor
      href={href}
      onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-[1.25rem] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${variants[variant]} ${className}`}
    >
      {children}
      {icon === "play" ? <Play className="h-4 w-4" /> : icon === "arrow" ? <ChevronRight className="h-4 w-4" /> : null}
    </MotionAnchor>
  ) : (
    <MotionButton
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-[1.25rem] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition ${variants[variant]} ${className}`}
    >
      {children}
      {icon === "play" ? <Play className="h-4 w-4" /> : icon === "arrow" ? <ChevronRight className="h-4 w-4" /> : null}
    </MotionButton>
  );
}
