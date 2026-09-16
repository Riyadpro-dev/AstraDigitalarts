import React, { useState } from 'react';
import {
  X,
  Send,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building,
  Gem,
  Compass,
  Lock,
  Copy,
  Check,
  FileCheck2,
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Currency = 'CHF' | 'USD' | 'EUR';

interface InvestmentTier {
  id: string;
  name: string;
  scope: string;
  priceRange: Record<Currency, string>;
  turnaround: string;
}

const TIERS: InvestmentTier[] = [
  {
    id: 'tier-1',
    name: 'Atelier Relic',
    scope: 'Single Autonomous Spatial Sculpture or Museum Digital Relic',
    priceRange: {
      CHF: 'CHF 25,000 — 50,000',
      USD: '$28,000 — 55,000',
      EUR: '€26,000 — 52,000',
    },
    turnaround: '6–8 Weeks Production',
  },
  {
    id: 'tier-2',
    name: 'Spatial Monolith',
    scope: 'Interactive Kinetic Pavilion & Haute Horlogerie Scenography',
    priceRange: {
      CHF: 'CHF 60,000 — 140,000',
      USD: '$68,000 — 160,000',
      EUR: '€62,000 — 145,000',
    },
    turnaround: '10–14 Weeks Production',
  },
  {
    id: 'tier-3',
    name: 'Biennale Pavilion',
    scope: 'Flagship Architectural Monument, LiDAR Sensor Rig & Archival Master Drive',
    priceRange: {
      CHF: 'CHF 150,000 — 400,000+',
      USD: '$170,000 — 450,000+',
      EUR: '€155,000 — 420,000+',
    },
    turnaround: '16–24 Weeks Production',
  },
];

export const CommissionModal: React.FC<CommissionModalProps> = ({ isOpen, onClose }) => {
  const [patronName, setPatronName] = useState('');
  const [patronEmail, setPatronEmail] = useState('');
  const [patronSector, setPatronSector] = useState('Haute Horlogerie / Luxury Maison');
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-2');
  const [currency, setCurrency] = useState<Currency>('CHF');
  const [projectBrief, setProjectBrief] = useState('');
  const [hasNdaAgreed, setHasNdaAgreed] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptCode, setReceiptCode] = useState('');
  const [hasCopiedCode, setHasCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playTactileChime();
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    const code = `ASTRA-REQ-${new Date().getFullYear()}-${hash}-GVA`;
    setReceiptCode(code);
    setIsSubmitted(true);
  };

  const handleCopyCode = () => {
    soundEngine.playTactileChime();
    navigator.clipboard.writeText(receiptCode);
    setHasCopiedCode(true);
    setTimeout(() => setHasCopiedCode(false), 2000);
  };

  const handleResetAndClose = () => {
    soundEngine.playTactileChime();
    setIsSubmitted(false);
    onClose();
  };

  const selectedTier = TIERS.find((t) => t.id === selectedTierId) || TIERS[1];

  return (
    <div
      id="commission-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        id="commission-modal-container"
        className="relative w-full max-w-2xl bg-[#0c0c0e] border border-white/15 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl space-y-6 my-auto max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b border-white/10 pb-4 sm:pb-5">
          <div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#999] uppercase tracking-[0.3em] flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span>DIRECTORIAL REQUISITION PROTOCOL // MMXXVI</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white mt-1">
              COMMISSION ASTRA
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-[#999] mt-1 font-light">
              For museums, architectural biennales, luxury maisons, and private digital vaults.
            </p>
          </div>
          <button
            id="close-commission-btn"
            onClick={handleResetAndClose}
            className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 text-white flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                REQUISITION ACCREDITED & SEALED
              </h3>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="font-mono text-xs text-[#aaa] tracking-widest bg-black/60 border border-white/10 px-4 py-1.5 rounded-full">
                  {receiptCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-full border border-white/15 bg-white/5 text-[#bbb] hover:text-white hover:bg-white/15 transition-all"
                  title="Copy Accession Code"
                >
                  {hasCopiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="font-serif italic text-sm text-[#888] max-w-md mx-auto pt-3 font-light leading-relaxed">
                “Your inquiry has been cryptographically cataloged in the Geneva directorial queue. The Creative Director will initiate a private audience within 48 solar hours.”
              </p>
            </div>

            {/* Protocol Summary Card */}
            <div className="p-4 rounded-xl bg-[#080808] border border-white/10 text-left font-mono text-[10px] space-y-2 max-w-md mx-auto text-[#888]">
              <div className="flex justify-between">
                <span>PATRON:</span>
                <span className="text-white">{patronName || 'Private Patron'}</span>
              </div>
              <div className="flex justify-between">
                <span>ALLOCATED TIER:</span>
                <span className="text-white">{selectedTier.name}</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED BUDGET:</span>
                <span className="text-[#C5A059]">{selectedTier.priceRange[currency]}</span>
              </div>
              <div className="flex justify-between">
                <span>NDA STATUS:</span>
                <span className="text-emerald-400">Mutual Non-Disclosure Active</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-full bg-white text-black font-mono text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-white/80 transition-all shadow-lg"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Currency Switcher */}
            <div className="flex items-center justify-between font-mono text-[10px] border-b border-white/5 pb-3">
              <span className="text-[#777] uppercase tracking-wider">DENOMINATION:</span>
              <div className="flex items-center gap-1 bg-[#080808] p-1 rounded-full border border-white/10">
                {(['CHF', 'USD', 'EUR'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    type="button"
                    onClick={() => {
                      soundEngine.playTactileChime();
                      setCurrency(cur);
                    }}
                    className={`px-3 py-1 rounded-full transition-all ${
                      currency === cur
                        ? 'bg-white text-black font-semibold'
                        : 'text-[#777] hover:text-white'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Tier Selection */}
            <div className="space-y-2.5">
              <label className="block font-mono text-[9px] tracking-widest text-[#888] uppercase">
                COMMISSION SCOPE & INVESTMENT STAGING *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIERS.map((tier) => {
                  const isSelected = tier.id === selectedTierId;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        soundEngine.playTactileChime();
                        setSelectedTierId(tier.id);
                      }}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#18181c] border-white/40 shadow-md'
                          : 'bg-[#080808] border-white/10 hover:border-white/25 opacity-70'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif text-sm text-white font-medium">
                            {tier.name}
                          </span>
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
                        </div>
                        <div className="font-mono text-[10px] text-[#C5A059] tracking-tight mb-2">
                          {tier.priceRange[currency]}
                        </div>
                      </div>
                      <div className="text-[9px] text-[#777] font-mono leading-tight">
                        {tier.turnaround}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] tracking-widest text-[#777] uppercase">
                  Patron / Maison Name *
                </label>
                <input
                  type="text"
                  required
                  value={patronName}
                  onChange={(e) => setPatronName(e.target.value)}
                  placeholder="e.g. Maison de Haute Joaillerie"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-[#555] text-sm focus:outline-none focus:border-white/40 font-sans transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] tracking-widest text-[#777] uppercase">
                  Directorial Email *
                </label>
                <input
                  type="email"
                  required
                  value={patronEmail}
                  onChange={(e) => setPatronEmail(e.target.value)}
                  placeholder="curator@fondation.ch"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-[#555] text-sm focus:outline-none focus:border-white/40 font-sans transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-[9px] tracking-widest text-[#777] uppercase">
                Patron Sector / Institution
              </label>
              <select
                value={patronSector}
                onChange={(e) => setPatronSector(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-white/10 text-white text-sm focus:outline-none focus:border-white/40 font-sans transition-colors"
              >
                <option value="Haute Horlogerie / Luxury Maison">Haute Horlogerie / Luxury Maison</option>
                <option value="Contemporary Art Biennale / Museum">Contemporary Art Biennale / Museum</option>
                <option value="Private Collector Vault">Private Collector Vault</option>
                <option value="Haute Couture / Runway Direction">Haute Couture / Runway Direction</option>
                <option value="Architectural Spatial Commission">Architectural Spatial Commission</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-[9px] tracking-widest text-[#777] uppercase">
                Spatial Vision / Archival Brief
              </label>
              <textarea
                rows={3}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="Describe spatial footprint, intended emotional reverence, key architectural dates..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-[#555] text-sm focus:outline-none focus:border-white/40 font-sans transition-colors resize-none"
              />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#080808] border border-white/5">
              <input
                type="checkbox"
                id="nda-checkbox"
                checked={hasNdaAgreed}
                onChange={(e) => setHasNdaAgreed(e.target.checked)}
                className="mt-0.5 accent-white rounded"
              />
              <label htmlFor="nda-checkbox" className="text-xs text-[#888] font-light leading-relaxed cursor-pointer">
                <span className="text-white font-mono text-[10px] block mb-0.5">
                  MUTUAL ARCHIVAL NON-DISCLOSURE PROTOCOL
                </span>
                All architectural specifications, coordinates, and budgets remain confidential under Swiss Banking & Art Registry covenants.
              </label>
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[#777] text-xs font-mono">
                <Lock className="w-3.5 h-3.5 text-white/50" />
                <span>256-BIT ENCRYPTED CHANNEL</span>
              </div>

              <button
                type="submit"
                id="submit-requisition-btn"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-mono text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>Commit Requisition</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
