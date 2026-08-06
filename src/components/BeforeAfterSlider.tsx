import { useState, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
            CONSTRUCTION TRANSFORMATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['Playfair_Display']">
            Before & After Showcase
          </h2>
          <p className="text-slate-600 text-base">
            Drag the slider to see how raw foundation structure transforms into a luxury modern villa in Puducherry.
          </p>
        </div>

        {/* Interactive Image Splitter */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] select-none">
          {/* AFTER Image (Completed Luxury Villa) */}
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85"
            alt="Completed Villa"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* AFTER Label */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
            Completed Landmark Villa
          </div>

          {/* BEFORE Image (Raw Concrete & Brickwork Structure) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85"
              alt="Raw Construction Site"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            {/* BEFORE Label */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B182B] text-[#D4AF37] text-xs font-bold shadow-md whitespace-nowrap">
              Foundation & Concrete Frame
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B182B] text-[#D4AF37] border-2 border-white flex items-center justify-center shadow-2xl">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Invisible Range Input Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>
      </div>
    </section>
  );
}
