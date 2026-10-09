import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Flame, Award, Target, Calendar, MessageCircle } from 'lucide-react';
import { GuildMember } from '../types';
import { guildProfile } from '../data/guildData';
import { copyToClipboard, createWhatsAppUrl } from '../utils/socialDirect';

interface MemberDetailModalProps {
  member: GuildMember | null;
  onClose: () => void;
}

export const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (member) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  const handleCopy = async () => {
    await copyToClipboard(member.ffId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-150" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative z-10 w-full max-w-md rounded-t-3xl sm:rounded-2xl border-t sm:border border-white/[0.12] bg-[#0d121f] p-5 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Mobile handle indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto mb-3 sm:hidden" />

        <button
          onClick={onClose}
          aria-label="Tutup Detail Pemain"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white active:scale-95"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Member Header */}
        <div className="flex items-center gap-3.5 pr-8">
          <img
            src={member.avatar}
            alt={member.ign}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover ring-2 ring-red-500/50 shadow-md shadow-red-950/60 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-base font-bold text-white font-display truncate">{member.ign}</h3>
              {member.isCaptain && (
                <span className="rounded bg-red-600/25 text-red-400 border border-red-500/30 text-[9px] font-mono font-bold px-1.5 py-0.2 shrink-0">
                  KAPTEN
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
              {member.role} · {member.division}
            </p>
            <span className={`inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded ${
              member.status === 'In-Game' ? 'bg-red-500/20 text-red-300' : member.status === 'Online' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
            }`}>
              ● Status: {member.status}
            </span>
          </div>
        </div>

        {/* ID Free Fire Copy Bar */}
        <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#070a12] p-3 flex items-center justify-between text-xs font-mono">
          <div>
            <span className="text-slate-500 block text-[10px]">ID FREE FIRE:</span>
            <span className="text-white font-bold tracking-wider">{member.ffId}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg bg-red-600/20 border border-red-500/30 px-3 py-1.5 text-red-300 hover:text-white active:scale-95 min-h-[36px]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-bold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="text-xs">Salin ID</span>
              </>
            )}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="mt-3.5 grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="rounded-xl bg-[#070a12] p-2.5 border border-white/[0.04]">
            <span className="text-[10px] text-slate-500">TIER RANK</span>
            <p className="font-bold text-white mt-0.5">{member.rank} {member.stars ? `⭐ ${member.stars}` : ''}</p>
          </div>
          <div className="rounded-xl bg-[#070a12] p-2.5 border border-white/[0.04]">
            <span className="text-[10px] text-slate-500">K/D RATIO</span>
            <p className="font-bold text-red-400 mt-0.5 tabular-nums">{member.kdRatio.toFixed(2)}</p>
          </div>
          <div className="rounded-xl bg-[#070a12] p-2.5 border border-white/[0.04]">
            <span className="text-[10px] text-slate-500">HEADSHOT RATE</span>
            <p className="font-bold text-white mt-0.5 tabular-nums">{member.headshotRate}%</p>
          </div>
          <div className="rounded-xl bg-[#070a12] p-2.5 border border-white/[0.04]">
            <span className="text-[10px] text-slate-500">DOG TAG MINGGUAN</span>
            <p className="font-bold text-emerald-400 mt-0.5 tabular-nums">+{member.dogTagContribution}</p>
          </div>
        </div>

        {/* Fav Weapon & Join Date */}
        <div className="mt-3.5 space-y-1.5 text-xs text-slate-400 font-mono border-t border-white/[0.06] pt-3">
          <div className="flex justify-between">
            <span>Senjata Favorit:</span>
            <span className="text-slate-200">{member.favoriteWeapon}</span>
          </div>
          <div className="flex justify-between">
            <span>Bergabung Sejak:</span>
            <span className="text-slate-200">{member.joinDate}</span>
          </div>
        </div>

        {/* Action Button: Ajak Mabar via WhatsApp & Close */}
        <div className="mt-5 pt-3 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a
            href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, `Halo Admin Nexus Prime, saya mau request mabar dengan ${member.ign} (ID: ${member.ffId}). Apakah beliau ready mabar?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-3 active:scale-95 transition-all text-center min-h-[44px]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>Ajak Mabar via WA</span>
          </a>

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-slate-800 hover:bg-slate-700 py-3 text-xs font-semibold text-slate-200 hover:text-white min-h-[44px] active:scale-95"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
