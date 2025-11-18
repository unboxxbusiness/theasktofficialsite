import Footer from "@/app/pages/home/components/footer";
import ContactHero from "../pages/contact/components/contact-hero";
import ContactIntro from "../pages/contact/components/contact-intro";
import ContactOptions from "../pages/contact/components/contact-options";
import ContactDetails from "../pages/contact/components/contact-details";
import NoteFromTeam from "../pages/contact/components/note-from-team";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Theaskt.org Support & Partnerships',
  description: 'Get in touch with Theaskt.org for course enrollment, scholarships, partnerships, or any questions. We are here to support your journey to learn and earn.',
}


export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <ContactDetails />
      <NoteFromTeam />
      <Footer />
    </main>
  );
}
