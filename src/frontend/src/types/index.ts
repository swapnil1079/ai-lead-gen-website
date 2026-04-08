export interface HeroSlide {
  id: number;
  headline: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaSecondary?: string;
  badge?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  numericValue: number;
}

export interface Partner {
  id: number;
  name: string;
  tagline: string;
  initials: string;
  colorClass: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  badge: string;
  badgeVariant: "neon" | "purple" | "hot";
  gradient: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceTab {
  id: "publishers" | "advertisers";
  label: string;
  icon: string;
  headline: string;
  description: string;
  points: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
