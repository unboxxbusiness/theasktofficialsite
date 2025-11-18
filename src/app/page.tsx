import HeroSection from "./pages/home/components/hero-section";
import StatsSection from "./pages/home/components/stats-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <StatsSection />
    </main>
  );
}
