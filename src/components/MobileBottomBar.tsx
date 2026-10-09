import React, { useState, useEffect } from 'react';
import { Home, Users, Newspaper, ShieldAlert, UserPlus, MoreHorizontal, HelpCircle, Swords, BookOpen, X, ChevronRight, MessageCircle, Instagram, Flame } from 'lucide-react';
import { ActiveTab } from './GuildNavbar';
import { guildProfile } from '../data/guildData';
import { createWhatsAppUrl } from '../utils/socialDirect';

interface MobileBottomBarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ activeTab, onSelectTab }) => {
  const [moreSheetOpen, setMoreSheetOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreSheetOpen(false);
      }
    };
    if (moreSheetOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moreSheetOpen]);

  // Ergonomic 5-primary-dock layout for Indonesian teen/youth mobile gamers
  const secondaryTabs: { id: ActiveTab; label: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'berita', label: 'Berita & Turnamen', desc: 'Rekap kemenangan & update patch meta FF', icon: <Newspaper className="h-4 w-4 text-rose-400" /> },
    { id: 'rules', label: 'Rules & Tata Tertib', desc: 'Aturan dog tag, no cheat & ganti nick BH', icon: <ShieldAlert className="h-4 w-4 text-red-400" /> },
    { id: 'alasan', label: 'Kisah & Visi Guild', desc: 'Sejarah berdiri sejak 2022 & 4 pilar misi', icon: <BookOpen className="h-4 w-4 text-red-400" /> },
    { id: 'faq', label: 'FAQ Tanya Jawab Pelajar', desc: 'Jadwal mabar, syarat rank & kelonggaran ujian', icon: <HelpCircle className="h-4 w-4 text-sky-400" /> },
  ];

  const handleSelect = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMoreSheetOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = ['berita', 'rules', 'alasan', 'faq'].includes(activeTab);

  return (
    <>
      {/* Mobile Drawer Sheet for Secondary Menus */}
      {moreSheetOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMoreSheetOpen(false)}
          />
          <div className="fixed inset-x-0 bottom-0 z-10 rounded-t-3xl border-t border-white/[0.12] bg-[#0c101c] p-5 pb-10 shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto">
            {/* Drawer handle bar */}
            <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Menu Komunitas &amp; Panduan
                </span>
              </div>
              <button
                onClick={() => setMoreSheetOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {secondaryTabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all active:scale-[0.98] ${
                    activeTab === item.id
                      ? 'border-red-500/60 bg-red-600/20 text-white'
                      : 'border-white/[0.06] bg-[#080b14] text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-white/[0.08]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{item.label}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500 shrink-0" />
                </button>
              ))}
            </div>

            {/* Quick Direct WA & IG Buttons in Drawer */}
            <div className="mt-4 pt-3.5 border-t border-white/[0.08] space-y-2">
              <p className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                Hubungi Admin Guild Langsung:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, 'Halo Admin Nexus Prime, saya mau tanya seputar guild Free Fire...')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs active:scale-95 transition-transform"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>WA Admin</span>
                </a>

                <a
                  href={guildProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-pink-600/20 border border-pink-500/40 text-pink-300 font-bold text-xs active:scale-95 transition-transform"
                >
                  <Instagram className="h-4 w-4 text-pink-400 shrink-0" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom App Dock for Mobile & Android Screen */}
      <nav className="fixed inset-x-0 bottom-0 z-40 block lg:hidden border-t border-white/[0.12] bg-[#070a13]/95 backdrop-blur-xl px-1.5 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-md items-center justify-around">
          
          {/* 1. Beranda */}
          <button
            onClick={() => handleSelect('beranda')}
            className={`flex flex-col items-center justify-center flex-1 py-1 min-h-[48px] transition-all active:scale-95 ${
              activeTab === 'beranda' ? 'text-red-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`flex h-6 w-6 items-center justify-center transition-transform ${activeTab === 'beranda' ? 'scale-110' : ''}`}>
              <Home className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              Beranda
            </span>
          </button>

          {/* 2. Anggota / Roster */}
          <button
            onClick={() => handleSelect('anggota')}
            className={`flex flex-col items-center justify-center flex-1 py-1 min-h-[48px] transition-all active:scale-95 ${
              activeTab === 'anggota' ? 'text-red-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`flex h-6 w-6 items-center justify-center transition-transform ${activeTab === 'anggota' ? 'scale-110' : ''}`}>
              <Users className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              Roster
            </span>
          </button>

          {/* 3. Center Highlight: Pendaftaran (Open Member) */}
          <button
            onClick={() => handleSelect('pendaftaran')}
            className="flex flex-col items-center justify-center -mt-4 px-2 min-h-[52px] group active:scale-95 transition-all"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg transition-transform ${
              activeTab === 'pendaftaran'
                ? 'bg-gradient-to-tr from-red-600 via-rose-600 to-red-500 text-white ring-2 ring-red-400 shadow-red-600/50 scale-105'
                : 'bg-gradient-to-tr from-red-700 to-rose-700 text-white shadow-red-950/80 group-hover:scale-105'
            }`}>
              <UserPlus className="h-5 w-5 fill-white/20" />
            </div>
            <span className={`text-[10px] font-bold tracking-tight mt-1 ${
              activeTab === 'pendaftaran' ? 'text-red-400' : 'text-white'
            }`}>
              Daftar
            </span>
          </button>

          {/* 4. Tantang Scrim */}
          <button
            onClick={() => handleSelect('request')}
            className={`flex flex-col items-center justify-center flex-1 py-1 min-h-[48px] transition-all active:scale-95 ${
              activeTab === 'request' ? 'text-red-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`flex h-6 w-6 items-center justify-center transition-transform ${activeTab === 'request' ? 'scale-110' : ''}`}>
              <Swords className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              Scrim
            </span>
          </button>

          {/* 5. More / Lainnya */}
          <button
            onClick={() => setMoreSheetOpen(true)}
            className={`flex flex-col items-center justify-center flex-1 py-1 min-h-[48px] transition-all active:scale-95 ${
              isSecondaryActive ? 'text-red-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`flex h-6 w-6 items-center justify-center transition-transform ${isSecondaryActive ? 'scale-110' : ''}`}>
              <MoreHorizontal className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium tracking-tight mt-0.5">
              Menu
            </span>
          </button>

        </div>
      </nav>
    </>
  );
};
