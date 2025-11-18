import Footer from "@/app/pages/home/components/footer";
import PrivacyHero from "../pages/privacy-policy/components/privacy-hero";
import PrivacyContent from "../pages/privacy-policy/components/privacy-content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TheAskt.org',
  description: 'Read the Theaskt.org Privacy Policy to understand how we collect, use, and protect your data. Your trust and privacy are important to us.',
}


export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
