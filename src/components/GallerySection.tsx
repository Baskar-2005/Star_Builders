import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Maximize2, MapPin, X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Villas' | 'Commercial' | 'Interiors' | 'Ongoing'>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              INSPIRED SPACES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['Playfair_Display']">
              Architecture Gallery
            </h2>
            <p className="text-slate-600 text-base">
              A curated visual anthology of our finest architectural elevations, modern interiors, and ongoing structural sites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Villas', 'Commercial', 'Interiors', 'Ongoing'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#0B182B] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-style Masonry Grid (Matching reference photo) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveLightboxIndex(idx)}
              className="break-inside-avoid glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B182B]/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold font-['Playfair_Display']">{item.title}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {item.location}
                </p>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-[#0B182B] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setActiveLightboxIndex(null)}
            >
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center space-y-4"
              >
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
                />
                <div className="text-center text-white space-y-1">
                  <h3 className="text-xl font-bold font-['Playfair_Display']">
                    {filteredItems[activeLightboxIndex].title}
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {filteredItems[activeLightboxIndex].location} • {filteredItems[activeLightboxIndex].category}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
