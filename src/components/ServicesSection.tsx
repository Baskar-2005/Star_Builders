import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';
import {
  Home, Sparkles, Building2, Palette, Wrench, KeyRound,
  ArrowRight, CheckCircle2, X,
} from 'lucide-react';
import TextReveal from './TextReveal';

const iconMap: Record<string, any> = {
  Home, Sparkles, Building2, Palette, Wrench, KeyRound,
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
            From architectural sketches to final key handover — exceptional craftsmanship at every scale.
          </p>
        </div>

        {/* Service Cards Grid — equal height via grid rows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 auto-rows-fr">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col"
              >
                {/* Top gold hover accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card body — grows to fill */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">

                  {/* Icon + Number row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#0B182B]/6 group-hover:bg-[#0B182B] flex items-center justify-center transition-colors duration-300 border border-[#D4AF37]/20 p-3">
                      <IconComp className="w-6 h-6 text-[#B8860B] group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 font-medium mt-1">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#0B182B] group-hover:text-[#B8860B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3 flex-1">
                    {service.description}
                  </p>

                  {/* Key highlights */}
                  <ul className="space-y-2 pt-4 border-t border-slate-100 mb-7">
                    {service.features.slice(0, 3).map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — centered, full-width pill */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D4AF37]/40 text-xs font-bold text-[#0B182B] group-hover:bg-[#0B182B] group-hover:text-[#D4AF37] group-hover:border-[#0B182B] transition-all duration-300 cursor-pointer mt-auto"
                  >
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detail Modal */}
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
                transition={{ duration: 0.2 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  {/* Hero image */}
                  <div className="h-48 rounded-2xl overflow-hidden relative">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5 text-white">
                      <div>
                        <h3 className="text-2xl font-extrabold font-['Playfair_Display']">{selectedService.title}</h3>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedService.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{selectedService.description}</p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B] mb-3">Service Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.features.map(feat => (
                        <div key={feat} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs font-semibold text-slate-800">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B182B]/5 border border-[#D4AF37]/25 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Popular for</p>
                      <p className="text-xs font-bold text-[#0B182B] mt-0.5">{selectedService.popularFor}</p>
                    </div>
                    <button
                      onClick={() => { setSelectedService(null); onOpenConsultation(); }}
                      className="shrink-0 px-5 py-2.5 rounded-full bg-[#0B182B] text-white text-xs font-bold hover:bg-[#1E3A8A] transition-colors shadow-md cursor-pointer"
                    >
                      Enquire Now
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
