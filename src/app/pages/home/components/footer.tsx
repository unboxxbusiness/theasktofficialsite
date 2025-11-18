export default function Footer() {
    return (
        <footer className="py-12 md:py-20 w-full">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-medium lg:text-3xl mb-4">TheAskt</h2>
                <p className="text-muted-foreground">© {new Date().getFullYear()} TheAskt. All rights reserved.</p>
                 <div className="mt-4 space-x-4">
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
