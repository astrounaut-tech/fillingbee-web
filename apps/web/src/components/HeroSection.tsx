"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Hexagon } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-32 md:pb-48">
            {/* Dynamic Background Mesh */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[100px] animate-pulse duration-[10000ms]" />
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] rounded-full bg-orange-500/10 blur-[100px] animate-pulse duration-[8000ms] delay-1000" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    The new standard in form building
                </div>

                <h1 className="max-w-4xl text-3xl xs:text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 px-2">
                    Capture data <br />
                    <span className="text-gradient">without the friction</span>
                </h1>

                <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 md:px-0">
                    FillingBee is the ultra-fast, white-label form builder for developers.
                    Zero respondent sign-ups. Secure OTP verification. API-first.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Link
                        href="http://localhost:3001/auth/signup"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <button
                        onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-8 text-base font-semibold shadow-sm transition-all hover:bg-white/10 items-center gap-2"
                    >
                        Watch Demo
                    </button>
                </div>

                {/* Trusted By / Logo Cloud */}
                <div className="mt-20 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6">Trusted by teams at</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-xl md:text-2xl font-bold tracking-tighter">TECHFLOW</div>
                        <div className="text-xl md:text-2xl font-bold tracking-tighter italic">Vortex</div>
                        <div className="text-xl md:text-2xl font-bold tracking-tighter">Acme Corp</div>
                        <div className="text-xl md:text-2xl font-bold tracking-tighter underline underline-offset-4">Pulse</div>
                        <div className="text-xl md:text-2xl font-bold tracking-tighter">NEXUS</div>
                    </div>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>100% White-label</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>API First Architecture</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
