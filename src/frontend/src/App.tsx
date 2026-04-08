import { Suspense, lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Partners = lazy(() => import("./components/Partners"));
const Offers = lazy(() => import("./components/Offers"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const Footer = lazy(() => import("./components/Footer"));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-primary/20 rounded-full animate-rotate-slow" />
        <div className="absolute inset-0 w-16 h-16 border-t-2 border-primary rounded-full animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="dark bg-space-deep min-h-screen overflow-x-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="partners">
            <Partners />
          </section>
          <section id="offers">
            <Offers />
          </section>
          <section id="why-us">
            <WhyUs />
          </section>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}
