import { CheckCircle2, Sparkles, XCircle } from "lucide-react";

export default function OutcomesSection() {
    const outcomes = [
        "Earn from home (part-time or full-time)",
        "Offer freelancing services (content, design, social media)",
        "Grow a small online business",
        "Get better job opportunities",
        "Work with clients across India & globally",
        "Build confidence & identity again",
    ]

    const doubts = [
        "You have a long career gap",
        "Your English is not strong",
        "You only have a mobile phone",
        "You’ve never worked before",
    ]

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">What Can You Do After Learning?</h2>
                    <p>
                        You will have the skills and confidence to build a career on your own terms.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">You will be able to:</h3>
                        <ul className="space-y-3">
                            {outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start">
                                    <Sparkles className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 border-primary pl-4">
                            <h3 className="text-2xl font-semibold">Even if...</h3>
                             <ul className="mt-4 space-y-3">
                                {doubts.map((doubt, index) => (
                                     <li key={index} className="flex items-start">
                                        <XCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                                        <span>{doubt}</span>
                                    </li>
                                ))}
                            </ul>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
