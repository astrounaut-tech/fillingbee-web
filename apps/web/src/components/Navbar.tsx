"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@fillingbee/ui"
import { Menu, X } from "lucide-react"
import { cn } from "@fillingbee/lib"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/docs", label: "Docs" },
    ]

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Logo />

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <ThemeToggle />
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="https://fillingbee-web-dashboard.vercel.app/auth/signin" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                Sign In
                            </Link>
                            <Link href="https://fillingbee-web-dashboard.vercel.app/auth/signup">
                                <Button className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 md:hidden text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside nav to avoid transparency inheritance */}
            <div className={cn(
                "md:hidden fixed inset-0 top-16 z-[100] bg-white dark:bg-[#0a0a0a] transform transition-transform duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col p-8 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                        <Link
                            href="http://localhost:3001/auth/signin"
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link href="http://localhost:3001/auth/signup" onClick={() => setIsOpen(false)}>
                            <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20">
                                Get Started for Free
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
