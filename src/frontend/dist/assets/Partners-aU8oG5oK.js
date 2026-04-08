import { r as reactExports, j as jsxRuntimeExports } from "./index-C48gaYKL.js";
import { u as useIntersectionObserver } from "./useIntersectionObserver-GGtR57Ra.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const PARTNERS = [
  {
    id: 1,
    name: "Synergy Corp",
    tagline: "Enterprise sales intelligence",
    initials: "SC",
    colorClass: "from-primary/30 to-primary/5"
  },
  {
    id: 2,
    name: "DataSphere",
    tagline: "Real-time data enrichment",
    initials: "DS",
    colorClass: "from-secondary/30 to-secondary/5"
  },
  {
    id: 3,
    name: "CloudNova",
    tagline: "AI infrastructure partner",
    initials: "CN",
    colorClass: "from-primary/20 to-secondary/20"
  },
  {
    id: 4,
    name: "RevFlow",
    tagline: "Revenue automation platform",
    initials: "RF",
    colorClass: "from-secondary/30 to-primary/10"
  },
  {
    id: 5,
    name: "PipeLogic",
    tagline: "Pipeline management solutions",
    initials: "PL",
    colorClass: "from-primary/30 to-secondary/10"
  },
  {
    id: 6,
    name: "TechEdge",
    tagline: "B2B analytics & insights",
    initials: "TE",
    colorClass: "from-secondary/20 to-primary/20"
  }
];
function PartnerCard({
  partner,
  instanceId
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `partner-card-${instanceId}`,
      className: "relative glassmorphism rounded-2xl p-6 min-w-[240px] card-hover group cursor-pointer flex-shrink-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-secondary/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-16 h-16 rounded-xl bg-gradient-to-br ${partner.colorClass} border border-primary/20 flex items-center justify-center mb-4`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: partner.initials })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1", children: partner.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: partner.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-primary font-medium", children: [
          "View Partner ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
        ] })
      ]
    }
  );
}
function Partners() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1
  });
  const scrollRef = reactExports.useRef(null);
  const doubled = PARTNERS.flatMap((p) => [
    { ...p, instanceId: `${p.id}-a` },
    { ...p, instanceId: `${p.id}-b` }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-space-deep relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 mb-16", ref, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `text-center max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-sm uppercase tracking-widest mb-3", children: "Our Network" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-5", children: [
            "Trusted by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-neon-text", children: "Industry Leaders" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "We partner with the world's most innovative companies to deliver unmatched lead quality and platform integrations." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden group", ref: scrollRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-6 animate-marquee group-hover:[animation-play-state:paused]",
          style: { width: "max-content" },
          children: doubled.map((partner) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            PartnerCard,
            {
              partner,
              instanceId: partner.instanceId
            },
            partner.instanceId
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
        style: { transitionDelay: "0.3s" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "50+ technology partners" }),
            " ",
            "and growing — integrating with the tools your team already uses"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "partners-cta",
              className: "mt-6 neon-button text-foreground font-medium px-8 py-3 rounded-lg inline-flex items-center gap-2 cursor-pointer",
              children: [
                "Explore All Partnerships ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  Partners as default
};
