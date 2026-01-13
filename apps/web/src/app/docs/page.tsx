import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-3xl">
            <div className="mb-4 text-sm text-primary font-semibold tracking-wide uppercase">Documentation</div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">Introduction to FillingBee</h1>
            <p className="lead text-xl text-muted-foreground">
                Welcome to the FillingBee documentation. Learn how to build secure, white-label forms that require no respondent sign-up.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <Link href="/docs/quickstart" className="group rounded-xl border border-white/10 bg-secondary/20 p-6 hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        Quickstart Guide <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">Build and publish your first form in less than 5 minutes.</p>
                </Link>
                <Link href="/docs/api-reference" className="group rounded-xl border border-white/10 bg-secondary/20 p-6 hover:border-primary/50 hover:bg-secondary/30 transition-all">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        API Reference <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">Explore our REST API endpoints for programmatic access.</p>
                </Link>
            </div>

            <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0">Why FillingBee?</h2>
            <p>
                FillingBee was born from a simple frustration: simple form builders are too basic, and enterprise ones are too bloated.
                We sit in the sweet spot—providing powerful logic and API access without the enterprise price tag or branding bloat.
            </p>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Concepts</h3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li><strong>No-Account Submission</strong>: Reduce drop-off by 40% by not forcing users to sign in.</li>
                <li><strong>Identity Verification</strong>: We handle the email OTP flow so you don't have to implement auth.</li>
                <li><strong>White-label</strong>: Your domain, your logo, your colors.</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-8 rounded-r">
                <p className="text-sm">
                    <strong>Note:</strong> We are currently in beta. If you encounter any bugs, please report them on our GitHub functionality.
                </p>
            </div>
        </div>
    )
}
