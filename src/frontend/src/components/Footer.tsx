"use client";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Zap,
} from "lucide-react";
import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Offers", href: "#offers" },
  { label: "Why Us", href: "#why-us" },
];

const SOLUTIONS = [
  { label: "Lead Scoring Pro", href: "#offers" },
  { label: "Intent Signal Tracker", href: "#offers" },
  { label: "Data Enrichment Suite", href: "#offers" },
  { label: "Pipeline Accelerator", href: "#offers" },
  { label: "API Access", href: "#contact" },
];

const SOCIAL = [
  { icon: Twitter, label: "Twitter/X", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "https://nexusai.com/privacy" },
  { label: "Terms of Service", href: "https://nexusai.com/terms" },
  { label: "Cookie Settings", href: "https://nexusai.com/cookies" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="contact"
      className="relative bg-card border-t border-border/40 overflow-hidden"
    >
      {/* Animated gradient border on top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.72 0.24 189) 30%, oklch(0.68 0.25 290) 70%, transparent 100%)",
          boxShadow: "0 0 20px oklch(0.72 0.24 189 / 0.4)",
        }}
      />

      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2.5 mb-5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg gradient-neon flex items-center justify-center animate-pulse-glow">
                <Zap className="w-5 h-5 text-background fill-current" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-foreground">Nexus</span>
                <span className="gradient-neon-text">AI</span>
              </span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Intelligent Lead Generation Powered by AI. Helping 500+ companies
              find and close their ideal customers.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@nexusai.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@nexusai.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +1 (800) 555-1234
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>123 Innovation Drive, San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {SOLUTIONS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-5">
              Stay Ahead
            </h4>
            <p className="text-sm text-muted-foreground mb-5">
              Get weekly AI lead gen insights, platform updates, and exclusive
              offers.
            </p>
            {submitted ? (
              <div className="glassmorphism rounded-xl p-4 text-center">
                <p className="text-primary font-semibold text-sm">
                  You&apos;re in! 🎉
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  First email lands Monday.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  data-ocid="footer-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full glassmorphism rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:shadow-neon-primary transition-all duration-200"
                />
                <button
                  type="submit"
                  data-ocid="footer-newsletter-submit"
                  className="w-full neon-button-filled text-background font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glassmorphism rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-neon-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {year} NexusAI. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        type="button"
        data-ocid="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 w-11 h-11 neon-button rounded-full flex items-center justify-center cursor-pointer z-40 animate-pulse-glow"
      >
        <ArrowUp className="w-5 h-5 text-foreground" />
      </button>
    </footer>
  );
}
