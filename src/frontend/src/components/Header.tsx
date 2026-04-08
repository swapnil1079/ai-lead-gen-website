"use client";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Offers", href: "#offers" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { isScrolled } = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphism-strong shadow-elevated-glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          onClick={() => handleNavClick("#home")}
        >
          <div className="relative w-9 h-9 rounded-lg gradient-neon flex items-center justify-center animate-pulse-glow">
            <Zap className="w-5 h-5 text-background fill-current" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-foreground">Nexus</span>
            <span className="gradient-neon-text">AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            data-ocid="header-cta"
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex neon-button-filled text-background font-semibold text-sm px-6 py-2.5 rounded-lg items-center gap-2 cursor-pointer"
          >
            <span>Get Started</span>
            <span className="text-base">→</span>
          </button>
          <button
            type="button"
            data-ocid="header-mobile-toggle"
            className="md:hidden text-foreground p-2 rounded-lg neon-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glassmorphism-strong border-t border-border/20 mt-1">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-foreground font-medium py-2 border-b border-border/20 hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="neon-button-filled text-background font-semibold py-3 px-6 rounded-lg mt-2 cursor-pointer"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
