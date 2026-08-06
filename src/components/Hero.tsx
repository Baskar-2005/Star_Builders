import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Users, Award, ShieldCheck, Calculator, Star, CheckCircle2, Phone, ChevronDown } from 'lucide-react';
import heroBgImage from '../assets/hero-bg.png';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export default function Hero({ onExploreProjects, onOpenConsultation, onOpenEstimator }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth  - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '120+', label: 'Projects Delivered', icon: Building2 },
    { value: '85+',  label: 'Happy Families',     icon: Users     },
    { value: '10+',  label: 'Years Experience',   icon: Award     },
    { value: '98%',  label: 'On-Time Handover',   icon: ShieldCheck },
  ];

  const badges = [
    { icon: CheckCircle2, text: 'Zero Cost Overruns'          },
    { icon: CheckCircle2, text: 'Coastal Anti-Corrosion Build' },
    { icon: CheckCircle2, text: 'Vastu-Compliant Plans'        },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          className="absolute inset-0"
        >
          <img
            src={heroBgImage}
            alt="Star Builders Puducherry"
            className="w-full h-full object-cover object-[78%_center] brightness-[0.82] contrast-[1.06]"
          />
          {/* Left text-area gradient – covers ~50% so architecture stays clear on the right */}
          <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          {/* Top vignette */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 to-transparent" />
          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent" />
        </motion.div>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 pt-28 pb-8">
        <div className="max-w-[600px]">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-7"
          >
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 backdrop-blur-md">
              <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#F0D070]">
                Puducherry's Premier Luxury Builder
              </span>
            </span>
          </motion.div>

          {/* Headline — Playfair Display serif for premium feel */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-black text-white leading-[1.1] tracking-tight mb-4"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}
          >
            Building Dream Homes<br />
            That{' '}
            <span className="relative inline-block">
              <span className="gold-shining-text italic">Shine</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
            </span>
            {' '}for Generations
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-14 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-5 origin-left"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[15px] sm:text-base text-white/80 max-w-[480px] leading-[1.8] mb-8 font-light tracking-wide"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
          >
            Turnkey architectural design & high-end construction in Puducherry.
            Engineered for coastal resilience, 100% material transparency,
            and guaranteed on-time completion.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap items-center gap-3 mb-3"
          >
            {/* 1 — solid gold */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenConsultation}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#c9a430] text-[#0B182B] text-sm font-bold shadow-lg shadow-[#D4AF37]/35 hover:shadow-xl hover:shadow-[#D4AF37]/45 transition-all"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* 2 — glass outline */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              onClick={onExploreProjects}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/18 backdrop-blur-md text-white text-sm font-semibold border border-white/35 hover:border-white/60 shadow-md transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* 3 — gold ghost button (AI Estimator, same row) */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEstimator}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 backdrop-blur-md text-[#F0D070] text-sm font-semibold border border-[#D4AF37]/35 hover:border-[#D4AF37]/65 transition-all"
            >
              <Calculator className="w-3.5 h-3.5 shrink-0" />
              <span>AI Cost Estimator</span>
            </motion.button>
          </motion.div>

          {/* Trust badges — borderless dark solid pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42 }}
            className="flex flex-wrap gap-2 mt-5"
          >
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/35 text-white/70 text-[11px] font-medium backdrop-blur-sm"
              >
                <Icon className="w-3 h-3 text-[#D4AF37] shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ──────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4 gap-1 backdrop-blur-xl bg-black/30 hover:bg-black/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-['GT_Walsheim'] leading-none">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-white/50 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Animated scroll arrow ──────────────────────── */}
      <div className="absolute bottom-[148px] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* ── Rating badge (desktop, bottom-right) ──────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="absolute bottom-[160px] right-8 lg:right-16 z-20 hidden md:flex"
      >
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/15 bg-black/45 backdrop-blur-md shadow-xl">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/90 flex items-center justify-center shadow-md shrink-0">
            <Star className="w-4 h-4 fill-white text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold text-white">4.9 / 5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[10px] text-white/50 font-medium mt-0.5">85+ Verified Google Reviews</p>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom curve ───────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden leading-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-10 text-[#FAF8F5] fill-current">
          <path d="M0,0 C300,80 900,0 1200,60 L1200,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
