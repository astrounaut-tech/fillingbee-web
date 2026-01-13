import { Megaphone } from "lucide-react"

export function AdContainer() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative flex flex-col items-center justify-center py-16 px-8 rounded-2xl border border-white/5 bg-secondary/20 backdrop-blur-xl text-center overflow-hidden">
                        {/* Background subtle pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.1),transparent)] pointer-events-none" />

                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
                            <Megaphone className="h-6 w-6" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                            Your ad comes here for advertising
                        </h2>

                        <p className="text-muted-foreground max-w-md mx-auto">
                            Reach thousands of developers and creators by highlighting your product on FillingBee.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                                Learn More
                            </button>
                            <button className="px-6 py-2 rounded-lg border border-white/10 text-sm font-semibold hover:bg-white/5 transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
