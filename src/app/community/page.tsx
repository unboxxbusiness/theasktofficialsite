import Footer from "@/app/pages/home/components/footer";
import CommunityHero from "../pages/community/components/community-hero";
import CommunityContent from "../pages/community/components/community-content";
import CommunityActivities from "../pages/community/components/community-activities";
import CommunityFeatures from "../pages/community/components/community-features";
import CommunityGuidelines from "../pages/community/components/community-guidelines";
import CommunityCta from "../pages/community/components/community-cta";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theaskt.org Community | A Sisterhood of Learning for Indian Women',
  description: 'Join our safe, women-only community at Theaskt.org. Connect with learners, get support, and grow together as you master digital and AI skills for your career.',
}

export default function CommunityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
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
