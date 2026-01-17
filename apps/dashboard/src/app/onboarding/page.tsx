"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Input, Label } from "@fillingbee/ui"
import { Check, ChevronRight, User, Users, Code, Layout, Palette, Terminal, Zap } from "lucide-react"
import { cn } from "@fillingbee/lib"

type AccountType = "individual" | "organization" | null
type Role = "developer" | "product-manager" | "designer" | "other"

export default function OnboardingPage() {
    const router = useRouter()
    const [step, setStep] = useState(0)
    const [accountType, setAccountType] = useState<AccountType>(null)
    const [role, setRole] = useState<Role>("other")
    const [orgSlug, setOrgSlug] = useState("")
    const [orgName, setOrgName] = useState("")
    const [primaryColor, setPrimaryColor] = useState("bg-primary")

    const handleNext = () => {
        if (step === 0 && accountType === "individual") {
            setStep(1) // Skip to individual details
        } else if (step === 4) {
            router.push("/")
        } else {
            setStep(step + 1)
        }
    }

    const handleBack = () => {
        if (step > 0) setStep(step - 1)
    }

    const steps = [
        { title: "Account", desc: "Choose account type" },
        { title: "Identity", desc: "Personalize your space" },
        { title: "Setup", desc: "Configure your workflow" },
        { title: "Developer", desc: "API & SDK access", condition: role === "developer" },
        { title: "Ready", desc: "Launch your workspace" }
    ].filter(s => s.condition !== false)

    const activeStepIndex = step === 4 ? steps.length - 1 : Math.min(step, steps.length - 2)

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background elements to match AuthLayout aesthetic */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,210,0,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 w-full max-w-xl p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-3xl">
                <div className="bg-zinc-950/80 backdrop-blur-3xl p-10 rounded-[2.3rem] border border-white/5">
                    <div className="mb-10 text-center">
                        <div className="flex gap-2 justify-center mb-8">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-500",
                                        i <= activeStepIndex ? "w-12 bg-primary shadow-[0_0_15px_rgba(255,210,0,0.3)]" : "w-2 bg-white/5"
                                    )}
                                />
                            ))}
                        </div>
                        <h1 className="text-4xl font-black text-foreground tracking-tight">
                            {step === 0 && "Welcome to FillingBee"}
                            {step === 1 && (accountType === "organization" ? "Organization Details" : "Personal Workspace")}
                            {step === 2 && "The Aesthetics"}
                            {step === 3 && (role === "developer" ? "Developer Access" : "Almost Done")}
                            {step === 4 && "Workspace Ready!"}
                        </h1>
                    </div>

                    <div className="min-h-[320px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {/* Step 0: Account Type */}
                            {step === 0 && (
                                <motion.div key="step0" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => { setAccountType("individual"); handleNext(); }}
                                        className={cn(
                                            "group relative flex flex-col p-8 rounded-3xl border-2 transition-all text-left",
                                            accountType === "individual" ? "border-primary bg-primary/5" : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/5"
                                        )}
                                    >
                                        <div className="h-12 w-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <User className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-black mb-2 italic">Individual</h3>
                                        <p className="text-sm text-muted-foreground font-medium">For freelancers and solo creators building simple forms.</p>
                                    </button>
                                    <button
                                        onClick={() => { setAccountType("organization"); handleNext(); }}
                                        className={cn(
                                            "group relative flex flex-col p-8 rounded-3xl border-2 transition-all text-left",
                                            accountType === "organization" ? "border-primary bg-primary/5" : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/5"
                                        )}
                                    >
                                        <div className="h-12 w-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Users className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-black mb-2 italic">Organization</h3>
                                        <p className="text-sm text-muted-foreground font-medium">For teams, agencies, and large companies requiring collaboration.</p>
                                    </button>
                                </motion.div>
                            )}

                            {/* Step 1: Details */}
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                                                {accountType === "organization" ? "Organization Name" : "Workspace Name"}
                                            </Label>
                                            <Input
                                                placeholder={accountType === "organization" ? "Acme Corp" : "My Forms"}
                                                className="h-14 bg-zinc-950 border-2 border-white/5 rounded-2xl focus:border-primary/50 transition-all font-bold text-lg"
                                                value={orgName}
                                                onChange={(e) => setOrgName(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Workspace URL</Label>
                                            <div className="flex group">
                                                <div className="px-5 h-14 flex items-center border-2 border-r-0 border-white/5 bg-zinc-900 rounded-l-2xl text-sm text-zinc-500 font-bold italic">
                                                    fb.bee/
                                                </div>
                                                <Input
                                                    placeholder="your-workspace"
                                                    className="h-14 rounded-l-none rounded-r-2xl bg-zinc-950 border-2 border-white/5 focus:border-primary/50 transition-all font-bold text-lg"
                                                    value={orgSlug}
                                                    onChange={(e) => setOrgSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-2 pt-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">What is your primary role?</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {["developer", "product-manager", "designer", "other"].map((r) => (
                                                <button
                                                    key={r}
                                                    onClick={() => setRole(r as Role)}
                                                    className={cn(
                                                        "px-4 py-2.5 rounded-xl border-2 text-xs font-black uppercase tracking-widest transition-all",
                                                        role === r ? "border-primary bg-primary/10 text-primary" : "border-white/5 bg-white/[0.02] text-muted-foreground hover:border-white/10"
                                                    )}
                                                >
                                                    {r.replace('-', ' ')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Aesthetics */}
                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                    <div className="space-y-4">
                                        <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Brand Color</Label>
                                        <div className="flex flex-wrap gap-4">
                                            {["bg-[#FFD200]", "bg-blue-500", "bg-emerald-500", "bg-rose-500", "bg-indigo-500"].map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setPrimaryColor(color)}
                                                    className={cn(
                                                        "w-12 h-12 rounded-2xl transition-all border-4",
                                                        primaryColor === color ? "border-white shadow-[0_0_20px_rgba(255,210,0,0.3)] scale-110" : "border-transparent scale-90"
                                                    )}
                                                    style={{ backgroundColor: color.startsWith("bg-[") ? color.slice(4, -1) : undefined }}
                                                >
                                                    <div className={cn("w-full h-full rounded-xl", color)} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Brand Logo</Label>
                                        <div className="h-40 border-3 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/30 transition-all cursor-pointer group">
                                            <div className="h-14 w-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors border border-white/5">
                                                <Palette className="h-7 w-7" />
                                            </div>
                                            <span className="font-black italic text-sm text-muted-foreground uppercase tracking-widest">Upload Identity</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Developer / Almost Done */}
                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                    {role === "developer" ? (
                                        <div className="space-y-6">
                                            <div className="p-6 rounded-3xl bg-primary/5 border-2 border-primary/20 space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <Terminal className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <h3 className="font-black italic text-lg text-primary">Developer API Access</h3>
                                                </div>
                                                <p className="text-sm text-primary/70 font-medium">Ready to build? We've generated your secret keys and initialized the SDK for your workspace.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="grid gap-2">
                                                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Your API Key (Restricted)</Label>
                                                    <div className="h-14 bg-zinc-950 border-2 border-white/5 rounded-2xl px-5 flex items-center justify-between font-mono text-sm group">
                                                        <span className="text-zinc-500">fb_live_************************</span>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/5"><Terminal className="h-4 w-4" /></Button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                                    <Zap className="h-5 w-5 text-primary" />
                                                    <span className="text-sm font-bold italic">Check out our Documentation</span>
                                                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 space-y-6">
                                            <div className="h-24 w-24 bg-primary/5 rounded-[2rem] border-2 border-primary/20 flex items-center justify-center mx-auto">
                                                <Layout className="h-10 w-10 text-primary" />
                                            </div>
                                            <p className="text-xl font-bold italic text-muted-foreground max-w-sm mx-auto">
                                                You're all set to create your first high-fidelity form.
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Step 4: Success */}
                            {step === 4 && (
                                <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-8">
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full animate-pulse" />
                                        <div className="relative h-28 w-28 bg-primary rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-primary/30 border-4 border-white/20">
                                            <Check className="h-14 w-14 text-primary-foreground stroke-[3]" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-black italic tracking-tighter">Everything is ready!</h2>
                                        <p className="text-muted-foreground font-medium max-w-xs mx-auto italic">
                                            Welcome to the hive, <span className="text-foreground font-black">{orgName || "Builder"}</span>. Your workspace <span className="text-primary underline">fb.bee/{orgSlug}</span> is live.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex justify-between items-center">
                        <Button
                            variant="ghost"
                            onClick={handleBack}
                            className={cn(
                                "font-black uppercase tracking-widest text-xs h-12 px-8 rounded-xl hover:bg-white/5",
                                step === 0 || step === 4 ? "invisible" : ""
                            )}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="h-12 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
                            disabled={step === 0 && !accountType}
                        >
                            {step === 4 ? "Enter Workspace" : "Continue"}
                            <ChevronRight className="ml-2 h-4 w-4 stroke-[3]" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
