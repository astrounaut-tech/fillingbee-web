"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input, Label } from "@fillingbee/ui"
import { Check, Loader2, Send, ShieldCheck, Mail, AlertCircle } from "lucide-react"
import { api } from "@fillingbee/lib"

export default function PublicFormPage({ params }: { params: { slug: string } }) {
    const [step, setStep] = useState<"email" | "otp" | "form" | "success">("email")
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    // Dummy Form State
    const [formData, setFormData] = useState({ name: "", feedback: "" })

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            await api.auth.sendOtp(email)
            setStep("otp")
        } catch {
            setError("Failed to send OTP. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            await api.auth.verifyOtp(email, otp)
            setStep("form")
        } catch {
            setError("Invalid OTP. Please check the code.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await api.forms.submit({ slug: params.slug, email, ...formData })
            setStep("success")
        } catch {
            setError("Submission failed. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="w-full max-w-md bg-secondary/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-8 relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 p-2 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Access Secure Form</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Hosted safely on FillingBee
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {step === "email" && (
                        <motion.form
                            key="email"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onSubmit={handleSendOtp}
                            className="space-y-5"
                        >
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="pl-9 bg-background/50 border-white/5 focus:border-primary/50 focus:ring-primary/20"
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
                                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                                    We&apos;ll send a one-time code to verify you.
                                </p>
                            </div>
                            {error && (
                                <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 p-2 rounded">
                                    <AlertCircle className="h-4 w-4" /> {error}
                                </div>
                            )}
                            <button
                                disabled={isLoading}
                                className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Verification Code"}
                            </button>
                        </motion.form>
                    )}

                    {step === "otp" && (
                        <motion.form
                            key="otp"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            onSubmit={handleVerifyOtp}
                            className="space-y-5"
                        >
                            <div className="space-y-2">
                                <Label className="text-foreground">Enter Verification Code</Label>
                                <p className="text-xs text-muted-foreground">Sent to <span className="text-foreground font-medium">{email}</span></p>
                                <Input
                                    placeholder="123456"
                                    required
                                    value={otp}
                                    onChange={e => setOtp(e.target.value)}
                                    className="tracking-[0.5em] text-center text-2xl font-mono h-14 bg-background/50 border-white/5 focus:border-primary/50 focus:ring-primary/20"
                                    maxLength={6}
                                />
                                <p className="text-xs text-center text-muted-foreground">Demo Code: <span className="font-mono text-primary">123456</span></p>
                            </div>
                            {error && (
                                <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 p-2 rounded text-center justify-center">
                                    <AlertCircle className="h-4 w-4" /> {error}
                                </div>
                            )}
                            <button
                                disabled={isLoading}
                                className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify Identity"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep("email")}
                                className="w-full text-xs text-muted-foreground hover:text-primary transition-colors mt-2"
                            >
                                Use a different email address
                            </button>
                        </motion.form>
                    )}

                    {step === "form" && (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onSubmit={handleSubmitForm}
                            className="space-y-6"
                        >
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg text-xs flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium">
                                    <Check className="h-3.5 w-3.5" /> Identity Verified
                                </div>
                                <span className="opacity-75">{email}</span>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-foreground">Full Name</Label>
                                    <Input
                                        required
                                        className="bg-background/50 border-white/5 focus:border-primary/50"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-foreground">Feedback</Label>
                                    <textarea
                                        className="flex min-h-[120px] w-full rounded-md border border-white/5 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                        value={formData.feedback}
                                        onChange={e => setFormData({ ...formData, feedback: e.target.value })}
                                        placeholder="Tell us what you think..."
                                    />
                                </div>
                            </div>

                            <button
                                disabled={isLoading}
                                className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="h-4 w-4" /> Submit Response</>}
                            </button>
                        </motion.form>
                    )}

                    {step === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8 space-y-6"
                        >
                            <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Thank You!</h2>
                                <p className="text-muted-foreground mt-2">Your response needs no further action.</p>
                            </div>
                            <div className="pt-8 border-t border-border/50">
                                <p className="text-xs text-muted-foreground">
                                    Powered by <span className="font-semibold text-foreground">FillingBee</span>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
