"use client";

import { useLayoutEffect, useRef, useState } from "react";

// Positions the phone image so its top lines up with the H1's top and its
// bottom lines up with the price row's bottom — two landmarks in two
// different layout sections (the hero row, and the search card further
// down the page), so this can't be expressed as a normal sibling in either
// section's flow. Measured live and applied as an absolutely-positioned
// overlay against .page-home (already position:relative), horizontally
// centred in the band to the right of the text column.
export default function HeroPhoneOverlay() {
  const imgRef = useRef(null);
  const [box, setBox] = useState(null);

  useLayoutEffect(() => {
    const update = () => {
      const pageHome = document.querySelector(".page-home");
      const h1 = document.querySelector(".page-home h1");
      const zone = document.querySelector(".page-home .hero-orange-zone");
      const pageHomeInner = document.querySelector(".page-home-inner");
      const priceRow = document.querySelector(".price-row");
      if (!pageHome || !h1 || !zone || !pageHomeInner || !priceRow) return;

      // Below the 761px breakpoint the overlay is hidden entirely via CSS
      // (see .hero-phone-overlay) — skip positioning math there, since the
      // phone sits well clear of the text column only at desktop widths.
      if (window.innerWidth < 761) {
        setBox(null);
        return;
      }

      const pageHomeRect = pageHome.getBoundingClientRect();
      const h1Rect = h1.getBoundingClientRect();
      const zoneRect = zone.getBoundingClientRect();
      const innerRect = pageHomeInner.getBoundingClientRect();
      const priceRect = priceRow.getBoundingClientRect();

      const top = h1Rect.top - pageHomeRect.top;
      const height = priceRect.bottom - h1Rect.top;
      const left = zoneRect.right - pageHomeRect.left + 32; // match the old 32px column gap
      const right = innerRect.right - pageHomeRect.left;

      setBox({ top, left, width: Math.max(right - left, 0), height });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(document.documentElement);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="hero-phone-overlay"
      style={
        box
          ? { top: box.top, left: box.left, width: box.width, height: box.height }
          : undefined
      }
    >
      <img
        ref={imgRef}
        src="/hero-phone.webp"
        alt="A sample Ramsforge RAMS document shown on a phone screen"
      />
    </div>
  );
}
