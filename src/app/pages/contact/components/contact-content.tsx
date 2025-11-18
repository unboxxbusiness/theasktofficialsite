"use client"

import { Mail, GraduationCap, Handshake, Info } from "lucide-react"

export default function ContactContent() {
    const contactPoints = [
        {
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            title: "Admissions & Courses",
            email: "admissions@theaskt.org",
        },
        {
            icon: <Handshake className="h-6 w-6 text-primary" />,
            title: "Partnerships & Sponsorships",
            email: "support@theaskt.org",
        },
        {
            icon: <Info className="h-6 w-6 text-primary" />,
            title: "General Inquiries",
            email: "info@theaskt.org",
        },
    ]

    return (
        <section className="py-16 md:py-24 w-full">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                    <div className="relative z-10 max-w-xl space-y-6">
                        <h2 className="text-4xl font-medium lg:text-5xl">We’re here to support your learning & growth journey.</h2>
                        <p>
                            If you have questions about our courses, scholarships, community, or how to begin learning digital & AI skills, we would love to hear from you.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                        <div>
                             <p className="text-muted-foreground">
                                No question is too small. No dream is too big. You are welcome here. 💛
                            </p>
                        </div>
                        <div className="relative">
                           <div className="space-y-4">
                                {contactPoints.map((point) => (
                                    <div key={point.title} className="flex items-start gap-4 rounded-lg border bg-card p-4">
                                        <div>{point.icon}</div>
                                        <div>
                                            <h3 className="font-semibold">{point.title}</h3>
                                            <a href={`mailto:${point.email}`} className="text-sm text-primary hover:underline">
                                                {point.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}