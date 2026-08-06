import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Villa',
    budget: '₹40 - ₹60 Lakhs',
    location: 'Puducherry',
    requirements: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

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
      setSuccess(data.message);
    } catch (err) {
      console.error("Error submitting modal consultation:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-auto border border-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE ARCHITECT CONSULTATION</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B182B] font-['Playfair_Display']">
            Book Your Free Site Consultation
          </h3>
          <p className="text-xs text-slate-600">
            Discuss your plot layout, Vastu orientation, and budget targets with Star Builders Puducherry.
          </p>
        </div>

        {success ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <p className="text-sm font-bold text-emerald-900">{success}</p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#0B182B] text-white text-xs font-bold hover:bg-[#1E3A8A] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Full Name *</label>
              <input
                required
                type="text"
                placeholder="e.g. Anand Sundaram"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone Number *</label>
                <input
                  required
                  type="tel"
                  placeholder="063813 75461"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Email Address</label>
              <input
                type="email"
                placeholder="anand@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Special Requirements / Notes</label>
              <textarea
                rows={2}
                placeholder="Plot location, budget expectations, or preferred start date..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#0B182B] focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-[#0B182B] hover:bg-[#1E3A8A] text-white text-xs font-bold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>{submitting ? 'Booking Consultation...' : 'Confirm Free Consultation'}</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
