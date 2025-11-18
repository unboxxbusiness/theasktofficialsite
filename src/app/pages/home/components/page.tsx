import HeroSection from "./hero-section";
import StatsSection from "./stats-section";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <HeroSection />
      <StatsSection />
    </main>
  );
}
