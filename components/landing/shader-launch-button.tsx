"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ShaderMountInstance = {
  destroy?: () => void;
  setSpeed?: (speed: number) => void;
};

export function ShaderLaunchButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<ShaderMountInstance | null>(null);

  useEffect(() => {
    const loadShader = async () => {
      try {
        const { liquidMetalFragmentShader, ShaderMount } = await import("@paper-design/shaders");

        if (!shaderRef.current) {
          return;
        }

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
          0.55,
        );
      } catch (error) {
        console.error("Failed to load launch button shader:", error);
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
      aria-label="Launch App. Testnet - Active Network Developer Build"
      title="Testnet - Active Network Developer Build"
      onMouseEnter={() => {
        setIsHovered(true);
        shaderMount.current?.setSpeed?.(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
        shaderMount.current?.setSpeed?.(0.55);
      }}
      onMouseDown={() => {
        setIsPressed(true);
        shaderMount.current?.setSpeed?.(2.2);
      }}
      onMouseUp={() => {
        setIsPressed(false);
        shaderMount.current?.setSpeed?.(isHovered ? 1 : 0.55);
      }}
      className="group relative isolate flex h-12 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition-transform duration-200 active:scale-[0.98] sm:h-14 sm:px-8 sm:text-base"
    >
      <span
        ref={shaderRef}
        className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#242424_0%,#000_100%)]"
      />
      <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(36,36,36,0.45)_0%,rgba(0,0,0,0.25)_100%)]" />
      <span className="relative z-10 flex items-center [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
        Launch App
        <span className="ml-2 h-2 w-2 rounded-full bg-[#ff6719]" />
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}
