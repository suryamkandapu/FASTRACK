import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  offscreen: { opacity: 0, y: 32 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export const fadeIn: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerIn: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } }
};

export const floatUp: Variants = {
  offscreen: { opacity: 0, y: 18 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
