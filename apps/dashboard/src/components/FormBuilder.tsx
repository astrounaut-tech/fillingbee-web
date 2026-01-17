"use client"

import { useState } from "react"
import { GripVertical, Plus, Trash2, Save, Type, Mail, CheckSquare, ChevronLeft, Settings } from "lucide-react"
import { Input, Label, Button } from "@fillingbee/ui"
import Link from "next/link"

type FieldType = "text" | "email" | "textarea" | "checkbox"

interface FormField {
    id: string
    type: FieldType
    label: string
    required: boolean
}

export function FormBuilder() {
    const [fields, setFields] = useState<FormField[]>([
        { id: "1", type: "text", label: "Full Name", required: true },
        { id: "2", type: "email", label: "Email Address", required: true }
    ])
    const [activeId, setActiveId] = useState<string | null>(null)

    const addField = (type: FieldType) => {
        const newField: FormField = {
            id: Math.random().toString(36).substr(2, 9),
            type,
            label: type === "checkbox" ? "I agree to the terms" : `New ${type} field`,
            required: false
        }
        setFields([...fields, newField])
        setActiveId(newField.id)
    }

    const removeField = (id: string) => {
        setFields(fields.filter(f => f.id !== id))
        if (activeId === id) setActiveId(null)
    }

    const updateField = (id: string, updates: Partial<FormField>) => {
        setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f))
    }

    return (
        <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-background">
            {/* Sidebar - Tools */}
            <div className="w-72 border-r border-border/50 bg-card/30 backdrop-blur-xl p-6 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/5 border border-transparent hover:border-border/50 transition-all">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <span className="font-black text-sm uppercase tracking-widest text-muted-foreground/50">Builder</span>
                </div>

                <div className="space-y-6">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-widest pl-1">Input Elements</h3>
                    <div className="space-y-3">
                        {[
                            { type: "text", icon: Type, label: "Text Field" },
                            { type: "email", icon: Mail, label: "Email Address" },
                            { type: "checkbox", icon: CheckSquare, label: "Checkbox" },
                        ].map((item) => (
                            <button
                                key={item.type}
                                onClick={() => addField(item.type as FieldType)}
                                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card/20 border-2 border-border/30 text-sm font-black hover:border-primary hover:bg-primary/5 hover:text-primary transition-all text-left group shadow-sm"
                            >
                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="h-4 w-4" />
                                </div>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Canvas - Preview */}
            <div className="flex-1 bg-background relative overflow-y-auto">
                {/* Noise/Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffd20015_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50" />

                <div className="p-10 pb-40">
                    <div className="max-w-3xl mx-auto space-y-10 relative z-10">
                        <div className="flex items-center justify-between sticky top-0 bg-background/50 backdrop-blur-md py-6 z-30 border-b border-border/50 -mx-10 px-10">
                            <input
                                className="text-3xl font-black bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground/30 w-full text-foreground"
                                defaultValue="Untitled Form"
                                placeholder="Name your form..."
                            />
                            <Button className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-black shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 transition-all">
                                <Save className="h-5 w-5 mr-2 stroke-[2.5]" /> Publish
                            </Button>
                        </div>

                        <div className="bg-card/40 backdrop-blur-2xl rounded-[2rem] border-2 border-border/50 shadow-2xl min-h-[600px] p-10 space-y-8">
                            {fields.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-40 border-2 border-dashed border-border/50 rounded-3xl bg-card/10">
                                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-6 border-2 border-primary/20">
                                        <Plus className="h-10 w-10 text-primary stroke-[2.5]" />
                                    </div>
                                    <p className="font-black text-xl text-foreground">Design your form</p>
                                    <p className="text-sm mt-2 font-medium italic opacity-60">Drag elements from the sidebar to start</p>
                                </div>
                            ) : (
                                fields.map((field) => (
                                    <div
                                        key={field.id}
                                        onClick={() => setActiveId(field.id)}
                                        className={`group relative p-8 rounded-2xl border-2 transition-all cursor-pointer ${activeId === field.id ? "border-primary bg-primary/[0.03] shadow-2xl shadow-primary/5 scale-[1.02]" : "border-transparent hover:border-border/30 hover:bg-card/20"}`}
                                    >
                                        <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-20">
                                            <button onClick={(e) => { e.stopPropagation(); removeField(field.id); }} className="p-2.5 bg-destructive/10 hover:bg-destructive text-destructive hover:text-white rounded-xl transition-all border border-destructive/20 shadow-lg">
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>

                                        <div className="space-y-4 pointer-events-none">
                                            <Label className="flex gap-2 text-lg font-black italic">
                                                {field.label}
                                                {field.required && <span className="text-primary">*</span>}
                                            </Label>
                                            {field.type === "text" && <Input placeholder="Type your answer here..." disabled className="h-14 bg-background/50 border-2 border-border/30 rounded-xl" />}
                                            {field.type === "email" && <Input placeholder="email@example.com" disabled className="h-14 bg-background/50 border-2 border-border/30 rounded-xl" />}
                                            {field.type === "checkbox" && (
                                                <div className="flex items-center space-x-4 p-4 rounded-xl border-2 border-border/30 bg-background/50">
                                                    <div className="w-6 h-6 border-3 border-border rounded-lg bg-background" />
                                                    <span className="text-sm font-bold text-foreground/70 italic">Accept conditions</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Drag Handle Mock */}
                                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-grab px-1 text-muted-foreground/30">
                                            <GripVertical className="h-6 w-6" />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Properties */}
            {activeId && (
                <div className="w-80 border-l border-border/50 bg-card/30 backdrop-blur-xl p-8 flex flex-col gap-8 animate-in slide-in-from-right-10 duration-300">
                    <div>
                        <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-6">
                            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                                <Settings className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Properties</h3>
                        </div>

                        {fields.find(f => f.id === activeId) && (
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Label</Label>
                                    <Input
                                        className="h-12 bg-background/50 border-2 border-border/30 rounded-xl font-bold"
                                        value={fields.find(f => f.id === activeId)?.label}
                                        onChange={(e) => updateField(activeId, { label: e.target.value })}
                                    />
                                </div>
                                <div className="flex items-center justify-between p-5 rounded-2xl border-2 border-border/30 bg-card/20 group hover:border-primary/50 transition-all cursor-pointer">
                                    <Label className="cursor-pointer font-black text-sm" htmlFor="req-check">Required</Label>
                                    <input
                                        id="req-check"
                                        type="checkbox"
                                        checked={fields.find(f => f.id === activeId)?.required}
                                        onChange={(e) => updateField(activeId, { required: e.target.checked })}
                                        className="w-6 h-6 rounded-lg border-2 border-border bg-background checked:bg-primary checked:border-primary transition-all cursor-pointer accent-primary"
                                    />
                                </div>
                                <div className="pt-8 border-t border-border/50 space-y-3">
                                    <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Variable Key</Label>
                                    <div className="text-[10px] font-mono bg-black/40 p-4 rounded-xl border-2 border-border/30 text-primary/70 break-all select-all">
                                        fb_field_{activeId}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
