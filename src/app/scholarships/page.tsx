import Footer from "@/app/pages/home/components/footer";
import ScholarshipsHero from "../pages/scholarships/components/scholarships-hero";
import ScholarshipsContent from "../pages/scholarships/components/scholarships-content";
import CtaSection from "../pages/home/components/cta-section";
import WhyWeOfferScholarships from "../pages/scholarships/components/why-we-offer-scholarships";
import TypesOfScholarships from "../pages/scholarships/components/types-of-scholarships";
import ScholarshipUsage from "../pages/scholarships/components/scholarship-usage";
import WhoCanApply from "../pages/scholarships/components/who-can-apply";
import HowToApply from "../pages/scholarships/components/how-to-apply";
import Supporters from "../pages/scholarships/components/supporters";
import ScholarshipFaq from "../pages/scholarships/components/scholarship-faq";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scholarships for Women & Girls in India | TheAskt.org',
  description: 'Apply for a scholarship at Theaskt.org. We provide financial support for women to learn digital & AI skills, restart careers, and become financially independent.',
}

export default function ScholarshipsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <ScholarshipsHero />
      <ScholarshipsContent />
      <WhyWeOfferScholarships />
      <TypesOfScholarships />
      <ScholarshipUsage />
      <WhoCanApply />
      <HowToApply />
      <Supporters />
      <ScholarshipFaq />
      <CtaSection />
      <Footer />
    </main>
  );
}
