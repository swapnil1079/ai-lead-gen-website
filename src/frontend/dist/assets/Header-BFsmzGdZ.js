import { r as reactExports, j as jsxRuntimeExports } from "./index-C48gaYKL.js";
import { Z as Zap } from "./zap-0FVLZMIR.js";
import { c as createLucideIcon } from "./createLucideIcon-DYnbHVUR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function useScrollPosition(threshold = 80) {
  const [scrollPos, setScrollPos] = reactExports.useState({
    y: 0,
    direction: "up",
    isScrolled: false,
    isScrolledFar: false
  });
  reactExports.useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollPos({
        y: currentY,
        direction: currentY > lastY ? "down" : "up",
        isScrolled: currentY > threshold,
        isScrolledFar: currentY > 400
      });
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return scrollPos;
}
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Offers", href: "#offers" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" }
];
function Header() {
  const { isScrolled } = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      "data-ocid": "header-nav",
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glassmorphism-strong shadow-elevated-glass py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-2.5 group",
              onClick: () => handleNavClick("#home"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-9 h-9 rounded-lg gradient-neon flex items-center justify-center animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-background fill-current" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl tracking-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Nexus" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-neon-text", children: "AI" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "nav",
            {
              className: "hidden md:flex items-center gap-8",
              "aria-label": "Main navigation",
              children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => handleNavClick(link.href),
                  className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group",
                  children: [
                    link.label,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" })
                  ]
                },
                link.href
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "header-cta",
                onClick: () => handleNavClick("#contact"),
                className: "hidden md:flex neon-button-filled text-background font-semibold text-sm px-6 py-2.5 rounded-lg items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Started" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "header-mobile-toggle",
                className: "md:hidden text-foreground p-2 rounded-lg neon-button",
                onClick: () => setMobileOpen(!mobileOpen),
                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden glassmorphism-strong border-t border-border/20 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto px-6 py-6 flex flex-col gap-4", children: [
          NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleNavClick(link.href),
              className: "text-foreground font-medium py-2 border-b border-border/20 hover:text-primary transition-colors text-left",
              children: link.label
            },
            link.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => handleNavClick("#contact"),
              className: "neon-button-filled text-background font-semibold py-3 px-6 rounded-lg mt-2 cursor-pointer",
              children: "Get Started"
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  Header as default
};
