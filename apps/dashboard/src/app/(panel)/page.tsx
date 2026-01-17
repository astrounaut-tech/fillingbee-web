import Link from "next/link";
import { Plus, MoreVertical, Calendar, Users, Eye } from "lucide-react";
import { Button } from "@fillingbee/ui";

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">Your Forms</h1>
                    <p className="text-muted-foreground mt-1 text-lg font-medium">Manage and track your form activity.</p>
                </div>
                <Link href="/builder">
                    <Button className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-black shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                        <Plus className="mr-2 h-5 w-5 stroke-[3]" /> Create Form
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Create New Card */}
                <Link
                    href="/builder"
                    className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border/50 bg-card/10 p-12 hover:border-primary hover:bg-primary/5 transition-all"
                >
                    <div className="rounded-2xl bg-primary/10 p-5 shadow-sm group-hover:scale-110 transition-all border-2 border-primary/20">
                        <Plus className="h-8 w-8 text-primary stroke-[3]" />
                    </div>
                    <p className="font-black text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest text-xs">Create New Form</p>
                </Link>

                {/* Existing Forms (Dummy Data) */}
                {[1, 2].map((i) => (
                    <div key={i} className="group relative flex flex-col justify-between rounded-2xl border-2 border-border/50 bg-card/30 p-8 hover:border-primary transition-all hover:translate-y-[-4px]">
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">Feedback Survey Q{i}</h3>
                                    <p className="text-muted-foreground font-medium italic">General feedback for product launch</p>
                                </div>
                                <button className="text-muted-foreground hover:text-foreground p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-border/50 transition-all">
                                    <MoreVertical className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-green-500 border border-green-500/20">
                                    Active
                                </span>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground font-bold">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-primary" /> 128
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" /> 2d ago
                                </div>
                            </div>
                            <Link href="/forms/demo" className="flex items-center gap-1.5 hover:text-primary transition-colors text-primary/70">
                                <Eye className="h-4 w-4" /> View Live
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
