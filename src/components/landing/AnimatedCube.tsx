import { useAnimationFrame } from "motion/react";
import React, { useRef } from "react";

const AnimatedCube = () => {
  const ref = useRef(null as HTMLDivElement | null);

  useAnimationFrame((t: number) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="cube-container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <style>{`
        .cube-container {
          perspective: 800px;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cube {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
        }

        .side {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          border-radius: 12px;
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
      `}</style>
    </div>
  );
};

export default AnimatedCube;
