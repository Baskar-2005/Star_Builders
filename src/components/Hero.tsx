import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Building2, Users, Award, ShieldCheck, Calculator, Star, CheckCircle2 } from 'lucide-react';
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
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '120+', label: 'Projects Delivered', desc: 'Villas, Apartments & Commercial', icon: Building2 },
    { value: '85+', label: 'Happy Families', desc: '100% Client Satisfaction Rate', icon: Users },
    { value: '10+', label: 'Years Experience', desc: 'Puducherry Structural Experts', icon: Award },
    { value: '98%', label: 'On-Time Handover', desc: 'Milestone Guaranteed Contract', icon: ShieldCheck },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden">
      {/* Background Hero Image with Mouse Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Hero image shifted right so the Star Builders building sign is clearly visible */}
          <img
            src={heroBgImage}
            alt="Star Builders Puducherry Head Office and Villa"
            className="w-full h-full object-cover object-[78%_center] brightness-[0.88] contrast-[1.05]"
          />

          {/* Subtle left-edge fade to ensure text contrast */}
          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
          {/* Very slight bottom fade for stats card blend */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Subtle Blueprint Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subheadline & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-white leading-[1.12] tracking-tight font-['GT_Walsheim'] max-w-2xl drop-shadow-lg"
            >
              Building Dream Homes That <span className="gold-shining-text font-extrabold">Shine</span> for Generations
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/85 max-w-xl font-normal leading-relaxed drop-shadow"
            >
              Turnkey architectural design & high-end construction in Puducherry. Engineered for coastal resilience, 100% material transparency, and guaranteed on-time completion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary CTA — bright gold/white */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={onExploreProjects}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#D4AF37] hover:bg-[#c9a430] text-[#0B182B] text-sm sm:text-base font-bold shadow-xl shadow-black/30 hover:shadow-2xl transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Explore Showcase Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              {/* Secondary CTA — white glass */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/25 text-white text-sm sm:text-base font-semibold border border-white/50 hover:border-white/80 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Free Site Consultation</span>
              </motion.button>

              {/* Estimator CTA — gold outline */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEstimator}
                className="px-5 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F5D97A] text-sm font-bold border border-[#D4AF37]/60 shadow-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Calculator className="w-4 h-4 text-[#F5D97A]" />
                <span>AI Cost Estimator</span>
              </motion.button>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Cost Overruns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Anti-Corrosion Coastal Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Vastu Compliant Floorplans</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: open space to show the building clearly */}
          <div className="hidden lg:block lg:col-span-5 relative min-h-[350px]">
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 right-0 z-20"
            >
              <div className="rounded-2xl p-3 px-4 flex items-center gap-3 border border-white/30 shadow-xl bg-black/40 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-white">4.9 / 5</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-white/70">85+ Verified Google Reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 flex justify-center mt-6">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors group"
          title="Scroll to explore"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-[#D4AF37] flex justify-center p-1 backdrop-blur-md bg-white/10 shadow-sm transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-scroll-wheel" />
          </div>
        </a>
      </div>

      {/* Floating Statistics Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 lg:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/20 bg-black/40 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={stat.label} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} flex flex-col items-center justify-center group`}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['GT_Walsheim']">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white/90">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-white/55 font-normal">
                    {stat.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Smooth bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FAF8F5] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,45 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
