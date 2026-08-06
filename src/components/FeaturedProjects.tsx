import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project } from '../types';
import { MapPin, Calendar, ArrowRight, Eye, Building, Sparkles } from 'lucide-react';
import TextReveal from './TextReveal';

interface FeaturedProjectsProps {
  onSelectProject: (p: Project) => void;
  onOpenConsultation: () => void;
}

export default function FeaturedProjects({ onSelectProject, onOpenConsultation }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Villa' | 'Commercial' | 'Ongoing'>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.type === activeFilter || (activeFilter === 'Ongoing' && p.status === 'Ongoing'));

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
              FEATURED PROJECTS
            </div>
            <div>
              <TextReveal
                text="Spaces We're Proud Of"
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim']"
                highlightWords={['Spaces', 'Proud']}
                highlightClass="gold-shining-text font-bold"
              />
            </div>
            <p className="text-slate-600 text-base font-normal">
              Explore our landmark residential villas, commercial complexes, and heritage restorations across Puducherry.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Villa', 'Commercial', 'Ongoing'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#0B182B] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter === 'Villa' ? 'Villas' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid (Matching reference image layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="h-64 sm:h-80 relative overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                    {project.type}
                  </span>
                  {project.status === 'Ongoing' && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 text-white text-[11px] font-bold animate-pulse">
                      Ongoing Site
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#0B182B] group-hover:bg-[#D4AF37] group-hover:text-[#0B182B] transition-colors shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Photo Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B182B]/80 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>Click to View Full Gallery & Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </p>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-[#0B182B] group-hover:text-[#B8860B] transition-colors font-['Playfair_Display']">
                    {project.name}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 font-mono">{project.completionYear}</span>
                </div>

                <p className="text-xs text-slate-500 font-medium">{project.tagline}</p>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                    {project.location}
                  </span>
                  <span className="font-semibold text-[#0B182B]">{project.areaSqFt.toLocaleString()} Sq.Ft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
