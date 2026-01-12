"use client";
import { memo } from "react";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import GridBG from "./components/home/GridBG";
import Hero from "./components/home/Hero";
import HowWeMakeItHappen from "./components/home/HowWeMakeItHappen";
import InfluencerCategories from "./components/home/InfluencerCategories";
import RealResultsSection from "./components/home/RealResultsSection";
import ServicesPage from "./components/home/Service";
import Testimonials from "./components/home/Testimonials";
import VideoMarquee from "./components/home/VideoMarquee";

// Memoize components to prevent re-renders during scroll
const MemoGridBG = memo(GridBG);
const MemoHero = memo(Hero);
const MemoAboutSection = memo(AboutSection);
const MemoVideoMarquee = memo(VideoMarquee);
const MemoServicesPage = memo(ServicesPage);
const MemoHowWeMakeItHappen = memo(HowWeMakeItHappen);
const MemoRealResultsSection = memo(RealResultsSection);
const MemoInfluencerCategories = memo(InfluencerCategories);
const MemoTestimonials = memo(Testimonials);
const MemoContactSection = memo(ContactSection);

export default function Page() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <MemoGridBG />

      <div className="relative">
        <MemoHero />
        <MemoAboutSection/>
        <MemoVideoMarquee />
        <MemoServicesPage/>
        <MemoHowWeMakeItHappen />
        <MemoRealResultsSection/>
        <MemoInfluencerCategories />
        <MemoTestimonials />
        <MemoContactSection/>
      </div>
    </main>
  );
}
