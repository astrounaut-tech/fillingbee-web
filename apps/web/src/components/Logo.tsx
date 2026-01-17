import Link from "next/link";
import { cn } from "@fillingbee/lib";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center gap-3 group text-foreground", className)}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-foreground/5 font-serif font-black text-xl italic">
                B
            </div>
            <span className="font-serif italic font-bold text-2xl tracking-tight text-foreground">
                FillingBee
            </span>
        </Link>
    );
}
