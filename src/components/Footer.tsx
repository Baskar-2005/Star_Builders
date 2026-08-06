import { ArrowUp, Sparkles, Phone, Mail, MapPin, MessageCircle, Download } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadBrochure = () => {
    // Generate simulated company brochure download text file
    const content = `================================================
STAR BUILDERS, PUDUCHERRY
COMPANY PROFILE & ARCHITECTURAL BROCHURE
================================================
Address: 1A, First Floor, Shanti Nagar, Main Road,
Opposite to Balaji Theatre, Shanthi Nagar, Puducherry - 605013
Phone: 063813 75461
Email: starbuilders.puducherry@gmail.com

OUR CORE SERVICES:
1. Custom Residential Construction & Villas
2. Commercial Plazas & Office Complexes
3. 3D Architectural Design & Interior Execution
4. Renovation & French Heritage Restoration
5. Turnkey Project Management with 10-Year Structural Warranty

MATERIAL STANDARDS:
- Tata Tiscon Fe-550D Superduct Corrosion Resistant TMT
- UltraTech & ACC 53 Grade High Performance Cement
- Kajaria Grandeur Vitrified Tiles & Kohler Sanitaryware
- Asian Paints Royale Aspira Exterior Weatherproofing

Thank you for choosing Star Builders, Puducherry.
Building Dreams. Creating Legacies.
================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Star_Builders_Puducherry_Company_Profile.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-[#0B182B] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#0B182B] flex items-center justify-center font-bold shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider font-['Playfair_Display']">
                  STAR <span className="gold-gradient-text">BUILDERS</span>
                </span>
                <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                  PUDUCHERRY
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Star Builders is Puducherry’s premier modern construction and luxury real estate design firm. Transforming dream visions into architectural landmarks with precision engineering and 100% material transparency.
            </p>

            {/* Download Brochure Button */}
            <button
              onClick={downloadBrochure}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B182B] text-white text-xs font-semibold border border-white/15 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Company Brochure</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#D4AF37] transition-colors">Featured Projects</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Star Builders</a></li>
              <li><a href="#estimator" className="hover:text-[#D4AF37] transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Luxury Modern Villas</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Commercial Buildings</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Interior Design & 3D</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Renovation & Restructuring</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Turnkey Management</a></li>
            </ul>
          </div>

          {/* Office Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Puducherry Office</h4>
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>1A, Shanti Nagar, Main Road, Opp. Balaji Theatre, Puducherry - 605013</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="tel:06381375461" className="hover:underline font-semibold">063813 75461</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="mailto:starbuilders.puducherry@gmail.com" className="hover:underline">starbuilders.puducherry@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 Star Builders Puducherry. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-300 font-medium">Privacy Policy</span>
            <span className="text-slate-300 font-medium">Terms & Conditions</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B182B] text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Widget Persistent */}
      <a
        href="https://wa.me/9106381375461?text=Hello%20Star%20Builders%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project%20in%20Puducherry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap pl-0 group-hover:pl-1">
          Chat with Us
        </span>
      </a>
    </footer>
  );
}
