"use client";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import type { Partner } from "../types";

const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Synergy Corp",
    tagline: "Enterprise sales intelligence",
    initials: "SC",
    colorClass: "from-primary/30 to-primary/5",
  },
  {
    id: 2,
    name: "DataSphere",
    tagline: "Real-time data enrichment",
    initials: "DS",
    colorClass: "from-secondary/30 to-secondary/5",
  },
  {
    id: 3,
    name: "CloudNova",
    tagline: "AI infrastructure partner",
    initials: "CN",
    colorClass: "from-primary/20 to-secondary/20",
  },
  {
    id: 4,
    name: "RevFlow",
    tagline: "Revenue automation platform",
    initials: "RF",
    colorClass: "from-secondary/30 to-primary/10",
  },
  {
    id: 5,
    name: "PipeLogic",
    tagline: "Pipeline management solutions",
    initials: "PL",
    colorClass: "from-primary/30 to-secondary/10",
  },
  {
    id: 6,
    name: "TechEdge",
    tagline: "B2B analytics & insights",
    initials: "TE",
    colorClass: "from-secondary/20 to-primary/20",
  },
];

function PartnerCard({
  partner,
  instanceId,
}: { partner: Partner; instanceId: string }) {
  return (
    <div
      data-ocid={`partner-card-${instanceId}`}
      className="relative glassmorphism rounded-2xl p-6 min-w-[240px] card-hover group cursor-pointer flex-shrink-0"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partner.colorClass} border border-primary/20 flex items-center justify-center mb-4`}
      >
        <span className="font-display font-bold text-lg text-foreground">
          {partner.initials}
        </span>
      </div>
      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
        {partner.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{partner.tagline}</p>
      <div className="flex items-center gap-1 text-xs text-primary font-medium">
        View Partner <ExternalLink className="w-3 h-3" />
      </div>
    </div>
  );
}

export default function Partners() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const doubled = PARTNERS.flatMap((p) => [
    { ...p, instanceId: `${p.id}-a` },
    { ...p, instanceId: `${p.id}-b` },
  ]);

  return (
    <section className="py-28 bg-space-deep relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 mb-16" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Network
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Trusted by{" "}
            <span className="gradient-neon-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with the world&apos;s most innovative companies to
            deliver unmatched lead quality and platform integrations.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden group" ref={scrollRef}>
        <div
          className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {doubled.map((partner) => (
            <PartnerCard
              key={partner.instanceId}
              partner={partner}
              instanceId={partner.instanceId}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Partner count */}
      <div className="container mx-auto px-6 mt-16">
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">
              50+ technology partners
            </span>{" "}
            and growing — integrating with the tools your team already uses
          </p>
          <button
            type="button"
            data-ocid="partners-cta"
            className="mt-6 neon-button text-foreground font-medium px-8 py-3 rounded-lg inline-flex items-center gap-2 cursor-pointer"
          >
            Explore All Partnerships <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
