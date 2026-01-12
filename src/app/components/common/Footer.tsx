"use client";

import GhostCursor from "./GhostCursorFooter";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white bg-black">

      {/* ✅ BASE BACKGROUND (LOWEST LAYER) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f18] via-black to-black opacity-90" />
      </div>

      {/* ✅ GHOST CURSOR (ABOVE BACKGROUND) */}
      <GhostCursor
        trailLength={50}
        inertia={0.5}
        bloomRadius={1.1}
        bloomThreshold={0.02}
        grainIntensity={0.06}
        edgeIntensity={0.2}
        color="#D6FF21"
        brightness={1.4}
        bloomStrength={0.2}
        zIndex={2}   // 👈 IMPORTANT
      />

      {/* ✅ FOOTER CONTENT (TOP MOST) */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/Group342.png"
                alt="Duo Media"
                width={70}
                height={72}
                priority
                className="h-14 sm:h-16 w-auto"
              />
            </Link>
            <p className="mt-3 sm:mt-4 text-white/70 max-w-xs text-sm sm:text-base">
              Creative influencer campaigns that move products and build brands.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Quick Links</h3>
            <Link href="/" className="text-sm sm:text-base hover:text-[#D6FF21] transition-colors">Home</Link>
            <Link href="/services" className="text-sm sm:text-base hover:text-[#D6FF21] transition-colors">Services</Link>
            <Link href="/projects" className="text-sm sm:text-base hover:text-[#D6FF21] transition-colors">Portfolio</Link>
            <Link href="/about" className="text-sm sm:text-base hover:text-[#D6FF21] transition-colors">About</Link>
            <Link href="/contact" className="text-sm sm:text-base hover:text-[#D6FF21] transition-colors">Contact</Link>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-base sm:text-lg">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
              <FaFacebookF className="cursor-pointer hover:text-[#D6FF21] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#D6FF21] transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#D6FF21] transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-3 sm:py-4 text-center text-xs sm:text-sm text-white/60 px-4">
          © {new Date().getFullYear()} Duo Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
