"use client"

import { useState } from "react"
import { Search, Zap, Check, ExternalLink, MessageSquare, Database, Globe, Layers } from "lucide-react"
import { cn } from "@fillingbee/lib"
import { Button } from "@fillingbee/ui"

const integrations = [
    {
        id: "slack",
        title: "Slack",
        description: "Get instant notifications in your channels for every new form submission.",
        category: "Messaging",
        connected: false,
        icon: MessageSquare,
        color: "text-[#E01E5A]"
    },
    {
        id: "gsheets",
        title: "Google Sheets",
        description: "Automatically sync all submissions to a specific spreadsheet in real-time.",
        category: "Productivity",
        connected: true,
        icon: Database,
        color: "text-[#0F9D58]"
    },
    {
        id: "webhook",
        title: "Webhooks",
        description: "Send form data to any custom endpoint or your own application backend.",
        category: "Developer Tools",
        connected: false,
        icon: Zap,
        color: "text-primary"
    },
    {
        id: "discord",
        title: "Discord",
        description: "Forward form responses to your Discord server via customizable webhooks.",
        category: "Messaging",
        connected: false,
        icon: Globe,
        color: "text-[#5865F2]"
    },
    {
        id: "zapier",
        title: "Zapier",
        description: "Connect your forms to over 5,000+ apps and automate your entire workflow.",
        category: "Automation",
        connected: false,
        icon: Layers,
        color: "text-[#FF4A00]"
    }
]

export default function IntegrationsPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredIntegrations = integrations.filter(i =>
        i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">Integrations</h1>
                    <p className="text-muted-foreground mt-1 text-lg font-medium">Connect your forms to your favorite tools.</p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search integrations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 h-11 bg-card/30 border-2 border-border/50 rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map((app) => (
                    <div
                        key={app.id}
                        className="group relative flex flex-col justify-between rounded-2xl border-2 border-border/50 bg-card/30 p-8 hover:border-primary transition-all overflow-hidden"
                    >
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className={cn("p-4 rounded-2xl bg-muted/50 border border-white/5", app.color.replace('text-', 'bg-').replace(']', ']/10]'))}>
                                    <app.icon className={cn("h-8 w-8", app.color)} />
                                </div>
                                {app.connected ? (
                                    <span className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                                        <Check className="h-3 w-3 stroke-[3]" /> Connected
                                    </span>
                                ) : (
                                    <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground/30 bg-muted/20 px-3 py-1.5 rounded-full border border-white/5">
                                        Not Connected
                                    </span>
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{app.title}</h3>
                                <p className="text-muted-foreground mt-2 font-medium leading-relaxed italic">{app.description}</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 relative z-10">
                            <Button
                                variant={app.connected ? "outline" : "default"}
                                className={cn(
                                    "flex-1 rounded-xl h-11 font-black",
                                    app.connected
                                        ? "border-2 border-border/50 hover:bg-white/5"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10"
                                )}
                            >
                                {app.connected ? "Manage" : "Connect"}
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11 border-2 border-transparent hover:border-border/50">
                                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-primary/5 rounded-2xl border-2 border-dashed border-primary/20 p-12 text-center animate-pulse">
                <p className="text-primary font-black italic text-lg">More integrations coming soon...</p>
            </div>
        </div>
    )
}
