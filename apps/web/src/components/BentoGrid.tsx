import { cn } from "@fillingbee/lib";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl group/bento p-5 md:p-6 justify-between flex flex-col space-y-4 transition duration-300",
                // Light mode
                "bg-white border border-border shadow-sm hover:shadow-lg hover:border-primary/20",
                // Dark mode
                "dark:bg-secondary/40 dark:border-white/10 dark:hover:bg-secondary/60 dark:hover:border-primary/30 dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="mb-2 text-primary">{icon}</div>
                <div className="font-sans font-bold text-foreground mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-muted-foreground text-xs leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
