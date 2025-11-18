import Footer from "@/app/pages/home/components/footer";
import AboutHero from "../pages/about/components/about-hero";
import AboutContent from "../pages/about/components/about-content";
import { Navbar } from "../pages/home/components/hero-section";
import WhyTheasktExists from "../pages/about/components/why-theaskt-exists";
import WhatMakesUsDifferent from "../pages/about/components/what-makes-us-different";
import LearningEcosystem from "../pages/about/components/learning-ecosystem";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <AboutHero />
      <AboutContent />
      <WhyTheasktExists />
      <WhatMakesUsDifferent />
      <LearningEcosystem />
      <Footer />
    </main>
  );
}
