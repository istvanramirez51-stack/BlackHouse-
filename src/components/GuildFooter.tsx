import React from 'react';
import { guildProfile } from '../data/guildData';
import { ActiveTab } from './GuildNavbar';

interface GuildFooterProps {
  onSelectTab: (tab: ActiveTab) => void;
}

export const GuildFooter: React.FC<GuildFooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080e] text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 pb-10 border-b border-white/[0.08]">
          
          {/* Col 1: Guild Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden ring-1.5 ring-red-500/50 shadow-md shadow-red-600/30 bg-black shrink-0">
                <img
                  src={guildProfile.emblemUrl}
                  alt={guildProfile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-white font-display">
                {guildProfile.name} ESPORTS
              </span>
            </div>
            
            <p className="max-w-sm text-slate-400 text-xs leading-relaxed">
              Komunitas guild Free Fire kompetitif Indonesia. Menjunjung tinggi disiplin push Dog Tag mingguan, fair play 100%, dan kekompakan tim dalam turnamen.
            </p>

            <div className="text-[11px] font-mono text-slate-500 space-y-0.5">
              <p>ID Guild FF: <span className="text-white font-bold">{guildProfile.guildId}</span></p>
              <p>Guild Level: 6 (Maksimal) · Tag: {guildProfile.tag}</p>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (Semua 8 Menu) */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-mono uppercase text-white font-bold tracking-wider">
              Navigasi Halaman
            </p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <button onClick={() => onSelectTab('beranda')} className="text-left text-slate-400 hover:text-white">Beranda</button>
              <button onClick={() => onSelectTab('anggota')} className="text-left text-slate-400 hover:text-white">Anggota Roster</button>
              <button onClick={() => onSelectTab('berita')} className="text-left text-slate-400 hover:text-white">Berita &amp; Scrim</button>
              <button onClick={() => onSelectTab('rules')} className="text-left text-slate-400 hover:text-white">Rules &amp; Tata Tertib</button>
              <button onClick={() => onSelectTab('alasan')} className="text-left text-slate-400 hover:text-white">Kisah &amp; Visi Guild</button>
              <button onClick={() => onSelectTab('faq')} className="text-left text-slate-400 hover:text-white">FAQ Tanya Jawab</button>
              <button onClick={() => onSelectTab('request')} className="text-left text-slate-400 hover:text-white">Tantang Scrim</button>
              <button onClick={() => onSelectTab('pendaftaran')} className="text-left text-red-400 font-semibold hover:text-red-300">Open Member</button>
            </div>
          </div>

          {/* Col 3: Media & Kontak Guild */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-[11px] font-mono uppercase text-white font-bold tracking-wider">
              Saluran Resmi Komunitas
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href={`https://wa.me/${guildProfile.whatsappAdminNumber}?text=${encodeURIComponent('Halo Pengurus Nexus Prime, saya ingin bertanya atau mengirim pesan seputar guild...')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp Admin (Chat Langsung)</span>
                </a>
              </li>
              <li>
                <a
                  href={guildProfile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                  <span>Instagram Official (@{guildProfile.instagramHandle})</span>
                </a>
              </li>
              <li>
                <a href={guildProfile.whatsappGroup} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline">
                  WhatsApp Group Info &amp; Rekrutmen
                </a>
              </li>
              <li>
                <a href={guildProfile.discordUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                  Discord Server (Voice Scrim 4v4)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2022 - 2026 Black HOuse Esports. Hak cipta dilindungi.</p>
          <p>
            Free Fire adalah merek dagang terdaftar milik Garena International / Black House. Situs ini adalah portal komunitas pemain independen.
          </p>
        </div>

      </div>
    </footer>
  );
};
