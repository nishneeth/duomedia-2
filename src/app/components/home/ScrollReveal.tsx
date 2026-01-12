"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap, ScrollTrigger } from "@/app/gsap-config";

type Props = {
  children: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
};

export default function ScrollReveal({
  children,
  enableBlur = true,
  baseOpacity = 0.2,
  baseRotation = 2,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
  const temp = document.createElement("div");
  temp.innerHTML = children;

  const nodes: React.ReactNode[] = [];

  temp.childNodes.forEach((node, i) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent?.split(/(\s+)/).forEach((word, j) => {
        if (/^\s+$/.test(word)) {
          nodes.push(word);
        } else {
          nodes.push(
            <span className="word" key={`${i}-${j}`}>
              {word}
            </span>
          );
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement) {
      nodes.push(
        <span
          key={i}
          className={`word ${node.className || ""}`}
          dangerouslySetInnerHTML={{ __html: node.innerHTML }}
        />
      );
    }
  });

  return nodes;
}, [children]);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    // Smooth scroll configuration with better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      limitCallbacks: true,
    });

   /* 🔄 Smooth rotation with optimized scrub */
gsap.fromTo(
  el,
  { rotate: baseRotation },
  {
    rotate: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: el,
      start: "top bottom+=10%",
      end: "bottom top-=10%",
      scrub: 0.5, // Lower value = smoother
      invalidateOnRefresh: true,
    },
  }
);

/* ✨ Balanced blur reveal with better performance */
gsap.fromTo(
  words,
  {
    opacity: baseOpacity,
    filter: enableBlur ? `blur(${blurStrength - 2}px)` : "none",
    y: 14,
  },
  {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    stagger: {
      each: 0.03,
      ease: "power1.out",
    },
    ease: "power1.out",
    scrollTrigger: {
      trigger: el,
      start: "top bottom+=18%",
      end: "bottom top-=18%",
      scrub: 0.5, // Lower value = smoother response
      invalidateOnRefresh: true,
    },
  }
);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [enableBlur, baseOpacity, baseRotation, blurStrength]);

  return (
    <>
      {/* Scoped base styles */}
      <style jsx>{`
        .scroll-reveal {
          width: 100%;
        }

        .scroll-reveal-text {
          display: inline;
        }

        .scroll-reveal .word {
          display: inline-block;
          will-change: opacity, filter, transform;
        }
      `}</style>

      <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
        <p className={`scroll-reveal-text ${textClassName}`}>
          {splitText}
        </p>
      </div>
    </>
  );
}
