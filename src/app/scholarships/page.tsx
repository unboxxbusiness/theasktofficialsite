import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/navbar";
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

export default function ScholarshipsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
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
