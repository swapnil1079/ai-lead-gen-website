import { j as jsxRuntimeExports } from "./index-C48gaYKL.js";
import { u as useIntersectionObserver, a as useStaggeredAnimation } from "./useIntersectionObserver-GGtR57Ra.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
import { T as TrendingUp, U as Users } from "./users-C3RLftlg.js";
import { C as ChartColumn, D as Database } from "./database-BJKQ4itP.js";
import { A as ArrowRight } from "./arrow-right-BfKYJurC.js";
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$2);
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
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const OFFERS = [
  {
    id: 1,
    title: "Eco Solar Deals",
    description: "Connect with high-intent solar energy prospects ready to make the switch to renewable power. Premium quality leads and calls with verified interest.",
    benefits: [
      "Leads | Calls | Dynamic",
      "High-intent solar prospects",
      "Verified contact data",
      "Real-time delivery"
    ],
    badge: "Exclusive",
    badgeVariant: "purple",
    gradient: "from-primary/20 via-primary/5 to-transparent"
  },
  {
    id: 2,
    title: "Debt Solutions Pro",
    description: "Reach consumers actively seeking debt relief and financial solutions. Targeted campaigns delivering motivated leads and inbound calls at scale.",
    benefits: [
      "Leads | Calls | Dynamic",
      "Pre-qualified prospects",
      "Motivated buyer signals",
      "Scalable volume"
    ],
    badge: "Hot Deal",
    badgeVariant: "hot",
    gradient: "from-secondary/20 via-secondary/5 to-transparent"
  }
];
const BADGE_STYLES = {
  neon: "bg-primary/15 text-primary border-primary/30",
  hot: "badge-warning border",
  purple: "bg-secondary/15 text-secondary border-secondary/30"
};
const BADGE_ICONS = {
  neon: Star,
  hot: Flame,
  purple: Sparkles
};
const OFFER_ICONS = [TrendingUp, ChartColumn, Database, Users];
function Offers() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.05
  });
  const staggered = useStaggeredAnimation(OFFERS.length, isVisible, 0.12);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-space-mid relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-40 top-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-primary pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-sm uppercase tracking-widest mb-3", children: "Internal Offers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-5", children: [
              "Optimized",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-neon-text", children: "Exclusive Offers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Partner with us and access our top-performing offers — each optimized for maximum conversion and exclusive results." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto", children: OFFERS.map((offer, i) => {
        const BadgeIcon = BADGE_ICONS[offer.badgeVariant];
        const OfferIcon = OFFER_ICONS[i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `offer-card-${offer.id}`,
            className: "relative glassmorphism rounded-2xl overflow-hidden card-hover group cursor-pointer flex flex-col",
            style: staggered[i].style,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `h-36 bg-gradient-to-br ${offer.gradient} flex items-center justify-center relative`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl glassmorphism-strong border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferIcon, { className: "w-8 h-8 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${BADGE_STYLES[offer.badgeVariant]}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeIcon, { className: "w-3 h-3" }),
                          offer.badge
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200", children: offer.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5 flex-1", children: offer.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: offer.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: b })
                ] }, b)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `offer-cta-${offer.id}`,
                    className: "w-full neon-button text-foreground font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm group-hover:bg-primary/20 transition-all duration-300 cursor-pointer",
                    children: [
                      "Learn More",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" })
                    ]
                  }
                )
              ] })
            ]
          },
          offer.id
        );
      }) })
    ] })
  ] });
}
export {
  Offers as default
};
