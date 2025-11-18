"use client"

import { Mail, GraduationCap, Handshake, Info } from "lucide-react"

export default function ContactContent() {
    return (
        <section className="py-16 md:py-24 w-full">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium lg:text-5xl">We’re here to support your learning & growth journey.</h2>
                        <p className="text-muted-foreground">
                            If you have questions about our courses, scholarships, community, or how to begin learning digital & AI skills, we would love to hear from you.
                        </p>
                        <p className="text-muted-foreground">
                            No question is too small. No dream is too big. You are welcome here. 💛
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-8 bg-muted p-8 rounded-lg">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <p className="text-sm text-muted-foreground">We respond to emails within 1-2 business days.</p>
                                    </div>
                                </div>
                                <div className="pl-10 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <GraduationCap className="h-5 w-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">Admissions & Courses</p>
                                            <a href="mailto:admissions@theaskt.org" className="text-primary hover:underline">admissions@theaskt.org</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Handshake className="h-5 w-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">Partnerships & Sponsorships</p>
                                            <a href="mailto:support@theaskt.org" className="text-primary hover:underline">support@theaskt.org</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Info className="h-5 w-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold">General Inquiries</p>
                                            <a href="mailto:info@theaskt.org" className="text-primary hover:underline">info@theaskt.org</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t pt-6">
                                <h4 className="font-semibold mb-2">Office Address</h4>
                                <p className="text-muted-foreground">
                                    Theaskt Learning Trust<br />
                                    123 Learning Lane, Knowledge City,<br />
                                    New Delhi 110001, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
