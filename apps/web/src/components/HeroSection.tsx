"use client"

import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="relative bg-background pt-20 pb-32 overflow-hidden">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Illustration */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <Image
                        src="/bee-illustration.png"
                        alt="Hand-drawn honeybee"
                        width={200}
                        height={200}
                        className="opacity-90 hover:scale-105 transition-transform duration-500 dark:invert dark:hue-rotate-180 dark:brightness-200"
                    />
                </div>

                <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 whitespace-nowrap">
                    Capture feedback <br />
                    <span className="italic">without the hassle</span>
                </h1>

                <p className="max-w-xl text-xl md:text-2xl text-foreground/70 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed font-medium">
                    FillingBee is the friendly, white-label form builder for developers.
                    Zero respondent sign-ups. API-first for your workflow.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'}/auth/signup`}
                        className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-xl font-bold text-primary-foreground border-2 border-foreground/5 shadow-none hover:bg-primary/90 hover:scale-105"
                    >
                        Try it for free
                    </Link>
                    <button
                        onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex h-16 items-center justify-center rounded-full border-2 border-border bg-transparent px-10 text-xl font-bold text-foreground transition-all hover:bg-secondary"
                    >
                        See how it works
                    </button>
                </div>

                {/* Social Proof Simplified */}
                <div className="mt-24 pt-12 border-t border-border/50 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-8">Trusted by independent teams at</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">
                        <div className="text-2xl font-serif font-bold italic">TechFlow</div>
                        <div className="text-2xl font-serif font-bold">Vortex</div>
                        <div className="text-2xl font-serif font-bold italic underline">Acme</div>
                        <div className="text-2xl font-serif font-bold">NEXUS</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
