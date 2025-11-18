import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 text-center">
            <div className="max-w-md">
                <span className="text-9xl font-bold text-primary">404</span>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Page Not Found
                </h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                </p>
                <div className="mt-10">
                    <Link
                        href="/"
                        className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    )
}
