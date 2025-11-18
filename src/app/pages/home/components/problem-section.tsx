import { AlertTriangle } from "lucide-react";

export default function ProblemSection() {
    const problems = [
        "Career break after marriage or motherhood",
        "No confidence with technology or English",
        "Family responsibilities – no time for long courses",
        "Fear of online scams and fake institutes",
        "Dream of earning from home, but don’t know where to start",
    ]
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">You Want to Earn… But Something Is Holding You Back</h2>
                    <p>
                        So many Indian women feel this way but don’t say it out loud:
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="text-lg font-medium">You are not alone.</p>
                        <p className="text-lg font-medium">Your dreams are valid.</p>
                        <p className="text-lg font-bold text-primary">And it is absolutely possible to start again.</p>
                    </div>
                    <div className="relative">
                        <div className="border-l-4 border-primary pl-4">
                            <ul className="space-y-3">
                                {problems.map((problem, index) => (
                                    <li key={index} className="flex items-start">
                                        <AlertTriangle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>{problem}</span>
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
