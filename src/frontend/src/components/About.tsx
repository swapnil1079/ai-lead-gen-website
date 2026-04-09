"use client";
import {
  Award,
  Brain,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  useIntersectionObserver,
  useStaggeredAnimation,
} from "../hooks/useIntersectionObserver";

const STATS = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients Worldwide",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: "M+",
    label: "Leads Generated",
    color: "text-secondary",
  },
  {
    icon: Award,
    value: 98,
    suffix: ".7%",
    label: "Accuracy Rate",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: 5,
    suffix: "+ Years",
    label: "Industry Experience",
    color: "text-secondary",
  },
];

const HIGHLIGHTS = [
  {
    icon: Brain,
    title: "AI-Powered Scoring",
    desc: "Machine learning models trained on 10M+ data points identify your best prospects",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Intent",
    desc: "Monitor buyer signals across 100+ digital channels to catch leads at peak interest",
  },
  {
    icon: Shield,
    title: "Verified & Compliant",
    desc: "All data is GDPR/CCPA compliant with triple-verified contact information",
  },
];

const NODE_ANGLES = [0, 72, 144, 216, 288];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref: sectionRef, isVisible } =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } =
    useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const staggered = useStaggeredAnimation(HIGHLIGHTS.length, isVisible, 0.15);

  return (
    <section className="py-28 bg-space-mid relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -left-40 top-1/2 w-80 h-80 rounded-full opacity-20 blur-3xl bg-secondary pointer-events-none" />

      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Hexagon visual */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-rotate-slow" />
              <div className="absolute inset-6 rounded-full border border-secondary/10 animate-rotate-reverse" />
              <div className="absolute inset-12 rounded-full border border-primary/15" />

              {/* Center content */}
              <div className="absolute inset-16 rounded-full glassmorphism flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-primary mx-auto mb-2 animate-pulse" />
                  <p className="font-display font-bold text-2xl gradient-neon-text">
                    Avanto
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Core Engine
                  </p>
                </div>
              </div>

              {/* Orbiting nodes */}
              {NODE_ANGLES.map((angle, i) => (
                <div
                  key={angle}
                  className="absolute w-10 h-10 rounded-full glassmorphism border border-primary/30 flex items-center justify-center"
                  style={{
                    left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                    top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </div>
              ))}
            </div>

            {/* Floating stat cards */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mt-8">
              {STATS.map(({ icon: Icon, value, suffix, label, color }, i) => (
                <div
                  key={label}
                  className={`glassmorphism rounded-xl p-4 card-hover transition-all duration-500 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <Icon className={`w-5 h-5 ${color} mb-2`} />
                  <p className={`font-display font-bold text-2xl ${color}`}>
                    <AnimatedCounter
                      value={value}
                      suffix={suffix}
                      isVisible={statsVisible}
                    />
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
                We&apos;re the leading online{" "}
                <span className="gradient-neon-text">
                  lead-generation platform
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Pause and consider this: only pay when a customer completes an
                action on your website site, submits a lead form, calls your
                call center, downloads your app, or takes any other key action.
                With Avanto, you&apos;re investing in results, not just
                attempts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a collective of experienced professionals rooted in the
                digital advertising domain, dedicated to empowering businesses
                and individuals to evolve and expand. Despite the rapid pace of
                the advertising industry, our commitment to solving challenges
                and fueling growth stands unwavering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Guided by the latest in technology and innovation, our core
                mission is to steer our clients toward their prosperous future,
                ensuring success through strategic insight and forward-thinking
                solutions.
              </p>
            </div>

            <div className="space-y-5">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-ocid={`about-highlight-${i}`}
                  className="flex gap-4 glassmorphism rounded-xl p-5 card-hover"
                  style={staggered[i].style}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`flex gap-4 pt-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <button
                type="button"
                data-ocid="about-cta"
                className="neon-button-filled text-background font-semibold px-7 py-3 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                Learn More <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
