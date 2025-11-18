import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import SchoolsHero from "../pages/schools/components/schools-hero";
import SchoolsIntro from "../pages/schools/components/schools-intro";
import SchoolsList from "../pages/schools/components/schools-list";
import CtaSection from "../pages/home/components/cta-section";
import MissionSection from "../pages/schools/components/mission-section";
import WhyJoinWaitlist from "../pages/schools/components/why-join-waitlist";
import WhyMultipleSchools from "../pages/schools/components/why-multiple-schools";

export default function SchoolsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <SchoolsHero />
      <SchoolsIntro />
      <MissionSection />
      <SchoolsList />
      <WhyJoinWaitlist />
      <WhyMultipleSchools />
      <CtaSection />
      <Footer />
    </main>
  );
}
