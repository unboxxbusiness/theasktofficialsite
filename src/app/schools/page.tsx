import Footer from "@/app/pages/home/components/footer";
import SchoolsHero from "../pages/schools/components/schools-hero";
import SchoolsIntro from "../pages/schools/components/schools-intro";
import SchoolsList from "../pages/schools/components/schools-list";
import CtaSection from "../pages/home/components/cta-section";
import MissionSection from "../pages/schools/components/mission-section";
import WhyJoinWaitlist from "../pages/schools/components/why-join-waitlist";
import WhyMultipleSchools from "../pages/schools/components/why-multiple-schools";
import LearningPath from "../pages/schools/components/learning-path";
import ForPartners from "../pages/schools/components/for-partners";
import FaqSection from "../pages/schools/components/faq-section";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Schools Hub | TheAskt.org Learning Ecosystem',
  description: 'Explore the schools at Theaskt.org, from our flagship Digital & AI School to upcoming programs in Business, Legal Rights, and Personal Growth for women in India.',
}


export default function SchoolsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <SchoolsHero />
      <SchoolsIntro />
      <MissionSection />
      <SchoolsList />
      <WhyJoinWaitlist />
      <WhyMultipleSchools />
      <LearningPath />
      <ForPartners />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
