"use client"

import { useState } from "react"
import { GripVertical, Plus, Trash2, Save, Type, Mail, CheckSquare, ChevronLeft, Settings } from "lucide-react"
import { Button, Input, Label } from "@fillingbee/ui"
import { cn } from "@fillingbee/lib"
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
        <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
            {/* Sidebar - Tools */}
            <div className="w-64 border-r border-white/5 bg-secondary/30 backdrop-blur-md p-4 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 rounded-md hover:bg-white/5">
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                    <span className="font-semibold text-sm">Back to Dashboard</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pl-1">Input Fields</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => addField("text")}
                            className="w-full flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-white/5 text-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all text-left shadow-sm"
                        >
                            <Type className="h-4 w-4" /> Text Input
                        </button>
                        <button
                            onClick={() => addField("email")}
                            className="w-full flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-white/5 text-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all text-left shadow-sm"
                        >
                            <Mail className="h-4 w-4" /> Email
                        </button>
                        <button
                            onClick={() => addField("checkbox")}
                            className="w-full flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-white/5 text-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all text-left shadow-sm"
                        >
                            <CheckSquare className="h-4 w-4" /> Checkbox
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Canvas - Preview */}
            <div className="flex-1 bg-background relative overflow-y-auto">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="p-8 pb-32">
                    <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                        <div className="flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md py-4 z-20 border-b border-white/5 -mx-8 px-8">
                            <input
                                className="text-2xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground w-full text-foreground"
                                defaultValue="Untitled Form"
                                placeholder="Form Title"
                            />
                            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 transition-all">
                                <Save className="h-4 w-4" /> Publish
                            </button>
                        </div>

                        <div className="bg-secondary/20 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl min-h-[500px] p-8 space-y-6">
                            {fields.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-32 border-2 border-dashed border-white/10 rounded-xl bg-white/5">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-muted-foreground">
                                        <Plus className="h-6 w-6" />
                                    </div>
                                    <p className="font-medium">Your form is empty</p>
                                    <p className="text-xs mt-1 opacity-70">Click fields on the left to add them</p>
                                </div>
                            ) : (
                                fields.map((field) => (
                                    <div
                                        key={field.id}
                                        onClick={() => setActiveId(field.id)}
                                        className={`group relative p-6 rounded-xl border transition-all cursor-pointer ${activeId === field.id ? "border-primary ring-1 ring-primary/20 bg-primary/5 shadow-lg shadow-primary/5" : "border-transparent hover:border-white/10 hover:bg-white/5"}`}
                                    >
                                        <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                            <button onClick={(e) => { e.stopPropagation(); removeField(field.id); }} className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-md transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="space-y-3 pointer-events-none">
                                            <Label className="flex gap-1 text-base font-medium">
                                                {field.label}
                                                {field.required && <span className="text-destructive">*</span>}
                                            </Label>
                                            {field.type === "text" && <Input placeholder="Short answer text" disabled className="bg-background/50 border-white/10" />}
                                            {field.type === "email" && <Input placeholder="email@example.com" disabled className="bg-background/50 border-white/10" />}
                                            {field.type === "checkbox" && (
                                                <div className="flex items-center space-x-3 p-3 rounded-lg border border-transparent">
                                                    <div className="w-5 h-5 border-2 border-input rounded flex items-center justify-center bg-background/50" />
                                                    <span className="text-sm text-foreground/80">Option label</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Drag Handle Mock */}
                                        <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-50 cursor-grab px-1">
                                            <GripVertical className="h-4 w-4" />
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
                <div className="w-80 border-l border-white/5 bg-secondary/30 backdrop-blur-md p-6 flex flex-col gap-6 animate-in slide-in-from-right-10 duration-200">
                    <div>
                        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 text-foreground">
                            <Settings className="h-4 w-4" />
                            <h3 className="text-sm font-semibold">Field Properties</h3>
                        </div>

                        {fields.find(f => f.id === activeId) && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Field Label</Label>
                                    <Input
                                        className="bg-background/50 border-white/10"
                                        value={fields.find(f => f.id === activeId)?.label}
                                        onChange={(e) => updateField(activeId, { label: e.target.value })}
                                    />
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5">
                                    <Label className="cursor-pointer" htmlFor="req-check">Required Field</Label>
                                    <input
                                        id="req-check"
                                        type="checkbox"
                                        checked={fields.find(f => f.id === activeId)?.required}
                                        onChange={(e) => updateField(activeId, { required: e.target.checked })}
                                        className="w-5 h-5 text-primary rounded ring-offset-background focus:ring-primary accent-primary"
                                    />
                                </div>
                                <div className="space-y-2 pt-4 border-t border-white/5">
                                    <Label className="text-xs text-muted-foreground uppercase tracking-wider">Developer ID</Label>
                                    <div className="text-xs font-mono bg-black/20 p-3 rounded border border-white/5 text-muted-foreground break-all">
                                        field_{activeId}
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
