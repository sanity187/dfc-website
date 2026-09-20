"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  isScrolled: boolean;
  isScrollingDown: boolean;
  scrollY: number;
}

/**
 * useScrollState hook with hysteresis thresholding.
 *
 * Uses separate collapse and expand thresholds to create a deadband,
 * completely eliminating scroll jitter/oscillation when sticky headers
 * change height.
 *
 * @param collapseThreshold Scroll depth (px) to collapse the top bar (default: 60)
 * @param expandThreshold Scroll depth (px) to expand the top bar (default: 15)
 */
export function useScrollState(collapseThreshold = 60, expandThreshold = 15): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    isScrollingDown: false,
    scrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isCurrentlyScrolled = window.scrollY > collapseThreshold;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hysteresis: only toggle true when past collapseThreshold,
      // only toggle false when back near the top (below expandThreshold)
      if (!isCurrentlyScrolled && currentScrollY > collapseThreshold) {
        isCurrentlyScrolled = true;
      } else if (isCurrentlyScrolled && currentScrollY <= expandThreshold) {
        isCurrentlyScrolled = false;
      }

      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > collapseThreshold;

      setScrollState({
        isScrolled: isCurrentlyScrolled,
        isScrollingDown,
        scrollY: currentScrollY,
      });

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapseThreshold, expandThreshold]);

  return scrollState;
}
