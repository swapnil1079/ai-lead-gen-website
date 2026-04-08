import { r as reactExports } from "./index-C48gaYKL.js";
function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -60px 0px",
    triggerOnce = true
  } = options;
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);
  return { ref, isVisible };
}
function useStaggeredAnimation(count, isVisible, delayBase = 0.1) {
  return Array.from({ length: count }, (_, i) => ({
    style: {
      transitionDelay: isVisible ? `${i * delayBase}s` : "0s",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
    }
  }));
}
export {
  useStaggeredAnimation as a,
  useIntersectionObserver as u
};
