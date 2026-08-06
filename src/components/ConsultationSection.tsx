import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageCircle, Building2 } from 'lucide-react';
import TextReveal from './TextReveal';

interface ConsultationSectionProps {
  initialBudget?: string;
  initialSqft?: number;
  initialProjectType?: string;
}

export default function ConsultationSection({ initialBudget, initialSqft, initialProjectType }: ConsultationSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialProjectType || 'Luxury Villa',
    budget: initialBudget || '₹40 - ₹60 Lakhs',
    location: 'Puducherry',
    requirements: initialSqft ? `Interested in building ~${initialSqft} Sq.Ft project.` : ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{ referenceId: string; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setConfirmation({ referenceId: data.referenceId, message: data.message });
      setFormData({ name: '', phone: '', email: '', projectType: 'Luxury Villa', budget: '', location: 'Puducherry', requirements: '' });
    } catch (err) {
      console.error("Error submitting contact form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Banner Card: Let's Build Your Dream Home (Matching Reference Image) */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest gold-shining-text shimmer-badge">
                FREE ARCHITECTURAL CONSULTATION
              </div>
              <div>
                <TextReveal
                  text="Let's Build Your Dream Home"
                  as="h2"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0B182B] font-['GT_Walsheim']"
                  highlightWords={['Dream', 'Home']}
                  highlightClass="gold-shining-text font-bold"
                />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Share your site vision with our senior structural engineers and architects in Puducherry. Get a 100% free Vastu floor consultation and itemized quote.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  '100% Free Consultation & Site Visit',
                  'Transparent Itemized Pricing',
                  'Guaranteed On-Time Delivery',
                  'Up to 10-Year Written Warranty'
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-56 sm:h-64 rounded-2xl overflow-hidden relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Villa Entrance Puducherry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white">
                <p className="text-xs font-semibold">Star Builders Design Studio • Puducherry</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Column Grid: Get In Touch, Send Us Message, Locate Us */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Column 1: Get In Touch Cards */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-[#0B182B] font-['Playfair_Display']">Get In Touch</h3>

            <div className="glass-card rounded-2xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B182B]">Office Address</p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    1A, First Floor, Shanti Nagar, Main Road, Opposite to Balaji Theatre, Shanthi Nagar, Puducherry - 605013
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B182B]">Phone / WhatsApp</p>
                  <a href="tel:06381375461" className="text-xs text-[#0B182B] font-semibold hover:underline block mt-0.5">
                    063813 75461
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B182B]">Email Address</p>
                  <a href="mailto:starbuilders.puducherry@gmail.com" className="text-xs text-slate-600 hover:underline block mt-0.5">
                    starbuilders.puducherry@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#0B182B] text-[#D4AF37] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B182B]">Business Hours</p>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">Open • Closes 7:00 PM (Mon - Sat)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Working Contact Form */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <h3 className="text-xl font-bold text-[#0B182B] font-['Playfair_Display'] mb-4">Send Us a Message</h3>

            {confirmation ? (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-mono font-bold text-emerald-800">Reference No: {confirmation.referenceId}</p>
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">{confirmation.message}</p>
                  <button
                    onClick={() => setConfirmation(null)}
                    className="px-4 py-2 rounded-full bg-[#0B182B] text-white text-xs font-bold hover:bg-[#1E3A8A] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              </AnimatePresence>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
                    >
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Residential House">Residential House</option>
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Requirements / Plot Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your plot size, location in Puducherry, and preferred timeline..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-[#0B182B] hover:bg-[#1E3A8A] text-white text-xs font-extrabold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  <span>{submitting ? 'Sending Enquiry...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Locate Us Map & Brand Card */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-[#0B182B] font-['Playfair_Display']">Locate Us</h3>

            {/* Interactive Embedded Google Map for Puducherry */}
            <div className="h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
              <iframe
                title="Star Builders Puducherry Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.654!2d79.8200!3d11.9400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53610000000001%3A0x1!2sShanthi+Nagar%2C+Puducherry!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Brand Highlight Box (Matching Reference Photo) */}
            <div className="p-5 rounded-2xl bg-[#0B182B] text-white space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-extrabold text-lg tracking-wider font-['Playfair_Display']">
                  STAR <span className="gold-gradient-text">BUILDERS</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Building homes. Building trust. Building a better future in Puducherry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
