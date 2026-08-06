import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STAGES } from '../data/mockData';
import { MessageSquare, Compass, PenTool, FileCheck, Layers, Hammer, Palette, ShieldCheck, Key, Check, Clock, ChevronRight } from 'lucide-react';
import TextReveal from './TextReveal';

const processIconMap: Record<string, any> = {
  MessageSquare,
  Compass,
  PenTool,
  FileCheck,
  Layers,
  Hammer,
  Palette,
  ShieldCheck,
  Key,
};

export default function ConstructionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
            OUR PROCESS
          </div>
          <div>
            <TextReveal
              text="Built on Precision. Delivered with Perfection."
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim'] justify-center"
              highlightWords={['Precision.', 'Perfection.']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Our 9-stage engineering roadmap ensures complete transparency, strict quality audits, and guaranteed timeline execution.
          </p>
        </div>

        {/* 9-Node Horizontal Timeline Bar (Matching reference image design) */}
        <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="min-w-[800px] px-4">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -translate-y-1/2 z-0" />

            <div className="relative z-10 flex items-center justify-between">
              {PROCESS_STAGES.map((st, idx) => {
                const IconComp = processIconMap[st.icon] || MessageSquare;
                const isSelected = activeStep === idx;
                const isPast = idx < activeStep;

                return (
                  <button
                    key={st.step}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-hidden"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#0B182B] text-[#D4AF37] ring-4 ring-[#D4AF37]/30 scale-110 shadow-lg'
                          : isPast
                          ? 'bg-[#D4AF37] text-[#0B182B]'
                          : 'bg-white text-slate-500 border-2 border-slate-300 group-hover:border-[#D4AF37]'
                      }`}
                    >
                      {isPast ? <Check className="w-5 h-5" /> : st.step}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`mt-3 text-xs font-semibold whitespace-nowrap transition-colors ${
                        isSelected ? 'text-[#0B182B] font-bold' : 'text-slate-500 group-hover:text-slate-800'
                      }`}
                    >
                      {st.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Icon & Step Badge */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-[#0B182B] text-[#D4AF37] flex items-center justify-center shadow-lg">
                  {(() => {
                    const ActiveIcon = processIconMap[PROCESS_STAGES[activeStep].icon] || MessageSquare;
                    return <ActiveIcon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                    STAGE {PROCESS_STAGES[activeStep].step} OF 09
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B182B] font-['Playfair_Display']">
                    {PROCESS_STAGES[activeStep].title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {PROCESS_STAGES[activeStep].subtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Duration: {PROCESS_STAGES[activeStep].durationWeeks}</span>
                </div>
              </div>

              {/* Right Column: Description & Deliverables */}
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {PROCESS_STAGES[activeStep].description}
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                    Stage Deliverables & Documentation
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {PROCESS_STAGES[activeStep].deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Previous Step
                  </button>
                  <button
                    disabled={activeStep === PROCESS_STAGES.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-full bg-[#0B182B] text-white text-xs font-bold hover:bg-[#1E3A8A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
