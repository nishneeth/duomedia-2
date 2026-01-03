// src/components/RealResultsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion,useInView  } from "framer-motion";
import { poppins } from "@/app/fonts"; 

type StatTriplet = { creators: string; views: string; reach: string };

type CaseItem = {
  tag: string;
  brand: string;
  blurb: string;
  video?: string;
  poster?: string;
  image?: string;
  hoverImage?: string; // 👈 NEW
  stats: StatTriplet;
  href?: string;
};


const items: CaseItem[] = [
  {
    tag: "#DuoMedia",
    brand: "Lenskart",
    blurb: "Utilize our tools to enhance lens experiences and drive enrollment.",
    video: "/projects/lenskart.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "30", views: "5.4M", reach: "7.6M" },
  },
  {
    tag: "#DuoMedia",
    brand: "Beardo",
    blurb: "Utilize our tools to enhance learning experiences and drive enrollment.",
    video: "/projects/beardoreel.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "10", views: "1.8M", reach: "7.6M" },
  },
  {
    tag: "#DuoMedia",
    brand: "The Man Company",
    blurb: "Utilize our tools to enhance learning experiences and drive enrollment.",
    video: "/projects/themancompany.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "9", views: "1.6M", reach: "7.6M" },
  },
  {
    tag: "#DuoMedia",
    brand: "Meesho",
    blurb: "Utilize our tools to enhance learning experiences and drive enrollment.",
    video: "/projects/meshoreel.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "15", views: "3.7M", reach: "7.6M" },
  },
  {
    tag: "#DuoMedia",
    brand: "Urban Company",
    blurb: "From cluttered to clear — campaigns that people remember.",
    video: "/projects/urban.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "22", views: "4.9M", reach: "6.2M" },
  },
  {
    tag: "#DuoMedia",
    brand: "boAt",
    blurb: "Performance-first UGC that builds trust and drives action.",
    video: "/projects/boat.mp4",
    hoverImage: "/reels/graph1.png",
    stats: { creators: "12", views: "2.1M", reach: "5.3M" },
  },
];

export default function RealResultsSection() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div className="text-center">
          <h2
            className={`${poppins.className} text-[#D6FF21] text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_24px_rgba(214,255,33,0.35)]`}
          >
            Real Brands. Real Results.
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to go from cluttered to clear — and from noticed
            to remembered.
          </p>
        </div>

        {/* Mobile: 1 per row, Desktop: 2 per row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <CaseCard key={i} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  const { tag, brand, blurb, video, poster, image, hoverImage, stats, href } = item;

  return (
    <motion.a
      href={href ?? undefined}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative block overflow-hidden rounded-[28px] ring-1 ring-white/10 bg-black"
    >
      {/* Media */}
      <div className="relative">
        <div className="relative aspect-[1080/1300] md:max-h-[1035px] w-full overflow-hidden">
          
          {/* Base media (video or image) */}
          {video ? (
            <video
              src={video}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          ) : image ? (
            <img
              src={image}
              alt={brand}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          ) : null}

          {/* Hover image */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${brand} hover`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Overlay content (UNCHANGED) */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
        <div className="px-5 pb-4">
          <span className="inline-block rounded-full bg-[#1671FF] text-white text-xs font-semibold px-3 py-1 mb-3">
            {tag}
          </span>
          <h3 className={`${poppins.className} text-2xl md:text-[28px] font-extrabold drop-shadow`}>
            {brand}
          </h3>
          <p className="mt-1 text-white/85 max-w-[46ch]">{blurb}</p>
        </div>

        <div className="px-5 pb-5">
          <div className="grid grid-cols-3 gap-2 rounded-2xl bg-[#D6FF21] text-black px-4 py-4">
            <Stat label="Creators" value={stats.creators} />
            <Stat label="Total Views" value={stats.views} />
            <Stat label="Total Reach" value={stats.reach} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  // Parse value (supports 30, 5.4M, 7.6M)
  const isMillion = value.includes("M");
  const numericValue = parseFloat(value.replace("M", ""));
  const target = isMillion ? numericValue * 1_000_000 : numericValue;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  const displayValue = isMillion
    ? `${(count / 1_000_000).toFixed(1)}M`
    : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div
        className={`${poppins.className} text-2xl md:text-[26px] font-extrabold leading-none`}
      >
        {displayValue}
      </div>
      <div className="text-[12px] md:text-[13px] font-medium opacity-80">
        {label}
      </div>
    </div>
  );
}
