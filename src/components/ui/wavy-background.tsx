"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown; // Replaced 'any' with 'unknown' for better type safety
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a ref to store animation ID and context to avoid 'any' and handle cleanup correctly
  const animationIdRef = useRef<number>(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);
  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    nt: number
  ) => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = container.offsetHeight);
    let nt = 0;

    const updateSize = () => {
      if (!container || !ctxRef.current) return;
      w = ctxRef.current.canvas.width = window.innerWidth;
      h = ctxRef.current.canvas.height = container.offsetHeight;
      ctxRef.current.filter = `blur(${blur}px)`;
    };

    const render = () => {
      if (!ctxRef.current) return;
      nt += getSpeed();

      // Handle background fill based on props
      ctxRef.current.fillStyle = backgroundFill || "white";
      ctxRef.current.globalAlpha = 1;
      ctxRef.current.fillRect(0, 0, w, h);

      ctxRef.current.globalAlpha = waveOpacity;
      drawWave(ctxRef.current, w, h, nt);
      animationIdRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("resize", updateSize);
    ctx.filter = `blur(${blur}px)`;
    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationIdRef.current);
    };
    // Re-run effect when visual props change to update the canvas state
  }, [blur, speed, waveOpacity, backgroundFill]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas className="absolute inset-0 z-0" ref={canvasRef} />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
