import Footer from "@/app/pages/home/components/footer";
import AboutHero from "../pages/about/components/about-hero";
import AboutContent from "../pages/about/components/about-content";
import { Navbar } from "../pages/home/components/navbar";
import WhyTheasktExists from "../pages/about/components/why-theaskt-exists";
import WhatMakesUsDifferent from "../pages/about/components/what-makes-us-different";
import LearningEcosystem from "../pages/about/components/learning-ecosystem";
import WhoWeServe from "../pages/about/components/who-we-serve";
import OurApproach from "../pages/about/components/our-approach";
import OurVision from "../pages/about/components/our-vision";
import JoinOurMovement from "../pages/about/components/join-our-movement";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Theaskt.org | Our Mission to Empower Women in India',
  description: 'Learn about Theaskt.org, a public learning trust dedicated to providing women in India with the skills and confidence for financial independence. Discover our mission, vision, and unique approach.',
}

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
      <WhoWeServe />
      <OurApproach />
      <OurVision />
      <JoinOurMovement />
      <Footer />
    </main>
  );
}
