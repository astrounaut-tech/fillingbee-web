import { Logo } from "@/components/Logo";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background overflow-hidden">
            <Logo className="absolute left-6 top-6 md:left-8 md:top-8 z-50 transition-colors lg:text-white" />
            <div className="relative hidden h-full flex-col bg-zinc-950 p-10 text-white lg:flex border-r border-white/5">
                <div className="absolute inset-0 bg-zinc-900/50" />
                {/* Visual Pattern for the dark side */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg font-medium">
                            &ldquo;The most developer-friendly form builder I&apos;ve ever used. The API-first approach and white-labeling features are exactly what we needed.&rdquo;
                        </p>
                        <footer className="text-sm text-zinc-400">Sofia Davis, CTO @ TechFlow</footer>
                    </blockquote>
                </div>
            </div>
            <div className="relative lg:p-8 p-6 pt-24 lg:pt-8 flex items-center justify-center min-h-screen lg:min-h-0 bg-background">
                {/* Subtle Background for the form area */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.03),transparent_50%)]" />

                <div className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[380px]">
                    {children}
                </div>
            </div>
        </div>
    );
}
