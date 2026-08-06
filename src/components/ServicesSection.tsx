import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';
import { Home, Sparkles, Building2, Palette, Wrench, KeyRound, ArrowRight, CheckCircle2, X } from 'lucide-react';
import TextReveal from './TextReveal';

const iconMap: Record<string, any> = {
  Home,
  Sparkles,
  Building2,
  Palette,
  Wrench,
  KeyRound,
};

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
            OUR SERVICES
          </div>
          <div>
            <TextReveal
              text="End-to-End Construction Solutions"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim'] justify-center"
              highlightWords={['Construction', 'Solutions']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg">
            From preliminary architectural sketches to final turnkey key presentation, we deliver exceptional craftsmanship across all scales.
          </p>
        </div>

        {/* 6 Services Grid (Matching reference image layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top Subtle Hover Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B182B]/5 group-hover:bg-[#0B182B] text-[#B8860B] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors border border-[#D4AF37]/20">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-[#0B182B] group-hover:text-[#B8860B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#0B182B] group-hover:text-[#B8860B] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div className="h-48 rounded-2xl overflow-hidden relative">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white">
                      <div>
                        <h3 className="text-2xl font-extrabold font-['Playfair_Display']">{selectedService.title}</h3>
                        <p className="text-xs text-slate-300">{selectedService.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">Service Deliverables & Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feat) => (
                        <div key={feat} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-semibold text-slate-800">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B182B]/5 border border-[#D4AF37]/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Popular Requirement in Puducherry:</p>
                      <p className="text-xs font-bold text-[#0B182B]">{selectedService.popularFor}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onOpenConsultation();
                      }}
                      className="px-4 py-2 rounded-full bg-[#0B182B] text-white text-xs font-semibold hover:bg-[#1E3A8A] transition-colors"
                    >
                      Enquire Service
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
