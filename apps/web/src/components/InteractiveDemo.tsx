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
        <section id="demo" className="py-20 bg-secondary border-y border-border relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-5xl font-normal text-foreground">
                        Simple to build, <span className="italic">easy to use</span>
                    </h2>
                    <p className="mt-4 text-lg text-foreground/60 max-w-xl mx-auto">
                        FillingBee works exactly how you expect it to. Clean, fast, and remarkably simple.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl relative rounded-xl border-2 border-foreground/5 bg-background shadow-xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1]">
                    {/* Browser Chrome */}
                    <div className="bg-secondary px-4 py-3 border-b border-border flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-foreground/10" />
                            <div className="w-3 h-3 rounded-full bg-foreground/10" />
                            <div className="w-3 h-3 rounded-full bg-foreground/10" />
                        </div>
                        <div className="ml-4 flex-1 bg-background text-[10px] font-bold tracking-wider text-foreground/40 px-3 py-1.5 rounded-md text-center max-w-xs mx-auto border border-border shadow-inner">
                            FILLINGBEE.COM/BUILDER
                        </div>
                    </div>

                    <div className="flex h-full">
                        {/* Sidebar (Builder Tools) */}
                        <div className="w-56 border-r border-border p-6 bg-muted hidden md:block">
                            <div className="text-[10px] font-bold text-foreground/40 mb-6 uppercase tracking-widest">Fields</div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-background border-2 border-foreground/5 text-sm font-bold text-foreground shadow-sm italic font-serif">
                                    <Type className="h-4 w-4 text-primary" /> Text Input
                                </div>
                                <motion.div
                                    className="flex items-center gap-3 p-3 rounded-xl bg-background border-2 border-primary/20 text-sm font-bold text-foreground shadow-sm italic font-serif"
                                    animate={step === 0 ? { scale: [1, 1.05, 1], borderColor: ["#e6e0d8", "#ffd200", "#e6e0d8"] } : {}}
                                    transition={{ duration: 1.5 }}
                                >
                                    <Mail className="h-4 w-4 text-primary" /> Email Input
                                </motion.div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-background border-2 border-foreground/5 text-sm font-bold text-foreground shadow-sm italic font-serif">
                                    <Lock className="h-4 w-4 text-primary" /> Password
                                </div>
                            </div>
                        </div>

                        {/* Main Canvas */}
                        <div className="flex-1 p-10 relative bg-background">
                            <AnimatePresence mode="wait">
                                {step < 2 ? (
                                    <motion.div
                                        key="builder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full max-w-sm mx-auto bg-background rounded-2xl border-4 border-dashed border-border p-8 space-y-8 shadow-sm"
                                    >
                                        <div className="h-6 bg-secondary rounded w-1/2" />
                                        <div className="space-y-3">
                                            <div className="h-3 bg-secondary rounded w-1/4" />
                                            <div className="h-12 border-2 border-border rounded-xl bg-background" />
                                        </div>

                                        {step >= 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                className="space-y-3 p-4 bg-primary/5 rounded-2xl border-2 border-primary/30"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-bold font-serif italic">Email Address</div>
                                                    <GripVertical className="h-4 w-4 text-foreground/20" />
                                                </div>
                                                <div className="h-12 border-2 border-border rounded-xl bg-background" />
                                            </motion.div>
                                        )}

                                        <motion.button
                                            className="w-full bg-primary text-primary-foreground h-12 rounded-full border-2 border-foreground/5 font-bold mt-6 shadow-none"
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
                                        className="h-full max-w-sm mx-auto bg-background rounded-2xl shadow-xl border-2 border-foreground/5 p-8 space-y-8 relative overflow-hidden"
                                    >
                                        {/* Success Overlay for Step 3 */}
                                        {step === 3 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 bg-background/95 z-10 flex flex-col items-center justify-center p-8 text-center"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground border-4 border-foreground/5 mb-6"
                                                >
                                                    <Check className="w-8 h-8 stroke-[3]" />
                                                </motion.div>
                                                <h3 className="font-serif text-2xl font-bold italic">Form sent!</h3>
                                            </motion.div>
                                        )}

                                        <div className="flex items-center gap-2 text-primary font-bold mb-6 bg-primary/5 p-3 rounded-xl text-sm border-2 border-primary/20">
                                            <Check className="h-4 w-4 stroke-[3]" /> FORM PUBLISHED
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold font-serif italic text-foreground">Name</label>
                                            <div className="w-full h-12 border-2 border-border rounded-xl px-4 bg-secondary/50 flex items-center text-foreground/40 font-medium">John Doe</div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold font-serif italic text-foreground">Email Address</label>
                                            <div className="w-full h-12 border-2 border-border rounded-xl px-4 bg-secondary/50 flex items-center text-foreground/40 font-medium">john@example.com</div>
                                        </div>
                                        <motion.button
                                            className="w-full bg-primary text-primary-foreground h-12 rounded-full border-2 border-foreground/5 flex items-center justify-center gap-3 font-bold shadow-none"
                                            animate={step === 3 ? { scale: 0.95 } : {}}
                                        >
                                            <Send className="h-5 w-5" /> Submit
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
