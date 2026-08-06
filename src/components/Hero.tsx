import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Building2, Users, Award, ShieldCheck, Calculator, Star, MapPin, CheckCircle2 } from 'lucide-react';
import heroBgImage from '../assets/images/star_builders_hero_1786011034894.jpg';

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
      {/* Background Hero Image with Mouse Parallax & Golden Hour Architectural Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: 'spring', damping: 25, stiffness: 80 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* High-res Star Builders Architectural Villa Image - Uncropped Full View */}
          <img
            src={heroBgImage}
            alt="Star Builders Puducherry Head Office and Villa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
          />

          {/* Soft Left-Only Gradient Fade for Text Contrast - Right side 100% crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/55 sm:via-[#FAF8F5]/40 to-transparent w-full sm:w-[55%] lg:w-[48%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent h-24 bottom-0" />
        </motion.div>

        {/* Subtle Architectural Blueprint Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subheadline & CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-[#0B182B] leading-[1.12] tracking-tight font-['GT_Walsheim'] max-w-2xl"
            >
              Building Dream Homes That <span className="gold-shining-text font-extrabold">Shine</span> for Generations
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-800 max-w-xl font-normal leading-relaxed"
            >
              Turnkey architectural design & high-end construction in Puducherry. Engineered for coastal resilience, 100% material transparency, and guaranteed on-time completion.
            </motion.p>

            {/* CTA Buttons Row with Magnetic Hover & Spring Animations */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={onExploreProjects}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#0B182B] via-[#1E3A8A] to-[#0B182B] hover:from-[#1E3A8A] hover:to-[#0B182B] text-white text-sm sm:text-base font-bold shadow-xl shadow-[#0B182B]/25 hover:shadow-2xl hover:shadow-[#0B182B]/35 transition-all flex items-center gap-2.5 group cursor-pointer border border-white/20"
              >
                <span>Explore Showcase Projects</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/95 backdrop-blur-md hover:bg-white text-slate-800 text-sm sm:text-base font-semibold border border-slate-300/90 hover:border-[#D4AF37] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Free Site Consultation</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEstimator}
                className="px-5 py-3.5 sm:py-4 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#7A5B0B] text-sm font-bold border border-[#D4AF37]/50 shadow-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Calculator className="w-4 h-4 text-[#B8860B]" />
                <span>AI Cost Estimator</span>
              </motion.button>
            </motion.div>

            {/* Quick Highlights Pill Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Cost Overruns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Anti-Corrosion Coastal Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Vastu Compliant Floorplans</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Open space to highlight the full Star Builders Architectural Villa */}
          <div className="hidden lg:block lg:col-span-4 relative min-h-[350px]">
            {/* Subtle Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 right-0 z-20"
            >
              <div className="floating-glass-card rounded-2xl p-3 px-4 flex items-center gap-3 border border-white/90 shadow-xl bg-white/90 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-slate-800">4.9 / 5</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">85+ Verified Google Reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="relative z-20 flex justify-center mt-6">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-slate-600 hover:text-[#0B182B] transition-colors group"
          title="Scroll to explore"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#0B182B]">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-400/80 group-hover:border-[#D4AF37] flex justify-center p-1 backdrop-blur-md bg-white/50 shadow-sm transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#B8860B] animate-scroll-wheel" />
          </div>
        </a>
      </div>

      {/* Floating Statistics Cards (Overlapping into Next Section cleanly) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 lg:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="floating-glass-card rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/90 bg-white/95 backdrop-blur-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={stat.label} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} flex flex-col items-center justify-center group`}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-4.5 h-4.5 text-[#B8860B]" />
                    </div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B182B] font-['GT_Walsheim']">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal">
                    {stat.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Smooth Curved Glass Divider Transition into Next Section */}
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

