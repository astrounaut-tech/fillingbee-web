"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Input, Label } from "@fillingbee/ui"
import { Check, ChevronRight } from "lucide-react"

export default function OnboardingPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [orgSlug, setOrgSlug] = useState("")

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1)
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background elements to match AuthLayout aesthetic */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 w-full max-w-lg p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 shadow-2xl">
                <div className="bg-zinc-950/50 backdrop-blur-xl p-8 rounded-2xl border border-white/5">
                    <div className="mb-8">
                        <div className="flex gap-2 justify-center mb-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? "w-10 bg-primary" : "w-2 bg-zinc-800"
                                        }`}
                                />
                            ))}
                        </div>
                        <h1 className="text-3xl font-bold text-center text-gradient mb-2">
                            {step === 1 && "Start your Workspace"}
                            {step === 2 && "Your Identity"}
                            {step === 3 && "Brand Aesthetics"}
                            {step === 4 && "All Set!"}
                        </h1>
                        <p className="text-center text-muted-foreground text-sm">
                            {step === 1 && "Define your unique organization URL"}
                            {step === 2 && "Tell us how you'll use FillingBee"}
                            {step === 3 && "Add your logo and primary color"}
                            {step === 4 && "Your workspace is ready for action"}
                        </p>
                    </div>

                    <div className="min-h-[200px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="grid gap-3">
                                        <Label htmlFor="slug" className="text-sm font-medium">Workspace URL</Label>
                                        <div className="flex items-center group">
                                            <div className="px-4 h-11 flex items-center border border-r-0 border-white/10 bg-zinc-900 rounded-l-xl text-sm text-zinc-500 font-medium">
                                                fillingbee.com/
                                            </div>
                                            <Input
                                                id="slug"
                                                placeholder="your-org"
                                                className="h-11 rounded-l-none rounded-r-xl bg-zinc-900 border-white/10 focus:border-primary/50 transition-colors"
                                                value={orgSlug}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrgSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                                            />
                                        </div>
                                        <p className="text-[11px] text-zinc-500 italic">
                                            This will be the base URL for all your forms.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-4"
                                >
                                    <div className="grid gap-3">
                                        <button
                                            onClick={handleNext}
                                            className="h-20 border border-white/10 rounded-2xl flex items-center px-6 hover:border-primary hover:bg-white/5 transition-all text-left group"
                                        >
                                            <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 mr-4 group-hover:text-primary transition-colors">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                            </div>
                                            <div>
                                                <div className="font-bold group-hover:text-primary transition-colors">Developer</div>
                                                <div className="text-xs text-zinc-500">Integrating via API & Headless</div>
                                            </div>
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="h-20 border border-white/10 rounded-2xl flex items-center px-6 hover:border-primary hover:bg-white/5 transition-all text-left group"
                                        >
                                            <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 mr-4 group-hover:text-primary transition-colors">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div>
                                                <div className="font-bold group-hover:text-primary transition-colors">Product Manager</div>
                                                <div className="text-xs text-zinc-500">Building & Managing visually</div>
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-6"
                                >
                                    <div className="grid gap-5">
                                        <div className="grid gap-3">
                                            <Label className="text-sm font-medium">Primary Brand Color</Label>
                                            <div className="flex gap-4">
                                                {["bg-blue-500", "bg-primary", "bg-emerald-500", "bg-violet-500", "bg-rose-500"].map((color) => (
                                                    <button key={color} className={`w-10 h-10 rounded-xl ${color} ring-offset-zinc-950 hover:ring-2 ring-primary transition-all shadow-lg`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label className="text-sm font-medium">Workspace Logo</Label>
                                            <div className="h-32 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-zinc-500 text-sm gap-3 hover:bg-white/5 hover:border-primary/50 transition-all cursor-pointer group">
                                                <div className="p-2 rounded-lg bg-zinc-900 group-hover:text-primary transition-colors">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                                Upload Logo (PNG/SVG)
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-6 text-center py-6"
                                >
                                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shadow-2xl shadow-primary/20">
                                        <Check className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-2xl font-bold text-gradient">Workspace Initialized!</p>
                                        <p className="text-zinc-500 text-sm max-w-[280px] mx-auto">
                                            Your organization <span className="text-white font-mono bg-zinc-900 px-2 py-0.5 rounded border border-white/5">{orgSlug || "workspace"}</span> is ready for build-time.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mt-10 flex justify-between items-center">
                        <Button
                            variant="ghost"
                            onClick={() => step > 1 && setStep(step - 1)}
                            className={`text-zinc-500 hover:text-white transition-colors h-11 px-6 ${step === 1 || step === 4 ? "invisible" : ""}`}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="h-11 px-8 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 font-bold"
                        >
                            {step === 4 ? "Enter Dashboard" : step === 2 ? "Skip Selection" : "Continue"}
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
