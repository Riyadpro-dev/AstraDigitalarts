import React, { useState } from 'react';
import { Download, FileText, Check, ShieldCheck, Sparkles, Copy, Filter } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface SpecRow {
  domain: string;
  category: 'Aesthetics & Light' | 'Physics & Motion' | 'Typography & Color';
  directive: string;
  details: string;
}

export const DirectorialSpecs: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const specRows: SpecRow[] = [
    {
      domain: '1. Visual Narrative',
      category: 'Aesthetics & Light',
      directive: 'Sacred Digital Brutalism & Cosmic Stillness',
      details: 'Solitary obsidian monoliths emerging from subterranean void. Cinematic pacing at 48-60 BPM breathing cadence; zero frenetic cuts. 65%+ negative space reserved.',
    },
    {
      domain: '2. Art Direction',
      category: 'Aesthetics & Light',
      directive: 'The Monolith of Perception',
      details: 'Classical Haute Joaillerie craftsmanship translated into computational matter. Rejection of ephemeral novelty; permanent archival presence.',
    },
    {
      domain: '3. Creative Concept',
      category: 'Aesthetics & Light',
      directive: 'The Celestial Relic',
      details: 'Bridging ancient lapidary stone carving with hyper-precision spatial light computing. The digital artifact commands silence, never clamoring for clicks.',
    },
    {
      domain: '4. Typography',
      category: 'Typography & Color',
      directive: 'Classical Roman Lapidary vs. Surgical Telemetry',
      details: 'Cinzel & Cormorant Garamond for monumentality; JetBrains Mono for telemetry metadata; Plus Jakarta Sans for low-contrast editorial body.',
    },
    {
      domain: '5. Color Palette',
      category: 'Typography & Color',
      directive: 'Obsidian Void & Burnished Champagne',
      details: 'Subterranean neutrals: #08080A (Obsidian Core), #121216 (Basalt), #C5A059 (Pantone 871 C Metallic Gold), #E5E5E9 (Titanium Pearl). Brightness delta strictly ≤7%.',
    },
    {
      domain: '6. Composition & Spatial Depth',
      category: 'Aesthetics & Light',
      directive: 'CinemaScope 2.39:1 & Golden Ratio Harmonics',
      details: 'Low-angle monumental perspectives. Asymmetrical structural tension balanced by deliberate breathing room. Clear visual paths with zero cluttered UI elements.',
    },
    {
      domain: '7. Materials & Tactility',
      category: 'Physics & Motion',
      directive: 'High-Index Refraction & Subsurface Scattering',
      details: 'Smoked obsidian glass (IOR 1.54), brushed aerospace titanium (anisotropy 0.82), molten gold caustics, and light-absorbing matte basalt.',
    },
    {
      domain: '8. Lighting & Atmosphere',
      category: 'Aesthetics & Light',
      directive: 'Volumetric Chiaroscuro & Anamorphic Grazing',
      details: 'Single-source raking key lights at 15° angles. 1:8 contrast ratio. Volumetric dust particle scattering and organic 35mm film grain.',
    },
    {
      domain: '9. Motion Language',
      category: 'Physics & Motion',
      directive: 'Weighted Harmonic Inertia & Gravitational Pull',
      details: 'Damped mass physics (mass 1.4, stiffness 110, damping 24). Zero springy SaaS rubber-banding; interfaces move with architectural vault weight.',
    },
    {
      domain: '10. Emotional Experience',
      category: 'Aesthetics & Light',
      directive: 'Awe, Solitude & Quiet Authority',
      details: 'Evoking the solemn sanctity of entering an ancient temple or a private Swiss horology vault. Designed for prolonged contemplation.',
    },
  ];

  const filteredRows =
    filterCategory === 'All'
      ? specRows
      : specRows.filter((r) => r.category === filterCategory);

  const handleCopyRow = (row: SpecRow, idx: number) => {
    soundEngine.playTactileChime();
    navigator.clipboard.writeText(`${row.domain}: ${row.directive} — ${row.details}`);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleExportCodex = () => {
    soundEngine.playTactileChime();
    const markdown = `# ASTRA DIGITAL ARTS — CINEMATIC CREATIVE DIRECTION CODEX\n\n` +
      specRows.map(r => `### ${r.domain} [${r.category}]\n**Directive**: ${r.directive}\n**Execution**: ${r.details}\n`).join('\n') +
      `\n\n(C) MMXXVI ASTRA DIGITAL ARTS ATELIER. ALL RIGHTS RESERVED.`;

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ASTRA_CREATIVE_DIRECTION_CODEX.md';
    a.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section
      id="specs"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#999] uppercase flex items-center gap-2 mb-3">
            <span className="w-1 h-1 rounded-full bg-white opacity-60" />
            <span>EXECUTIVE MASTER CODEX</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            DIRECTORIAL SPEC SHEET
          </h2>
        </div>

        <button
          id="export-codex-btn"
          onClick={handleExportCodex}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] uppercase tracking-[0.25em] transition-all duration-300 w-fit shadow-xl"
        >
          {downloaded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Codex Exported (.md)</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 text-white/80" />
              <span>Export Directorial Codex</span>
            </>
          )}
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-[9px] tracking-widest">
        {['All', 'Aesthetics & Light', 'Physics & Motion', 'Typography & Color'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundEngine.playTactileChime();
              setFilterCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all border ${
              filterCategory === cat
                ? 'bg-white text-black border-white font-medium'
                : 'bg-[#0c0c0e] text-[#888] border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {cat.toUpperCase()} {cat === 'All' ? `(${specRows.length})` : ''}
          </button>
        ))}
      </div>

      {/* Structured Master Table */}
      <div className="rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden shadow-2xl">
        <div className="p-4 bg-[#080808] border-b border-white/10 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center font-mono text-[8px] sm:text-[9px] tracking-widest text-[#888]">
          <span className="text-white">CANONICAL SPECIFICATIONS MATRIX // ASTRA MMXXVI</span>
          <span className="text-[#C5A059]">STATUS: ACCREDITED FOR BIENNALE & MAISON COMMISSIONS</span>
        </div>

        <div className="divide-y divide-white/5">
          {filteredRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#777] tracking-[0.25em] block uppercase">
                    {row.domain}
                  </span>
                  <span className="font-serif text-base text-white mt-1 block">
                    {row.directive}
                  </span>
                </div>
                <span className="font-mono text-[8px] text-[#555] tracking-widest uppercase mt-2">
                  {row.category}
                </span>
              </div>
              <div className="md:col-span-7 flex items-center">
                <p className="text-xs sm:text-sm text-[#bbb] font-sans leading-relaxed font-light">
                  {row.details}
                </p>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => handleCopyRow(row, idx)}
                  title="Copy Directive"
                  className="p-2 rounded-lg border border-white/10 bg-white/5 text-[#888] hover:text-white hover:bg-white/15 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
                >
                  {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
