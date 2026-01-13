"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@fillingbee/lib"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row relative">
                {/* Mobile sidebar toggle */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-secondary/20 text-sm font-medium text-foreground hover:bg-secondary/30 transition-colors"
                >
                    {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    <span>Documentation Menu</span>
                    <ChevronRight className={cn("h-4 w-4 ml-auto transition-transform", isSidebarOpen && "rotate-90")} />
                </button>

                {/* Sidebar */}
                <aside className={cn(
                    "fixed md:sticky top-[64px] md:top-16 z-[60] md:z-40 w-full md:w-64 md:h-[calc(100vh-4rem)] bg-white dark:bg-[#0a0a0a] md:bg-transparent border-r border-border transition-transform duration-300 ease-in-out overflow-y-auto",
                    "md:translate-x-0 bottom-0",
                    isSidebarOpen ? "translate-x-0 h-[calc(100vh-64px)]" : "-translate-x-full md:translate-x-0 h-0 md:h-[calc(100vh-4rem)]"
                )}>
                    <div className="space-y-8 py-8 md:py-12 px-4">
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-4">Getting Started</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/docs" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors block">Introduction</Link></li>
                                <li><Link href="/docs/quickstart" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors block">Quickstart</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-4">API Reference</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/docs/api-reference" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors block">Overview</Link></li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 py-12 px-4 md:px-12 w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}
