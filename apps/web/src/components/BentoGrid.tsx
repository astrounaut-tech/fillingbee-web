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
                "row-span-1 rounded-2xl group/bento p-8 justify-between flex flex-col space-y-4 transition-all duration-300",
                "bg-background border-2 border-foreground/5 shadow-sm hover:shadow-md hover:border-primary",
                className
            )}
        >
            {header}
            <div className="transition duration-200">
                <div className="mb-3 text-primary bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center border border-primary/20">
                    {icon}
                </div>
                <div className="font-serif font-bold text-2xl text-foreground mb-3 leading-tight">
                    {title}
                </div>
                <div className="font-sans font-medium text-foreground/60 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
