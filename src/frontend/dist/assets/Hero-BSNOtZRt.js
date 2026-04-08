import { r as reactExports, j as jsxRuntimeExports } from "./index-C48gaYKL.js";
import { A as ArrowRight } from "./arrow-right-BfKYJurC.js";
import { M as Mail } from "./mail-DeV5XCVk.js";
import { G as Globe, T as Target } from "./target-CNHH4SyR.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const SLIDES = [
  {
    id: 1,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description: "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "View Demo",
    badge: "💰 Pay Only for Results"
  },
  {
    id: 2,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description: "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "See How It Works",
    badge: "💰 Pay Only for Results"
  },
  {
    id: 3,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description: "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "Our Results",
    badge: "💰 Pay Only for Results"
  }
];
const STATS = [
  { value: "500+", label: "Clients Worldwide", icon: Globe },
  { value: "1.2M+", label: "Leads Generated", icon: ChartNoAxesColumn },
  { value: "98.7%", label: "Accuracy Rate", icon: Target }
];
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: `particle-${i}`,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 6,
  color: i % 3 === 0 ? "oklch(0.72 0.24 189 / 0.7)" : i % 3 === 1 ? "oklch(0.68 0.25 290 / 0.7)" : "oklch(0.8 0.1 189 / 0.4)"
}));
const ORBS = [
  { size: 300, x: 75, y: 20, color: "oklch(0.72 0.24 189 / 0.06)", blur: 80 },
  { size: 250, x: 85, y: 70, color: "oklch(0.68 0.25 290 / 0.08)", blur: 80 },
  { size: 200, x: 60, y: 50, color: "oklch(0.72 0.24 189 / 0.04)", blur: 60 }
];
const ORB_IDS = ["orb-1", "orb-2", "orb-3"];
function Hero() {
  const [current, setCurrent] = reactExports.useState(0);
  const [isAnimating, setIsAnimating] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [emailSubmitted, setEmailSubmitted] = reactExports.useState(false);
  const intervalRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);
  const goTo = reactExports.useCallback(
    (indexOrUpdater) => {
      setIsAnimating(true);
      setCurrent(
        typeof indexOrUpdater === "function" ? indexOrUpdater : () => indexOrUpdater
      );
      setTimeout(() => setIsAnimating(false), 600);
    },
    []
  );
  const startAutoplay = reactExports.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goTo((c) => (c + 1) % SLIDES.length);
    }, 5500);
  }, [goTo]);
  reactExports.useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);
  const handleSlide = (index) => {
    if (isAnimating) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(index);
    startAutoplay();
  };
  const slide = SLIDES[current];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen flex flex-col overflow-hidden bg-space-deep pt-24", children: [
    ORBS.map((orb, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full pointer-events-none",
        style: {
          width: orb.size,
          height: orb.size,
          left: `${orb.x}%`,
          top: `${orb.y}%`,
          background: orb.color,
          filter: `blur(${orb.blur}px)`,
          transform: "translate(-50%, -50%)"
        }
      },
      ORB_IDS[i]
    )),
    PARTICLES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full pointer-events-none",
        style: {
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          top: `${p.y}%`,
          background: p.color,
          animation: `twinkle ${p.duration}s ease-in-out infinite`,
          animationDelay: `${p.delay}s`
        }
      },
      p.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none opacity-[0.03]",
        style: {
          backgroundImage: "linear-gradient(oklch(0.72 0.24 189) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.24 189) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 flex-1 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center w-full py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 text-sm font-medium text-primary border-neon transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`,
            style: { transitionDelay: "0.1s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
              slide.badge
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `space-y-2 transition-all duration-700 ${visible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
            style: { transitionDelay: "0.2s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-foreground", children: slide.headline }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight gradient-neon-text", children: slide.subtitle })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-700 ${visible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: "0.35s" },
            children: slide.description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-wrap gap-4 transition-all duration-700 ${visible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: "0.5s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "hero-cta-primary",
                  className: "neon-button-filled text-background font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 text-base cursor-pointer",
                  children: [
                    slide.ctaText,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              slide.ctaSecondary && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "hero-cta-secondary",
                  className: "neon-button text-foreground font-semibold px-8 py-3.5 rounded-lg text-base cursor-pointer",
                  children: slide.ctaSecondary
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `transition-all duration-700 ${visible && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: "0.58s" },
            children: [
              emailSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "hero-email-success",
                  className: "glassmorphism rounded-xl px-5 py-3.5 inline-flex items-center gap-2 text-sm text-primary font-medium border-neon",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
                    "We'll be in touch — check your inbox!"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  "data-ocid": "hero-lead-form",
                  onSubmit: (e) => {
                    e.preventDefault();
                    if (email.trim()) setEmailSubmitted(true);
                  },
                  className: "flex gap-2 max-w-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "email",
                          required: true,
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          placeholder: "Enter your work email",
                          "data-ocid": "hero-email-input",
                          className: "w-full glassmorphism rounded-lg pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-colors duration-200"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "submit",
                        "data-ocid": "hero-email-submit",
                        className: "neon-button-filled text-background font-semibold px-5 py-3 rounded-lg text-sm whitespace-nowrap cursor-pointer",
                        children: "Get Access"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 ml-0.5", children: "No credit card required · Free trial for 14 days" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-wrap gap-6 pt-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: "0.65s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest w-full", children: "Trusted by more than 3000 clients" }),
              STATS.map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "glassmorphism rounded-xl px-5 py-4 flex items-center gap-3 card-hover cursor-default",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-foreground leading-none", children: value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
                    ] })
                  ]
                },
                label
              ))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `relative flex items-center justify-center transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`,
          style: { transitionDelay: "0.3s" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-primary/10 animate-rotate-slow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full border border-secondary/10 animate-rotate-reverse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full bg-primary/5 blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full bg-secondary/[0.08] blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-ai-brain.dim_900x700.png",
                alt: "AI Neural Network Brain",
                className: "relative w-full rounded-2xl animate-float-slow",
                style: {
                  filter: "drop-shadow(0 0 40px oklch(0.72 0.24 189 / 0.3))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute -left-4 top-1/3 glassmorphism rounded-xl px-4 py-3 flex items-center gap-3 animate-float",
                style: { animationDelay: "0s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Leads Today" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground", children: "+1,247" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute -right-4 bottom-1/3 glassmorphism rounded-xl px-4 py-3 flex items-center gap-3 animate-float",
                style: { animationDelay: "1.5s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-secondary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Accuracy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm gradient-neon-text", children: "98.7%" })
                  ] })
                ]
              }
            )
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 pb-10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", "data-ocid": "hero-slide-indicators", children: SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => handleSlide(i),
          "aria-label": `Slide ${i + 1}`,
          className: `rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-8 h-2 bg-primary shadow-neon-primary" : "w-2 h-2 bg-muted hover:bg-primary/50"}`
        },
        s.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "hero-prev",
            onClick: () => handleSlide((current - 1 + SLIDES.length) % SLIDES.length),
            className: "neon-button w-10 h-10 rounded-full flex items-center justify-center cursor-pointer",
            "aria-label": "Previous slide",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "hero-next",
            onClick: () => handleSlide((current + 1) % SLIDES.length),
            className: "neon-button w-10 h-10 rounded-full flex items-center justify-center cursor-pointer",
            "aria-label": "Next slide",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  Hero as default
};
