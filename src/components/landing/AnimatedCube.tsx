import { useAnimationFrame } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

const AnimatedCube = () => {
  const ref = useRef(null as HTMLDivElement | null);
  const containerRef = useRef(null as HTMLDivElement | null);
  const glazeRef = useRef(null as HTMLDivElement | null);
  const glazeNoiseRef = useRef(null as HTMLDivElement | null);
  const innerFluidRef1 = useRef(null as HTMLDivElement | null);
  const innerFluidRef2 = useRef(null as HTMLDivElement | null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useAnimationFrame((t: number) => {
    if (!ref.current) return;

    // Breathing effect: subtle scale pulse (0.98-1.02)
    const breathScale = 1 + Math.sin(t / 2000) * 0.02;

    // Slow orbit: very gradual rotation
    const slowOrbit = t / 8000;

    // Gentle float: subtle Y movement
    const floatY = Math.sin(t / 3000) * 8;

    // Mouse tilt with inertia (small amplitude)
    const tiltX = mousePos.y * 5; // max 5 degrees
    const tiltY = mousePos.x * 5;

    ref.current.style.transform = `
      translateY(${floatY}px)
      scale(${breathScale})
      rotateX(${slowOrbit * 10 + tiltX}deg)
      rotateY(${slowOrbit * 15 + tiltY}deg)
    `;

    // Glaze sweep effect (every 9 seconds with 3s delay)
    if (glazeRef.current) {
      const glazeCycle = (t % 12000) / 12000; // 9s animation + 3s pause

      if (glazeCycle < 0.75) { // Active for first 75% (9s), pause for last 25% (3s)
        const progress = glazeCycle / 0.75;

        // Breathing opacity: 0 → peak → 0
        const opacityBreath = Math.sin(progress * Math.PI);

        // Position: move across the cube
        const position = progress * 150 - 50; // Start at -50%, end at 100%

        // "Flowing" effect: subtle wave-like movement
        // Angle variation: ±2 degrees during movement
        const angleWave = Math.sin(progress * Math.PI * 3) * 2;

        // Y-axis wobble: creates viscosity feeling
        const yWobble = Math.sin(progress * Math.PI * 4) * 3;

        glazeRef.current.style.opacity = `${opacityBreath * 0.4}`;
        glazeRef.current.style.transform = `translateX(${position}%) translateY(${yWobble}%) rotate(${angleWave}deg)`;
      } else {
        glazeRef.current.style.opacity = '0';
      }
    }

    // Liquid texture inside glaze: slow drifting noise
    if (glazeNoiseRef.current) {
      const noiseDrift = (t / 80) % 100; // Very slow drift
      glazeNoiseRef.current.style.backgroundPosition = `${noiseDrift}% ${noiseDrift * 0.7}%`;
    }

    // Inner fluid/fog - very slow convection-like movement
    if (innerFluidRef1.current) {
      const fluidCycle1 = t / 25000; // 25 second cycle - very slow
      const fluidX1 = Math.sin(fluidCycle1 * 0.6) * 20;
      const fluidY1 = Math.cos(fluidCycle1 * 0.4) * 15 + Math.sin(fluidCycle1 * 0.8) * 10; // Vertical waves
      const fluidScale1 = 1 + Math.sin(fluidCycle1 * 0.9) * 0.12;
      const fluidOpacity1 = 0.2 + Math.sin(fluidCycle1 * 0.5) * 0.08; // Pulsation

      innerFluidRef1.current.style.transform = `translate(${fluidX1}%, ${fluidY1}%) scale(${fluidScale1})`;
      innerFluidRef1.current.style.opacity = `${fluidOpacity1}`;
    }

    if (innerFluidRef2.current) {
      const fluidCycle2 = t / 30000; // 30 second cycle - even slower
      const fluidX2 = Math.cos(fluidCycle2 * 0.7) * 18;
      const fluidY2 = Math.sin(fluidCycle2 * 0.5) * 12 + Math.cos(fluidCycle2 * 0.9) * 8; // Vertical waves
      const fluidScale2 = 1 + Math.cos(fluidCycle2 * 1.1) * 0.15;
      const fluidOpacity2 = 0.18 + Math.cos(fluidCycle2 * 0.6) * 0.07;

      innerFluidRef2.current.style.transform = `translate(${fluidX2}%, ${fluidY2}%) scale(${fluidScale2})`;
      innerFluidRef2.current.style.opacity = `${fluidOpacity2}`;
    }
  });

  return (
    <div className="cube-scene" ref={containerRef}>
      {/* Layer A: Background glow */}
      <div className="cube-glow" />

      {/* Layer B: The cube itself */}
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />

        {/* Inner fluid layer - between cube and glaze */}
        <div className="inner-fluid-layer">
          <div className="fluid-spot fluid-1" ref={innerFluidRef1} />
          <div className="fluid-spot fluid-2" ref={innerFluidRef2} />
          <div className="fluid-noise" />
        </div>

        {/* Layer C: Glaze overlay on cube */}
        <div className="glaze-layer">
          <div className="glaze glaze-main" ref={glazeRef}>
            <div className="glaze-liquid" ref={glazeNoiseRef} />
          </div>
          <div className="glaze glaze-secondary" />
        </div>
      </div>

      {/* Layer D: Subtle texture overlay */}
      <div className="texture-overlay" />
      <style>{`
        /* Scene container */
        .cube-scene {
          perspective: 800px;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Layer A: Background glow */
        .cube-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        /* Layer B: Cube */
        .cube {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .side {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.45;
          border-radius: 12px;
          overflow: visible;
        }

        .front {
          transform: rotateY(0deg) translateZ(100px);
          background: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);
        }
        .right {
          transform: rotateY(90deg) translateZ(100px);
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
        }
        .back {
          transform: rotateY(180deg) translateZ(100px);
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
        }
        .left {
          transform: rotateY(-90deg) translateZ(100px);
          background: linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%);
        }
        .top {
          transform: rotateX(90deg) translateZ(100px);
          background: linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(100px);
          background: linear-gradient(135deg, #5B21B6 0%, #6D28D9 100%);
        }

        /* Layer C: Glaze system */
        .glaze-layer {
          position: absolute;
          inset: 0;
          transform: translateZ(101px);
          overflow: hidden;
          pointer-events: none;
          border-radius: 12px;
        }

        .glaze {
          position: absolute;
          top: -20%;
          left: -100%;
          width: 120%;
          height: 140%;
          pointer-events: none;
          opacity: 0;
          will-change: transform, opacity;
        }

        /* Main glaze - wider, softer */
        .glaze-main {
          background: linear-gradient(
            120deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 255, 255, 0.6) 45%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.6) 55%,
            transparent 70%,
            transparent 100%
          );
          filter: blur(8px);
          mix-blend-mode: screen;
          overflow: hidden;
        }

        /* Liquid texture inside glaze */
        .glaze-liquid {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='liquidNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23liquidNoise)' opacity='0.3'/%3E%3C/svg%3E");
          background-size: 200% 200%;
          opacity: 0.25;
          mix-blend-mode: soft-light;
          will-change: background-position;
        }

        /* Secondary glaze - thinner, moves slower for irregularity */
        .glaze-secondary {
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 35%,
            rgba(255, 255, 255, 0.3) 48%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.3) 52%,
            transparent 65%,
            transparent 100%
          );
          filter: blur(4px);
          mix-blend-mode: overlay;
          animation: glaze-secondary 14s ease-in-out infinite;
        }

        @keyframes glaze-secondary {
          0%, 100% {
            opacity: 0;
            transform: translateX(-60%);
          }
          10% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.15;
            transform: translateX(80%);
          }
          90% {
            opacity: 0;
          }
        }

        /* Layer D: Texture overlay */
        .texture-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.15;
          z-index: 3;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Inner Fluid Layer - viscous fog/gel inside cube */
        .inner-fluid-layer {
          position: absolute;
          inset: -10%;
          z-index: 0;
          overflow: visible;
          pointer-events: none;
          border-radius: 12px;
          opacity: 1;
          transform-style: preserve-3d;
          transform: translateZ(50px);
        }

        .fluid-spot {
          position50px;
          height: 250px;
          border-radius: 50%;
          filter: blur(50px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
          pointer-events: none;
        }

        /* First fluid spot - purple/violet fog */
        .fluid-1 {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(168, 85, 247, 0.5) 40%, transparent 70%);
          top: 10%;
          left: 10%;
        }

        /* Second fluid spot - deeper blue-purple */
        .fluid-2 {
          background: radial-gradient(circle, rgba(109, 40, 217, 0.7) 0%, rgba(124, 58, 237, 0.4) 40%, transparent 70%);
          bottom: 15%;
          right: 155%;
          right: 20%;
        }

        /* Fluid noise texture */
        .fluid-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fluidNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='5' seed='10' /%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23fluidNoise)' opacity='0.2'/%3E%3C/svg%3E");
          background-size: 150% 150%;
          opacity: 0.6;
          mix-blend-mode: overlay;
          filter: blur(20px);
        }
      `}</style>
    </div>
  );
};

export default AnimatedCube;
