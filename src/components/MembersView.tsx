import React, { useState } from 'react';
import { Search, Copy, Check, Shield, Trophy, Flame, UserCheck } from 'lucide-react';
import { guildMembersData, guildProfile } from '../data/guildData';
import { GuildMember, GuildDivision } from '../types';
import { copyToClipboard } from '../utils/socialDirect';

interface MembersViewProps {
  onSelectMember: (memberId: string) => void;
}

export const MembersView: React.FC<MembersViewProps> = ({ onSelectMember }) => {
  const [divisionFilter, setDivisionFilter] = useState<'All' | GuildDivision>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredMembers = guildMembersData.filter((member) => {
    const matchesDivision = divisionFilter === 'All' || member.division === divisionFilter;
    const matchesSearch =
      member.ign.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.ffId.includes(searchQuery) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  const handleCopyFFId = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    await copyToClipboard(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
            STRUKTUR &amp; ROSTER GUILD
          </p>
          <h2 className="text-xl sm:text-3xl font-bold text-white font-display mt-0.5">
            Daftar Anggota Nexus Prime
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Total {guildMembersData.length} pemain aktif · ID Guild: <span className="font-mono text-white font-bold">{guildProfile.guildId}</span>
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari IGN atau ID FF..."
            className="w-full rounded-xl border border-white/[0.1] bg-[#0c111d] pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none min-h-[44px]"
          />
        </div>
      </div>

      {/* Division filter with smooth horizontal swipe */}
      <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-[#0c111d] w-max">
          {(['All', 'Pengurus', 'Roster Turnamen', 'Member Regular'] as const).map((div) => (
            <button
              key={div}
              onClick={() => setDivisionFilter(div)}
              className={`rounded-lg px-4 py-2.5 text-xs font-medium transition-colors shrink-0 min-h-[44px] ${
                divisionFilter === div
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {div === 'All' ? `Semua Anggota (${guildMembersData.length})` : div}
            </button>
          ))}
        </div>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMembers.length === 0 ? (
          <div className="col-span-full py-16 text-center text-xs text-slate-500 rounded-xl border border-white/[0.06] bg-[#0c111d]">
            Tidak ada pemain yang cocok dengan pencarian "{searchQuery}".
          </div>
        ) : (
          filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member.id)}
              className="group cursor-pointer rounded-xl border border-white/[0.08] bg-[#0c111d] p-4 transition-all hover:border-red-500/50 active:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                {/* Top card bar: Avatar, IGN, Division badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.ign}
                        className="h-11 w-11 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-red-500/50"
                      />
                      <span className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-[#0c111d] ${
                        member.status === 'In-Game' ? 'bg-red-500' : member.status === 'Online' ? 'bg-emerald-400' : 'bg-slate-500'
                      }`} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors truncate">
                        {member.ign}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <span className={`shrink-0 rounded px-2 py-0.5 text-[9px] font-mono font-bold uppercase ${
                    member.division === 'Pengurus'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : member.division === 'Roster Turnamen'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {member.division === 'Pengurus' ? 'PENGURUS' : member.division === 'Roster Turnamen' ? 'ROSTER' : 'MEMBER'}
                  </span>
                </div>

                {/* ID FF Bar with Touch-Friendly Copy button */}
                <div className="mt-3 flex items-center justify-between rounded-lg bg-[#070a12] pl-2.5 pr-1.5 py-1 text-xs font-mono text-slate-400 border border-white/[0.04]">
                  <span className="truncate">ID: {member.ffId}</span>
                  <button
                    onClick={(e) => handleCopyFFId(e, member.ffId)}
                    title="Salin ID FF"
                    className="flex h-8 items-center gap-1 rounded bg-slate-800/80 px-2 text-[10px] text-slate-300 hover:text-white shrink-0 active:scale-95"
                  >
                    {copiedId === member.ffId ? (
                      <span className="text-emerald-400 font-bold">Tersalin!</span>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-red-400" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Rank & Stats */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="rounded-lg bg-[#070a12] p-2 border border-white/[0.04]">
                    <span className="text-[10px] text-slate-500">TIER RANK</span>
                    <p className="font-bold text-white mt-0.5 truncate">{member.rank}</p>
                  </div>
                  <div className="rounded-lg bg-[#070a12] p-2 border border-white/[0.04]">
                    <span className="text-[10px] text-slate-500">K/D RATIO</span>
                    <p className="font-bold text-red-400 mt-0.5 tabular-nums">{member.kdRatio.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Bottom footer: Headshot & Dog tag */}
              <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>HS: <strong className="text-white">{member.headshotRate}%</strong></span>
                <span>Dog Tag: <strong className="text-red-400">+{member.dogTagContribution}</strong></span>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
