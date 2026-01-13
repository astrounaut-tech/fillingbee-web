"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GripVertical, Mail, Type, Lock, Send, Check } from "lucide-react"

export function InteractiveDemo() {
    const [step, setStep] = useState(0)

    // Animation cycle
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4) // 0: Start, 1: Add Field, 2: Publish, 3: Success/Fill
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="demo" className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl mx-auto overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-foreground text-gradient inline-block">
                        See it in action
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground px-4">
                        From creation to collection in seconds.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl relative rounded-xl border border-white/10 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1]">
                    {/* Browser Chrome */}
                    <div className="bg-secondary/40 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/10" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/10" />
                        </div>
                        <div className="ml-4 flex-1 bg-background/40 backdrop-blur-sm text-xs text-muted-foreground px-3 py-1.5 rounded-md text-center max-w-xs mx-auto border border-white/5 shadow-inner">
                            fillingbee.com/builder
                        </div>
                    </div>

                    <div className="flex h-full">
                        {/* Sidebar (Builder Tools) */}
                        <div className="w-64 border-r border-white/5 p-4 bg-secondary/10 hidden md:block backdrop-blur-md">
                            <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Fields</div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-background/50 border border-white/5 text-sm text-foreground shadow-sm cursor-grab hover:bg-secondary/40 transition-colors">
                                    <Type className="h-4 w-4 text-muted-foreground" /> Text Input
                                </div>
                                <motion.div
                                    className="flex items-center gap-3 p-2.5 rounded-lg bg-background/50 border border-white/5 text-sm text-foreground shadow-sm cursor-grab hover:bg-secondary/40 transition-colors"
                                    animate={step === 0 ? { x: [0, 100, 0], opacity: [1, 0.5, 1], borderColor: ["rgba(255,255,255,0.05)", "rgba(251,191,36,0.5)", "rgba(255,255,255,0.05)"] } : {}}
                                    transition={{ duration: 1.5 }}
                                >
                                    <Mail className="h-4 w-4 text-muted-foreground" /> Email
                                </motion.div>
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-background/50 border border-white/5 text-sm text-foreground shadow-sm cursor-grab hover:bg-secondary/40 transition-colors">
                                    <Lock className="h-4 w-4 text-muted-foreground" /> Password
                                </div>
                            </div>
                        </div>

                        {/* Main Canvas */}
                        <div className="flex-1 p-8 relative bg-white/5 backdrop-blur-3xl">
                            <AnimatePresence mode="wait">
                                {step < 2 ? (
                                    <motion.div
                                        key="builder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full max-w-md mx-auto bg-background/80 rounded-xl border border-dashed border-border/50 p-6 space-y-6 shadow-sm"
                                    >
                                        <div className="h-8 bg-muted rounded w-1/3 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-muted rounded w-1/4 animate-pulse" />
                                            <div className="h-10 border border-border rounded-lg bg-background/50" />
                                        </div>

                                        {step >= 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                className="space-y-2 p-3 bg-primary/5 rounded-lg border border-primary/20 backdrop-blur-sm"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-medium text-foreground">Email Address</div>
                                                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                                                </div>
                                                <div className="h-10 border border-border rounded-md bg-background" />
                                            </motion.div>
                                        )}

                                        <motion.button
                                            className="w-full bg-primary text-primary-foreground h-10 rounded-lg shadow-lg shadow-primary/20 font-medium mt-4"
                                            animate={step === 1 ? { scale: [1, 1.05, 1] } : {}}
                                        >
                                            Publish Form
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="live"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full max-w-md mx-auto bg-background rounded-xl shadow-2xl border border-white/10 p-6 space-y-6 relative overflow-hidden"
                                    >
                                        {/* Success Overlay for Step 3 */}
                                        {step === 3 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 bg-background/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4"
                                                >
                                                    <Check className="w-6 h-6" />
                                                </motion.div>
                                                <h3 className="font-bold text-lg">Sent!</h3>
                                            </motion.div>
                                        )}

                                        <div className="flex items-center gap-2 text-green-500 mb-4 bg-green-500/10 p-2 rounded-lg text-sm border border-green-500/20">
                                            <Check className="h-4 w-4" /> Form Published!
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Name</label>
                                            <input className="w-full h-10 border border-border rounded-md px-3 bg-secondary/30" placeholder="John Doe" disabled />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Email Address</label>
                                            <input className="w-full h-10 border border-border rounded-md px-3 bg-secondary/30" placeholder="john@example.com" disabled />
                                        </div>
                                        <motion.button
                                            className="w-full bg-primary text-primary-foreground h-10 rounded-lg flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary/20"
                                            animate={step === 3 ? { scale: 0.95 } : {}}
                                        >
                                            <Send className="h-4 w-4" /> Submit
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${step === i ? 'w-10 bg-primary shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'w-2 bg-muted-foreground/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
