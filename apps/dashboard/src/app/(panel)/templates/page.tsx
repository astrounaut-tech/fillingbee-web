"use client"

import { useState } from "react"
import { Search, Layout, Filter, Play, Copy, Check } from "lucide-react"
import { cn } from "@fillingbee/lib"
import { Button } from "@fillingbee/ui"

const categories = ["All", "Marketing", "Product", "HR", "Customer Success"]

const templates = [
    {
        id: "contact",
        title: "Contact Form",
        description: "Standard contact form with name, email, and message fields.",
        category: "Marketing",
        icon: Layout,
    },
    {
        id: "feedback",
        title: "Product Feedback",
        description: "Gather detailed feedback on new features or product direction.",
        category: "Product",
        icon: Filter,
    },
    {
        id: "rsvp",
        title: "Event RSVP",
        description: "Manage guest lists for webinars, conferences, or office parties.",
        category: "Marketing",
        icon: Play,
    },
    {
        id: "survey",
        title: "Customer Satisfaction",
        description: "NPS and detailed satisfaction survey for customer insights.",
        category: "Customer Success",
        icon: Check,
    },
    {
        id: "job",
        title: "Job Application",
        description: "Streamlined application form for recruiting and HR teams.",
        category: "HR",
        icon: Copy,
    },
]

export default function TemplatesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredTemplates = templates.filter(t =>
        (selectedCategory === "All" || t.category === selectedCategory) &&
        (t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">Template Library</h1>
                    <p className="text-muted-foreground mt-1 text-lg font-medium">Start faster with pre-built form structures.</p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 h-11 bg-card/30 border-2 border-border/50 rounded-xl focus:outline-none focus:border-primary transition-all font-bold text-sm"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-sm font-black transition-all border-2",
                            selectedCategory === cat
                                ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                                : "bg-card/20 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                    <div
                        key={template.id}
                        className="group relative flex flex-col justify-between rounded-2xl border-2 border-border/50 bg-card/30 p-8 hover:border-primary transition-all hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
                    >
                        {/* Abstract Background Decoration */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="p-3 rounded-xl bg-primary/10 border-2 border-primary/20">
                                    <template.icon className="h-6 w-6 text-primary stroke-[2.5]" />
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground/50 bg-muted/50 px-3 py-1 rounded-full">
                                    {template.category}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{template.title}</h3>
                                <p className="text-muted-foreground mt-2 font-medium leading-relaxed">{template.description}</p>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4 relative z-10">
                            <Button className="flex-1 rounded-xl h-12 font-black tracking-tight bg-primary text-primary-foreground hover:bg-primary/90">
                                Use Template
                            </Button>
                            <Button variant="outline" className="rounded-xl h-12 px-6 font-black border-2 border-border/50 hover:bg-white/5">
                                Preview
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTemplates.length === 0 && (
                <div className="py-20 text-center border-2 border-dashed border-border/50 rounded-2xl bg-card/10">
                    <p className="text-muted-foreground font-bold italic text-lg whitespace-nowrap">No templates found for "{searchQuery}"</p>
                    <button
                        onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}
                        className="mt-4 text-primary font-black hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    )
}
