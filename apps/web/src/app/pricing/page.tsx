"use client"

import { useState } from "react"
import { Check, Minus } from "lucide-react"
import Link from "next/link"
import { Button } from "@fillingbee/ui"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { cn } from "@fillingbee/lib"

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false)

    const plans = [
        {
            name: "Hobby",
            price: 0,
            description: "Perfect for side projects and prototypes.",
            features: ["1 User", "3 Active Forms", "100 Submissions/mo", "Community Support"],
            cta: "Get Started",
            variant: "outline",
            planId: "hobby"
        },
        {
            name: "Basic",
            price: isYearly ? 17 : 19,
            description: "For small projects needing more space.",
            features: ["3 Users", "10 Active Forms", "1,000 Submissions/mo", "Basic Analytics"],
            cta: "Get Started",
            variant: "outline",
            planId: "basic"
        },
        {
            name: "Pro",
            price: isYearly ? 26 : 29,
            description: "The best value for growing teams.",
            features: ["Unlimited Users", "Unlimited Forms", "5,000 Submissions/mo", "Custom Branding", "Priority Support"],
            cta: "Start Free Trial",
            variant: "primary",
            highlight: true,
            planId: "pro"
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations with specific needs.",
            features: ["Unlimited Everything", "SSO & Audit Logs", "Dedicated Instance", "SLA Guarantee"],
            cta: "Contact Sales",
            variant: "outline",
            planId: "enterprise"
        }
    ]

    const features = [
        { name: "Users", hobby: "1", basic: "3", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Active Forms", hobby: "3", basic: "10", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Submissions", hobby: "100/mo", basic: "1,000/mo", pro: "5,000/mo", enterprise: "Unlimited" },
        { name: "White-labeling", hobby: false, basic: false, pro: true, enterprise: true },
        { name: "Custom Domain", hobby: false, basic: false, pro: true, enterprise: true },
        { name: "API Access", hobby: "Basic", basic: "Full", pro: "Full", enterprise: "Full" },
        { name: "Team Collaboration", hobby: false, basic: true, pro: true, enterprise: true },
        { name: "Priority Support", hobby: false, basic: false, pro: true, enterprise: true },
        { name: "SSO & SAML", hobby: false, basic: false, pro: false, enterprise: true },
        { name: "Security Audit Logs", hobby: false, basic: false, pro: false, enterprise: true },
    ]

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
                    <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-7xl mb-6 text-foreground">
                        Ready to level up <br />
                        <span className="italic">your forms?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-16 font-medium">
                        Simple, transparent pricing for teams of all sizes. <br />
                        No hidden fees. No surprises.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-6 mb-20">
                        <span className={cn("text-lg font-bold transition-colors", !isYearly ? "text-foreground" : "text-foreground/40")}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-secondary border-2 border-foreground/5 transition-colors hover:border-primary"
                        >
                            <div className={cn(
                                "absolute top-1 left-1 w-5 h-5 rounded-full bg-primary transition-transform duration-300",
                                isYearly ? "translate-x-8" : "translate-x-0"
                            )} />
                        </button>
                        <span className={cn("text-lg font-bold transition-colors", isYearly ? "text-foreground" : "text-foreground/40")}>
                            Yearly <span className="text-primary text-xs font-black ml-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">SAVE 10%</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32 px-4 md:px-0">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={cn(
                                    "relative rounded-2xl border-2 p-8 flex flex-col items-start gap-4 transition-all duration-300",
                                    plan.highlight
                                        ? "border-primary bg-[#fffdfa] shadow-xl md:scale-105 z-10"
                                        : "border-foreground/5 bg-background shadow-sm hover:border-border hover:shadow-md"
                                )}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest shadow-none border-2 border-foreground/5 whitespace-nowrap">
                                        RECOMMENDED
                                    </div>
                                )}
                                <h2 className={cn("text-xl font-bold font-serif italic", plan.highlight ? "text-primary" : "text-foreground")}>{plan.name}</h2>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-foreground">
                                        {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                                    </span>
                                    {typeof plan.price === "number" && (
                                        <span className="text-lg font-bold text-foreground/40">/mo</span>
                                    )}
                                </div>
                                <p className="text-base font-medium text-foreground/60 text-left h-12 leading-relaxed">{plan.description}</p>
                                <div className={cn("w-full h-px my-6", plan.highlight ? "bg-primary/20" : "bg-foreground/5")} />
                                <ul className="space-y-4 w-full text-left mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm font-bold text-foreground">
                                            <Check className={cn("h-5 w-5 shrink-0 stroke-[3]", plan.highlight ? "text-primary" : "text-foreground/20")} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto w-full pt-4">
                                    <Link href={`/auth/signup?plan=${plan.planId}`} className="w-full">
                                        <Button
                                            variant={(plan.variant === "primary" ? "default" : plan.variant) as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
                                            className={cn(
                                                "w-full rounded-full h-14 text-lg font-black tracking-tight",
                                                plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80"
                                            )}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="max-w-5xl mx-auto mb-32">
                        <h2 className="text-2xl md:text-3xl font-bold mb-12">Compare Plans</h2>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-secondary/10 backdrop-blur-sm">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="p-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">Features</th>
                                        <th className="p-6 text-sm font-bold uppercase tracking-widest text-center">Hobby</th>
                                        <th className="p-6 text-sm font-bold uppercase tracking-widest text-center">Basic</th>
                                        <th className="p-6 text-sm font-bold uppercase tracking-widest text-center text-primary">Pro</th>
                                        <th className="p-6 text-sm font-bold uppercase tracking-widest text-center">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((feature, i) => (
                                        <tr key={i} className="border-b border-white/5 transition-colors hover:bg-white/5">
                                            <td className="p-6 text-sm font-medium text-foreground">{feature.name}</td>
                                            <td className="p-6 text-sm text-center text-muted-foreground">
                                                {typeof feature.hobby === "string" ? feature.hobby : feature.hobby ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground/30 mx-auto" />}
                                            </td>
                                            <td className="p-6 text-sm text-center text-muted-foreground">
                                                {typeof feature.basic === "string" ? feature.basic : feature.basic ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground/30 mx-auto" />}
                                            </td>
                                            <td className="p-6 text-sm text-center font-medium bg-primary/5">
                                                {typeof feature.pro === "string" ? feature.pro : feature.pro ? <Check className="h-4 w-4 text-primary mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground/30 mx-auto" />}
                                            </td>
                                            <td className="p-6 text-sm text-center text-muted-foreground">
                                                {typeof feature.enterprise === "string" ? feature.enterprise : feature.enterprise ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground/30 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-3xl mx-auto text-left py-20">
                        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access to your plan until the end of your current billing period." },
                                { q: "Do you offer a free plan?", a: "Definitely. Our Hobby plan is free forever and includes all the essential features you need to start collecting data." },
                                { q: "What happens if I exceed my submission limit?", a: "We'll send you a notification when you reach 80% and 100% of your limit. If you go over, we'll gracefully hold new submissions until you upgrade or your cycle resets." },
                                { q: "Is FillingBee GDPR compliant?", a: "Yes, data privacy is a core value. We are fully GDPR compliant and offer tools to help you manage your data privacy obligations." }
                            ].map((faq, i) => (
                                <details key={i} className="group border border-white/5 bg-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h3 className="font-semibold">{faq.q}</h3>
                                        <span className="transition group-open:rotate-180 text-muted-foreground">
                                            <ChevronDownIcon className="h-5 w-5" />
                                        </span>
                                    </summary>
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                        <p>{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
