import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@fillingbee/ui"
import { Code2, ShieldCheck, PaintBucket, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-24 md:py-40 relative overflow-hidden text-center px-4 bg-[#f9f4ec] border-b border-border">
                    <h1 className="font-serif text-5xl md:text-8xl font-normal tracking-tight mb-8">
                        Everything you need <br />
                        <span className="italic text-primary">to capture data</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-foreground/60 max-w-3xl mx-auto font-medium leading-relaxed">
                        Powerful features for professional teams, <br />
                        remarkably intuitive for everyone else.
                    </p>
                </section>

                {/* Feature 1: No-Code Builder */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-md p-1 overflow-hidden shadow-2xl">
                            <div className="aspect-video bg-background/50 rounded-lg flex flex-col items-center justify-center p-8 space-y-4">
                                <div className="w-full h-8 bg-white/5 rounded-md animate-pulse" />
                                <div className="w-2/3 h-10 bg-primary/20 rounded-md animate-pulse" />
                                <div className="w-1/2 h-8 bg-white/5 rounded-md animate-pulse" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <PaintBucket className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Intuitive No-Code Builder</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Build complex forms in minutes without writing a single line of code.
                                Our drag-and-drop interface is designed for speed and flexibility.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">1</div> Real-time visual preview</li>
                                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">2</div> Conditional logic & branching</li>
                                <li className="flex items-center gap-3 text-sm font-medium"><div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">3</div> 20+ specialized field types</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Feature 2: API First */}
                <section className="py-20 px-4 bg-secondary/10">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <Code2 className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">API-First Architecture</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Built by developers for developers. Every action is exposed via our robust REST API.
                                Integrate seamlessly into your existing stack and automate your workflows.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/docs">
                                    <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5">Explore Docs</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative rounded-xl border border-white/10 bg-[#0d1117] p-6 shadow-2xl font-mono text-sm overflow-hidden group">
                            <div className="flex gap-1.5 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
                            </div>
                            <div className="space-y-1 text-blue-400">
                                <p><span className="text-purple-400">GET</span> /v1/submissions</p>
                                <p className="text-muted-foreground">{"{"}</p>
                                <p className="pl-4 text-green-400">&ldquo;data&rdquo;: [</p>
                                <p className="pl-8 text-green-400">{`{ "id": "sub_123", "score": 9.5 },`}</p>
                                <p className="pl-8 text-green-400">{`{ "id": "sub_124", "score": 8.1 }`}</p>
                                <p className="pl-4 text-green-400">]</p>
                                <p className="text-muted-foreground">{"}"}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 4: Analytics (NEW) */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 relative rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-md p-8 shadow-2xl overflow-hidden aspect-video flex items-end">
                            <div className="w-full flex items-end justify-around gap-2 h-48">
                                <div className="w-8 bg-primary/40 rounded-t-lg animate-in slide-in-from-bottom duration-1000" style={{ height: '60%' }} />
                                <div className="w-8 bg-primary/60 rounded-t-lg animate-in slide-in-from-bottom duration-1000 delay-100" style={{ height: '80%' }} />
                                <div className="w-8 bg-primary rounded-t-lg animate-in slide-in-from-bottom duration-1000 delay-200" style={{ height: '100%' }} />
                                <div className="w-8 bg-primary/30 rounded-t-lg animate-in slide-in-from-bottom duration-1000 delay-300" style={{ height: '40%' }} />
                                <div className="w-8 bg-primary/70 rounded-t-lg animate-in slide-in-from-bottom duration-1000 delay-400" style={{ height: '90%' }} />
                            </div>
                            <div className="absolute top-8 right-8 flex flex-col items-end">
                                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Total Submissions</div>
                                <div className="text-4xl font-bold">12,482</div>
                            </div>
                        </div>
                        <div className="order-1 space-y-6 text-left">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Real-time Insights</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Don&apos;t just collect data&mdash;understand it.
                                Our built-in analytics dashboard gives you a crystal clear view of conversion rates, drop-off points, and respondent demographics.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                    <div className="text-xl font-bold text-primary">84%</div>
                                    <div className="text-xs text-muted-foreground">Avg. Completion Rate</div>
                                </div>
                                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                    <div className="text-xl font-bold text-primary">2.1s</div>
                                    <div className="text-xs text-muted-foreground">Median Session Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 3: Security */}
                <section className="py-20 px-4 bg-secondary/10">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-xl border border-white/10 bg-secondary/20 backdrop-blur-md p-8 flex items-center justify-center shadow-2xl min-h-[300px]">
                            <ShieldCheck className="w-32 h-32 text-green-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-background/80 backdrop-blur border border-white/10 px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span className="font-semibold">SOC2 Type II Ready</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Enterprise Security</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Your data&apos;s safety is our top priority. We implement uncompromised security standards including end-to-end encryption, GDPR compliance, and automated threat detection.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-4 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />
                    <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to build better forms?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'}/auth/signup`}>
                            <Button className="h-12 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20">Get Started for Free</Button>
                        </Link>
                        <Link href="/pricing">
                            <Button variant="outline" className="h-12 px-8 rounded-full text-base font-semibold border-white/10 hover:bg-white/5">View Pricing</Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
