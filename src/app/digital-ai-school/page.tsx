import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import DigitalAiSchoolHero from "../pages/digital-ai-school/components/hero";
import DigitalAiSchoolContent from "../pages/digital-ai-school/components/content";
import HowItWorksSection from "../pages/home/components/how-it-works-section";
import OutcomesSection from "../pages/home/components/outcomes-section";
import FAQSection from "../pages/home/components/faq-section";
import CtaSection from "../pages/home/components/cta-section";
import ProgramSection from "../pages/home/components/program-section";
import WhyDigitalAiSkills from "../pages/digital-ai-school/components/why-digital-ai-skills";

export default function DigitalAiSchoolPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <DigitalAiSchoolHero />
      <DigitalAiSchoolContent />
      <WhyDigitalAiSkills />
      <ProgramSection />
      <OutcomesSection />
      <HowItWorksSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
