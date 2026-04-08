"use client";
import {
  BarChart3,
  Building2,
  Check,
  Database,
  DollarSign,
  Globe,
  Megaphone,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  useIntersectionObserver,
  useStaggeredAnimation,
} from "../hooks/useIntersectionObserver";

const DIFFERENTIATORS = [
  {
    icon: Zap,
    title: "AI-Powered Precision",
    desc: "Machine learning models with 98.7% accuracy rate",
  },
  {
    icon: Shield,
    title: "Data Compliance",
    desc: "GDPR, CCPA, and SOC2 Type II certified",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards with actionable insights",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Access to 200M+ verified B2B contacts worldwide",
  },
];

const TABS = [
  {
    id: "publishers" as const,
    label: "Publishers",
    icon: Megaphone,
    headline: "Publishers",
    description:
      "Unlock Rapid Earnings Growth with Exclusive Offers, and Competitive Rates You've Been Searching For.",
    points: [
      "Premium advertiser network with competitive payouts",
      "AI-matched campaigns for maximum audience relevance",
      "Real-time bidding with transparent reporting",
      "Dedicated publisher success manager",
    ],
  },
  {
    id: "advertisers" as const,
    label: "Advertisers",
    icon: Building2,
    headline: "Advertisers",
    description:
      "Want to Captivate New Audiences with Results-Oriented Marketing? Discover Your Next Loyal Customers with Us.",
    points: [
      "Intent-verified, high-conversion lead quality",
      "Custom targeting by industry, role, and company size",
      "Performance-based pricing with ROI guarantee",
      "Full-funnel campaign analytics and attribution",
    ],
  },
];

const TAB_ICONS: Record<string, React.ElementType[]> = {
  publishers: [Users, DollarSign, Target, TrendingUp],
  advertisers: [Target, Database, BarChart3, Shield],
};

const METRICS = [
  {
    label: "Leads processed today",
    value: "14,247",
    change: "+18.3%",
    color: "text-primary",
  },
  {
    label: "Avg. intent score",
    value: "87.4",
    change: "+4.2pts",
    color: "text-secondary",
  },
  {
    label: "Pipeline value added",
    value: "$2.4M",
    change: "+31.7%",
    color: "text-primary",
  },
  {
    label: "Deals influenced",
    value: "142",
    change: "+22.4%",
    color: "text-secondary",
  },
];

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState<"publishers" | "advertisers">(
    "publishers",
  );
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
  });
  const staggered = useStaggeredAnimation(
    DIFFERENTIATORS.length,
    isVisible,
    0.12,
  );
  const activeData = TABS.find((t) => t.id === activeTab)!;
  const pointIcons = TAB_ICONS[activeTab];

  return (
    <section className="py-28 bg-space-deep relative overflow-hidden">
      <div className="absolute -left-40 bottom-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-secondary pointer-events-none" />
      <div className="absolute right-20 top-20 w-64 h-64 rounded-full opacity-5 blur-3xl bg-primary pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Matching Products{" "}
            <span className="gradient-neon-text">With Prospects.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our approach ensures your products land in the hands of interested
            buyers, streamlining the connection and fostering meaningful
            engagements. Let us bridge the gap between your brand and its ideal
            audience, ensuring your offerings find their perfect match.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {DIFFERENTIATORS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-ocid={`differentiator-${i}`}
              className="glassmorphism rounded-2xl p-6 card-hover group text-center"
              style={staggered[i].style}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-neon-primary transition-all duration-300">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Publisher / Advertiser Toggle */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Visual */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative glassmorphism-strong rounded-3xl p-8 overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.72 0.24 189) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.24 189) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div
                    className="w-2 h-2 rounded-full bg-secondary animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    nexus_ai_engine.running
                  </span>
                </div>

                {METRICS.map(({ label, value, change, color }) => (
                  <div
                    key={label}
                    className="glassmorphism rounded-xl px-5 py-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {label}
                      </p>
                      <p className={`font-display font-bold text-xl ${color}`}>
                        {value}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">
                      {change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tabs */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div
              className="flex gap-3 mb-8 p-1.5 glassmorphism rounded-xl w-fit"
              data-ocid="why-us-tabs"
            >
              {TABS.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    data-ocid={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? "neon-button-filled text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div key={activeTab} className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                  {activeData.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activeData.description}
                </p>
              </div>

              <ul className="space-y-4">
                {activeData.points.map((point, i) => {
                  const PointIcon = pointIcons[i];
                  return (
                    <li
                      key={point}
                      className="flex items-start gap-4 glassmorphism rounded-xl p-4 card-hover group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-neon-primary transition-all duration-300">
                        <PointIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground font-medium">
                          {point}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                data-ocid={`why-us-cta-${activeTab}`}
                className="neon-button-filled text-background font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                Get Started as{" "}
                {activeTab === "publishers" ? "Publisher" : "Advertiser"}
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
