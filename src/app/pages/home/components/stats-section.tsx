import { GraduationCap, Smartphone, Users } from "lucide-react";

export default function StatsSection() {
    const stats = [
        {
            icon: <Smartphone className="mx-auto size-12 text-primary" />,
            description: "Learn from your phone, step-by-step, in simple language",
        },
        {
            icon: <GraduationCap className="mx-auto size-12 text-primary" />,
            description: "Free, Low-Cost & Scholarship Seats Available",
        },
        {
            icon: <Users className="mx-auto size-12 text-primary" />,
            description: "For Homemakers, Students, Working Women & Small Business Owners",
        }
    ]
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="grid gap-12 divide-y *:pt-12 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0 md:*:pt-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-4 px-4">
                            <div className="text-5xl font-bold">{stat.icon}</div>
                            <p className="text-muted-foreground">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
