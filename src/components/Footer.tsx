import React, { useState, useEffect } from 'react';
import { ArrowUp, Disc3, Shield, Mail, Check, Sparkles, Clock, Globe } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [times, setTimes] = useState({
    geneva: '',
    tokyo: '',
    newYork: '',
    milan: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (tz: string) =>
        now.toLocaleTimeString('en-GB', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });

      setTimes({
        geneva: format('Europe/Zurich'),
        tokyo: format('Asia/Tokyo'),
        newYork: format('America/New_York'),
        milan: format('Europe/Rome'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEngine.playTactileChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    soundEngine.playTactileChime();
    setIsSubscribed(true);
  };

  return (
    <footer
      id="studio-colophon-footer"
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 font-mono text-xs text-[#888] space-y-16 relative"
    >
      {/* Top Grid: Brand & Global Ateliers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Brand identity & statement */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-white">
              ASTRA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#888] uppercase">
              DIGITAL ARTS
            </span>
          </div>
          <p className="font-serif italic text-base text-[#999] max-w-md font-light leading-relaxed">
            “The artifact commands reverence through silence. Immaterial computation crystallized into permanent archival luxury.”
          </p>
          <div className="text-[9px] tracking-[0.25em] text-[#666] pt-1">
            CINEMATIC CREATIVE DIRECTION & SPATIAL SCENOGRAPHY // SWITZERLAND
          </div>
        </div>

        {/* Global Ateliers & Synchronized Horological Clocks */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-white flex items-center gap-2 tracking-[0.25em] uppercase text-[9px] border-b border-white/10 pb-2">
            <Clock className="w-3 h-3 text-[#aaa]" />
            <span>SYNCHRONIZED ATELIER HOROLOGY</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[10px]">
            <div className="p-2.5 rounded bg-[#0c0c0e] border border-white/5 space-y-1">
              <div className="text-[#666] text-[8px] tracking-widest">GENÈVE (CET)</div>
              <div className="text-white font-mono">{times.geneva || '12:00:00'}</div>
              <div className="text-[#888] text-[8px]">Rue du Rhône 42</div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0c0e] border border-white/5 space-y-1">
              <div className="text-[#666] text-[8px] tracking-widest">TOKYO (JST)</div>
              <div className="text-white font-mono">{times.tokyo || '19:00:00'}</div>
              <div className="text-[#888] text-[8px]">Roppongi Hills</div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0c0e] border border-white/5 space-y-1">
              <div className="text-[#666] text-[8px] tracking-widest">NEW YORK (EST)</div>
              <div className="text-white font-mono">{times.newYork || '06:00:00'}</div>
              <div className="text-[#888] text-[8px]">Madison Avenue</div>
            </div>
            <div className="p-2.5 rounded bg-[#0c0c0e] border border-white/5 space-y-1">
              <div className="text-[#666] text-[8px] tracking-widest">MILANO (CET)</div>
              <div className="text-white font-mono">{times.milan || '12:00:00'}</div>
              <div className="text-[#888] text-[8px]">Via Montenapoleone</div>
            </div>
          </div>
        </div>

        {/* VIP Salon Encrypted Dispatch Subscription */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-white flex items-center gap-2 tracking-[0.25em] uppercase text-[9px] border-b border-white/10 pb-2">
            <Sparkles className="w-3 h-3 text-[#aaa]" />
            <span>CURATORIAL SALON DISPATCH</span>
          </div>
          <p className="text-[10px] text-[#777] leading-relaxed">
            Private quarterly notifications regarding confidential biennale installations & limited physical relics.
          </p>
          {isSubscribed ? (
            <div className="p-3 rounded-xl bg-white/5 border border-white/20 text-emerald-400 font-mono text-[9px] tracking-wider flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              <span>DISPATCH SUBSCRIPTION CATALOGED</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="curator@fondation.ch"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0c0c0e] border border-white/10 text-white placeholder-[#555] text-[10px] focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-lg bg-white text-black font-mono text-[9px] uppercase tracking-wider font-semibold hover:bg-white/90 shrink-0"
                >
                  Join
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Mid-Bar: Return to Zenith & Provenance Coordinates */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="text-[9px] text-[#666] space-y-1 tracking-widest">
          <p>ATELIER HEADQUARTERS: LAT 46°12'09"N // LONG 06°08'44"E (LAKE GENEVA)</p>
          <p>MASTER CODEX ED. 02.4 // 35MM ANAMORPHIC CALIBRATION // 120 FPS</p>
        </div>

        <button
          id="return-to-zenith-btn"
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 text-[9px] tracking-[0.25em]"
        >
          <span>RETURN TO ZENITH</span>
          <ArrowUp className="w-3 h-3 text-[#aaa]" />
        </button>
      </div>

      {/* Bottom Legal Covenants */}
      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-widest text-[#666]">
        <div>© MMXXVI ASTRA DIGITAL ARTS ATELIER. ALL RIGHTS RESERVED.</div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="text-[#999]">SWISS PERMANENCE GUARANTEE</span>
          <span>•</span>
          <span>MUSEUM ARCHIVE LICENSING</span>
          <span>•</span>
          <span>ENCRYPTED RELIC CODEX</span>
        </div>
      </div>
    </footer>
  );
};
