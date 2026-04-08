"use client";
import {
  ArrowRight,
  BarChart3,
  Database,
  Flame,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  useIntersectionObserver,
  useStaggeredAnimation,
} from "../hooks/useIntersectionObserver";
import type { Offer } from "../types";

const OFFERS: Offer[] = [
  {
    id: 1,
    title: "Eco Solar Deals",
    description:
      "Connect with high-intent solar energy prospects ready to make the switch to renewable power. Premium quality leads and calls with verified interest.",
    benefits: [
      "Leads | Calls | Dynamic",
      "High-intent solar prospects",
      "Verified contact data",
      "Real-time delivery",
    ],
    badge: "Exclusive",
    badgeVariant: "purple",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    id: 2,
    title: "Debt Solutions Pro",
    description:
      "Reach consumers actively seeking debt relief and financial solutions. Targeted campaigns delivering motivated leads and inbound calls at scale.",
    benefits: [
      "Leads | Calls | Dynamic",
      "Pre-qualified prospects",
      "Motivated buyer signals",
      "Scalable volume",
    ],
    badge: "Hot Deal",
    badgeVariant: "hot",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
];

const BADGE_STYLES: Record<string, string> = {
  neon: "bg-primary/15 text-primary border-primary/30",
  hot: "badge-warning border",
  purple: "bg-secondary/15 text-secondary border-secondary/30",
};

const BADGE_ICONS: Record<string, React.ElementType> = {
  neon: Star,
  hot: Flame,
  purple: Sparkles,
};

const OFFER_ICONS = [TrendingUp, BarChart3, Database, Users];

export default function Offers() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
  });
  const staggered = useStaggeredAnimation(OFFERS.length, isVisible, 0.12);

  return (
    <section className="py-28 bg-space-mid relative overflow-hidden">
      <div className="absolute -right-40 top-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-primary pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Internal Offers
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Optimized{" "}
            <span className="gradient-neon-text">Exclusive Offers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Partner with us and access our top-performing offers — each
            optimized for maximum conversion and exclusive results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {OFFERS.map((offer, i) => {
            const BadgeIcon = BADGE_ICONS[offer.badgeVariant];
            const OfferIcon = OFFER_ICONS[i];
            return (
              <div
                key={offer.id}
                data-ocid={`offer-card-${offer.id}`}
                className="relative glassmorphism rounded-2xl overflow-hidden card-hover group cursor-pointer flex flex-col"
                style={staggered[i].style}
              >
                <div
                  className={`h-36 bg-gradient-to-br ${offer.gradient} flex items-center justify-center relative`}
                >
                  <div className="w-16 h-16 rounded-2xl glassmorphism-strong border border-primary/20 flex items-center justify-center">
                    <OfferIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" />
                  <span
                    className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${BADGE_STYLES[offer.badgeVariant]}`}
                  >
                    <BadgeIcon className="w-3 h-3" />
                    {offer.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {offer.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {offer.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    data-ocid={`offer-cta-${offer.id}`}
                    className="w-full neon-button text-foreground font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm group-hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    Learn More{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
