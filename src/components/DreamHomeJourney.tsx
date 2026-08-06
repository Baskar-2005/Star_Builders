import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, PenTool, Hammer, Key, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import TextReveal from './TextReveal';

export default function DreamHomeJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'concept',
      title: 'Concept & Blueprint',
      label: 'Stage 01',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      description: 'Translating your family lifestyle, plot dimensions, Vastu alignment, and budget into preliminary 2D architectural blueprints and structural feasibility plans.',
      deliverables: ['Site Soil Survey', 'Vastu Floor Layouts', 'Structural Column Grid']
    },
    {
      id: 'design',
      title: '3D Photorealistic Design',
      label: 'Stage 02',
      icon: PenTool,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Walk through your future home in 3D before a single brick is laid. Customize lighting, materials, facade textures, landscape garden, and double-height hall views.',
      deliverables: ['360 Walkthrough Video', 'Material Palette Selection', 'Lighting & Electrical Plan']
    },
    {
      id: 'construction',
      title: 'Precision Construction',
      label: 'Stage 03',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      description: 'RCC foundation excavation, Tata Tiscon TMT steel binding, UltraTech concrete vibration, and brick masonry supervised by senior structural engineers.',
      deliverables: ['Concrete Strength Test', 'Weekly Video Logs', 'Quality Audit Certificates']
    },
    {
      id: 'completion',
      title: 'Finished Landmark Villa',
      label: 'Stage 04',
      icon: Key,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      description: 'A breathtaking luxury home delivered on schedule with 150-point quality audit clearance, deep clean finish, golden key presentation, and 10-year warranty.',
      deliverables: ['Golden Key Folder', '10-Year Warranty Card', 'As-Built Drawings Set']
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#0B182B] text-white overflow-hidden">
      {/* Background Blueprint Grid Lines for Cinematic Vibe */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest text-[#D4AF37] shimmer-badge">
            <span className="gold-shining-text">YOUR DREAM. OUR EXPERTISE.</span>
          </div>
          <div>
            <TextReveal
              text="Every Great Home Starts with a Great Vision"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['GT_Walsheim'] justify-center"
              highlightWords={['Great', 'Vision']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Experience the seamless transformation of an idea into a tangible architectural masterpiece.
          </p>
        </div>

        {/* Stage Selector Buttons Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#0B182B] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-[1.02]'
                    : 'glass-dark text-slate-300 border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${isActive ? 'text-[#0B182B]/70' : 'text-[#D4AF37]'}`}>
                    {st.label}
                  </span>
                  <IconComp className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold leading-tight">{st.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Card */}
        <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Visual Showcase */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 shadow-xl group">
                <img
                  src={stages[activeStage].image}
                  alt={stages[activeStage].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {stages[activeStage].label}: {stages[activeStage].title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Phase Overview</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Playfair_Display']">
                    {stages[activeStage].title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {stages[activeStage].description}
                </p>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Stage Deliverables:</p>
                  <div className="space-y-2">
                    {stages[activeStage].deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#0B182B] text-xs font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>Next Transformation Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">Stage {activeStage + 1} of 4</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
