import { useEffect, useRef, useState } from "react";

/**
 * Centralized scroll-reveal hook.
 * Adds `is-visible` class to ref'd elements when they enter the viewport.
 * Pair with the `.reveal` utility in styles.css.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          setVisible(true);
          obs.unobserve(node);
        }
      });
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}

/** Stagger helper — returns inline style with animation-delay. */
export const stagger = (i: number, base = 80): React.CSSProperties => ({
  animationDelay: `${i * base}ms`,
});

/** Preset class names for reusable entry animations. */
export const anim = {
  fadeIn: "animate-fade-in",
  fadeInUp: "animate-fade-in-up",
  fadeInDown: "animate-fade-in-down",
  scaleIn: "animate-scale-in",
  slideLeft: "animate-slide-in-left",
  slideRight: "animate-slide-in-right",
  float: "animate-float",
  glow: "animate-glow-pulse",
};
