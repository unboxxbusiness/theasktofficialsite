import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import CommunityHero from "../pages/community/components/community-hero";
import CommunityContent from "../pages/community/components/community-content";
import CommunityActivities from "../pages/community/components/community-activities";
import CommunityFeatures from "../pages/community/components/community-features";
import CommunityGuidelines from "../pages/community/components/community-guidelines";
import CommunityCta from "../pages/community/components/community-cta";

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <CommunityHero />
      <CommunityContent />
      <CommunityActivities />
      <CommunityFeatures />
      <CommunityGuidelines />
      <CommunityCta />
      <Footer />
    </main>
  );
}
