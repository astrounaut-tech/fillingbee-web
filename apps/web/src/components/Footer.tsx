import Link from "next/link"
import { Logo } from "./Logo"

export function Footer() {
    return (
        <footer className="border-t-4 border-foreground/5 bg-[#fbf8f3] pt-20 pb-12">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col gap-6 max-w-sm">
                        <Logo />
                        <p className="text-xl font-serif italic text-foreground/60 leading-relaxed">
                            FillingBee makes data collection feel like filling a beautiful notebook.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-base font-bold text-foreground/40">
                        <div className="flex flex-col gap-4">
                            <div className="text-[10px] tracking-widest uppercase text-foreground/20">Product</div>
                            <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
                            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                            <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-[10px] tracking-widest uppercase text-foreground/20">Company</div>
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-[10px] tracking-widest uppercase text-foreground/20">Social</div>
                            <Link href="https://github.com" className="hover:text-primary transition-colors">GitHub</Link>
                            <Link href="https://twitter.com" className="hover:text-primary transition-colors">Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-foreground/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-foreground/30">
                    <p>© {new Date().getFullYear()} FillingBee Inc. All rights reserved.</p>
                    <div className="flex items-center gap-3 bg-green-500/5 px-4 py-2 rounded-full border border-green-500/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-600/60 uppercase tracking-widest text-[10px]">ALL SYSTEMS NORMAL</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
