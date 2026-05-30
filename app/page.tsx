import { Navigation } from "@/components/landing/navigation";
import { IntroLoader } from "@/components/landing/intro-loader";
import { HeroSection } from "@/components/landing/hero-section";
import { AccordLandingContent } from "@/components/landing/accord-landing-content";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <IntroLoader />
      <Navigation />
      <HeroSection />
      <AccordLandingContent />
      <FooterSection />
    </main>
  );
}
