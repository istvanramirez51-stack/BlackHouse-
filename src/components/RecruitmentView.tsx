import React, { useState } from 'react';
import { UserPlus, Check, ArrowRight, ShieldCheck, Flame, Smartphone, Calendar, Award, MessageCircle, Instagram, Copy, ExternalLink, Sparkles, GraduationCap, Clock, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { guildProfile } from '../data/guildData';
import { FFPlayerRole, FFRankTier } from '../types';
import { createWhatsAppUrl, createInstagramDmUrl, copyToClipboard } from '../utils/socialDirect';

type EducationLevel = 'SMP / MTs' | 'SMA / SMK / MA' | 'Mahasiswa / Kuliah' | 'Umum / Bekerja';

export const RecruitmentView: React.FC = () => {
  const [platform, setPlatform] = useState<'wa' | 'ig'>('wa');
  const [fullName, setFullName] = useState('');
  const [ign, setIgn] = useState('');
  const [ffId, setFfId] = useState('');
  const [age, setAge] = useState('16');
  const [education, setEducation] = useState<EducationLevel>('SMA / SMK / MA');
  const [playTime, setPlayTime] = useState('Malam (19:30 - 22:30 WIB)');
  const [domicile, setDomicile] = useState('');
  const [rank, setRank] = useState<FFRankTier>('Master');
  const [role, setRole] = useState<FFPlayerRole>('Rusher');
  const [kdRatio, setKdRatio] = useState('3.8');
  const [headshotRate, setHeadshotRate] = useState('55%');
  const [device, setDevice] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [agreeCN, setAgreeCN] = useState(true);
  const [agreeDogTag, setAgreeDogTag] = useState(true);
  const [agreeRules, setAgreeRules] = useState(true);

  const [ticketResult, setTicketResult] = useState<{
    ticketId: string;
    ign: string;
    role: string;
    date: string;
    fullMessage: string;
  } | null>(null);

  const [copiedSummary, setCopiedSummary] = useState(false);

  const buildRecruitmentMessage = (ticketId: string) => {
    return `📋 *FORMULIR PENDAFTARAN ANGGOTA NEXUS PRIME* 📋
━━━━━━━━━━━━━━━━━━━━
🎫 *Nomor Tiket:* ${ticketId}
👤 *Nama Lengkap:* ${fullName}
🎂 *Umur:* ${age} Tahun (${education})
📍 *Domisili:* ${domicile}
🎮 *In-Game Name (IGN):* ${ign}
🆔 *ID Free Fire:* ${ffId}
⭐ *Tier Rank:* ${rank}
🎯 *Role:* ${role}
📊 *K/D Ratio Ranked:* ${kdRatio || '-'}
🎯 *Headshot Rate:* ${headshotRate || '-'}
📱 *Device:* ${device}
⏰ *Jadwal Online:* ${playTime}
📞 *Kontak WhatsApp:* ${whatsapp}
━━━━━━━━━━━━━━━━━━━━
✅ *Komitmen Tata Tertib:*
• Siap Change Nick Tag (BH • [Nama]) dalam 14 hari
• Siap Push Dog Tag Hari Jumat (Min. 80 Dog Tag)
• 100% Anti-Cheat & No Toxic pada rekan tim
━━━━━━━━━━━━━━━━━━━━
Halo Pengurus Nexus Prime, saya telah mengajukan formulir pendaftaran anggota baru melalui website resmi. Mohon informasi jadwal tes mekanik trial. Terima kasih!`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !ign || !ffId || !whatsapp) return;

    const ticketId = `BH-TRIAL-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullMessage = buildRecruitmentMessage(ticketId);

    setTicketResult({
      ticketId,
      ign,
      role,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      fullMessage
    });

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Otomatis buka WhatsApp atau Instagram
    try {
      if (platform === 'wa') {
        const waUrl = createWhatsAppUrl(guildProfile.whatsappAdminNumber, fullMessage);
        window.open(waUrl, '_blank');
      } else {
        await copyToClipboard(fullMessage);
        setCopiedSummary(true);
        const igUrl = createInstagramDmUrl(guildProfile.instagramHandle);
        window.open(igUrl, '_blank');
      }
    } catch {
      // Jika pop-up diblokir browser, tombol besar di layar siap diklik langsung
    }
  };

  const handleCopySummary = async () => {
    if (!ticketResult) return;
    await copyToClipboard(ticketResult.fullMessage);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleReset = () => {
    setTicketResult(null);
    setFullName('');
    setIgn('');
    setFfId('');
    setWhatsapp('');
    setDevice('');
    setDomicile('');
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-red-600/20 border border-red-500/30 px-3 py-1 text-xs font-mono font-bold text-red-400 mb-2">
          <Flame className="h-3.5 w-3.5 shrink-0" />
          <span>OPEN MEMBER SEASON 14 · 2 SLOT TERSISA</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-black text-white font-display mt-0.5">
          Pendaftaran Calon Anggota Nexus Prime
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto leading-relaxed">
          Terbuka untuk pelajar SMP, SMA, mahasiswa perkuliahan hingga umum. Data formulir otomatis dibuat rapi untuk dikirim langsung ke WhatsApp / Instagram Admin.
        </p>

        {/* Tip for Students */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 px-3.5 py-1.5 text-[11px] text-emerald-300">
          <GraduationCap className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>Tidak mengganggu jam sekolah. Ujian sekolah/kuliah dipersilakan izin tanpa sanksi!</span>
        </div>
      </div>

      {ticketResult ? (
        /* ========================================================= */
        /* TIKET SELEKSI TRIAL ADMISSION CARD                        */
        /* ========================================================= */
        <div className="rounded-2xl border-2 border-red-500/50 bg-[#0d121f] p-5 sm:p-8 text-center space-y-5 shadow-2xl animate-in fade-in duration-200">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/40">
            <Award className="h-8 w-8 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] font-mono text-red-400 uppercase tracking-widest font-bold">
              KARTU PENDAFTARAN RESMI GUILD
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white font-display mt-1">
              Tiket Registrasi Berhasil Dibuat!
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Nomor Registrasi: <strong className="font-mono text-white text-sm sm:text-base">{ticketResult.ticketId}</strong>
            </p>
          </div>

          <div className="max-w-md mx-auto rounded-xl border border-white/[0.1] bg-[#070a12] p-4 text-left text-xs font-mono space-y-2">
            <div className="flex justify-between border-b border-white/[0.06] pb-2">
              <span className="text-slate-500">In-Game Name (IGN):</span>
              <span className="text-white font-bold">{ticketResult.ign}</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.06] pb-2">
              <span className="text-slate-500">Role Terdaftar:</span>
              <span className="text-red-400 font-bold">{ticketResult.role}</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.06] pb-2">
              <span className="text-slate-500">Tanggal Pengajuan:</span>
              <span className="text-slate-300">{ticketResult.date}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-500">Tahap Berikutnya:</span>
              <span className="text-emerald-400 font-bold">Mabar Trial 1v1 / 4v4 CS</span>
            </div>
          </div>

          {/* Generated Dossier Preview Box */}
          <div className="max-w-md mx-auto rounded-xl border border-white/[0.08] bg-[#06080e] p-3 text-left text-[11px] font-mono text-slate-300 whitespace-pre-line max-h-40 overflow-y-auto">
            {ticketResult.fullMessage}
          </div>

          {/* Primary Action Buttons (Clickable <a> tags avoid popup blocking bugs) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 max-w-lg mx-auto">
            <a
              href={createWhatsAppUrl(guildProfile.whatsappAdminNumber, ticketResult.fullMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 active:scale-95 transition-all min-h-[48px] flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>Buka WhatsApp &amp; Kirim Berkas</span>
            </a>

            <a
              href={createInstagramDmUrl(guildProfile.instagramHandle)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopySummary}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-4 py-3.5 text-xs font-bold text-white shadow-lg shadow-pink-600/30 active:scale-95 transition-all min-h-[48px] flex items-center justify-center gap-2 text-center"
            >
              <Instagram className="h-4 w-4 shrink-0" />
              <span>Kirim via IG</span>
            </a>

            <button
              onClick={handleCopySummary}
              className="rounded-xl border border-white/[0.12] bg-slate-900 px-4 py-3.5 text-xs font-medium text-slate-300 hover:text-white min-h-[48px] flex items-center justify-center gap-1.5 active:scale-95"
            >
              {copiedSummary ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copiedSummary ? 'Format Tersalin!' : 'Salin Teks'}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white underline min-h-[40px]"
            >
              Daftarkan Akun Lain / Edit Formulir
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* APPLICATION RECRUITMENT FORM                              */
        /* ========================================================= */
        <div className="rounded-2xl border border-white/[0.08] bg-[#0c111d] p-4 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-xs">
            
            {/* Target Destination Choice */}
            <div className="rounded-xl border border-white/[0.08] bg-[#070a12] p-3.5">
              <label className="font-semibold text-slate-200 block mb-2 text-xs sm:text-sm">
                Pilih Jalur Pengiriman Berkas Otomatis:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <label
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer transition-all min-h-[52px] ${
                    platform === 'wa'
                      ? 'border-emerald-500 bg-emerald-950/30 text-white font-bold ring-1 ring-emerald-500/50'
                      : 'border-white/[0.06] bg-slate-900/60 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <input
                    type="radio"
                    name="recruitment_platform"
                    value="wa"
                    checked={platform === 'wa'}
                    onChange={() => setPlatform('wa')}
                    className="text-emerald-500 accent-emerald-500 h-4 w-4"
                  />
                  <MessageCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold">WhatsApp Admin (Paling Cepat)</p>
                    <p className="text-[10px] text-slate-400">Otomatis terisi format berkas lengkap ke WA pengurus</p>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer transition-all min-h-[52px] ${
                    platform === 'ig'
                      ? 'border-pink-500 bg-pink-950/30 text-white font-bold ring-1 ring-pink-500/50'
                      : 'border-white/[0.06] bg-slate-900/60 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <input
                    type="radio"
                    name="recruitment_platform"
                    value="ig"
                    checked={platform === 'ig'}
                    onChange={() => setPlatform('ig')}
                    className="text-pink-500 accent-pink-500 h-4 w-4"
                  />
                  <Instagram className="h-5 w-5 text-pink-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold">Instagram DM (@{guildProfile.instagramHandle})</p>
                    <p className="text-[10px] text-slate-400">Salin format formulir &amp; kirim via Direct Message</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 1: Identitas Pemain & Jenjang Pendidikan */}
            <div>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                01. IDENTITAS PEMAIN &amp; STATUS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-medium text-slate-300 block mb-1">Nama Lengkap / Panggilan</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Jenjang Pendidikan / Status</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value as EducationLevel)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  >
                    <option value="SMP / MTs">SMP / MTs (Pelajar)</option>
                    <option value="SMA / SMK / MA">SMA / SMK / MA (Pelajar)</option>
                    <option value="Mahasiswa / Kuliah">Mahasiswa (Perkuliahan)</option>
                    <option value="Umum / Bekerja">Umum / Bekerja</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Umur (Tahun)</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Contoh: 16"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="font-medium text-slate-300 block mb-1">Kota Domisili</label>
                  <input
                    type="text"
                    required
                    value={domicile}
                    onChange={(e) => setDomicile(e.target.value)}
                    placeholder="Contoh: Jakarta / Surabaya / Bandung"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Waktu Luang Mabar Biasanya</label>
                  <select
                    value={playTime}
                    onChange={(e) => setPlayTime(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  >
                    <option value="Sore (16:30 - 18:30 WIB)">Sore (Sepulang Sekolah/Kuliah)</option>
                    <option value="Malam (19:30 - 22:30 WIB)">Malam (19:30 - 22:30 WIB)</option>
                    <option value="Akhir Pekan (Sabtu & Minggu Bebas)">Akhir Pekan / Weekend Bebas</option>
                    <option value="Fleksibel Setiap Hari">Fleksibel Setiap Hari</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Data Akun Free Fire */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                02. STATISTIK AKUN FREE FIRE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-slate-300 block mb-1">In-Game Name (IGN) Saat Ini</label>
                  <input
                    type="text"
                    required
                    value={ign}
                    onChange={(e) => setIgn(e.target.value)}
                    placeholder="Contoh: REXX • 99 YGY"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>
                <div>
                  <label className="font-medium text-slate-300 block mb-1">ID Free Fire (8-10 Digit Angka)</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    value={ffId}
                    onChange={(e) => setFfId(e.target.value)}
                    placeholder="Contoh: 1049281742"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white font-mono focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-3">
                <div>
                  <label className="font-medium text-slate-300 block mb-1">Tier Rank Saat Ini</label>
                  <select
                    value={rank}
                    onChange={(e) => setRank(e.target.value as any)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  >
                    <option value="Grandmaster">Grandmaster ⭐</option>
                    <option value="Master">Master</option>
                    <option value="Heroic">Heroic</option>
                    <option value="Diamond">Diamond</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Role Utama</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  >
                    <option value="Rusher">Rusher (SG2 / SMG)</option>
                    <option value="Sniper">Sniper (AWM / Barret)</option>
                    <option value="Support">Support (Grenade / Healer)</option>
                    <option value="In-Game Leader (IGL)">In-Game Leader (IGL)</option>
                    <option value="Flex">Flex (Serbaguna)</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">K/D Ratio Ranked</label>
                  <input
                    type="text"
                    value={kdRatio}
                    onChange={(e) => setKdRatio(e.target.value)}
                    placeholder="Contoh: 3.5"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white font-mono focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Headshot Rate (%)</label>
                  <input
                    type="text"
                    value={headshotRate}
                    onChange={(e) => setHeadshotRate(e.target.value)}
                    placeholder="Contoh: 50%"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white font-mono focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Device & Kontak WhatsApp */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                03. PERANGKAT HP &amp; KONTAK WHATSAPP
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-slate-300 block mb-1">HP / Device Gaming</label>
                  <input
                    type="text"
                    required
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    placeholder="Misal: Infinix GT 10 / Redmi Note 12 / iPhone 11"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-300 block mb-1">Nomor WhatsApp Aktif</label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="081234567890 (Untuk konfirmasi jadwal mabar)"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#070a12] px-3.5 py-3 text-white focus:border-red-500/60 focus:outline-none min-h-[46px]"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Komitmen & Tata Tertib (Mobile touch checkboxes) */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                04. KESEPAKATAN TATA TERTIB GUILD
              </p>

              <label className="flex items-start gap-3 cursor-pointer text-slate-300 p-2.5 rounded-xl hover:bg-slate-900/60 border border-white/[0.04]">
                <input
                  type="checkbox"
                  checked={agreeCN}
                  onChange={(e) => setAgreeCN(e.target.checked)}
                  className="mt-0.5 h-4.5 w-4.5 rounded border-white/20 bg-slate-900 accent-red-600 text-red-600 shrink-0"
                />
                <span className="leading-snug">Saya bersedia mengganti nama akun menggunakan format <strong>BH • [Nama]</strong> dalam kurun waktu 14 hari jika dinyatakan lolos trial.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-slate-300 p-2.5 rounded-xl hover:bg-slate-900/60 border border-white/[0.04]">
                <input
                  type="checkbox"
                  checked={agreeDogTag}
                  onChange={(e) => setAgreeDogTag(e.target.checked)}
                  className="mt-0.5 h-4.5 w-4.5 rounded border-white/20 bg-slate-900 accent-red-600 text-red-600 shrink-0"
                />
                <span className="leading-snug">Saya bersedia menyumbangkan minimal 80 Dog Tag pada hari Jumat malam demi jatah Custom Room mingguan bersama.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-slate-300 p-2.5 rounded-xl hover:bg-slate-900/60 border border-white/[0.04]">
                <input
                  type="checkbox"
                  checked={agreeRules}
                  onChange={(e) => setAgreeRules(e.target.checked)}
                  className="mt-0.5 h-4.5 w-4.5 rounded border-white/20 bg-slate-900 accent-red-600 text-red-600 shrink-0"
                />
                <span className="leading-snug">Saya menjamin tidak pernah menggunakan cheat/program ilegal dan saling menghormati rekan satu tim (no toxic).</span>
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={!agreeCN || !agreeDogTag || !agreeRules}
              className="w-full rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-red-600/30 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[50px]"
            >
              <UserPlus className="h-4 w-4 shrink-0" />
              <span>
                Kirim Formulir Pendaftaran ke {platform === 'wa' ? 'WhatsApp' : 'Instagram'}
              </span>
            </button>

          </form>
        </div>
      )}

    </div>
  );
};
