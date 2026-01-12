// src/app/layout.tsx
import "./globals.css";
import "./performance.css"; // Performance optimizations
import "./gsap-config"; // Initialize GSAP configuration
import type { Metadata } from "next";
import { poppins } from "./fonts";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "Duo Media",
  description: "Influencer marketing that actually performs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans scroll-smooth`}
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-[#0b0b0b] text-white antialiased overflow-x-hidden" style={{ minHeight: '100vh', contain: 'layout style' }}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
