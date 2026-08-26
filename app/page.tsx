import { Navigation } from "@/components/landing/navigation";
import { IntroLoader } from "@/components/landing/intro-loader";
import { HeroSection } from "@/components/landing/hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#ff6719]">
      <IntroLoader />
      <Navigation />
      <HeroSection />
    </main>
  );
}
