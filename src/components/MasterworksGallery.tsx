import React, { useState } from 'react';
import { MASTERWORKS } from '../data/creativeDirection';
import { Masterwork } from '../types';
import { soundEngine } from '../utils/soundEngine';
import {
  Eye,
  X,
  ArrowUpRight,
  Camera,
  Film,
  Box,
  Disc,
  LayoutGrid,
  Maximize,
  ListFilter,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

type ViewMode = 'grid' | 'cinema' | 'codex';
type CuratorialFilter = 'ALL' | 'KINETIC' | 'SPATIAL' | 'OPTICS' | 'HOROLOGY';

interface MasterworksGalleryProps {
  onOpenCommission?: () => void;
}

export const MasterworksGallery: React.FC<MasterworksGalleryProps> = ({ onOpenCommission }) => {
  const [selectedWork, setSelectedWork] = useState<Masterwork | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [cinemaIdx, setCinemaIdx] = useState(0);
  const [activeFilter, setActiveFilter] = useState<CuratorialFilter>('ALL');
  const [inspectionLighting, setInspectionLighting] = useState<'key' | 'rim' | 'volumetric'>('key');

  const filteredWorks = MASTERWORKS.filter((work) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'KINETIC') {
      return work.category.toLowerCase().includes('kinetic') || work.category.toLowerCase().includes('autonomous');
    }
    if (activeFilter === 'SPATIAL') {
      return (
        work.category.toLowerCase().includes('spatial') ||
        work.category.toLowerCase().includes('scenography') ||
        work.category.toLowerCase().includes('environment') ||
        work.category.toLowerCase().includes('brutalist')
      );
    }
    if (activeFilter === 'OPTICS') {
      return (
        work.category.toLowerCase().includes('astronomical') ||
        work.category.toLowerCase().includes('light') ||
        work.synopsis.toLowerCase().includes('optical') ||
        work.synopsis.toLowerCase().includes('lensing')
      );
    }
    if (activeFilter === 'HOROLOGY') {
      return (
        work.category.toLowerCase().includes('horlogerie') ||
        work.client.toLowerCase().includes('audemars') ||
        work.client.toLowerCase().includes('vacheron')
      );
    }
    return true;
  });

  const handleOpenWork = (work: Masterwork) => {
    soundEngine.playTactileChime();
    setSelectedWork(work);
  };

  const handleClose = () => {
    soundEngine.playTactileChime();
    setSelectedWork(null);
  };

  const handleViewChange = (mode: ViewMode) => {
    soundEngine.playTactileChime();
    setViewMode(mode);
  };

  const handleFilterChange = (filter: CuratorialFilter) => {
    soundEngine.playTactileChime();
    setActiveFilter(filter);
  };

  const nextCinemaWork = () => {
    soundEngine.playTactileChime();
    setCinemaIdx((prev) => (prev + 1) % MASTERWORKS.length);
  };

  const prevCinemaWork = () => {
    soundEngine.playTactileChime();
    setCinemaIdx((prev) => (prev - 1 + MASTERWORKS.length) % MASTERWORKS.length);
  };

  const cycleModalWork = (direction: 'prev' | 'next') => {
    if (!selectedWork) return;
    soundEngine.playTactileChime();
    const curIdx = MASTERWORKS.findIndex((w) => w.id === selectedWork.id);
    if (curIdx === -1) return;
    const newIdx =
      direction === 'next'
        ? (curIdx + 1) % MASTERWORKS.length
        : (curIdx - 1 + MASTERWORKS.length) % MASTERWORKS.length;
    setSelectedWork(MASTERWORKS[newIdx]);
  };

  const activeCinemaWork = MASTERWORKS[cinemaIdx];

  const getAccessionCode = (work: Masterwork, idx: number) => {
    const client = work.client.toLowerCase();
    let city = 'GVA';
    if (client.includes('venice') || client.includes('biennale')) city = 'VCE';
    else if (client.includes('paris') || client.includes('cartier') || client.includes('philharmonie')) city = 'PRS';
    else if (client.includes('beyeler') || client.includes('basel')) city = 'BSL';
    else if (client.includes('tokyo') || client.includes('mori')) city = 'TYO';
    else if (client.includes('london') || client.includes('serpentine')) city = 'LDN';
    return `AST-REL-0${idx + 1}-${city}`;
  };

  return (
    <section
      id="masterworks"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative"
    >
      {/* Background Watermark */}
      <div className="absolute left-6 top-24 select-none pointer-events-none opacity-[0.02] font-serif italic text-9xl md:text-[220px] leading-none text-white">
        Archive.
      </div>

      {/* Section Header & View Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8">
        <div>
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#999] uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-pulse" />
            <span>DIRECTORIAL ARCHIVE // 2024–2026 CANON ({MASTERWORKS.length} MASTERWORKS)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            CURATED COMMISSIONS
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#999] max-w-xl font-light mt-3">
            “Monolithic spatial sculptures conceived for international biennales, luxury horology maisons, astronomical observatories, and permanent digital vaults.”
          </p>
        </div>

        {/* View Mode Switcher Toolbar */}
        <div className="flex items-center gap-2 bg-[#0c0c0e] border border-white/10 p-1.5 rounded-full font-mono text-[9px] tracking-[0.2em] self-start lg:self-auto">
          <button
            id="gallery-view-grid"
            onClick={() => handleViewChange('grid')}
            className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-black font-medium'
                : 'text-[#888] hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3 h-3" />
            <span>GRID // 0{filteredWorks.length}</span>
          </button>

          <button
            id="gallery-view-cinema"
            onClick={() => handleViewChange('cinema')}
            className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === 'cinema'
                ? 'bg-white text-black font-medium'
                : 'text-[#888] hover:text-white'
            }`}
          >
            <Maximize className="w-3 h-3" />
            <span>CINEMASCOPE // 01</span>
          </button>

          <button
            id="gallery-view-codex"
            onClick={() => handleViewChange('codex')}
            className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === 'codex'
                ? 'bg-white text-black font-medium'
                : 'text-[#888] hover:text-white'
            }`}
          >
            <ListFilter className="w-3 h-3" />
            <span>CODEX INDEX</span>
          </button>
        </div>
      </div>

      {/* Curatorial Discipline Filter Bar */}
      {viewMode === 'grid' && (
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5 font-mono text-[9px] tracking-[0.2em]">
          <span className="text-[#666] mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            DISCIPLINE:
          </span>
          {(
            [
              { id: 'ALL', label: `ALL PIECES (0${MASTERWORKS.length})` },
              { id: 'KINETIC', label: 'KINETIC & SCULPTURAL' },
              { id: 'SPATIAL', label: 'SPATIAL PAVILIONS' },
              { id: 'OPTICS', label: 'ASTRONOMICAL OPTICS' },
              { id: 'HOROLOGY', label: 'HAUTE HORLOGERIE' },
            ] as const
          ).map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-3 py-1 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-white/15 text-white border border-white/30 font-medium'
                  : 'text-[#888] hover:text-white border border-transparent bg-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* VIEW MODE 1: SALON GRID (Responsive Multi-Column Cards) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, idx) => (
            <div
              key={work.id}
              id={`masterwork-card-${work.id}`}
              data-cursor="inspect"
              onClick={() => handleOpenWork(work)}
              className="group cursor-pointer rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden hover:border-white/35 transition-all duration-500 flex flex-col justify-between shadow-2xl relative"
            >
              {/* Image Container with CinemaScope 2.39:1 / 16:10 Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
                <img
                  src={work.heroImage}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />

                {/* Top Pill Metadata */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-mono text-[9px] tracking-widest">
                  <span className="px-2.5 py-1 rounded-full bg-[#080808]/90 backdrop-blur-md border border-white/15 text-white">
                    0{idx + 1} // {work.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#080808]/90 backdrop-blur-md border border-white/10 text-[#aaa]">
                    {work.cinematography.aspect}
                  </span>
                </div>
              </div>

              {/* Content info */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="font-mono text-[9px] text-[#777] tracking-[0.3em] uppercase mb-1">
                    {work.client}
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-white/90 transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#999] mt-2 line-clamp-2 font-light">
                    {work.curatorialQuote}
                  </p>
                </div>

                {/* Bottom Specs Preview */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#777]">
                  <span className="text-[9px] uppercase tracking-wider truncate max-w-[200px]">
                    {work.category}
                  </span>
                  <span className="flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform tracking-widest text-[9px]">
                    <span>INSPECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#aaa]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW MODE 2: CINEMASCOPE EXPANSIVE STREAM (Directorial Showcase) */}
      {viewMode === 'cinema' && (
        <div className="relative rounded-2xl bg-[#0c0c0e] border border-white/15 overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] md:aspect-[2.39/1] overflow-hidden bg-[#080808]">
            <img
              src={activeCinemaWork.heroImage}
              alt={activeCinemaWork.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />

            {/* Slide Navigation Overlay */}
            <div className="absolute inset-0 flex items-center justify-between p-4 sm:p-6 pointer-events-none">
              <button
                onClick={prevCinemaWork}
                className="p-2.5 sm:p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all pointer-events-auto backdrop-blur-md"
                aria-label="Previous work"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                onClick={nextCinemaWork}
                className="p-2.5 sm:p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all pointer-events-auto backdrop-blur-md"
                aria-label="Next work"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Top Telemetry */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center font-mono text-[8px] sm:text-[9px] tracking-widest pointer-events-none">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white">
                EXHIBITION // 0{cinemaIdx + 1} OF 0{MASTERWORKS.length}
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[#aaa]">
                {activeCinemaWork.cinematography.aspect} • {activeCinemaWork.metrics.scale}
              </span>
            </div>
          </div>

          {/* Under-Image Narrative Bar */}
          <div className="p-6 sm:p-10 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 border-t border-white/10">
            <div className="space-y-2 max-w-2xl">
              <div className="font-mono text-[9px] sm:text-[10px] text-[#777] tracking-[0.35em] uppercase">
                {activeCinemaWork.client} // {activeCinemaWork.year}
              </div>
              <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-white">
                {activeCinemaWork.title}
              </h3>
              <p className="font-serif italic text-sm sm:text-base text-[#999] font-light">
                {activeCinemaWork.curatorialQuote}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleOpenWork(activeCinemaWork)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-mono text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-3.5 h-3.5 text-black" />
                <span>Deep Inspection</span>
              </button>
            </div>
          </div>

          {/* Interactive Cinema Carousel Thumbnail Strip */}
          <div className="p-4 bg-[#080808] border-t border-white/10 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max">
              {MASTERWORKS.map((work, idx) => (
                <button
                  key={work.id}
                  onClick={() => {
                    soundEngine.playTactileChime();
                    setCinemaIdx(idx);
                  }}
                  className={`group flex items-center gap-2.5 p-1.5 pr-3 rounded-lg border transition-all text-left ${
                    cinemaIdx === idx
                      ? 'border-white bg-white/10 text-white'
                      : 'border-white/10 bg-white/[0.02] text-[#777] hover:text-white hover:border-white/30'
                  }`}
                >
                  <div className="w-12 h-8 rounded overflow-hidden bg-black flex-shrink-0 relative">
                    <img
                      src={work.heroImage}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${cinemaIdx === idx ? '' : 'grayscale group-hover:grayscale-0'}`}
                    />
                  </div>
                  <div className="font-mono text-[8px] leading-tight">
                    <div className="tracking-widest text-[#aaa]">0{idx + 1}</div>
                    <div className="truncate max-w-[130px] font-sans text-white/90">{work.title.split('—')[0]}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 3: ACCREDITED CODEX INDEX (Museum Ledger Format) */}
      {viewMode === 'codex' && (
        <div className="rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden font-mono text-xs">
          {/* Mobile Card Layout (screens < md) */}
          <div className="md:hidden divide-y divide-white/10">
            {MASTERWORKS.map((work, idx) => (
              <div
                key={work.id}
                onClick={() => handleOpenWork(work)}
                className="p-4 space-y-2.5 active:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center text-[9px] text-[#777]">
                  <span className="font-mono text-[#999]">{getAccessionCode(work, idx)}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[#aaa]">{work.cinematography.aspect}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="font-serif text-lg text-white leading-snug">{work.title}</h4>
                    <p className="font-mono text-[10px] text-[#aaa] mt-0.5">{work.client}</p>
                  </div>
                  <button className="flex items-center gap-1 text-[9px] tracking-widest text-white px-2.5 py-1 rounded-full bg-white/10 mt-1 flex-shrink-0">
                    <span>INSPECT</span>
                    <ArrowUpRight className="w-3 h-3 text-[#aaa]" />
                  </button>
                </div>
                <div className="text-[10px] text-[#777] font-light">
                  {work.metrics?.scale} // {work.metrics?.medium}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout (screens >= md) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[9px] tracking-[0.3em] text-[#777] bg-white/[0.02]">
                  <th className="py-4 px-6 uppercase font-normal">ACCESSION CODE</th>
                  <th className="py-4 px-6 uppercase font-normal">TITLE & CANON</th>
                  <th className="py-4 px-6 uppercase font-normal">COMMISSION MAISON</th>
                  <th className="py-4 px-6 uppercase font-normal">SCALE & MEDIUM</th>
                  <th className="py-4 px-6 uppercase font-normal">ASPECT</th>
                  <th className="py-4 px-6 uppercase font-normal text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[11px]">
                {MASTERWORKS.map((work, idx) => (
                  <tr
                    key={work.id}
                    onClick={() => handleOpenWork(work)}
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6 text-[#999] font-mono text-[10px] tracking-wider">
                      {getAccessionCode(work, idx)}
                    </td>
                    <td className="py-4 px-6 font-serif text-base text-white group-hover:text-white/80">
                      {work.title}
                    </td>
                    <td className="py-4 px-6 text-[#aaa] font-light tracking-wide">
                      {work.client}
                    </td>
                    <td className="py-4 px-6 text-[#888] text-[10px]">
                      {work.metrics?.scale} // {work.metrics?.medium}
                    </td>
                    <td className="py-4 px-6 text-[#777] text-[10px]">
                      {work.cinematography.aspect}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 text-[9px] tracking-widest text-white group-hover:underline">
                        <span>INSPECT</span>
                        <ArrowUpRight className="w-3 h-3 text-[#aaa]" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Deep-Dive Curatorial Inspection Modal */}
      {selectedWork && (
        <div
          id="masterwork-modal-backdrop"
          className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={handleClose}
        >
          <div
            id="masterwork-modal-content"
            className="relative w-full max-w-4xl bg-[#0c0c0e] border border-white/15 rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8 my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-5">
              <div>
                <div className="font-mono text-[10px] text-[#999] uppercase tracking-[0.3em] flex items-center gap-2">
                  <span>CURATORIAL ARCHIVE</span>
                  <span>//</span>
                  <span>{selectedWork.client}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl text-white mt-1">
                  {selectedWork.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-[#777] mt-2 tracking-wider">
                  <span>CANON YEAR: {selectedWork.year}</span>
                  <span>•</span>
                  <span>{selectedWork.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => cycleModalWork('prev')}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all"
                  title="Previous Digital Artwork"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => cycleModalWork('next')}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all"
                  title="Next Digital Artwork"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  id="close-masterwork-modal-btn"
                  onClick={handleClose}
                  className="p-2 rounded-full border border-white/10 bg-white/5 text-[#999] hover:text-white hover:bg-white/10 transition-all ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Directorial Light Rig Simulator Bar */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#080808] border border-white/10 font-mono text-[9px] tracking-widest">
              <span className="text-[#666]">DIRECTORIAL LIGHT SIMULATION:</span>
              <div className="flex items-center gap-2">
                {(['key', 'rim', 'volumetric'] as const).map((rig) => (
                  <button
                    key={rig}
                    onClick={() => {
                      soundEngine.playTactileChime();
                      setInspectionLighting(rig);
                    }}
                    className={`px-3 py-1 rounded uppercase transition-all ${
                      inspectionLighting === rig
                        ? 'bg-white text-black font-medium'
                        : 'text-[#888] hover:text-white bg-white/5'
                    }`}
                  >
                    {rig}
                  </button>
                ))}
              </div>
            </div>

            {/* Cinematic Hero Image Frame */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-[#080808]">
              <img
                src={selectedWork.heroImage}
                alt={selectedWork.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  inspectionLighting === 'key'
                    ? 'contrast-125 brightness-105'
                    : inspectionLighting === 'rim'
                    ? 'contrast-150 brightness-75'
                    : 'contrast-110 brightness-90 saturate-50'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[#aaa]">
                OPTICAL RIG: {selectedWork.cinematography.lens} // {inspectionLighting.toUpperCase()}
              </div>
            </div>

            {/* Curatorial Synopsis */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#999] uppercase block">
                CURATORIAL SYNOPSIS
              </span>
              <p className="font-sans text-base text-[#bbb] leading-relaxed font-light">
                {selectedWork.synopsis}
              </p>
              <p className="font-serif italic text-lg text-white border-l-2 border-white/20 pl-4 py-1">
                {selectedWork.curatorialQuote}
              </p>
            </div>

            {/* Material Shaders & Cinematography Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {/* Materials */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white">
                  <Box className="w-3.5 h-3.5 text-white/70" />
                  <span>MATERIAL SHADER PROFILES</span>
                </div>
                <div className="space-y-2">
                  {selectedWork.materials.map((mat, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#080808] border border-white/5 font-mono text-[9px]">
                      <div className="text-white font-medium mb-0.5">{mat.name}</div>
                      <div className="text-[#777]">{mat.shaderProperties}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cinematography */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white">
                  <Film className="w-3.5 h-3.5 text-white/70" />
                  <span>CINEMATOGRAPHY & LIGHTING RIG</span>
                </div>
                <div className="p-3 rounded bg-[#080808] border border-white/5 font-mono text-[9px] space-y-2 text-[#888]">
                  <div className="flex justify-between">
                    <span>LENS:</span>
                    <span className="text-white">{selectedWork.cinematography.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LIGHT RIG:</span>
                    <span className="text-white text-right">{selectedWork.cinematography.lightingRig}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COLOR GRADE:</span>
                    <span className="text-white">{selectedWork.cinematography.colorGrade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ASPECT RATIO:</span>
                    <span className="text-white">{selectedWork.cinematography.aspect}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Conversion Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-[10px]">
              <div className="flex items-center gap-2 text-[#777]">
                <ShieldCheck className="w-4 h-4 text-white/70" />
                <span>ARCHIVAL RUNTIME: {selectedWork.metrics.duration}</span>
              </div>

              {onOpenCommission && (
                <button
                  onClick={() => {
                    handleClose();
                    onOpenCommission();
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black uppercase tracking-[0.25em] font-medium hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>Inquire Similar Commission</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
