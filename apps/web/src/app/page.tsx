import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { AdContainer } from "@/components/AdContainer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <InteractiveDemo />
        <AdContainer />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
