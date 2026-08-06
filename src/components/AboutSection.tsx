import { motion } from 'motion/react';
import { Target, Eye, Heart, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import TextReveal from './TextReveal';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver superior quality residential & commercial construction with absolute structural integrity, innovative architecture, and zero compromise.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be Puducherry’s most trusted, admired, and technologically advanced construction brand, transforming dream visions into generational landmarks.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Uncompromising Quality, 100% Price Transparency, On-Time Project Delivery, and Enduring Customer Relationships.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#FAF8F5] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
              ABOUT STAR BUILDERS
            </div>

            <div>
              <TextReveal
                text="We Build More Than Structures, We Build Trust."
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] leading-tight font-['GT_Walsheim']"
                highlightWords={['Trust.']}
                highlightClass="gold-shining-text font-bold"
              />
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Founded in Puducherry, <strong>Star Builders</strong> was born out of a passion for architectural perfection and honest craftsmanship. From single-unit luxury villas to multi-story commercial complexes, we manage every phase with precision engineering, premium materials, and transparent client communication.
            </p>

            {/* Mission, Vision, Values Glass Cards */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ x: 6 }}
                    className="glass-card rounded-2xl p-4 sm:p-5 flex gap-4 items-start border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-3 rounded-xl bg-[#0B182B] text-[#D4AF37] shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0B182B] mb-1">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 rounded-full bg-[#0B182B] hover:bg-[#1E3A8A] text-white text-sm font-semibold shadow-md transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 px-4 py-3 rounded-full border border-slate-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>PPA Sanctioned & NBC Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Showcase (Matching Reference Image Spiral Staircase) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Star Builders Architectural Spiral Staircase Luxury Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B182B]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Unmatched Interior Craftsmanship</span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  Curved cantilevered wooden staircases, ambient drop pendants, and polished stone finishes.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-4 shadow-xl border border-white/90 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-[#0B182B] flex items-center justify-center font-extrabold text-xl font-['Playfair_Display']">
                10+
              </div>
              <div>
                <p className="text-xs font-bold text-[#0B182B]">Years of Excellence</p>
                <p className="text-[11px] text-slate-500">In Puducherry Construction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
