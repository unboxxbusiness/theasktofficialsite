import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background text-foreground">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 text-center md:text-left sm:grid-cols-2 md:grid-cols-4">
                    
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-4 text-lg font-bold">Theaskt.org</h3>
                        <p className="text-sm text-muted-foreground">A Learning Trust for Women</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <Link href="https://edu.theaskt.org" target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-primary">Enroll Now</Link>
                            <Link href="/scholarships" className="block transition-colors hover:text-primary">Apply for Scholarship</Link>
                            <Link href="/digital-ai-school" className="block transition-colors hover:text-primary">Digital & AI School</Link>
                            <Link href="/about" className="block transition-colors hover:text-primary">About The Trust</Link>
                            <Link href="/community" className="block transition-colors hover:text-primary">Community</Link>
                            <Link href="/contact" className="block transition-colors hover:text-primary">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-4 text-lg font-semibold">Policies</h3>
                        <nav className="space-y-2 text-sm">
                            <Link href="/privacy-policy" className="block transition-colors hover:text-primary">Privacy Policy</Link>
                            <Link href="/terms-of-use" className="block transition-colors hover:text-primary">Terms of Use</Link>
                            <Link href="/refund-policy" className="block transition-colors hover:text-primary">Refund Policy</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
                        <div className="flex space-x-4">
                            <Link href="https://www.youtube.com/@theaskt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Youtube className="h-6 w-6" /></Link>
                            <Link href="https://www.instagram.com/the_askt/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                            <Link href="https://www.linkedin.com/company/theaskt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                            <Link href="https://www.facebook.com/theasktorg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><MessageCircle className="h-6 w-6" /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Theaskt Learning Trust. Empowering Women Across India.
                    </p>
                    <p className="mt-2 text-xs italic text-muted-foreground">
                        “When a woman learns, a family rises. When a family rises, a nation grows.”
                    </p>
                </div>
            </div>
        </footer>
    );
}
