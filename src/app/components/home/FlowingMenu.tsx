"use client";

import React from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

type MenuItemType = {
  link: string;
  text: string;
  image: string;
};

export default function FlowingMenu({ items }: { items: MenuItemType[] }) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }: MenuItemType) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo.out" };

  const distMetric = (x: number, y: number, x2: number, y2: number) =>
    (x - x2) ** 2 + (y - y2) ** 2;

  const findClosestEdge = (x: number, y: number, w: number, h: number) =>
    distMetric(x, y, w / 2, 0) < distMetric(x, y, w / 2, h)
      ? "top"
      : "bottom";

  const handleEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        href={link}
        className="menu__item-link"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {text}
      </a>

      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <React.Fragment key={i}>
                <span>{text}</span>
                <div
                  className="marquee__img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
