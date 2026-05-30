"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-24">
        
        {/* Original CTA Card */}
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Ready to build
                  <br />
                  something great?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Join builders creating safer peer-to-peer commerce with Accord Protocol.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    Start building free
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  >
                    Talk to sales
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  No credit card required
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>

        {/* New Socials Orange Card (Liquid Glass Style) */}
        <div
          className={`relative overflow-hidden h-fit flex flex-col p-6 rounded-[2rem] md:px-12 md:py-16 md:rounded-[2.5rem] transition-all duration-1000 delay-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_20px_40px_rgba(255,117,31,0.3)] border border-white/20 bg-[#FF751F] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle Noise Texture overlay */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
            }}
          />
          
          {/* Aesthetic Liquid Background Orbs */}
          <div className="absolute inset-0 opacity-70 pointer-events-none mix-blend-overlay">
            <div className="absolute -top-[10%] -right-[10%] w-[80%] h-[80%] rounded-full bg-white/40 blur-[90px]" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-black/20 blur-[100px]" />
          </div>

          {/* Interactive Spotlight */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.25), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px] md:min-h-[450px]">
            
            <div className="flex flex-col items-start text-left max-w-4xl w-full">
              {/* Badge */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-6 md:mb-12 text-white/90 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                Let's Go
              </div>

              {/* Huge Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-sm">
                The premier DeFi escrow engine on Injective.
              </h2>
              
              <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-2xl font-medium tracking-tight">
                Join the journey in building true decentralized commerce for all.
              </p>
            </div>

            {/* Socials row matching the design exactly */}
            <div className="mt-12 lg:mt-20 flex flex-row flex-wrap items-center gap-3 lg:gap-4">
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
                <span className="hidden sm:inline">Discord</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 11.5c0-.4.3-.7.7-.7.24 0 .47.12.6.3C2.56 11.75 2.3 12 2.3 12.3c-.02-.26-.06-.52-.1-.8zM8 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7.1 1.5c-1.3.84-3.26.86-3.32.86-.06 0-2.02-.02-3.32-.86-.27-.17-.34-.53-.16-.8.17-.27.53-.35.8-.18 1 .64 2.25.65 2.68.65.43 0 1.68-.02 2.68-.65.27-.18.63-.1.8.18.17.27.1.63-.16.8zM16 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <span className="hidden sm:inline">Reddit</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a href="#" className="flex items-center justify-center gap-2 w-[68px] h-[48px] p-0 sm:w-auto sm:px-6 sm:h-12 lg:h-14 rounded-[2rem] border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] text-sm lg:text-base font-semibold text-white">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.539.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.225-.202-.049-.314-.349-.115l-6.4 4.02-2.76-.86c-.6-.187-.61-.6.126-.89l10.814-4.17c.502-.18.966.115.807 1.05z"/>
                </svg>
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
