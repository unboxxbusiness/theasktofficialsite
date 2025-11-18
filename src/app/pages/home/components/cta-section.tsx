'use client'

import Link from 'next/link'

export default function CtaSection() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">🌟 Your Skills Can Change Your Life.</h2>
                    <p className="mt-4 text-muted-foreground">Imagine earning from home… supporting your family… feeling confident again.</p>
                    <p className="mt-2 text-muted-foreground">This is your moment. Your journey matters. We are here to walk with you.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                            👉 Enroll in Digital & AI School
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
