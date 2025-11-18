import Footer from "@/app/pages/home/components/footer";
import { Navbar } from "../pages/home/components/hero-section";
import ContactHero from "../pages/contact/components/contact-hero";
import ContactIntro from "../pages/contact/components/contact-intro";
import ContactOptions from "../pages/contact/components/contact-options";
import ContactDetails from "../pages/contact/components/contact-details";
import NoteFromTeam from "../pages/contact/components/note-from-team";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
      </div>
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <ContactDetails />
      <NoteFromTeam />
      <Footer />
    </main>
  );
}
