import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, Building2, Users, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import TextReveal from './TextReveal';

export default function TestimonialsSection() {
  const impactStats = [
    { value: '120+', label: 'Projects Delivered', icon: Building2 },
    { value: '85+', label: 'Happy Families', icon: Users },
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Skilled Professionals', icon: Briefcase },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
              TESTIMONIALS
            </div>
            <div>
              <TextReveal
                text="What Our Clients Say"
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B182B] font-['GT_Walsheim']"
                highlightWords={['Clients', 'Say']}
                highlightClass="gold-shining-text font-bold"
              />
            </div>
            <p className="text-slate-600 text-base font-normal">
              Real feedback from homeowners and investors who built their dream properties with Star Builders Puducherry.
            </p>
          </div>

          {/* Google Rating Badge Card */}
          <div className="glass-card rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-xl font-mono shadow-md">
              4.9
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#0B182B] mt-0.5">Verified Google Reviews</p>
              <p className="text-[10px] text-slate-500">100% Genuine Client Ratings</p>
            </div>
          </div>
        </div>

        {/* Client Review Cards + Impact Banner Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Reviews List Column */}
          <div className="lg:col-span-7 grid gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#0B182B]">{t.name}</h3>
                      <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.review}"
                </p>

                {t.verifiedGoogle && (
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Google Review
                    </span>
                    <span className="font-mono text-slate-400">Puducherry Site</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Impact Stat Card (Matching Reference Photo Dark Banner) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#0B182B] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">OUR TRACK RECORD</span>
              <h3 className="text-3xl font-extrabold font-['Playfair_Display']">
                Turning Dreams Into Landmarks
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over a decade of engineered craftsmanship and client trust across Puducherry, Lawspet, ECR, and White Town.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 my-8 pt-6 border-t border-white/10">
              {impactStats.map((st) => {
                const IconComp = st.icon;
                return (
                  <div key={st.label} className="space-y-1">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <IconComp className="w-5 h-5" />
                      <span className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display']">{st.value}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-300">{st.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>Looking for a trusted contractor in Puducherry?</span>
              <a href="#contact" className="text-[#D4AF37] font-bold hover:underline">Get In Touch →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
