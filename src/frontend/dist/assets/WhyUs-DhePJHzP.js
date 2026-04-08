import { r as reactExports, j as jsxRuntimeExports } from "./index-C48gaYKL.js";
import { u as useIntersectionObserver, a as useStaggeredAnimation } from "./useIntersectionObserver-GGtR57Ra.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
import { Z as Zap } from "./zap-0FVLZMIR.js";
import { S as Shield } from "./shield-_dBXDUgN.js";
import { C as ChartColumn, D as Database } from "./database-BJKQ4itP.js";
import { G as Globe, T as Target } from "./target-CNHH4SyR.js";
import { U as Users, T as TrendingUp } from "./users-C3RLftlg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode);
const DIFFERENTIATORS = [
  {
    icon: Zap,
    title: "AI-Powered Precision",
    desc: "Machine learning models with 98.7% accuracy rate"
  },
  {
    icon: Shield,
    title: "Data Compliance",
    desc: "GDPR, CCPA, and SOC2 Type II certified"
  },
  {
    icon: ChartColumn,
    title: "Real-Time Analytics",
    desc: "Live dashboards with actionable insights"
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Access to 200M+ verified B2B contacts worldwide"
  }
];
const TABS = [
  {
    id: "publishers",
    label: "Publishers",
    icon: Megaphone,
    headline: "Publishers",
    description: "Unlock Rapid Earnings Growth with Exclusive Offers, and Competitive Rates You've Been Searching For.",
    points: [
      "Premium advertiser network with competitive payouts",
      "AI-matched campaigns for maximum audience relevance",
      "Real-time bidding with transparent reporting",
      "Dedicated publisher success manager"
    ]
  },
  {
    id: "advertisers",
    label: "Advertisers",
    icon: Building2,
    headline: "Advertisers",
    description: "Want to Captivate New Audiences with Results-Oriented Marketing? Discover Your Next Loyal Customers with Us.",
    points: [
      "Intent-verified, high-conversion lead quality",
      "Custom targeting by industry, role, and company size",
      "Performance-based pricing with ROI guarantee",
      "Full-funnel campaign analytics and attribution"
    ]
  }
];
const TAB_ICONS = {
  publishers: [Users, DollarSign, Target, TrendingUp],
  advertisers: [Target, Database, ChartColumn, Shield]
};
const METRICS = [
  {
    label: "Leads processed today",
    value: "14,247",
    change: "+18.3%",
    color: "text-primary"
  },
  {
    label: "Avg. intent score",
    value: "87.4",
    change: "+4.2pts",
    color: "text-secondary"
  },
  {
    label: "Pipeline value added",
    value: "$2.4M",
    change: "+31.7%",
    color: "text-primary"
  },
  {
    label: "Deals influenced",
    value: "142",
    change: "+22.4%",
    color: "text-secondary"
  }
];
function WhyUs() {
  const [activeTab, setActiveTab] = reactExports.useState(
    "publishers"
  );
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.05
  });
  const staggered = useStaggeredAnimation(
    DIFFERENTIATORS.length,
    isVisible,
    0.12
  );
  const activeData = TABS.find((t) => t.id === activeTab);
  const pointIcons = TAB_ICONS[activeTab];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-space-deep relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-40 bottom-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-secondary pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-20 top-20 w-64 h-64 rounded-full opacity-5 blur-3xl bg-primary pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-sm uppercase tracking-widest mb-3", children: "Why Choose Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-5", children: [
              "Matching Products",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-neon-text", children: "With Prospects." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Our approach ensures your products land in the hands of interested buyers, streamlining the connection and fostering meaningful engagements. Let us bridge the gap between your brand and its ideal audience, ensuring your offerings find their perfect match." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24", children: DIFFERENTIATORS.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `differentiator-${i}`,
          className: "glassmorphism rounded-2xl p-6 card-hover group text-center",
          style: staggered[i].style,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-neon-primary transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: desc })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
            style: { transitionDelay: "0.2s" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glassmorphism-strong rounded-3xl p-8 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-5",
                  style: {
                    backgroundImage: "linear-gradient(oklch(0.72 0.24 189) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.24 189) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-primary animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2 h-2 rounded-full bg-secondary animate-pulse",
                      style: { animationDelay: "0.5s" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse",
                      style: { animationDelay: "1s" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: "nexus_ai_engine.running" })
                ] }),
                METRICS.map(({ label, value, change, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "glassmorphism rounded-xl px-5 py-4 flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display font-bold text-xl ${color}`, children: value })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full", children: change })
                    ]
                  },
                  label
                ))
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`,
            style: { transitionDelay: "0.3s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex gap-3 mb-8 p-1.5 glassmorphism rounded-xl w-fit",
                  "data-ocid": "why-us-tabs",
                  children: TABS.map((tab) => {
                    const TabIcon = tab.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `tab-${tab.id}`,
                        onClick: () => setActiveTab(tab.id),
                        className: `flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer ${activeTab === tab.id ? "neon-button-filled text-background" : "text-muted-foreground hover:text-foreground"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TabIcon, { className: "w-4 h-4" }),
                          tab.label
                        ]
                      },
                      tab.id
                    );
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-bold text-foreground mb-3", children: activeData.headline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: activeData.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: activeData.points.map((point, i) => {
                  const PointIcon = pointIcons[i];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-4 glassmorphism rounded-xl p-4 card-hover group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-neon-primary transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PointIcon, { className: "w-4 h-4 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: point })
                        ] })
                      ]
                    },
                    point
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `why-us-cta-${activeTab}`,
                    className: "neon-button-filled text-background font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer",
                    children: [
                      "Get Started as",
                      " ",
                      activeTab === "publishers" ? "Publisher" : "Advertiser",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                    ]
                  }
                )
              ] }, activeTab)
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  WhyUs as default
};
