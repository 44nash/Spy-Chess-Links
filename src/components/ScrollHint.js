import React, { useEffect, useState } from "react";

const BOTTOM_THRESHOLD = 24;
const MIN_SCROLLABLE = 32;

function getMetrics(target) {
  if (target === window) {
    return {
      scrollTop: window.scrollY,
      clientHeight: window.innerHeight,
      scrollHeight: document.documentElement.scrollHeight,
    };
  }
  return {
    scrollTop: target.scrollTop,
    clientHeight: target.clientHeight,
    scrollHeight: target.scrollHeight,
  };
}

// Bouncing chevron shown while `containerRef` (or the window, if omitted)
// has more content below the fold; hides once scrolled near the bottom.
export default function ScrollHint({ variant, containerRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = containerRef ? containerRef.current : window;
    if (!target) return;

    const update = () => {
      const { scrollTop, clientHeight, scrollHeight } = getMetrics(target);
      const scrollable = scrollHeight - clientHeight > MIN_SCROLLABLE;
      const atBottom = scrollTop + clientHeight >= scrollHeight - BOTTOM_THRESHOLD;
      setVisible(scrollable && !atBottom);
    };

    update();
    // Re-check shortly after mount in case images/fonts still growing the layout.
    const settleTimer = setTimeout(update, 300);
    target.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      target.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(settleTimer);
    };
  }, [containerRef]);

  if (!visible) return null;

  return (
    <div className={`sc-scroll-hint sc-scroll-hint--${variant}`}>
      <span className="sc-scroll-chevron">⌄</span>
    </div>
  );
}
