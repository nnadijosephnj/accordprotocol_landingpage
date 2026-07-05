"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSphere } from "./animated-sphere";
import { ShaderLaunchButton } from "./shader-launch-button";

const words = ["freelancers,", "developers,", "designers,", "traders,"];

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
  const [wordIndex, setWordIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const line = (step: number) =>
    `transition-all duration-700 ease-out ${revealStep >= step
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-0 translate-y-6 blur-[2px]"
    }`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#ff6719] rounded-b-[2rem] lg:rounded-b-[2.75rem]">
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div className={`mb-8 ${line(1)}`}>
          <span className="text-xs md:text-sm font-mono text-white uppercase tracking-wider">
            NEXT-GEN PROTOCOL FOR DECENTRALIZED AGREEMENTS & DIGITAL COMMERCE
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1 className="text-[clamp(2.8rem,9vw,7rem)] font-display leading-[1.05] tracking-tight">
            <span className={`block text-[1.1em] text-white ${line(2)}`}>The Trust Layer</span>
            <span className={line(3)}>
              <span className="mr-3 lg:mr-5 text-white">for</span>
              <span className="relative inline-block">
                <span
                  key={wordIndex}
                  className="inline-flex text-[#0A1128]"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 30}ms`,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>

              </span>
            </span>
            <span className={`block mt-2 lg:mt-6 text-[1.6rem] sm:text-[2rem] lg:text-[4.5rem] leading-[1.2] text-white ${line(4)}`}>
              and every peer-to-peer digital trade beyond.
            </span>
          </h1>
        </div>

        {/* Description and CTAs */}
        <div className={`relative max-w-3xl p-6 lg:p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.05),0_8px_32px_rgba(0,0,0,0.1)] ${line(5)}`}>
          <p className="text-lg lg:text-xl text-[#0A1128] font-normal leading-relaxed tracking-tight mb-6 lg:mb-8">
            Accord Protocol is a hybrid peer-to-peer (P2P) escrow engine and digital settlement network built on Injective. It is designed to secure digital P2P transactions and service agreements by combining trustless, on-chain financial smart contracts with a high-performance, Web2-style social and discovery layout.
          </p>

          {/* CTAs */}
          <div className="flex flex-row items-center gap-3 lg:gap-4">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-5 text-sm rounded-full border border-white bg-white text-black hover:bg-white/90 hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 sm:h-14 sm:px-8 sm:text-base font-semibold shadow-sm"
            >
              Learn more
            </Button>
            <ShaderLaunchButton />
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
