import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
    ShieldCheck,
    Zap,
    Globe,
    Code2,
    Users,
    Layout
} from "lucide-react";

export function FeaturesSection() {
    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="font-serif text-4xl sm:text-6xl font-normal text-foreground">
                    Everything you need, <br />
                    <span className="italic">nothing you don&apos;t</span>
                </h2>
                <p className="mt-6 text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                    Thoughtful features built for professional teams.
                </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 animate-pulse border border-transparent dark:border-white/5"></div>
);

const items = [
    {
        title: "White-label Everything",
        description: "Your brand, your domain. Remove all FillingBee branding.",
        header: <Skeleton />,
        icon: <Layout className="h-4 w-4" />,
    },
    {
        title: "No Sign-up for Respondents",
        description: "Users can fill forms with just an email verification. No Google account needed.",
        header: <Skeleton />,
        icon: <Users className="h-4 w-4" />,
    },
    {
        title: "Dark & Light Mode",
        description: "Forms adapt to your user's system preferences automatically.",
        header: <Skeleton />,
        icon: <Zap className="h-4 w-4" />,
    },
    {
        title: "Developer First API",
        description: "Full API access to create, update, and retrieve form submissions. Webhooks included.",
        header: <Skeleton />,
        icon: <Code2 className="h-4 w-4" />,
    },
    {
        title: "Global CDN",
        description: "Forms served from the edge for milli-second load times.",
        header: <Skeleton />,
        icon: <Globe className="h-4 w-4" />,
    },
    {
        title: "Enterprise Security",
        description: "SOC2 compliant, GDPR ready, and data encryption at rest.",
        header: <Skeleton />,
        icon: <ShieldCheck className="h-4 w-4" />,
    },
];
