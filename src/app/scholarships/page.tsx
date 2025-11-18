import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import ScholarshipsHero from "../pages/scholarships/components/scholarships-hero";
import ScholarshipsContent from "../pages/scholarships/components/scholarships-content";
import CtaSection from "../pages/home/components/cta-section";

export default function ScholarshipsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <ScholarshipsHero />
      <ScholarshipsContent />
      <CtaSection />
      <Footer />
    </main>
  );
}
