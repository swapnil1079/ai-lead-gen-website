import { useEffect, useState } from "react";

interface ScrollPosition {
  y: number;
  direction: "up" | "down";
  isScrolled: boolean;
  isScrolledFar: boolean;
}

export function useScrollPosition(threshold = 80): ScrollPosition {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>({
    y: 0,
    direction: "up",
    isScrolled: false,
    isScrolledFar: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollPos({
        y: currentY,
        direction: currentY > lastY ? "down" : "up",
        isScrolled: currentY > threshold,
        isScrolledFar: currentY > 400,
      });
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollPos;
}
