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
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/Group342.png"
                alt="Duo Media"
                width={70}
                height={72}
                priority
              />
            </Link>
            <p className="mt-4 text-white/70 max-w-xs">
              Creative influencer campaigns that move products and build brands.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Duo Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
