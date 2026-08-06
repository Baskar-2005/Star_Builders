import { motion } from 'motion/react';
import { MATERIAL_BRANDS } from '../data/mockData';
import { ShieldCheck, Award, Sparkles, Check } from 'lucide-react';
import TextReveal from './TextReveal';

export default function MaterialShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
            MATERIAL QUALITY STANDARDS
          </div>
          <div>
            <TextReveal
              text="Branded & Tested Materials Only"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim'] justify-center"
              highlightWords={['Branded', 'Materials']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            We partner exclusively with India’s top certified material manufacturers to guarantee coastal anti-corrosion and structural longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIAL_BRANDS.map((mat, idx) => (
            <motion.div
              key={mat.brandName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-40 rounded-2xl overflow-hidden relative">
                  <img
                    src={mat.image}
                    alt={mat.brandName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B182B] text-[#D4AF37] text-[10px] font-bold uppercase">
                    {mat.badge}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8860B]">{mat.category}</span>
                  <h3 className="text-lg font-extrabold text-[#0B182B] font-['Playfair_Display']">{mat.brandName}</h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {mat.specifications}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800 bg-emerald-50/80 p-2.5 rounded-xl">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{mat.warranty}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
