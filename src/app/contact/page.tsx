import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import ContactHero from "../pages/contact/components/contact-hero";
import ContactIntro from "../pages/contact/components/contact-intro";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <ContactHero />
      <ContactIntro />
      <Footer />
    </main>
  );
}
