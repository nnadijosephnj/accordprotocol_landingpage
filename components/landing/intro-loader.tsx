"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [phase, setPhase] = useState<"initial" | "active" | "effect" | "leaving" | "done">("initial");

  useEffect(() => {
    // 1. Initial pop-in frame: rise to center
    const activeTimer = window.setTimeout(() => setPhase("active"), 50);

    // 2. Play a 3D flip effect as it settles
    const effectTimer = window.setTimeout(() => setPhase("effect"), 900);

    // 3. Start the leaving animation after the flip is completely done
    const leaveTimer = window.setTimeout(() => {
      window.dispatchEvent(new Event("accord:splash-done"));
      setPhase("leaving");
    }, 2200);

    // 4. Cleanup from DOM completely after transitions finish
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
    }, 3300);

    return () => {
      clearTimeout(activeTimer);
      clearTimeout(effectTimer);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#ff6719] transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        phase === "leaving" ? "opacity-0 pointer-events-none delay-100" : "opacity-100"
      }`}
    >
      <style>{`
        @keyframes premium-flip {
          0% { transform: scale(1) rotateY(0deg); }
          50% { transform: scale(1.15) rotateY(180deg); }
          100% { transform: scale(1) rotateY(360deg); }
        }
        .animate-premium-flip {
          animation: premium-flip 1.2s cubic-bezier(0.45, 0, 0.15, 1) forwards;
        }
      `}</style>
      <div 
        className={`relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          phase === "initial" 
            ? "translate-y-12 opacity-0" 
            : phase === "leaving" 
              ? "-translate-y-12 opacity-0 blur-[2px]" 
              : "translate-y-0 opacity-100 blur-0"
        }`}
      >
        <div style={{ perspective: "1000px" }} className="w-full h-full">
          <img
            src="/accordlogoiconWHITE.svg"
            alt="Accord Protocol"
            className={`w-full h-full object-contain filter drop-shadow-2xl ${
              phase === "effect" || phase === "leaving" ? "animate-premium-flip" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
