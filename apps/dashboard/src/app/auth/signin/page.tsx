"use client"

import Link from "next/link"
import { Button, Input, Label } from "@fillingbee/ui"
import { Github } from "lucide-react"

export default function SignInPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col space-y-2 text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gradient">
                    Welcome back
                </h1>
                <p className="text-sm text-muted-foreground">
                    Sign in to your FillingBee account
                </p>
            </div>

            <div className="grid gap-6">
                <div className="p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
                    <form className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-sm font-medium">Work Email</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="bg-background/50 border-white/10"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" suppressHydrationWarning className="text-sm font-medium">Password</Label>
                                <Link
                                    href="/auth/forgot-password"
                                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="bg-background/50 border-white/10"
                            />
                        </div>
                        <Button
                            className="w-full h-11 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-bold"
                        >
                            Sign In
                        </Button>
                    </form>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="w-full h-11 border-white/10 bg-background/50 hover:bg-white/5 transition-all text-sm font-medium"
                    type="button"
                >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/auth/signup"
                        className="font-medium text-primary hover:underline underline-offset-4"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
