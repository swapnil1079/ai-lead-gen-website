import { j as jsxRuntimeExports, r as reactExports } from "./index-C48gaYKL.js";
import { u as useIntersectionObserver, a as useStaggeredAnimation } from "./useIntersectionObserver-GGtR57Ra.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
import { U as Users, T as TrendingUp } from "./users-C3RLftlg.js";
import { S as Shield } from "./shield-_dBXDUgN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
];
const Brain = createLucideIcon("brain", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode);
const STATS = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients Worldwide",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: "M+",
    label: "Leads Generated",
    color: "text-secondary"
  },
  {
    icon: Award,
    value: 98,
    suffix: ".7%",
    label: "Accuracy Rate",
    color: "text-primary"
  },
  {
    icon: Shield,
    value: 5,
    suffix: "+ Years",
    label: "Industry Experience",
    color: "text-secondary"
  }
];
const HIGHLIGHTS = [
  {
    icon: Brain,
    title: "AI-Powered Scoring",
    desc: "Machine learning models trained on 10M+ data points identify your best prospects"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Intent",
    desc: "Monitor buyer signals across 100+ digital channels to catch leads at peak interest"
  },
  {
    icon: Shield,
    title: "Verified & Compliant",
    desc: "All data is GDPR/CCPA compliant with triple-verified contact information"
  }
];
const NODE_ANGLES = [0, 72, 144, 216, 288];
function AnimatedCounter({
  value,
  suffix,
  isVisible
}) {
  const [count, setCount] = reactExports.useState(0);
  const rafRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    count,
    suffix
  ] });
}
function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({ threshold: 0.2 });
  const staggered = useStaggeredAnimation(HIGHLIGHTS.length, isVisible, 0.15);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-space-mid relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-40 top-1/2 w-80 h-80 rounded-full opacity-20 blur-3xl bg-secondary pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", ref: sectionRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square max-w-md mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-primary/10 animate-rotate-slow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full border border-secondary/10 animate-rotate-reverse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-12 rounded-full border border-primary/15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full glassmorphism flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-16 h-16 text-primary mx-auto mb-2 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-2xl gradient-neon-text", children: "NexusAI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Core Engine" })
              ] }) }),
              NODE_ANGLES.map((angle, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute w-10 h-10 rounded-full glassmorphism border border-primary/30 flex items-center justify-center",
                  style: {
                    left: `${50 + 42 * Math.cos(angle * Math.PI / 180)}%`,
                    top: `${50 + 42 * Math.sin(angle * Math.PI / 180)}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${i * 0.5}s`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-3 h-3 rounded-full bg-primary animate-pulse",
                      style: { animationDelay: `${i * 0.3}s` }
                    }
                  )
                },
                angle
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, className: "grid grid-cols-2 gap-4 mt-8", children: STATS.map(({ icon: Icon, value, suffix, label, color }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `glassmorphism rounded-xl p-4 card-hover transition-all duration-500 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
                style: { transitionDelay: `${i * 0.1}s` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${color} mb-2` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display font-bold text-2xl ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AnimatedCounter,
                    {
                      value,
                      suffix,
                      isVisible: statsVisible
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
                ]
              },
              label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-sm uppercase tracking-widest mb-3", children: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5", children: [
                "We're the leading online",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-neon-text", children: "lead-generation platform" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-4", children: "Pause and consider this: only pay when a customer completes an action on your website site, submits a lead form, calls your call center, downloads your app, or takes any other key action. With Avanto, you're investing in results, not just attempts." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "We are a collective of experienced professionals rooted in the digital advertising domain, dedicated to empowering businesses and individuals to evolve and expand. Despite the rapid pace of the advertising industry, our commitment to solving challenges and fueling growth stands unwavering." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Guided by the latest in technology and innovation, our core mission is to steer our clients toward their prosperous future, ensuring success through strategic insight and forward-thinking solutions." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `about-highlight-${i}`,
            className: "flex gap-4 glassmorphism rounded-xl p-5 card-hover",
            style: staggered[i].style,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
              ] })
            ]
          },
          title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex gap-4 pt-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: "0.5s" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "about-cta",
                className: "neon-button-filled text-background font-semibold px-7 py-3 rounded-lg flex items-center gap-2 cursor-pointer",
                children: [
                  "Learn More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" })
                ]
              }
            )
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  About as default
};
