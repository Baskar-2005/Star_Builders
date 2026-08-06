import { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { X, MapPin, Calendar, Maximize2, ShieldCheck, Clock, Quote, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectModal({ project, onClose, onOpenConsultation }: ProjectModalProps) {
  if (!project) return null;

  const [activePhoto, setActivePhoto] = useState(project.heroImage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl relative overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white/90 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0B182B] text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                {project.type}
              </span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                {project.location}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B182B] font-['Playfair_Display'] mt-1">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-4 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Photo Gallery Player */}
          <div className="space-y-3">
            <div className="h-64 sm:h-96 rounded-2xl overflow-hidden relative shadow-lg">
              <img
                src={activePhoto}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(img)}
                  className={`w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhoto === img ? 'border-[#D4AF37] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <p className="text-[11px] font-medium text-slate-500">Built-Up Area</p>
              <p className="text-base font-bold text-[#0B182B]">{project.areaSqFt.toLocaleString()} Sq.Ft</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500">Completion Year</p>
              <p className="text-base font-bold text-[#0B182B]">{project.completionYear}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500">Execution Timeline</p>
              <p className="text-base font-bold text-[#0B182B]">{project.timelineMonths} Months</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500">Project Status</p>
              <p className="text-base font-bold text-emerald-700">{project.status}</p>
            </div>
          </div>

          {/* Architectural Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#0B182B]">Architectural Story & Design Concept</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Key Structural Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#0B182B]">Signature Architectural Features</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat) => (
                <div key={feat} className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Specification */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#0B182B]">Branded Structural Materials</h3>
            <div className="flex flex-wrap gap-2">
              {project.materialsUsed.map((mat) => (
                <span key={mat} className="px-3 py-1.5 rounded-lg bg-[#0B182B]/5 text-[#0B182B] text-xs font-semibold border border-[#D4AF37]/30">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Client Story Testimonial */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0B182B] to-[#1E3A8A] text-white space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Quote className="w-4 h-4" />
              <span>Client Story — {project.clientName}</span>
            </div>
            <p className="text-sm italic text-slate-200 leading-relaxed font-serif">
              "{project.clientQuote}"
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div>
            <p className="text-xs font-bold text-[#0B182B]">Want a similar dream home in Puducherry?</p>
            <p className="text-[11px] text-slate-500">Get a free architectural consultation & customized budget breakdown.</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-6 py-3 rounded-full bg-[#0B182B] hover:bg-[#1E3A8A] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
          >
            Enquire Similar Project
          </button>
        </div>
      </motion.div>
    </div>
  );
}
