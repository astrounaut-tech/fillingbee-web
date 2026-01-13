import Link from "next/link";
import { Plus, MoreVertical, FileText, Calendar, Users, Eye } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Your Forms</h1>
                    <p className="text-muted-foreground mt-1">Manage and track your form activity.</p>
                </div>
                <Link
                    href="/builder"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                >
                    <Plus className="mr-2 h-4 w-4" /> Create Form
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Create New Card */}
                <Link
                    href="/builder"
                    className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/30 p-12 hover:border-primary hover:bg-primary/5 transition-all"
                >
                    <div className="rounded-full bg-background p-4 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
                        <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium text-muted-foreground group-hover:text-primary transition-colors">Create New Form</p>
                </Link>

                {/* Existing Forms (Dummy Data) */}
                {[1, 2].map((i) => (
                    <div key={i} className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-secondary/30 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition-all hover:border-primary/20">
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <h3 className="font-semibold leading-none text-foreground group-hover:text-primary transition-colors">Feedback Survey Q{i}</h3>
                                    <p className="text-sm text-muted-foreground">General feedback for product launch</p>
                                </div>
                                <button className="text-muted-foreground hover:text-foreground p-1 rounded hover:bg-white/5">
                                    <MoreVertical className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                                    Active
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <Users className="h-3.5 w-3.5 text-primary/70" /> 128
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" /> 2d ago
                                </div>
                            </div>
                            <Link href="/forms/demo" className="flex items-center gap-1 hover:text-primary transition-colors">
                                <Eye className="h-3 w-3" /> View Live
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
