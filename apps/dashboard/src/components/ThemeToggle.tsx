"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@fillingbee/lib"

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={cn(
                "relative rounded-full p-2.5 bg-secondary/50 backdrop-blur-sm border border-transparent w-10 h-10 flex items-center justify-center",
                className
            )}>
                <div className="w-5 h-5 bg-muted rounded-full animate-pulse" />
            </div>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn(
                "relative rounded-full p-2.5 transition-all duration-300 hover:bg-accent hover:shadow-lg border border-transparent hover:border-primary/20",
                "bg-secondary/50 backdrop-blur-sm",
                className
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun className="absolute inset-0 h-5 w-5 scale-100 rotate-0 transition-all duration-500 text-primary dark:scale-0 dark:-rotate-90 dark:text-muted-foreground" />
                <Moon className="absolute inset-0 h-5 w-5 scale-0 rotate-90 transition-all duration-500 text-muted-foreground dark:scale-100 dark:rotate-0 dark:text-primary" />
            </div>
        </button>
    )
}
