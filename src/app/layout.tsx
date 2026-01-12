// src/app/layout.tsx
import "./globals.css";
import "./mobile-responsive.css"; // Mobile responsive enhancements
import "./performance.css"; // Performance optimizations
import "./gsap-config"; // Initialize GSAP configuration
import type { Metadata } from "next";
import { poppins } from "./fonts";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "Duo Media",
  description: "Influencer marketing that actually performs.",
  keywords: ["influencer marketing", "creator partnerships", "brand collaborations", "social media marketing", "content creators"],
  authors: [{ name: "Duo Media" }],
  openGraph: {
    title: "Duo Media - Influencer Marketing Agency | Connecting Brands & Creators",
    description: "We connect brands with the right creators to boost visibility, drive engagement, and deliver real results.",
    url: "https://www.duomediaa.com",
    siteName: "Duo Media",
    images: [
      {
        url: "/Group342.png",
        width: 1200,
        height: 630,
        alt: "Duo Media Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duo Media - Influencer Marketing Agency",
    description: "We connect brands with the right creators to boost visibility, drive engagement.",
    images: ["/Group342.png"],
  },
  icons: {
    icon: [
      { url: "/Group342.png", sizes: "32x32", type: "image/png" },
      { url: "/Group342.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/Group342.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/Group342.png",
  },
  metadataBase: new URL("https://www.duomediaa.com"),
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
