import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/navbar";
import RefundHero from "../pages/refund-policy/components/refund-hero";
import RefundContent from "../pages/refund-policy/components/refund-content";

export default function RefundPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <RefundHero />
      <RefundContent />
      <Footer />
    </main>
  );
}
