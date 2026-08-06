import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Sparkles, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenConsultation, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'px-3 sm:px-6 pt-3 sm:pt-4' : 'px-4 sm:px-8 pt-4 sm:pt-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'rounded-full bg-white/90 backdrop-blur-xl px-5 sm:px-7 py-2.5 shadow-xl shadow-[#0B182B]/10 border border-white/90 ring-1 ring-[#D4AF37]/20 max-w-6xl mx-auto'
              : 'bg-transparent px-2 sm:px-4 py-2 border-none shadow-none'
          }`}
        >
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#0B182B] via-[#1E3A8A] to-[#0B182B] flex items-center justify-center text-[#D4AF37] shadow-lg shadow-[#0B182B]/20 group-hover:scale-105 transition-transform duration-300 ring-2 ring-[#D4AF37]/30">
              <Sparkles className="w-5 h-5 animate-pulse text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#0B182B] font-['GT_Walsheim'] leading-none">
                STAR <span className="gold-shining-text">BUILDERS</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase leading-tight font-['GT_Walsheim']">
                PUDUCHERRY
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#0B182B] font-extrabold bg-[#D4AF37]/20 border border-[#D4AF37]/30 shadow-xs'
                    : 'text-slate-800 hover:text-[#0B182B] hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/9106381375461?text=Hello%20Star%20Builders%2C%20I%20would%20like%20to%20enquire%20about%20a%20construction%20project%20in%20Puducherry."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50/90 text-emerald-700 border border-emerald-300/80 hover:bg-emerald-100 transition-all shadow-sm hover:scale-105"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>

            {/* Free Consultation CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0B182B] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#0B182B] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#0B182B]/20 hover:shadow-xl hover:shadow-[#0B182B]/30 transition-all cursor-pointer group border border-white/20"
            >
              <span className="hidden xs:inline">Get Free Consultation</span>
              <span className="xs:hidden">Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/70 backdrop-blur-md text-slate-800 hover:bg-white transition-colors cursor-pointer shadow-sm border border-slate-200/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto glass-panel rounded-2xl p-4 shadow-2xl border border-slate-200 bg-white/95"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0B182B] hover:bg-slate-100/80 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:06381375461"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call 063813 75461</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B182B] text-white text-sm font-semibold text-center shadow-md"
                >
                  Book Free Consultation
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
