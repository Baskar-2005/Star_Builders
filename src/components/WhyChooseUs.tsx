import { motion } from 'motion/react';
import { COMPARISON_POINTS } from '../data/mockData';
import { Check, X, Shield, Sparkles, Award } from 'lucide-react';
import TextReveal from './TextReveal';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
            WHY CHOOSE STAR BUILDERS
          </div>
          <div>
            <TextReveal
              text="The Star Builders Distinction"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim'] justify-center"
              highlightWords={['Star', 'Distinction']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            We reject standard contractor compromises. Compare our standards side-by-side with conventional local builders.
          </p>
        </div>

        {/* Comparison Table Card (Matching reference photo styling) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 max-w-4xl mx-auto overflow-hidden"
        >
          {/* Table Header Bar */}
          <div className="grid grid-cols-12 items-center pb-6 border-b border-slate-200/80 mb-4 gap-2 text-center">
            <div className="col-span-4 text-left font-bold text-slate-500 text-xs sm:text-sm uppercase tracking-wider">
              Feature
            </div>
            <div className="col-span-4 p-2 rounded-xl bg-slate-100/80 text-slate-600 font-extrabold text-xs sm:text-sm">
              Others
            </div>
            <div className="col-span-4 p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] font-extrabold text-xs sm:text-base flex items-center justify-center gap-1.5 shadow-md">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Star Builders</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 space-y-1">
            {COMPARISON_POINTS.map((item, idx) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="grid grid-cols-12 items-center py-3.5 gap-2 hover:bg-slate-50/80 rounded-xl px-2 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 font-semibold text-[#0B182B] text-xs sm:text-sm">
                  {item.feature}
                </div>

                {/* Others Column */}
                <div className="col-span-4 text-center text-xs text-rose-700 font-medium p-2 rounded-lg bg-rose-50/60 border border-rose-100 flex items-center justify-center gap-1">
                  <X className="w-3.5 h-3.5 text-rose-500 shrink-0 hidden xs:inline" />
                  <span className="truncate">{item.others}</span>
                </div>

                {/* Star Builders Column */}
                <div className="col-span-4 text-center text-xs text-emerald-900 font-bold p-2.5 rounded-lg bg-emerald-50/90 border border-emerald-200 shadow-2xs flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{item.star}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B8860B]" />
              <span className="font-semibold">Written Guarantee Included in Every Contract</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>PPA Sanctioned & Bank Home Loan Approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
