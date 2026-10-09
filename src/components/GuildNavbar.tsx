import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Menu, X, UserPlus, Play, ChevronDown, ShieldAlert, HelpCircle, BookOpen, Sparkles } from 'lucide-react';
import { guildProfile } from '../data/guildData';
import { copyToClipboard } from '../utils/socialDirect';

export type ActiveTab = 'beranda' | 'anggota' | 'berita' | 'rules' | 'alasan' | 'faq' | 'request' | 'pendaftaran';

interface GuildNavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onTriggerEntrance?: () => void;
}

export const GuildNavbar: React.FC<GuildNavbarProps> = ({ activeTab, onSelectTab, onTriggerEntrance }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [copiedGuildId, setCopiedGuildId] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setInfoDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary desktop navigation: only the 4 most essential pages
  const primaryNavItems: { id: ActiveTab; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'anggota', label: 'Roster' },
    { id: 'request', label: 'Tantang Scrim' },
    { id: 'berita', label: 'Berita' },
  ];

  // Secondary informational pages bundled neatly into "Panduan" dropdown
  const guideDropdownItems: { id: ActiveTab; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'rules',
      label: 'Rules & Tata Tertib',
      desc: 'Aturan dog tag, no cheat & ganti nick BH',
      icon: <ShieldAlert className="h-4 w-4 text-red-400" />,
    },
    {
      id: 'faq',
      label: 'FAQ Pelajar & Ujian',
      desc: 'Jadwal mabar santai & dispensasi pekan ujian',
      icon: <HelpCircle className="h-4 w-4 text-sky-400" />,
    },
    {
      id: 'alasan',
      label: 'Kisah & Visi Guild',
      desc: 'Sejarah berdiri sejak 2022 & 4 pilar misi',
      icon: <BookOpen className="h-4 w-4 text-amber-400" />,
    },
  ];

  const isGuideActive = ['rules', 'faq', 'alasan'].includes(activeTab);

  const handleCopyGuildId = async () => {
    await copyToClipboard(guildProfile.guildId);
    setCopiedGuildId(true);
    setTimeout(() => setCopiedGuildId(false), 2000);
  };

  const handleSelect = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#080b12]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        
        {/* Guild Identity with Real Image Emblem */}
        <button
          onClick={() => handleSelect('beranda')}
          className="flex items-center gap-2 sm:gap-2.5 text-left group shrink-0"
        >
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-xl overflow-hidden ring-1.5 ring-red-500/50 shadow-md shadow-red-600/25 bg-black shrink-0 transition-transform group-hover:scale-105">
            <img
              src={guildProfile.emblemUrl}
              alt={guildProfile.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white font-display truncate">
                {guildProfile.name}
              </span>
              <span className="rounded bg-red-600/20 px-1.5 py-0.2 text-[9px] sm:text-[10px] font-mono font-bold text-red-400 border border-red-500/30 shrink-0">
                LVL {guildProfile.level}
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate hidden sm:block">
              ID: {guildProfile.guildId}
            </p>
          </div>
        </button>

        {/* Clean, Streamlined Desktop Navigation Links (Only 4 essentials + 1 Dropdown) */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-300">
          {primaryNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`rounded-lg px-3.5 py-1.5 transition-all ${
                activeTab === item.id
                  ? 'bg-red-600/20 text-red-400 border border-red-500/30 font-bold'
                  : 'hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Unified "Panduan & Info" Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
              className={`flex items-center gap-1 rounded-lg px-3.5 py-1.5 transition-all ${
                isGuideActive
                  ? 'bg-red-600/20 text-red-400 border border-red-500/30 font-bold'
                  : 'hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <span>Panduan</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${infoDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {infoDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/[0.12] bg-[#0c101c]/98 p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Informasi &amp; Aturan
                </div>
                {guideDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`flex w-full items-start gap-2.5 rounded-lg p-2 text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-red-600/20 text-white border border-red-500/30'
                        : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-900 border border-white/[0.08]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Subtle Compact Intro Replay Button (Desktop only to prevent mobile clutter) */}
          {onTriggerEntrance && (
            <button
              onClick={onTriggerEntrance}
              title="Putar Ulang Animasi Layar Terbelah"
              className="hidden sm:flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-red-500/30 bg-red-950/20 text-red-400 hover:text-white hover:border-red-500/60 transition-colors"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
            </button>
          )}

          {/* ID Guild FF One-Click Copy Pill */}
          <button
            onClick={handleCopyGuildId}
            title="Klik untuk Salin ID Guild Free Fire"
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-300 hover:border-red-500/50 hover:text-white transition-all font-mono min-h-[34px] sm:min-h-[36px] active:scale-95"
          >
            <span className="text-slate-500 hidden xl:inline">ID FF:</span>
            <span className="font-bold text-white">{guildProfile.guildId}</span>
            {copiedGuildId ? (
              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 ml-0.5" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-red-400 shrink-0 ml-0.5" />
            )}
          </button>

          {/* Primary CTA Button: Open Member (Pendaftaran) */}
          <button
            onClick={() => handleSelect('pendaftaran')}
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-red-600/30 active:scale-95 transition-all min-h-[34px] sm:min-h-[36px]"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>Open Member</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 lg:hidden hover:text-white active:scale-95"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Top Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#080b12] px-4 py-4 lg:hidden animate-in fade-in duration-150">
          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
            Menu Utama
          </p>
          <div className="grid grid-cols-2 gap-2">
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-red-600/20 text-red-300 font-bold border border-red-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mt-4 mb-2">
            Panduan &amp; Komunitas
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            {guideDropdownItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                  activeTab === item.id
                    ? 'bg-red-600/20 text-white font-bold border border-red-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.08]">
            <button
              onClick={() => handleSelect('pendaftaran')}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 py-2.5 text-xs font-bold text-white shadow-md shadow-red-600/25 active:scale-95"
            >
              <UserPlus className="h-4 w-4" />
              <span>Pendaftaran Calon Anggota (Open Member)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
