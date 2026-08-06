import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building, ArrowRight } from 'lucide-react';

interface LoadingProps {
  onComplete: () => void;
}

export default function LoadingExperience({ onComplete }: LoadingProps) {
  const [phase, setPhase] = useState<'bg' | 'grid' | 'draw' | 'star' | 'fill' | 'done'>('bg');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('grid'), 400);
    const timer2 = setTimeout(() => setPhase('draw'), 900);
    const timer3 = setTimeout(() => setPhase('star'), 1700);
    const timer4 = setTimeout(() => setPhase('fill'), 2300);
    const timer5 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] overflow-hidden select-none"
        >
          {/* Blueprint Grid Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase !== 'bg' ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 blueprint-grid pointer-events-none"
          />

          {/* Radial ambient light */}
          <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          {/* Central Architectural SVG & Logo Canvas */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
            {/* SVG Villa Sketch Drawing Animation */}
            <div className="relative w-64 h-48 mb-6 flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full stroke-[#1E293B]">
                {/* Villa Foundation & Pillars */}
                <motion.path
                  d="M30 170 L270 170 M50 170 L50 110 L250 110 L250 170"
                  fill="none"
                  stroke={phase === 'fill' ? '#D4AF37' : '#1E293B'}
                  strokeWidth="2.5"
                  strokeDasharray="400"
                  initial={{ strokeDashoffset: 400 }}
                  animate={{ strokeDashoffset: phase === 'draw' || phase === 'star' || phase === 'fill' ? 0 : 400 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                {/* Upper Floor Glass Facade & Roof Cantilever */}
                <motion.path
                  d="M30 110 L150 40 L270 110 M80 110 L80 60 L220 60 L220 110"
                  fill={phase === 'fill' ? 'rgba(212, 175, 55, 0.15)' : 'none'}
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeDasharray="400"
                  initial={{ strokeDashoffset: 400 }}
                  animate={{ strokeDashoffset: phase === 'draw' || phase === 'star' || phase === 'fill' ? 0 : 400 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />

                {/* Windows & Architectural Balcony */}
                <motion.path
                  d="M100 80 L140 80 M160 80 L200 80 M70 130 L120 130 L120 170 M180 130 L230 130 L230 170"
                  fill="none"
                  stroke="#0E7490"
                  strokeWidth="1.5"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: phase === 'star' || phase === 'fill' ? 0 : 200 }}
                  transition={{ duration: 0.8 }}
                />
              </svg>

              {/* Star Logo Glowing Particles */}
              {(phase === 'star' || phase === 'fill') && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute -top-4 right-12 flex items-center justify-center"
                >
                  <div className="relative p-3 bg-white/90 rounded-full shadow-lg border border-[#D4AF37]/40 backdrop-blur-md">
                    <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
                    <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/20 blur-sm animate-ping pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Brand Title Sequence */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: phase !== 'bg' ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building className="w-6 h-6 text-[#D4AF37]" />
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-[#0B182B] font-['Playfair_Display']">
                  STAR <span className="gold-gradient-text">BUILDERS</span>
                </h1>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500">
                Puducherry • Luxury Architecture & Construction
              </p>
            </motion.div>

            {/* Stage Text Indicator */}
            <div className="mt-8 h-6">
              {phase === 'grid' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-slate-400 font-mono tracking-widest">
                  INITIALIZING ARCHITECTURAL GRID...
                </motion.p>
              )}
              {phase === 'draw' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-[#0E7490] font-mono tracking-widest font-semibold">
                  DRAWING STRUCTURAL VILLA BLUEPRINT...
                </motion.p>
              )}
              {(phase === 'star' || phase === 'fill') && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-[#B8860B] font-mono tracking-widest font-bold">
                  TRANSFORMING VISION INTO REALITY...
                </motion.p>
              )}
            </div>

            {/* Skip Loading button for user convenience */}
            <button
              onClick={() => {
                setPhase('done');
                onComplete();
              }}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors cursor-pointer group px-3 py-1.5 rounded-full hover:bg-slate-100"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
