import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Sparkles, Building2, CheckCircle2, ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import { EstimationResult } from '../types';
import TextReveal from './TextReveal';

interface CostEstimatorProps {
  onApplyEstimateToForm: (budget: string, sqft: number, type: string) => void;
}

export default function CostEstimator({ onApplyEstimateToForm }: CostEstimatorProps) {
  const [builtUpArea, setBuiltUpArea] = useState(2000);
  const [projectType, setProjectType] = useState('Luxury Villa');
  const [qualityTier, setQualityTier] = useState('Premium Executive');
  const [bedrooms, setBedrooms] = useState('3 BHK');
  const [floors, setFloors] = useState('G + 1 (Duplex)');
  const [location, setLocation] = useState('Puducherry Coast / ECR');
  const [specialRequests, setSpecialRequests] = useState('');

  const [loading, setLoading] = useState(false);
  const [estimationResult, setEstimationResult] = useState<EstimationResult | null>(null);

  const calculateEstimate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/gemini/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          builtUpArea,
          projectType,
          qualityTier,
          bedrooms,
          floors,
          location,
          specialRequests
        })
      });
      const data = await response.json();
      setEstimationResult(data);
    } catch (err) {
      console.error("Error fetching estimate:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#0B182B] text-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest text-[#D4AF37] shimmer-badge">
            <Calculator className="w-3.5 h-3.5" />
            <span className="gold-shining-text">AI PROJECT COST ESTIMATOR</span>
          </div>
          <div>
            <TextReveal
              text="Calculate Your Construction Budget"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['GT_Walsheim'] justify-center"
              highlightWords={['Construction', 'Budget']}
              highlightClass="gold-shining-text font-bold"
            />
          </div>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Instant AI-powered budget breakdown tailored to Puducherry material rates and coastal structural specifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 glass-dark rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            {/* Built-up Area Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label className="font-bold text-slate-200">Built-Up Area (Square Feet)</label>
                <span className="font-extrabold text-[#D4AF37] text-lg font-mono">{builtUpArea.toLocaleString()} Sq.Ft</span>
              </div>
              <input
                type="range"
                min="800"
                max="8000"
                step="100"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>800 Sq.Ft (Compact)</span>
                <span>4,000 Sq.Ft (Spacious Villa)</span>
                <span>8,000 Sq.Ft (Mansion)</span>
              </div>
            </div>

            {/* Quality Tier Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Material & Finish Tier</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Standard Luxury', rate: '₹2,200/sqft' },
                  { name: 'Premium Executive', rate: '₹2,800/sqft' },
                  { name: 'Royal Ultra Luxury', rate: '₹3,600/sqft' }
                ].map((tier) => (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setQualityTier(tier.name)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      qualityTier === tier.name
                        ? 'bg-[#D4AF37] text-[#0B182B] border-[#D4AF37] font-bold shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <p className="text-xs font-bold leading-tight">{tier.name}</p>
                    <p className="text-[10px] opacity-80 mt-1 font-mono">{tier.rate}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Type & Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Project Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/20 text-white text-xs font-medium focus:border-[#D4AF37] focus:outline-hidden"
                >
                  <option value="Luxury Villa">Luxury Villa</option>
                  <option value="Independent House">Independent House</option>
                  <option value="Duplex Residence">Duplex Residence</option>
                  <option value="Commercial Building">Commercial Building</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Location in Puducherry</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/20 text-white text-xs font-medium focus:border-[#D4AF37] focus:outline-hidden"
                >
                  <option value="Puducherry Coast / ECR">Puducherry Coast / ECR</option>
                  <option value="White Town Heritage Area">White Town Heritage Area</option>
                  <option value="Lawspet / Shanthi Nagar">Lawspet / Shanthi Nagar</option>
                  <option value="Mission Street Commercial Hub">Mission Street Commercial Hub</option>
                  <option value="Villianur / Suburban">Villianur / Suburban</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateEstimate}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-[#D4AF37] hover:bg-white text-[#0B182B] font-extrabold text-sm shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Calculating Structural Estimate...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-[#0B182B]" />
                  <span>Generate AI Budget & Material Breakdown</span>
                </>
              )}
            </button>
          </div>

          {/* Result Column */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              {estimationResult ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-dark rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl space-y-6"
                >
                  {/* Estimated Cost Banner */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border border-[#D4AF37]/40">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Estimated Turnkey Cost</span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display'] mt-1">
                      {estimationResult.estimatedCostRange}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Based on {builtUpArea.toLocaleString()} Sq.Ft @ ~₹{estimationResult.ratePerSqFt}/Sq.Ft • Handover in ~{estimationResult.estimatedDurationMonths} Months
                    </p>
                  </div>

                  {/* Structural Cost Breakdown Categories */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Cost Distribution Breakdown</h4>
                    <div className="space-y-2">
                      {estimationResult.structuralBreakdown.map((item) => (
                        <div key={item.category} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                          <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-200">{item.category}</span>
                            <span className="text-[#D4AF37] font-mono">{item.percentage}</span>
                          </div>
                          <p className="text-[11px] text-slate-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Star Builders Architectural Advice</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {estimationResult.aiRecommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply to Form Action */}
                  <button
                    onClick={() => onApplyEstimateToForm(estimationResult.estimatedCostRange, builtUpArea, projectType)}
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-[#D4AF37] text-[#0B182B] text-xs font-extrabold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Book Free Consultation with This Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <div className="glass-dark rounded-3xl p-8 border border-white/10 text-center space-y-4 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                    <Calculator className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold font-['Playfair_Display']">Ready to Calculate Your Dream Home Cost?</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Select your built-up area and quality tier on the left, then click <strong>"Generate AI Budget"</strong> for an instant breakdown.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
