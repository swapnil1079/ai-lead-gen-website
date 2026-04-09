"use client";
import { ArrowRight, BarChart2, Globe, Target } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroSlide } from "../types";

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description:
      "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "View Demo",
    badge: "💰 Pay Only for Results",
  },
  {
    id: 2,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description:
      "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "See How It Works",
    badge: "💰 Pay Only for Results",
  },
  {
    id: 3,
    headline: "Leaders in Lead",
    subtitle: "Generation",
    description:
      "Turbocharge your revenue with transparent, data-driven marketing. Our campaigns have already fueled brands with billions of impressions and millions of qualified leads and calls. Ready to crush your goals?",
    ctaText: "Learn More",
    ctaSecondary: "Our Results",
    badge: "💰 Pay Only for Results",
  },
];

const STATS = [
  { value: "500+", label: "Clients Worldwide", icon: Globe },
  { value: "1.2M+", label: "Leads Generated", icon: BarChart2 },
  { value: "98.7%", label: "Accuracy Rate", icon: Target },
];

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: `particle-${i}`,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 6,
  color:
    i % 3 === 0
      ? "oklch(0.72 0.24 189 / 0.7)"
      : i % 3 === 1
        ? "oklch(0.68 0.25 290 / 0.7)"
        : "oklch(0.8 0.1 189 / 0.4)",
}));

const ORBS = [
  { size: 300, x: 75, y: 20, color: "oklch(0.72 0.24 189 / 0.06)", blur: 80 },
  { size: 250, x: 85, y: 70, color: "oklch(0.68 0.25 290 / 0.08)", blur: 80 },
  { size: 200, x: 60, y: 50, color: "oklch(0.72 0.24 189 / 0.04)", blur: 60 },
];

const ORB_IDS = ["orb-1", "orb-2", "orb-3"];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const slide = SLIDES[0];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-space-deep pt-24">
      {/* Background Orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={ORB_IDS[i]}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color,
            filter: `blur(${orb.blur}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            animation: `twinkle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.24 189) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.24 189) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-6">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 text-sm font-medium text-primary border-neon transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {slide.badge}
            </div>

            {/* Headline */}
            <div
              className={`space-y-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                {slide.headline}
              </h1>
              <h2 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight gradient-neon-text">
                {slide.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.35s" }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <button
                type="button"
                data-ocid="hero-cta-primary"
                className="neon-button-filled text-background font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 text-base cursor-pointer"
              >
                {slide.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
              {slide.ctaSecondary && (
                <button
                  type="button"
                  data-ocid="hero-cta-secondary"
                  className="neon-button text-foreground font-semibold px-8 py-3.5 rounded-lg text-base cursor-pointer"
                >
                  {slide.ctaSecondary}
                </button>
              )}
            </div>


            {/* Stats */}
            <div
              className={`flex flex-wrap gap-6 pt-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.65s" }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest w-full">
                Trusted by more than 3000 clients
              </p>
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="glassmorphism rounded-xl px-5 py-4 flex items-center gap-3 card-hover cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl text-foreground leading-none">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI Brain Visual */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-rotate-slow" />
              <div className="absolute inset-6 rounded-full border border-secondary/10 animate-rotate-reverse" />

              {/* Glow halo */}
              <div className="absolute inset-8 rounded-full bg-primary/5 blur-2xl" />
              <div className="absolute inset-16 rounded-full bg-secondary/[0.08] blur-3xl" />

              {/* Image */}
              <img
                src="/assets/generated/hero-ai-brain.dim_900x700.png"
                alt="AI Neural Network Brain"
                className="relative w-full rounded-2xl animate-float-slow"
                style={{
                  filter: "drop-shadow(0 0 40px oklch(0.72 0.24 189 / 0.3))",
                }}
              />

              {/* Floating data cards */}
              <div
                className="absolute -left-4 top-1/3 glassmorphism rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Leads Today</p>
                  <p className="font-display font-bold text-sm text-foreground">
                    +1,247
                  </p>
                </div>
              </div>
              <div
                className="absolute -right-4 bottom-1/3 glassmorphism rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                  <p className="font-display font-bold text-sm gradient-neon-text">
                    98.7%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
