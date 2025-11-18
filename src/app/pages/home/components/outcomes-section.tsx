import { CheckCircle2, Sparkles, XCircle, Zap, TrendingUp } from "lucide-react";

export default function OutcomesSection() {
    const outcomes = [
        "Earn from home (part-time or full-time)",
        "Offer freelancing services",
        "Grow a home-business (baking, boutique, beauty, coaching, etc.)",
        "Manage social media for small businesses",
        "Apply for digital/AI-assisted jobs",
        "Build confidence & professional identity again",
    ]

    const earnings = [
        {
            level: "Starting",
            range: "₹8,000 – ₹25,000/month",
        },
        {
            level: "With Experience",
            range: "₹30,000 – ₹60,000/month",
        },
        {
            level: "Advanced",
            range: "Higher for advanced freelancers & service providers",
        },
    ]

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Outcomes You Can Achieve</h2>
                    <p>
                        After training, learners can:
                    </p>
                </div>
                <div className="grid gap-12 sm:grid-cols-2 md:gap-16">
                    <div className="space-y-6">
                        <ul className="space-y-3">
                            {outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start">
                                    <Sparkles className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="border-l-4 border-primary pl-4">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                <TrendingUp className="h-6 w-6" />
                                Typical Earning Potential
                            </h3>
                             <p className="text-sm text-muted-foreground mt-1">(varies by skill & effort)</p>
                             <ul className="mt-6 space-y-4">
                                {earnings.map((earning, index) => (
                                     <li key={index}>
                                        <p className="font-semibold">{earning.range}</p>
                                        <p className="text-sm text-muted-foreground">{earning.level}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
