import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/navbar";
import TermsHero from "../pages/terms-of-use/components/terms-hero";
import TermsContent from "../pages/terms-of-use/components/terms-content";

export default function TermsOfUsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  );
}
