import { Navbar } from "@/components/Navbar"
import { DocsSidebar } from "@/components/DocsSidebar"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row relative">
                <DocsSidebar />

                {/* Content */}
                <main className="flex-1 py-12 px-4 md:px-12 w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}
