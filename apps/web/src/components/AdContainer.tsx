import { Megaphone } from "lucide-react"

export function AdContainer() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    {/* Animated Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative flex flex-col items-center justify-center py-20 px-8 rounded-2xl border-2 border-foreground/5 bg-secondary text-center overflow-hidden shadow-sm">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-8 border-2 border-foreground/5 font-serif font-black text-xl italic">
                            !
                        </div>

                        <h2 className="font-serif text-3xl md:text-5xl font-normal mb-6 tracking-tight">
                            Highlight your product <br />
                            <span className="italic text-primary">right here</span>
                        </h2>

                        <p className="text-foreground/60 max-w-md mx-auto text-lg leading-relaxed font-medium">
                            Reach thousands of thoughtful developers. Clean ads. Honest placement.
                        </p>

                        <div className="mt-10 flex gap-6">
                            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg border-2 border-foreground/5 transition-all hover:bg-primary/90">
                                Sponsor now
                            </button>
                            <button className="px-8 py-3 rounded-full border-2 border-border text-lg font-bold hover:bg-secondary transition-all">
                                How it works
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
