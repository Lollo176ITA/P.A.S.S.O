'use client';

import {
  motion,
  useAnimationFrame,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  BACKGROUND_AMPLITUDE,
  WAVE_WIDTH,
  generateWavePath,
  getWaveX,
} from '@/utils/wave';

interface Step {
  id: string;
  label: string;
}

interface WaveProgressIndicatorProps {
  steps: Step[];
}

export default function WaveProgressIndicator({ steps }: WaveProgressIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<string>(steps[0]?.id || '');
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [waveOffset, setWaveOffset] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(160);
  const [canvasHeight, setCanvasHeight] = useState(1200);

  useAnimationFrame((t) => {
    if (shouldReduceMotion) return;
    setWaveOffset(t / 2000);
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const step of steps) {
        const element = document.getElementById(step.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveStep(step.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps]);

  useEffect(() => {
    const updateHeight = () => {
      const main = document.querySelector('main');
      const mainHeight =
        main?.getBoundingClientRect().height || document.body.scrollHeight;
      const headerElement = document.querySelector('[data-site-header]');
      const subHeaderElement = document.getElementById('subheader-root');
      const computedOffset =
        (headerElement?.getBoundingClientRect().height || 0) +
        (subHeaderElement?.getBoundingClientRect().height || 0);
      setHeaderOffset(computedOffset || 160);
      setCanvasHeight(Math.max(800, Math.round(mainHeight + (computedOffset || 160))));
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const markerPositions = useMemo(() => {
    if (steps.length === 0) return [];
    return steps.map((step, index) => {
      const progress = steps.length === 1 ? 0 : index / (steps.length - 1);
      const y = progress * canvasHeight;
      const x = getWaveX(y, canvasHeight, BACKGROUND_AMPLITUDE + 2, 0, waveOffset);
      return { id: step.id, progress, index, x, y };
    });
  }, [steps, canvasHeight, waveOffset]);

  const activeIndex = steps.findIndex((step) => step.id === activeStep);

  return (
    <div
      className="hidden lg:block pointer-events-none absolute left-2 xl:left-4 z-0"
      style={{ top: headerOffset, bottom: 0 }}
      aria-hidden
    >
      <div className="relative h-full w-[120px]">
        <div className="absolute inset-0 bg-linear-to-b from-primary/35 via-transparent to-primary/10 blur-3xl opacity-40" />
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox={`0 0 ${WAVE_WIDTH} ${canvasHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="step-wave-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#11A09A" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#11A09A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#11A09A" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="step-marker-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0FFF9" />
              <stop offset="70%" stopColor="#11A09A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#11A09A" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.path
            d={generateWavePath(canvasHeight, 0, BACKGROUND_AMPLITUDE, waveOffset)}
            stroke="#11A09A"
            strokeOpacity="0.08"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            d={generateWavePath(canvasHeight, Math.PI / 2, BACKGROUND_AMPLITUDE - 6, waveOffset)}
            stroke="#11A09A"
            strokeOpacity="0.05"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            d={generateWavePath(canvasHeight, 0, BACKGROUND_AMPLITUDE + 2, waveOffset)}
            stroke="url(#step-wave-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: smoothProgress }}
            className="drop-shadow-[0_0_10px_rgba(17,160,154,0.35)]"
          />

          {markerPositions.map((marker) => {
            const isActive = marker.id === activeStep;
            const isCompleted = marker.index < activeIndex;
            return (
              <motion.circle
                key={marker.id}
                cx={marker.x}
                cy={marker.y}
                r={isActive ? 6 : 4}
                fill="url(#step-marker-gradient)"
                stroke="#11A09A"
                strokeWidth={isCompleted ? 1.5 : 1}
                animate={{
                  scale: isActive && !shouldReduceMotion ? [1, 1.2, 1] : 1,
                  opacity: isActive ? [1, 0.7, 1] : isCompleted ? 0.7 : 0.4,
                }}
                transition={{
                  duration: isActive ? 1.8 : 0.6,
                  repeat: isActive && !shouldReduceMotion ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
