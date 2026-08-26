"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { AnimatedSphere } from "./animated-sphere";
import { ShaderLaunchButton } from "./shader-launch-button";

const heroStats = [
  { value: "1.0%", label: "Accord Platform Fee" },
  { value: "$0.0003", label: "Average Injective Gas" },
  { value: "< 1s", label: "Escrow Block Finality" },
  { value: "100%", label: "On-Chain Smart Escrow" },
  { value: "Hybrid", label: "Supports On-Chain Assets & Off-Chain Deliverables" },
  { value: "Injective", label: "Built on the Layer-1 Optimized for Finance" },
];

export function HeroSection() {
  const [revealStep, setRevealStep] = useState(0);
  const [isSceneVisible, setIsSceneVisible] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds();
    }
  }, []);

  useEffect(() => {
    let timers: number[] = [];

    const startReveal = () => {
      timers = [
        window.setTimeout(() => setRevealStep(1), 50),   // eyebrow
        window.setTimeout(() => setRevealStep(2), 250),  // "The Trust Layer"
        window.setTimeout(() => setRevealStep(3), 450),  // "for [word]"
        window.setTimeout(() => setRevealStep(4), 650),  // subtitle line
        window.setTimeout(() => setRevealStep(5), 900),  // description
        window.setTimeout(() => setRevealStep(6), 1100), // CTAs
        window.setTimeout(() => setRevealStep(7), 1350), // stats marquee
      ];
    };

    // Wait for the splash screen to signal it's done
    window.addEventListener("accord:splash-done", startReveal, { once: true });

    // Fallback in case splash is absent
    const fallback = window.setTimeout(startReveal, 2500);

    return () => {
      window.removeEventListener("accord:splash-done", startReveal);
      clearTimeout(fallback);
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsSceneVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const line = (step: number) =>
    `transition-all duration-700 ease-out ${revealStep >= step
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-0 translate-y-6 blur-[2px]"
    }`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#ff6719] rounded-b-[2rem] lg:rounded-b-[2.75rem]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (typeof window !== "undefined" && window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        }}
      />

      {/* Animated sphere background */}
      <div
        className={`absolute right-0 top-[35%] h-[600px] w-[600px] -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ease-out lg:h-[800px] lg:w-[800px] ${isSceneVisible ? "opacity-[0.5]" : "opacity-0"
          }`}
      >
        {isSceneVisible && <AnimatedSphere />}
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 py-28 lg:py-36 text-left">
        {/* Eyebrow */}
        <div className={`block text-left mb-8 ${line(1)}`}>
          <span className="text-xs md:text-sm font-mono text-white uppercase tracking-wider">
            NEXT-GENERATION PROTOCOL FOR DIGITAL COMMERCE
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12 text-left">
          <h1 className="flex flex-col items-start text-[clamp(2rem,7.5vw,7rem)] sm:text-[clamp(2.8rem,9vw,7rem)] font-display leading-[1.05] tracking-tight text-left">
            <span className={`block text-white ${line(2)}`}>The Trust Layer</span>
            <span className={`block whitespace-nowrap ${line(3)}`}>
              <span className="mr-2.5 sm:mr-3 lg:mr-5 text-white">for</span>
              <span className="relative inline-block text-[#0A1128]">Digital Commerce</span>
            </span>
            <span className={`block mt-4 lg:mt-6 text-[1.2rem] sm:text-[1.8rem] lg:text-[2.8rem] leading-[1.2] text-white ${line(4)}`}>
              a safer way to transact digitally.
            </span>
          </h1>
        </div>

        {/* Description and CTAs */}
        <div className={`relative max-w-3xl p-6 lg:p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.05),0_8px_32px_rgba(0,0,0,0.1)] ${line(5)}`}>
          <div className="space-y-4 mb-6 lg:mb-8">
            <p className="text-lg lg:text-xl text-[#0A1128] font-normal leading-relaxed tracking-tight">
              Accord gives people, businesses, organizations, platforms, and AI agents a safer way to make agreements, exchange value, and complete digital transactions with all sides protected.
            </p>
            <p className="text-base lg:text-lg text-[#0A1128]/90 font-medium leading-relaxed tracking-tight">
              Built on Injective. Secured by on-chain smart contracts.
            </p>
          </div>

          {/* Tally Waitlist Form Embed */}
          <div id="waitlist" className="w-full max-w-2xl min-h-[350px] overflow-hidden rounded-2xl">
            <iframe
              data-tally-src="https://tally.so/embed/44Vveo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              src="https://tally.so/embed/44Vveo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="100%"
              style={{ minHeight: "350px", border: 0 }}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Accord Protocol Waitlist"
              className="w-full h-full min-h-[350px] border-0 bg-transparent"
            />
          </div>
        </div>

      </div>

      {/* Stats marquee - full width outside container */}
      <div
        className={`absolute bottom-10 left-0 right-0 sm:bottom-12 lg:bottom-14 overflow-hidden marquee-edge-fade ${line(7)}`}
      >
        <div className="marquee-stats whitespace-nowrap">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {heroStats.map((stat) => (
                <div key={`${stat.value}-${copyIndex}`} className="flex flex-col items-start gap-1.5 px-7 sm:flex-row sm:items-center sm:gap-4 sm:px-10 lg:gap-5 lg:px-12">
                  <span className="text-4xl lg:text-5xl font-display leading-none text-[#0A1128]">{stat.value}</span>
                  <span className="block w-[min(48vw,220px)] whitespace-normal text-sm font-semibold leading-snug text-[#0A1128] [text-wrap:balance] sm:w-[210px]">
                    {stat.label}
                  </span>
                  <span className="hidden pl-2 text-2xl text-[#0A1128]/25 sm:inline sm:pl-4">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
}
