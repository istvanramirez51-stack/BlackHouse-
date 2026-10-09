import React from 'react';
import { Target, Heart, Award, Shield, CheckCircle2, Trophy, Clock } from 'lucide-react';
import { guildProfile } from '../data/guildData';

export const OriginsView: React.FC = () => {
  const milestones = [
    {
      year: 'November 2022',
      title: 'Kelahiran Nexus Prime',
      desc: 'Dimulai dari 4 orang kawan satu tongkrongan di warung kopi Jakarta yang ingin squad tetap solid untuk push rank Master tanpa pemain random.'
    },
    {
      year: 'Juli 2023',
      title: 'Trofi Pertama di Fast Tournament',
      desc: 'Squad 1 meraih Juara 1 Fast Tournament Clash Squad regional Jabodetabek, mengalahkan 32 tim penantang.'
    },
    {
      year: 'Maret 2024',
      title: 'Pembentukan Sistem Roster & Trial',
      desc: 'Mulai menerapkan seleksi mekanik resmi, apel mingguan, dan integrasi discord voice untuk rotasi scrim Battle Royale.'
    },
    {
      year: '2025 - 2026',
      title: 'Pencapaian Guild Level 6 (Max)',
      desc: 'Mencapai kapasitas 50 anggota penuh, konsisten mencatatkan 2.400+ Dog Tag mingguan, dan memiliki 2 squad kompetitif resmi.'
    }
  ];

  const pillars = [
    {
      title: 'Solidaritas Tanpa Kasta',
      desc: 'Tidak ada senioritas berlebihan antara pemain Grandmaster dan member baru. Semua pemain saling berbagi ilmu gameplay dan rotasi map.'
    },
    {
      title: 'Jalur Pembinaan Roster',
      desc: 'Member baru yang memiliki potensi mekanik diberikan jam terbang di scrim mingguan agar terlatih mental panggung kompetitif.'
    },
    {
      title: 'Komunitas Sehat & Bebas Drama',
      desc: 'Fokus kami adalah mengasah aim, kekompakan squad, dan meraih Booyah. Kami melarang gosip internal atau perpecahan.'
    },
    {
      title: 'Transparansi Penuh',
      desc: 'Hadiah kemenangan turnamen dan penggunaan Custom Room dicatat terbuka oleh pengurus guild demi keadilan bersama.'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <div className="pb-6 border-b border-white/[0.08]">
        <p className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
          VISI, MISI &amp; SEJARAH KAMI
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mt-1">
          Alasan Terbentuknya Komunitas Nexus Prime
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
          Kisah nyata di balik layar tentang bagaimana sebuah perkumpulan mabar biasa berevolusi menjadi salah satu guild paling disiplin di skena Free Fire Indonesia.
        </p>
      </div>

      {/* Narrative Story Section */}
      <div className="rounded-2xl border border-white/[0.08] bg-[#0c111d] p-6 sm:p-10 space-y-5">
        <h3 className="text-xl font-bold text-white font-display">
          "Bosan Bermain Solo, Muak dengan Clan yang Hanya Ramai di Awal"
        </h3>
        
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Pada akhir tahun 2022, banyak dari kami yang aktif bermain Free Fire merasa jenuh. Ketika bermain solo ranked, sering kali bertemu rekan tim yang AFK, tidak menyalakan mikrofon, atau bermain individualis. Di sisi lain, ketika bergabung dengan guild-guild publik, sering kali hanya aktif beberapa minggu lalu mati suri — hari Jumat tidak ada yang push Dog Tag, dan slot Custom Room pun hangus.
          </p>
          <p>
            Dari keresahan tersebut, <strong className="text-white">BH • V4NZ</strong> bersama rekannya memutuskan membuat rumah baru bernama <strong className="text-red-400">NEXUS PRIME</strong>. Prinsipnya sederhana: kami tidak mencari pemain yang hanya sekadar jago statistik tapi sombong, kami mencari pemain yang setia, menghargai waktu rekan setimnya, dan mau berjuang bersama untuk Booyah.
          </p>
          <p>
            Hingga hari ini di tahun 2026, Nexus Prime telah menorehkan 28 piala turnamen komunitas, mencapai Guild Level 6, dan melahirkan pemain-pemain yang disegani di mode Clash Squad maupun Battle Royale.
          </p>
        </div>
      </div>

      {/* Visi & 4 Misi */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Visi Card */}
        <div className="lg:col-span-5 rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-950/20 to-[#0c111d] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 text-red-400 mb-4">
              <Target className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-mono uppercase text-red-400 font-bold">VISI GUILD</span>
            <h3 className="text-xl font-bold text-white font-display mt-1">
              Menjadi Guild Tier-1 yang Memadukan Kekeluargaan dan Prestasi Nyata.
            </h3>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Membuktikan kepada komunitas game Indonesia bahwa guild yang sehat dan beretika tinggi mampu melahirkan atlet-atlet esports yang tangguh di arena nasional.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-slate-400">
            ID Guild: {guildProfile.guildId} · Regional Indonesia
          </div>
        </div>

        {/* 4 Pilar Misi */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.08] bg-[#0c111d] p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">MISI 0{idx + 1}</span>
                <h4 className="text-sm font-bold text-white mt-1">{pillar.title}</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Prinsip Wajib</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Timeline Milestones */}
      <div className="rounded-2xl border border-white/[0.08] bg-[#0c111d] p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white font-display mb-6">
          Linimasa Perjalanan Guild (2022 - 2026)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {milestones.map((m, idx) => (
            <div key={idx} className="pt-4 sm:pt-0 sm:px-4 first:pl-0 last:pr-0">
              <span className="text-xs font-mono font-bold text-red-400">{m.year}</span>
              <h4 className="text-sm font-bold text-white mt-1">{m.title}</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
