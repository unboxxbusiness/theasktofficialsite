import HeroSection from "./pages/home/components/hero-section";
import ProblemSection from "./pages/home/components/problem-section";
import StatsSection from "./pages/home/components/stats-section";
import FeaturesSection from "./pages/home/components/features-section";
import ProgramSection from "./pages/home/components/program-section";
import OutcomesSection from "./pages/home/components/outcomes-section";
import HowItWorksSection from "./pages/home/components/how-it-works-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <FeaturesSection />
      <ProgramSection />
      <OutcomesSection />
      <HowItWorksSection />
    </main>
  );
}
