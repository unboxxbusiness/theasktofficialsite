import Footer from "@/app/pages/home/components/footer";
import TermsHero from "../pages/terms-of-use/components/terms-hero";
import TermsContent from "../pages/terms-of-use/components/terms-content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | TheAskt.org',
  description: 'Please read our Terms of Use to understand the rules and guidelines for using the Theaskt.org learning platform, courses, and community.',
}

export default function TermsOfUsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  );
}
