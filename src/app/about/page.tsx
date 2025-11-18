import Footer from "@/app/pages/home/components/footer";
import AboutHero from "../pages/about/components/about-hero";
import AboutContent from "../pages/about/components/about-content";
import { Navbar } from "../pages/home/components/hero-section";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <AboutHero />
      <AboutContent />
      <Footer />
    </main>
  );
}
