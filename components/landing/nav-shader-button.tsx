"use client";

import { useEffect, useRef, useState } from "react";

type ShaderMountInstance = {
  destroy?: () => void;
  setSpeed?: (speed: number) => void;
};

export function NavShaderButton({ isScrolled }: { isScrolled: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<ShaderMountInstance | null>(null);

  useEffect(() => {
    const loadShader = async () => {
      try {
        const { liquidMetalFragmentShader, ShaderMount } = await import("@paper-design/shaders");

        if (!shaderRef.current) return;

        shaderMount.current?.destroy?.();
        shaderMount.current = new ShaderMount(
          shaderRef.current,
          liquidMetalFragmentShader,
          {
            u_repetition: 4,
            u_softness: 0.48,
            u_shiftRed: 0.25,
            u_shiftBlue: 0.28,
            u_distortion: 0,
            u_contour: 0,
            u_angle: 45,
            u_scale: 8,
            u_shape: 1,
            u_offsetX: 0.1,
            u_offsetY: -0.1,
          },
          undefined,
          1, // Faster speed specifically for short hovers
        );
      } catch (error) {
        console.error("Failed to load nav shader:", error);
      }
    };

    loadShader();

    return () => {
      shaderMount.current?.destroy?.();
      shaderMount.current = null;
    };
  }, []);

  return (
    <button
      type="button"
      title="Testnet - Active Network Developer Build"
      aria-label="Launch App. Testnet - Active Network Developer Build"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative isolate flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-500 shadow-sm active:scale-[0.98] ${
        isScrolled 
          ? "px-4 h-8 text-xs bg-foreground text-background" 
          : "px-6 h-10 text-sm bg-white text-black"
      }`}
    >
      {/* Shader container layer - only visible on hover */}
      <span
        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span
          ref={shaderRef}
          className="absolute inset-0 bg-[linear-gradient(180deg,#242424_0%,#000_100%)]"
        />
        <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(36,36,36,0.45)_0%,rgba(0,0,0,0.25)_100%)]" />
      </span>

      {/* Button Text */}
      <span className={`relative z-10 flex items-center transition-colors duration-300 ${isHovered ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]" : ""}`}>
        Launch App
        <span className="ml-2 h-2 w-2 rounded-full bg-[#ff6719]" />
      </span>
    </button>
  );
}
