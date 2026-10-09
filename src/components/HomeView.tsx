import React, { useState } from 'react';
import { Swords, Trophy, Users, ShieldCheck, Flame, ArrowRight, Clock, Gamepad2, HeartHandshake, Shield, GraduationCap, Copy, Check } from 'lucide-react';
import { guildProfile, guildMembersData, guildNewsData } from '../data/guildData';
import { ActiveTab } from './GuildNavbar';
import { copyToClipboard } from '../utils/socialDirect';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onSelectMember: (memberId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectMember }) => {
  const [copiedGuildId, setCopiedGuildId] = useState(false);
  const coreRoster = guildMembersData.filter(m => m.division === 'Pengurus' || m.division === 'Roster Turnamen').slice(0, 4);
  const latestNews = guildNewsData[0];

  const handleCopyGuildId = async () => {
    await copyToClipboard(guildProfile.guildId);
    setCopiedGuildId(true);
    setTimeout(() => setCopiedGuildId(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-10 pb-8 sm:pb-12">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (SLEEK & AIRY FOR MOBILE)                 */}
      {/* ========================================================= */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0c101c]">
          
          {/* Hero Banner Container */}
          <div className="relative min-h-[360px] sm:min-h-[460px] w-full overflow-hidden flex flex-col justify-end">
            <img
              src="/src/assets/images/ff_guild_squad_hero_1791470694260.jpg"
              alt="Roster Squad Nexus Prime Free Fire"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center brightness-[0.60]"
            />
            {/* Smooth scrim gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/80 to-transparent" />
            
            {/* Single clean status pill on top (No crowded multi-badges) */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 rounded-full bg-black/70 border border-white/10 px-2.5 py-1 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-200">
                  Open Member: 2 Slot Tersisa
                </span>
              </div>

              <span className="hidden sm:inline-flex rounded-full bg-red-600/20 border border-red-500/30 px-2.5 py-1 text-xs font-mono font-bold text-red-400 backdrop-blur-md">
                TAG: {guildProfile.tag} · LVL {guildProfile.level}
              </span>
            </div>

            {/* Main Content inside Hero */}
            <div className="relative z-10 p-4 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-1">
                  OFFICIAL ESPORTS GUILD
                </p>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display leading-[1.15]">
                  Rumah Para Juara Free Fire Esports.
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Komunitas guild Level 6 resmi di Jakarta. Wadah kompetitif &amp; mabar santai tanpa drama untuk pelajar SMP, SMA, hingga mahasiswa.
                </p>

                {/* Streamlined Action Buttons (Only 2 buttons on mobile to avoid overcrowding) */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => onNavigate('pendaftaran')}
                    className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-red-600/25 active:scale-95 transition-all"
                  >
                    <span>Daftar Member Baru</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>

                  <button
                    onClick={() => onNavigate('request')}
                    className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md hover:bg-slate-800 transition-colors active:scale-95"
                  >
                    <Swords className="h-4 w-4 text-red-500 shrink-0" />
                    <span>Tantang Scrim 4v4</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Clean 4-Column Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border-t border-white/[0.08] bg-[#090d16] p-2.5 sm:p-3 text-center">
            <div className="py-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Dog Tag</span>
              <p className="text-sm sm:text-lg font-bold text-red-400 font-mono mt-0.5">
                {guildProfile.dogTagWeekly.split(' ')[0]}
              </p>
              <span className="text-[10px] text-emerald-400">CR Gratis Jumat</span>
            </div>

            <div className="py-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Winrate CS</span>
              <p className="text-sm sm:text-lg font-bold text-white font-mono mt-0.5">
                {guildProfile.winrateCS}
              </p>
              <span className="text-[10px] text-slate-400">Season Ranked</span>
            </div>

            <div className="py-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Anggota</span>
              <p className="text-sm sm:text-lg font-bold text-white font-mono mt-0.5">
                {guildProfile.memberCount} / {guildProfile.maxMember}
              </p>
              <span className="text-[10px] text-slate-400">Tersisa 2 Slot</span>
            </div>

            <div className="py-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Prestasi</span>
              <p className="text-sm sm:text-lg font-bold text-white font-mono mt-0.5">
                28x Juara
              </p>
              <span className="text-[10px] text-red-400">Fast Tourney</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. COMPACT 1-TAP COPY ID CARD                             */}
      {/* ========================================================= */}
      <section className="rounded-xl border border-white/[0.08] bg-[#0c101c] p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600/20 text-red-400 border border-red-500/30">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Cari &amp; Gabung di Aplikasi Free Fire
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                ID Guild: <strong className="text-white">{guildProfile.guildId}</strong> (Level 6)
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyGuildId}
            className="w-full sm:w-auto flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 border border-red-500/40 text-red-300 hover:text-white font-mono font-bold text-xs px-4 py-2 transition-all active:scale-95"
          >
            {copiedGuildId ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-300">ID Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Salin ID Guild</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. KOMUNITAS RAMAH PELAJAR & MAHASISWA                    */}
      {/* ========================================================= */}
      <section className="rounded-xl border border-white/[0.08] bg-[#0c101c] p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
          <GraduationCap className="h-4 w-4 text-red-400" />
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
            Komunitas Ramah Pelajar &amp; Mahasiswa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="rounded-lg bg-[#070a12] p-3 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-red-400 mb-1">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs font-bold text-white">Jam Mabar Fleksibel</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Sore (16:30) &amp; malam (20:00 WIB) setelah jam belajar/sekolah selesai.
            </p>
          </div>

          <div className="rounded-lg bg-[#070a12] p-3 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-red-400 mb-1">
              <Shield className="h-3.5 w-3.5" />
              <span className="text-xs font-bold text-white">Izin Pekan Ujian</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Ada ujian (PTS/PAS/UTS/UAS)? Cukup izin di WhatsApp, no kick!
            </p>
          </div>

          <div className="rounded-lg bg-[#070a12] p-3 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-red-400 mb-1">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span className="text-xs font-bold text-white">No Toxic &amp; Solid</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Saling rangkul. Senior membimbing junior cara aim drag shot &amp; rotasi.
            </p>
          </div>

          <div className="rounded-lg bg-[#070a12] p-3 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-red-400 mb-1">
              <Trophy className="h-3.5 w-3.5" />
              <span className="text-xs font-bold text-white">Turnamen Akhir Pekan</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Fast Tournament Sabtu &amp; Minggu berhadiah diamond resmi.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ROSTER UNGGULAN (LIGHTWEIGHT PREVIEW)                  */}
      {/* ========================================================= */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-red-400" />
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
              Roster Unggulan
            </h2>
          </div>

          <button
            onClick={() => onNavigate('anggota')}
            className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 min-h-[36px]"
          >
            <span>Semua Roster ({guildProfile.memberCount})</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* 2 cards on mobile, 4 cards on desktop to prevent mobile vertical clutter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {coreRoster.map((player, idx) => (
            <div
              key={player.id}
              onClick={() => onSelectMember(player.id)}
              className={`group cursor-pointer rounded-xl border border-white/[0.08] bg-[#0c101c] p-3 transition-all hover:border-red-500/50 active:bg-slate-900 ${
                idx >= 2 ? 'hidden sm:block' : 'block'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={player.avatar}
                  alt={player.ign}
                  className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-red-500/50 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors truncate">
                    {player.ign}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 truncate">
                    {player.role} · {player.rank}
                  </p>
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-2 gap-1.5 rounded-lg bg-[#070a12] p-1.5 text-center text-xs font-mono border border-white/[0.04]">
                <div>
                  <span className="text-[9px] text-slate-500 block">K/D</span>
                  <span className="font-bold text-white">{player.kdRatio.toFixed(2)}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block">HEADSHOT</span>
                  <span className="font-bold text-red-400">{player.headshotRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BERITA & ATURAN SINGKAT                                */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
        
        {/* Latest Tournament News */}
        <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#0c101c] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="rounded bg-red-600/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[9px] font-mono font-bold">
                BERITA TURNAMEN
              </span>
              <span className="text-[10px] font-mono text-slate-400">{latestNews.date}</span>
            </div>

            <h3 className="mt-2 text-sm sm:text-base font-bold text-white font-display">
              {latestNews.title}
            </h3>

            <p className="mt-1.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
              {latestNews.summary}
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">Oleh: {latestNews.author}</span>
            <button
              onClick={() => onNavigate('berita')}
              className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 min-h-[36px]"
            >
              <span>Baca Selengkapnya</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Rules Summary */}
        <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#0c101c] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Aturan Wajib Guild
              </h3>
            </div>

            <div className="mt-2.5 space-y-1.5 text-xs">
              <div className="rounded-lg bg-[#070a12] p-2 border border-white/[0.04]">
                <strong className="text-white block text-[11px]">1. Dog Tag Hari Jumat</strong>
                <p className="text-slate-400 text-[10px]">Min. 80 Dog Tag pribadi untuk klaim Custom Room mingguan.</p>
              </div>

              <div className="rounded-lg bg-[#070a12] p-2 border border-white/[0.04]">
                <strong className="text-white block text-[11px]">2. No Cheat / Anti-Toxic</strong>
                <p className="text-slate-400 text-[10px]">Auto-kick permanen bagi pengguna script atau pihak ketiga.</p>
              </div>

              <div className="rounded-lg bg-[#070a12] p-2 border border-white/[0.04]">
                <strong className="text-white block text-[11px]">3. Tag Nama (BH •)</strong>
                <p className="text-slate-400 text-[10px]">Ganti nickname dalam 14 hari setelah lolos masa trial.</p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
            <button
              onClick={() => onNavigate('rules')}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 min-h-[36px]"
            >
              <span>Semua Aturan Guild</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
