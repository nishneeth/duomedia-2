"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Global ScrollTrigger configuration for better performance
if (typeof window !== "undefined") {
  ScrollTrigger.config({
    // Limit callbacks for better performance
    limitCallbacks: true,
    
    // Sync with RAF for smoother animations
    syncInterval: 0,
    
    // Auto-refresh on these events only
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    
    // Ignore scroll events that don't change position
    ignoreMobileResize: true,
  });

  // Set default ease for smoother animations
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8,
  });

  // Performance optimization: reduce precision for better performance
  gsap.config({
    // Null target warnings can slow down development
    nullTargetWarn: false,
    
    // Unit conversion precision
    units: {
      rotation: "deg"
    }
  });
}

export { gsap, ScrollTrigger };
