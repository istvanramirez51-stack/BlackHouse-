import React, { useState } from 'react';
import { Swords, Users, Calendar, Check, Clock, Send, ShieldAlert, MessageCircle, Instagram, Copy, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { preloadedScrimRequests, guildProfile } from '../data/guildData';
import { ScrimRequest } from '../types';
import { createWhatsAppUrl, createInstagramDmUrl, copyToClipboard } from '../utils/socialDirect';

export const RequestView: React.FC = () => {
  const [requestType, setRequestType] = useState<'scrim' | 'mabar'>('scrim');
  const [platform, setPlatform] = useState<'wa' | 'ig'>('wa');
  const [scrimList, setScrimList] = useState<ScrimRequest[]>(preloadedScrimRequests);

  // Scrim form state
  const [opponentGuild, setOpponentGuild] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mode, setMode] = useState<'4v4 Clash Squad' | 'Battle Royale (BR) 12 Tim' | 'Fast Tournament'>('4v4 Clash Squad');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [crProvidedBy, setCrProvidedBy] = useState<'Penantang' | 'NEXUS' | 'Patungan (1 CR Masing-Masing)'>('Patungan (1 CR Masing-Masing)');
  const [notes, setNotes] = useState('');
  
  // Submission outcome states
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [lastSentText, setLastSentText] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Mabar request state
  const [mabarIgn, setMabarIgn] = useState('');
  const [mabarFfId, setMabarFfId] = useState('');
  const [mabarMode, setMabarMode] = useState('Push Rank Clash Squad (CS)');
  const [mabarPlatform, setMabarPlatform] = useState<'wa' | 'ig'>('wa');
  const [mabarSuccess, setMabarSuccess] = useState(false);
  const [lastMabarText, setLastMabarText] = useState('');

  const buildScrimMessage = () => {
    return `🔥 *TANTANGAN SCRIM / GUILD WAR - BLACK HOUSE* 🔥
━━━━━━━━━━━━━━━━━━━━
🎮 *Guild Penantang:* ${opponentGuild}
👤 *Kapten / IGL:* ${captainName}
📱 *No WhatsApp Penantang:* ${whatsapp}
⚔️ *Format Mode:* ${mode}
📅 *Rencana Jadwal:* ${date || 'Menyesuaikan Jadwal'} (${time || '20:30 WIB'})
🎫 *Tiket Custom Room (CR):* ${crProvidedBy}
📝 *Rules / Catatan:* ${notes || 'Standar Turnamen (No Grenade / Armor Lv 2 / 1500 Koin)'}
━━━━━━━━━━━━━━━━━━━━
Halo Admin Nexus Prime, kami dari guild ${opponentGuild} ingin mengajukan tantangan sparring/scrim resmi sesuai data di atas. Mohon konfirmasi jadwal dan room. Terima kasih!`;
  };

  const handleScrimSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!opponentGuild || !captainName || !whatsapp) return;

    const formattedMessage = buildScrimMessage();
    setLastSentText(formattedMessage);

    // const newReq: ScrimRequest = {
    //   id: `scrim-${Date.now()}`,
    //   opponentGuild,
    //   captainName,
    //   whatsapp,
    //   mode,
    //   date: date || 'Menyesuaikan Jadwal',
    //   time: time || '20:30 WIB',
    //   crProvidedBy,
    //   notes,
    //   status: 'Menunggu Konfirmasi'
    // };

    // setScrimList([newReq, ...scrimList]);
    // setSubmittedSuccess(true);
    // confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });

    // Otomatis arahkan ke WhatsApp atau Instagram
    try {
      if (platform === 'wa') {
        const waUrl = createWhatsAppUrl(guildProfile.whatsappAdminNumber, formattedMessage);
        window.open(waUrl, '_blank');
      } else {
        await copyToClipboard(formattedMessage);
        setCopiedMessage(true);
        const igUrl = createInstagramDmUrl(guildProfile.instagramHandle);
        window.open(igUrl, '_blank');
      }
    } catch {
      // Tombol navigasi langsung di layar siap diklik
    }
  };

  const buildMabarMessage = () => {
    return `🎮 *REQUEST MABAR / PUSH RANK KOMUNITAS* 🎮
━━━━━━━━━━━━━━━━━━━━
👤 *In-Game Name (IGN):* ${mabarIgn}
🆔 *ID Free Fire:* ${mabarFfId}
🎯 *Mode:* ${mabarMode}
━━━━━━━━━━━━━━━━━━━━
Halo Rekan Nexus Prime, izin request mabar push rank bersama anggota guild. ID FF saya siap di-add!`;
  };

  const handleMabarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mabarIgn || !mabarFfId) return;

    const formattedMessage = buildMabarMessage();
    setLastMabarText(formattedMessage);
    setMabarSuccess(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });

    // Otomatis alihkan ke WA atau IG
    try {
      if (mabarPlatform === 'wa') {
        const waUrl = createWhatsAppUrl(guildProfile.whatsappAdminNumber, formattedMessage);
        window.open(waUrl, '_blank');
      } else {
        await copyToClipboard(formattedMessage);
        const igUrl = createInstagramDmUrl(guildProfile.instagramHandle);
        window.open(igUrl, '_blank');
      }
    } catch {
      // Tombol langsung siap di klik
    }
  };

  const handleCopyText = async (text: string) => {
    await copyToClipboard(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleResetForm = () => {
    setSubmittedSuccess(false);
    setOpponentGuild('');
    setCaptainName('');
    setWhatsapp('');
    setDate('');
    setTime('');
    setNotes('');
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      
      {/* Header */}
      <div className="pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
            SPARRING &amp; KOLABORASI OTOMATIS
          </span>
          <span className="rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.2 text-[9px] font-mono font-bold flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Terhubung ke WhatsApp &amp; Instagram
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-white font-display mt-0.5">
          Request Scrim Guild War &amp; Mabar
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Kirim formulir tantangan sparring 4v4 Clash Squad atau request mabar langsung ke WhatsApp pengurus atau Instagram official tanpa perlu menunggu respon database server!
        </p>

        {/* Tab switcher: Mobile full width segment */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setRequestType('scrim')}
            className={`flex-1 sm:flex-none justify-center rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors flex items-center gap-1.5 min-h-[44px] ${
              requestType === 'scrim'
                ? 'bg-red-600 text-white shadow-sm font-bold shadow-red-600/30'
                : 'border border-white/[0.08] bg-[#0c111d] text-slate-400 hover:text-white'
            }`}
          >
            <Swords className="h-4 w-4" />
            <span>Tantang Scrim (Guild War)</span>
          </button>

          <button
            onClick={() => setRequestType('mabar')}
            className={`flex-1 sm:flex-none justify-center rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors flex items-center gap-1.5 min-h-[44px] ${
              requestType === 'mabar'
                ? 'bg-red-600 text-white shadow-sm font-bold shadow-red-600/30'
                : 'border border-white/[0.08] bg-[#0c111d] text-slate-400 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Request Mabar Komunitas</span>
          </button>
        </div>
      </div>

      {/* Main Request Form & Pending List */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
        
        {/* Form Container (Left 7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0c111d] p-4 sm:p-7">
          
          {requestType === 'scrim' ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Formulir Pengajuan Scrim / Sparring
                </h3>
                <span className="text-[10px] sm:text-[11px] font-mono text-red-400 font-bold">
                  Format Otomatis ke WA / IG
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Data yang diisi akan otomatis disusun menjadi pesan rapi dan diteruskan langsung ke WhatsApp atau Instagram pengurus.
              </p>

              {submittedSuccess ? (
                /* Success Card with Direct Forward Links */
                <div className="mt-5 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-5 sm:p-7 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <Check className="h-6 w-6 stroke-[2.5]" />
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">
                      Tantangan Scrim Berhasil Disusun!
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      {platform === 'wa'
                        ? 'Website telah mengarahkan tantangan Anda ke WhatsApp Admin. Jika chat tidak terbuka otomatis, klik tombol di bawah.'
                        : 'Format tantangan telah disalin ke clipboard Anda dan diarahkan ke Instagram DM.'}
                    </p>
                  </div>

                  {/* Message Preview Box */}
                  <div className="rounded-xl border border-white/[0.1] bg-[#070a12] p-3.5 text-left text-[11px] font-mono text-slate-300 whitespace-pre-line max-h-48 overflow-y-auto">
                    {lastSentText}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 pt-1">
                    <a
                      href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, lastSentText)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 min-h-[44px] transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Kirim Ulang ke WhatsApp Admin</span>
                    </a>

                    <a
                      href={createInstagramDmUrl(guildProfile.instagramHandle)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleCopyText(lastSentText)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-pink-600/30 min-h-[44px] transition-all"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Kirim ke Instagram DM (@{guildProfile.instagramHandle})</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyText(lastSentText)}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white min-h-[44px]"
                    >
                      {copiedMessage ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      <span>{copiedMessage ? 'Tersalin' : 'Salin Teks'}</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Ajukan Tantangan Scrim Lainnya
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleScrimSubmit} className="mt-4 space-y-4 text-xs">
                  
                  {/* Select Destination Platform */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#070a12] p-3">
                    <label className="font-semibold text-slate-200 block mb-2">
                      Pilih Tujuan Pengiriman Otomatis:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                          platform === 'wa'
                            ? 'border-emerald-500 bg-emerald-950/30 text-white font-bold'
                            : 'border-white/[0.06] bg-slate-900/60 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="scrim_platform"
                          value="wa"
                          checked={platform === 'wa'}
                          onChange={() => setPlatform('wa')}
                          className="text-emerald-500 accent-emerald-500 h-4 w-4"
                        />
                        <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs">WhatsApp Admin (Rekomendasi)</p>
                          <p className="text-[10px] text-slate-400 font-mono">Chat langsung terisi format pesan</p>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                          platform === 'ig'
                            ? 'border-pink-500 bg-pink-950/30 text-white font-bold'
                            : 'border-white/[0.06] bg-slate-900/60 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="scrim_platform"
                          value="ig"
                          checked={platform === 'ig'}
                          onChange={() => setPlatform('ig')}
                          className="text-pink-500 accent-pink-500 h-4 w-4"
                        />
                        <Instagram className="h-4 w-4 text-pink-400 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs">Instagram DM (@{guildProfile.instagramHandle})</p>
                          <p className="text-[10px] text-slate-400 font-mono">Salin teks &amp; buka pesan Instagram</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Nama Guild Penantang</label>
                      <input
                        type="text"
                        required
                        value={opponentGuild}
                        onChange={(e) => setOpponentGuild(e.target.value)}
                        placeholder="Misal: VORTEX ESPORTS"
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Nama / IGN Kapten</label>
                      <input
                        type="text"
                        required
                        value={captainName}
                        onChange={(e) => setCaptainName(e.target.value)}
                        placeholder="Misal: VTX • Rexxar"
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Nomor WhatsApp Aktif Penantang</label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="081234567890 (Untuk konfirmasi)"
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Format Pertandingan</label>
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value as any)}
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      >
                        <option value="4v4 Clash Squad">4v4 Clash Squad (CS) Multi-Round</option>
                        <option value="Battle Royale (BR) 12 Tim">Battle Royale (BR) 12 Tim</option>
                        <option value="Fast Tournament">Fast Tournament Bracket</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Rencana Hari &amp; Jam</label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Misal: Besok Malam (20:30 WIB)"
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">Penyedia Tiket Custom Room (CR)</label>
                      <select
                        value={crProvidedBy}
                        onChange={(e) => setCrProvidedBy(e.target.value as any)}
                        className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                      >
                        <option value="Patungan (1 CR Masing-Masing)">Patungan (1 CR Masing-Masing)</option>
                        <option value="Penantang">Disediakan Penuh oleh Penantang</option>
                        <option value="NEXUS">Disediakan oleh BLACK HOUSE</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">Catatan Tambahan &amp; Rules Khusus</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: No Grenade, Armor Lv 2, Koin 1500, match Best of 3."
                      className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-2.5 text-white focus:border-red-500/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 py-3.5 font-bold text-white transition-all flex items-center justify-center gap-2 min-h-[48px] active:scale-95 shadow-lg shadow-red-600/30"
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      Kirim Tantangan Otomatis ke {platform === 'wa' ? 'WhatsApp' : 'Instagram'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Request Mabar &amp; Push Rank Komunitas
                </h3>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold">
                  Otomatis Teruskan ID FF
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Punya tier Master / Grandmaster dan butuh teman mabar kompak? Kirim ID akun Anda otomatis ke WA / IG admin agar di-add ke room mabar.
              </p>

              {mabarSuccess ? (
                <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 sm:p-7 text-center space-y-3">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Check className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-base font-bold text-white">Request Mabar Berhasil Terkirim!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Data ID Free Fire Anda telah disusun dan diarahkan ke kontak pengurus.
                  </p>
                  
                  <div className="rounded-xl border border-white/[0.1] bg-[#070a12] p-3 text-left text-xs font-mono text-slate-300 whitespace-pre-line">
                    {lastMabarText}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                    <a
                      href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, lastMabarText)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Buka Chat WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setMabarSuccess(false)}
                      className="rounded-xl border border-white/20 px-4 py-2.5 text-xs text-slate-300 hover:text-white"
                    >
                      Kirim Request Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleMabarSubmit} className="mt-4 space-y-3.5 text-xs">
                  
                  {/* Platform selection for Mabar */}
                  <div className="flex gap-2">
                    <label className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer ${
                      mabarPlatform === 'wa' ? 'border-emerald-500 bg-emerald-950/30 text-white font-bold' : 'border-white/[0.08] bg-[#070a12] text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="mabar_platform"
                        checked={mabarPlatform === 'wa'}
                        onChange={() => setMabarPlatform('wa')}
                        className="text-emerald-500 accent-emerald-500"
                      />
                      <MessageCircle className="h-4 w-4 text-emerald-400" />
                      <span>WhatsApp Admin</span>
                    </label>

                    <label className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer ${
                      mabarPlatform === 'ig' ? 'border-pink-500 bg-pink-950/30 text-white font-bold' : 'border-white/[0.08] bg-[#070a12] text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="mabar_platform"
                        checked={mabarPlatform === 'ig'}
                        onChange={() => setMabarPlatform('ig')}
                        className="text-pink-500 accent-pink-500"
                      />
                      <Instagram className="h-4 w-4 text-pink-400" />
                      <span>Instagram DM</span>
                    </label>
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">In-Game Name (IGN) Anda</label>
                    <input
                      type="text"
                      required
                      value={mabarIgn}
                      onChange={(e) => setMabarIgn(e.target.value)}
                      placeholder="Misal: AURA • Hunter"
                      className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">ID Free Fire (8-10 Digit)</label>
                    <input
                      type="text"
                      required
                      value={mabarFfId}
                      onChange={(e) => setMabarFfId(e.target.value)}
                      placeholder="Misal: 1948201948"
                      className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white font-mono focus:border-red-500/50 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">Mode Mabar Pilihan</label>
                    <select
                      value={mabarMode}
                      onChange={(e) => setMabarMode(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3 py-3 text-white focus:border-red-500/50 focus:outline-none min-h-[44px]"
                    >
                      <option value="Push Rank Clash Squad (CS)">Push Rank Clash Squad (CS Mode)</option>
                      <option value="Push Rank Battle Royale (BR)">Push Rank Battle Royale</option>
                      <option value="Mabar Santai / Latihan Aset CR">Mabar Santai / Latihan Custom Room</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-red-600 hover:bg-red-500 py-3.5 font-bold text-white transition-colors flex items-center justify-center gap-2 min-h-[48px] active:scale-95 shadow-md shadow-red-600/30"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Request ke {mabarPlatform === 'wa' ? 'WhatsApp' : 'Instagram'}</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Right Column: Live Pending Tantangan Scrim */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <h4 className="text-xs sm:text-sm font-bold text-white font-display">
              Jadwal Tantangan Scrim Masuk
            </h4>
            <span className="text-[10px] font-mono text-slate-500">Live Status</span>
          </div>

          <div className="space-y-2.5">
            {scrimList.map((req) => (
              <div
                key={req.id}
                className="rounded-xl border border-white/[0.08] bg-[#0c111d] p-3.5 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-white text-xs sm:text-sm">{req.opponentGuild}</strong>
                  <span className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-semibold ${
                    req.status === 'Diterima'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {req.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 space-y-0.5 font-mono">
                  <p>Kapten: {req.captainName} · {req.mode}</p>
                  <p>Jadwal: {req.date} ({req.time})</p>
                  <p>CR: {req.crProvidedBy}</p>
                </div>

                {req.notes && (
                  <p className="rounded bg-[#070a12] p-2 text-[10px] sm:text-[11px] text-slate-300 border border-white/[0.04]">
                    Rules: {req.notes}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Quick Direct Link Card to Instagram & WhatsApp */}
          <div className="rounded-xl border border-white/[0.08] bg-[#070a12] p-4 text-xs space-y-2.5">
            <p className="font-semibold text-white flex items-center gap-1.5 text-xs font-display">
              <Sparkles className="h-3.5 w-3.5 text-red-400" />
              Kontak Langsung Divisi Scrim
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Punya jadwal turnamen mendadak atau ingin sparring kilat malam ini? Chat pengurus via tombol langsung:
            </p>
            <div className="flex gap-2">
              <a
                href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, 'Halo Admin Nexus Prime, saya ingin tanya jadwal scrim kosong malam ini.')}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 p-2 text-center text-[11px] font-bold text-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={guildProfile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-lg bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/40 p-2 text-center text-[11px] font-bold text-pink-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Instagram className="h-3.5 w-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
