import Link from "next/link";
import { cn } from "@fillingbee/lib";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 group text-foreground", className)}>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                {/* Bee Icon SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                >
                    <path d="M8 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4z" />
                    <path d="M12 2v2" />
                    <path d="M12 8v13" />
                    <path d="M12 11h-3a3 3 0 0 0-3 3v.6a3 3 0 0 0 3 3h3" />
                    <path d="M12 11h3a3 3 0 0 1 3 3v.6a3 3 0 0 1-3 3h-3" />
                    <path d="M5 6l3 4" />
                    <path d="M19 6l-3 4" />
                </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-current group-hover:text-primary transition-colors duration-300">
                FillingBee
            </span>
        </Link>
    );
}
