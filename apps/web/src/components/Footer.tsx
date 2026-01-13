import Link from "next/link"
import { Logo } from "./Logo"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background pt-12 pb-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <Logo />
                        <p className="text-sm text-muted-foreground ml-1">
                            Forms that feel like magic.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="https://github.com" className="hover:text-primary transition-colors">GitHub</Link>
                        <Link href="https://twitter.com" className="hover:text-primary transition-colors">Twitter</Link>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} FillingBee Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>All systems normal</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
