import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Copy, Check, X, Send } from 'lucide-react';
import { guildProfile } from '../data/guildData';
import { createWhatsAppUrl, copyToClipboard } from '../utils/socialDirect';

export const QuickWhatsAppFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Close modal when user presses Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCopyGuildId = async () => {
    await copyToClipboard(guildProfile.guildId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const quickMessages = [
    {
      title: 'Tanya Pendaftaran (Open Member)',
      desc: 'Tanya sisa slot, syarat rank & tes mekanik trial',
      text: 'Halo Admin Nexus Prime, saya mau tanya seputar open member guild Free Fire untuk calon anggota baru. Masih ada slot kosong kak?',
    },
    {
      title: 'Ajak Mabar / Push Rank',
      desc: 'Mabar bareng member atau pengurus guild',
      text: 'Halo min, saya mau ajak mabar push rank bareng squad Nexus Prime. ID FF saya siap di-add!',
    },
    {
      title: 'Tantang Scrim / Sparring 4v4',
      desc: 'Pengajuan guild war Clash Squad & turnamen',
      text: 'Halo Kapten Nexus Prime, guild kami ingin menantang sparring / scrim CS 4v4. Mohon info jadwal yang ready.',
    },
  ];

  return (
    <>
      {/* 1. Floating Action Button (Desktop only to prevent clutter on mobile screens) */}
      {!isOpen && (
        <aside
          aria-label="Layanan Kontak Cepat"
          className="hidden sm:block fixed sm:bottom-6 sm:right-6 z-40 select-none"
        >
          <div className="relative group">
            {/* Desktop Tooltip hint */}
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="rounded-lg bg-slate-900 border border-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-xl whitespace-nowrap flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Chat Admin Guild / Mabar</span>
              </div>
            </div>

            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-md group-hover:bg-emerald-500/50 transition-all animate-pulse" />

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Buka Chat Cepat Admin Guild"
              className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-2xl shadow-emerald-950/80 ring-2 ring-emerald-400/40 active:scale-95 transition-all"
            >
              <MessageCircle className="h-5 w-5 shrink-0 fill-white/20" />
              <span className="text-xs font-bold tracking-wide pr-1">
                Tanya Admin
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
            </button>
          </div>
        </aside>
      )}

      {/* 2. Top-level Modal / Bottom Sheet Popup (Clean viewport positioning, no nested offset bugs) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-end sm:justify-end p-0 sm:p-6 sm:pb-6 pointer-events-auto select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Full Screen Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer / Popup Card */}
          <div className="relative z-10 w-full sm:max-w-sm rounded-t-3xl sm:rounded-2xl border-t sm:border border-white/[0.14] bg-[#0c101c] p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200 max-h-[85vh] overflow-y-auto">
            {/* Mobile handle indicator */}
            <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto mb-3 sm:hidden" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white font-display">
                    Kontak Cepat Admin Guild
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Respon ramah untuk pelajar &amp; mahasiswa
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Tutup Panel Kontak"
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Copy ID Guild banner */}
            <div className="mt-3 flex items-center justify-between rounded-xl bg-[#06080e] p-2.5 border border-white/[0.06]">
              <div className="min-w-0 pr-2">
                <span className="text-[9px] font-mono uppercase text-slate-400 block">ID GUILD FREE FIRE</span>
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  {guildProfile.guildId}
                </span>
              </div>
              <button
                onClick={handleCopyGuildId}
                className="flex items-center gap-1 rounded-lg bg-red-600/20 border border-red-500/30 px-2.5 py-1 text-[11px] font-mono text-red-400 hover:text-white shrink-0 min-h-[32px] active:scale-95"
              >
                {copiedId ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Salin ID</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick WhatsApp Template Choices */}
            <div className="mt-3 space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Pilih Pesan WhatsApp Instan:
              </p>
              {quickMessages.map((item, idx) => (
                <a
                  key={idx}
                  href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, item.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/[0.06] bg-[#070b14] p-2.5 text-left transition-colors hover:border-emerald-500/40 hover:bg-emerald-950/20 group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-200 group-hover:text-emerald-400">
                      {item.title}
                    </p>
                    <Send className="h-3 w-3 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Direct WhatsApp & Instagram Action Buttons */}
            <div className="mt-3 pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-2">
              <a
                href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, 'Halo Admin Nexus Prime, saya mau tanya seputar guild Free Fire...')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 p-2.5 text-xs font-bold text-white shadow-md shadow-emerald-900/40 active:scale-95 transition-all text-center min-h-[40px]"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                <span>Chat WA Langsung</span>
              </a>

              <a
                href={guildProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 p-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-all text-center min-h-[40px]"
              >
                <Instagram className="h-3.5 w-3.5 shrink-0" />
                <span>DM Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
