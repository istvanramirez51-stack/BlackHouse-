import React, { useState } from 'react';
import { ShieldAlert, Check, Copy, AlertTriangle, BookOpen } from 'lucide-react';
import { guildRulesData, guildProfile } from '../data/guildData';
import { copyToClipboard } from '../utils/socialDirect';

export const RulesView: React.FC = () => {
  const [copiedRules, setCopiedRules] = useState(false);

  const handleCopyRulesSummary = async () => {
    const text = `📜 TATA TERTIB & RULES RESMI GUILD ${guildProfile.name} 📜\n` +
      guildRulesData.map(r => `${r.number}. ${r.title}\n→ ${r.description}\n[Sanksi]: ${r.sanction}\n`).join('\n') +
      `\nID Guild Free Fire: ${guildProfile.guildId}\nMari jaga nama baik komunitas dan raih kemenangan bersama!`;

    await copyToClipboard(text);
    setCopiedRules(true);
    setTimeout(() => setCopiedRules(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
            TATA TERTIB &amp; KODE ETIK
          </p>
          <h2 className="text-xl sm:text-3xl font-bold text-white font-display mt-0.5">
            Peraturan Resmi Guild Black House
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Seluruh anggota wajib mematuhi aturan ini untuk menjaga soliditas tim, fair play, dan nama baik guild di kancah turnamen.
          </p>
        </div>

        <button
          onClick={handleCopyRulesSummary}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-[#0c111d] px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white transition-colors shrink-0 min-h-[44px] active:scale-95"
        >
          {copiedRules ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Rules Disalin ke Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-red-400" />
              <span>Salin Rules untuk Grup WhatsApp</span>
            </>
          )}
        </button>
      </div>

      {/* Rules Cards List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {guildRulesData.map((rule) => (
          <div
            key={rule.id}
            className="rounded-xl border border-white/[0.08] bg-[#0c111d] p-4 sm:p-5 flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-red-400 font-bold">PASAL {rule.number}</span>
                <span className="rounded bg-slate-800 text-slate-400 px-2 py-0.5 text-[10px] uppercase">
                  {rule.category}
                </span>
              </div>

              <h3 className="mt-2 text-sm sm:text-base font-bold text-white">
                {rule.title}
              </h3>

              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                {rule.description}
              </p>
            </div>

            <div className="rounded-lg bg-rose-950/20 border border-rose-500/20 p-2.5 sm:p-3 text-xs text-rose-300">
              <span className="font-bold text-rose-400 block text-[10px] sm:text-[11px] font-mono">
                KONSEKUENSI &amp; SANKSI:
              </span>
              <p className="mt-0.5 text-[11px] text-slate-300 leading-snug">
                {rule.sanction}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Zero Tolerance Callout */}
      <div className="rounded-xl border border-rose-500/30 bg-[#12080a] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-white text-xs sm:text-sm">Komitmen 100% Anti-Cheat &amp; Sportivitas Garena Free Fire</h4>
          <p className="text-slate-400 text-xs mt-0.5">
            Kami tidak mentolerir penggunaan pihak ketiga (auto headshot, antenna, script regedit). Anggota yang terbukti melanggar akan langsung di-kick dan diserahkan ke komunitas esports regional.
          </p>
        </div>
      </div>

    </div>
  );
};
