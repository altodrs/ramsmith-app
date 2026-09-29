"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Measuring before paint (not after) avoids a visible flash of the
// fallback/unsized state on load. useLayoutEffect warns if it runs during
// SSR, so it's only used once mounted in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// The phone image's height is set to match this column's real rendered
// height via ResizeObserver — a pure-CSS sibling-height match
// (align-items:stretch + height:100%) hits a real circular-sizing bug
// with a portrait image (confirmed: it inflates the row from ~360px to
// ~1020px, using the image's own intrinsic aspect ratio instead of the
// text column's actual content height).
export default function HeroColumns({ textColumn }) {
  const zoneRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(null);

  useIsomorphicLayoutEffect(() => {
    const target = zoneRef.current;
    if (!target) return;
    const update = () => setImgHeight(target.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-columns">
      <div ref={zoneRef} className="intro hero-orange-zone">
        {textColumn}
      </div>
      <div className="hero-phones" style={imgHeight ? { height: imgHeight } : undefined}>
        <img
          src="/hero-phone.webp"
          alt="A sample Ramsforge RAMS document shown on a phone screen"
        />
      </div>
    </div>
  );
}
