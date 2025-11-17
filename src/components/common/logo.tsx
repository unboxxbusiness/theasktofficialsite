import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("text-3xl font-headline text-primary", className)}>
      TheAskt
    </a>
  );
}
