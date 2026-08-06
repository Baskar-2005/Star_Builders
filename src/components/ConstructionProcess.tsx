import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STAGES } from '../data/mockData';
import {
  MessageSquare, Compass, PenTool, FileCheck,
  Layers, Hammer, Palette, ShieldCheck, Key,
  Check, Clock, ChevronRight, ChevronDown,
} from 'lucide-react';
import TextReveal from './TextReveal';

const iconMap: Record<string, any> = {
  MessageSquare, Compass, PenTool, FileCheck,
  Layers, Hammer, Palette, ShieldCheck, Key,
};

// Three clear phases grouping the 9 stages
const PHASES = [
  {
    phase: 'Phase 1',
    label: 'Design & Planning',
    color: 'from-[#1E3A8A] to-[#0B182B]',
    accent: '#D4AF37',
    steps: [0, 1, 2], // Consultation, Planning, Architecture & 3D
  },
  {
    phase: 'Phase 2',
    label: 'Approvals & Foundation',
    color: 'from-[#7A5B0B] to-[#B8860B]',
    accent: '#fff',
    steps: [3, 4], // Government Approval, Foundation
  },
  {
    phase: 'Phase 3',
    label: 'Build & Deliver',
    color: 'from-[#065F46] to-[#047857]',
    accent: '#D4AF37',
    steps: [5, 6, 7, 8], // Construction → Handover
  },
];

export default function ConstructionProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [openPhase, setOpenPhase] = useState<number | null>(0); // which phase accordion is open

  const activeStage = PROCESS_STAGES[activeStep];
  const ActiveIcon = iconMap[activeStage.icon] || MessageSquare;

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
            Three clear phases, nine meticulous stages — from your first call to housewarming day.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {/* Phase Accordions */}
          {PHASES.map((ph, pi) => {
            const isOpen = openPhase === pi;
            return (
              <div key={ph.phase} className="glass-card rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">

                {/* Phase Header — clickable */}
                <button
                  onClick={() => setOpenPhase(isOpen ? null : pi)}
                  className="w-full flex items-center justify-between px-6 py-4 group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white bg-gradient-to-r ${ph.color} shadow-sm`}>
                      {ph.phase}
                    </span>
                    <div className="text-left">
                      <p className="text-base font-bold text-[#0B182B] group-hover:text-[#B8860B] transition-colors">
                        {ph.label}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        {ph.steps.length} stage{ph.steps.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Step mini-dots */}
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-1.5 mr-3">
                      {ph.steps.map(si => (
                        <button
                          key={si}
                          onClick={e => { e.stopPropagation(); setActiveStep(si); setOpenPhase(pi); }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeStep === si ? 'bg-[#D4AF37] scale-125' : 'bg-slate-300 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Phase Step List */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Step pills */}
                      <div className="flex flex-wrap gap-2 px-6 pb-4 border-t border-slate-100 pt-4">
                        {ph.steps.map(si => {
                          const st = PROCESS_STAGES[si];
                          const StepIcon = iconMap[st.icon] || MessageSquare;
                          const isActive = activeStep === si;
                          return (
                            <button
                              key={si}
                              onClick={() => setActiveStep(si)}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#0B182B] text-[#D4AF37] border-[#0B182B] shadow-md'
                                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#D4AF37] hover:text-[#B8860B]'
                              }`}
                            >
                              <StepIcon className="w-3.5 h-3.5 shrink-0" />
                              <span>{st.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Active Stage Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl mt-2"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">

                {/* Left */}
                <div className="md:col-span-4 flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B182B] text-[#D4AF37] flex items-center justify-center shadow-lg">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">
                      Stage {activeStage.step} of 09
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0B182B] font-['Playfair_Display'] mt-0.5">
                      {activeStage.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{activeStage.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium w-fit">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                    {activeStage.durationWeeks}
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeStage.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-slate-100 space-y-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8860B]">
                      Stage Deliverables
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {activeStage.deliverables.map(del => (
                        <div key={del} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prev / Next */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => {
                        const prev = activeStep - 1;
                        setActiveStep(prev);
                        const phIdx = PHASES.findIndex(p => p.steps.includes(prev));
                        if (phIdx !== -1) setOpenPhase(phIdx);
                      }}
                      className="px-4 py-2 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Previous
                    </button>
                    <div className="flex gap-1">
                      {PROCESS_STAGES.map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-full transition-all ${
                            i === activeStep ? 'w-4 h-1.5 bg-[#D4AF37]' : 'w-1.5 h-1.5 bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      disabled={activeStep === PROCESS_STAGES.length - 1}
                      onClick={() => {
                        const next = activeStep + 1;
                        setActiveStep(next);
                        const phIdx = PHASES.findIndex(p => p.steps.includes(next));
                        if (phIdx !== -1) setOpenPhase(phIdx);
                      }}
                      className="px-4 py-2.5 rounded-full bg-[#0B182B] text-white text-xs font-bold hover:bg-[#1E3A8A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                    >
                      Next <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
