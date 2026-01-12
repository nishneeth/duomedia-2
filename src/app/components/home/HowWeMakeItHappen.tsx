"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Influencer Search",
    desc: "Handpicked creators who get your vibe.",
    image: "/makeItHappen/1.png",
  },
  {
    title: "Creative Strategy",
    desc: "We make content that actually works.",
    image: "/makeItHappen/2.png",
  },
  {
    title: "Content Guidelines",
    desc: "Clear briefs that keep output on-point.",
    image: "/makeItHappen/3.png",
  },
  {
    title: "Trend Research",
    desc: "Stay ahead with insights that perform.",
    image: "/makeItHappen/4.png",
  },
  {
    title: "Compliance & Contracts",
    desc: "Everything buttoned-up and sound.",
    image: "/makeItHappen/5.png",
  },
  {
    title: "Reporting & Analytics",
    desc: "Clear reports that tell a story.",
    image: "/makeItHappen/6.png",
  },
];

export default function HowWeMakeItHappen() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="How We Make It Happen"
          subtitle="Here's why smart brands stick with us (and brag about it later)"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ rotateX: 1.2, rotateY: -1.2 }}
              className="relative overflow-hidden rounded-[28px] p-6 min-h-[350px] w-[88%] mx-auto
              hover:ring-[#D6FF21]/40 bg-gradient-to-b from-[#D6FF21]/8 to-transparent
              shadow-[0_12px_40px_rgba(214,255,33,0.06)] transition-all duration-300"
            >
              {/* 🔥 GLOW BORDER LAYER (FIRST CHILD) */}
              <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[28px] ring-4 ring-[#D6FF21]/0 animate-[borderGlow_4.5s_ease-in-out_infinite]"
              />

              {/* TOP travelling light */}
              <span className="pointer-events-none absolute top-0 left-[-40%] h-[3px] w-[60%] bg-gradient-to-r from-transparent via-[#D6FF21]/90 to-transparent animate-[topLight_4.5s_ease-in-out_infinite] blur-sm z-10 mix-blend-screen"
              />

              {/* BOTTOM travelling light */}
              <span className="pointer-events-none absolute bottom-0 right-[-40%] h-[3px] w-[60%] bg-gradient-to-l from-transparent via-[#D6FF21]/80 to-transparent animate-[bottomLight_4.5s_ease-in-out_infinite] blur-sm z-10 mix-blend-screen"
              />

              <h3 className="mt-3 sm:mt-4 text-[28px] sm:text-[32px] md:text-[35px] leading-tight font-extrabold font-display">
                {s.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-base sm:text-lg leading-relaxed text-white/50">
                {s.desc}
              </p>

              {/* Bottom-right image (unique per card) */}
              <Image
                src={s.image}
                alt=""
                width={220}
                height={220}
                className="pointer-events-none absolute bottom-[-30px] sm:bottom-[-35px] md:bottom-[-40px] right-[-8px] sm:right-[-10px] md:right-[-11px] opacity-80 w-[160px] sm:w-[190px] md:w-[220px]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* keyframes moved to globals.css */}
    </section>
  );
}
