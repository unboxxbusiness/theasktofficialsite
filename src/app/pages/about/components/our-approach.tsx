"use client"
import { Video, BookOpen, BrainCircuit, Users, Home, Briefcase, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function OurApproach() {
    const features = [
        { name: "Video lessons", icon: <Video className="size-5" /> },
        { name: "Assignments & projects", icon: <BookOpen className="size-5" /> },
        { name: "AI tools for real-world work", icon: <BrainCircuit className="size-5" /> },
        { name: "Mentorship & doubt support", icon: <MessageCircle className="size-5" /> },
        { name: "Earn-from-home pathways", icon: <Home className="size-5" /> },
        { name: "Job, freelance & internship support", icon: <Briefcase className="size-5" /> },
        { name: "Community learning circles", icon: <Users className="size-5" /> },
    ]

    return (
        <section className="py-16 md:py-24 bg-muted w-full">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Our Approach to Learning</h2>
                            <p className="mt-6 text-muted-foreground">Our method is simple: <span className="font-bold text-foreground">Learn. Apply. Earn. Grow.</span> We blend the best of modern education to create a powerful learning experience.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-4 *:py-3">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    {feature.icon}
                                    <span className="font-medium">{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="aspect-[4/3] relative rounded-2xl">
                             <Image 
                                src="https://picsum.photos/seed/approach/1200/900" 
                                className="rounded-[15px] object-cover" 
                                alt="learning approach illustration" 
                                fill
                                data-ai-hint="learning education"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
