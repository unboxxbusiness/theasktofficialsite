import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import PrivacyHero from "../pages/privacy-policy/components/privacy-hero";
import PrivacyContent from "../pages/privacy-policy/components/privacy-content";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
