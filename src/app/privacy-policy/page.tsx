import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/navbar";
import PrivacyHero from "../pages/privacy-policy/components/privacy-hero";
import PrivacyContent from "../pages/privacy-policy/components/privacy-content";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TheAskt.org',
  description: 'Read the Theaskt.org Privacy Policy to understand how we collect, use, and protect your data. Your trust and privacy are important to us.',
}


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
