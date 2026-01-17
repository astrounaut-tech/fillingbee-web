"use client"

import { User, Lock, Bell, Trash2, ShieldCheck, Mail } from "lucide-react"
import { Button } from "@fillingbee/ui"

export default function SettingsPage() {
    return (
        <div className="space-y-12 max-w-4xl">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-1 text-lg font-medium">Manage your account and preferences.</p>
            </div>

            <div className="space-y-8">
                {/* Profile Section */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                        <User className="h-4 w-4" /> Account Profile
                    </div>
                    <div className="bg-card/30 border-2 border-border/50 rounded-2xl p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-wider text-muted-foreground/60">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full h-12 bg-card/20 border-2 border-border/30 rounded-xl px-4 focus:outline-none focus:border-primary transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-wider text-muted-foreground/60">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        disabled
                                        className="w-full h-12 bg-muted/20 border-2 border-border/10 rounded-xl pl-12 pr-4 text-muted-foreground/40 font-bold cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button className="rounded-full px-8 h-12 font-black bg-primary text-primary-foreground hover:bg-primary/90">
                            Save Changes
                        </Button>
                    </div>
                </section>

                {/* Security Section */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                        <Lock className="h-4 w-4" /> Password & Security
                    </div>
                    <div className="bg-card/30 border-2 border-border/50 rounded-2xl p-8 space-y-6">
                        <p className="text-sm text-muted-foreground font-medium italic">Update your password regularly to keep your account secure.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" className="rounded-xl h-12 px-6 font-black border-2 border-border/50 hover:bg-white/5 flex items-center gap-2">
                                Change Password
                            </Button>
                            <Button variant="outline" className="rounded-xl h-12 px-6 font-black border-2 border-border/50 hover:bg-white/5 flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4" /> Enable 2FA
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                        <Bell className="h-4 w-4" /> Preferences
                    </div>
                    <div className="bg-card/30 border-2 border-border/50 rounded-2xl p-8">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h4 className="font-black text-foreground">Email Notifications</h4>
                                <p className="text-sm text-muted-foreground font-medium">Receive weekly summaries of your form activity.</p>
                            </div>
                            <div className="h-7 w-12 bg-primary rounded-full relative shadow-inner cursor-pointer">
                                <div className="absolute right-1 top-1 h-5 w-5 bg-primary-foreground rounded-full shadow-md" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="space-y-4 pt-12 border-t border-white/5">
                    <div className="flex items-center gap-2 text-destructive font-black uppercase tracking-widest text-xs">
                        <Trash2 className="h-4 w-4" /> Danger Zone
                    </div>
                    <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <h4 className="font-black text-destructive">Delete Account</h4>
                            <p className="text-sm text-destructive/60 font-medium">This action is permanent and cannot be undone. All forms and data will be lost.</p>
                        </div>
                        <Button variant="destructive" className="rounded-full px-8 h-12 font-black shadow-lg shadow-destructive/20">
                            Delete Account
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
