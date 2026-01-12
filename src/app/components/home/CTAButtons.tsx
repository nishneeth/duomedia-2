"use client";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Reduced motion settings for better performance
const reducedMotionConfig = {
  reducedMotion: "user",
};

export function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-black bg-[#D6FF21] shadow-[0_10px_30px_rgba(214,255,33,0.35)] hover:shadow-[0_14px_38px_rgba(214,255,33,0.45)] transition-shadow"
      >
        {children} <ArrowRight className="size-4" />
      </motion.button>
    </MotionConfig>
  );
}

export function GhostCTA({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
      >
        {children}
      </motion.button>
    </MotionConfig>
  );
}