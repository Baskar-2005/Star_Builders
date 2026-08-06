import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPARISON_POINTS } from '../data/mockData';
import { Check, X, Shield, Sparkles, Award, ChevronDown } from 'lucide-react';
import TextReveal from './TextReveal';

// Group comparison rows under category headings
const GROUPED = [
  {
    group: 'Quality & Materials',
    items: ['Quality & Concrete', 'Structural Steel', 'Structural Warranty'],
  },
  {
    group: 'Timeline & Transparency',
    items: ['Construction Timeline', 'Price & Material Transparency', 'Client Communication'],
  },
  {
    group: 'Approvals & Safety',
    items: ['Safety & Approval'],
  },
];

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(false);

  // Always show first group; rest expand
  const visibleGroups = expanded ? GROUPED : GROUPED.slice(0, 1);

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
            See how our standards compare — clearly and honestly.
          </p>
        </div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 max-w-4xl mx-auto overflow-hidden"
        >
          {/* Column Headers */}
          <div className="grid grid-cols-12 items-center pb-5 border-b border-slate-200 mb-2 gap-3 text-center">
            <div className="col-span-4 text-left font-bold text-slate-400 text-xs uppercase tracking-widest">Feature</div>
            <div className="col-span-4 p-2.5 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs sm:text-sm">
              Other Builders
            </div>
            <div className="col-span-4 p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              Star Builders
            </div>
          </div>

          {/* Grouped Rows */}
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {visibleGroups.map((group, gi) => {
                const groupItems = COMPARISON_POINTS.filter(p =>
                  group.items.includes(p.feature)
                );
                return (
                  <motion.div
                    key={group.group}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Group heading */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B8860B]">
                        {group.group}
                      </span>
                      <div className="flex-1 h-px bg-[#D4AF37]/25" />
                    </div>

                    <div className="divide-y divide-slate-100">
                      {groupItems.map((item, idx) => (
                        <motion.div
                          key={item.feature}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.28, delay: idx * 0.04 }}
                          className="grid grid-cols-12 items-center py-3.5 gap-3 hover:bg-slate-50 rounded-xl px-2 transition-colors"
                        >
                          {/* Feature label */}
                          <div className="col-span-4 font-semibold text-[#0B182B] text-xs sm:text-sm leading-snug">
                            {item.feature}
                          </div>

                          {/* Others */}
                          <div className="col-span-4 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl bg-rose-50 text-rose-700 text-xs font-medium text-center">
                            <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span className="leading-snug">{item.others}</span>
                          </div>

                          {/* Star Builders */}
                          <div className="col-span-4 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center border border-emerald-100">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="leading-snug">{item.star}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Expand / Collapse toggle */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(v => !v)}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:border-[#D4AF37] hover:text-[#B8860B] transition-all bg-white shadow-sm"
            >
              {expanded ? 'Show Less' : `Show All ${COMPARISON_POINTS.length} Comparisons`}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
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
