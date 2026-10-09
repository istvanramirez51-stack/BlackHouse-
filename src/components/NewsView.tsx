import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, X } from 'lucide-react';
import { guildNewsData } from '../data/guildData';
import { GuildNews } from '../types';

export const NewsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeArticle, setActiveArticle] = useState<GuildNews | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArticle]);

  const categories = ['Semua', 'Turnamen', 'Jadwal Scrim', 'Pengumuman', 'Patch Meta'];

  const filteredNews = selectedCategory === 'Semua'
    ? guildNewsData
    : guildNewsData.filter(n => n.category === selectedCategory);

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-white/[0.08]">
        <div>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
            WARTA &amp; PENGUMUMAN
          </p>
          <h2 className="text-xl sm:text-3xl font-bold text-white font-display mt-0.5">
            Berita Guild &amp; Jadwal Kompetisi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Rekap kemenangan turnamen, pengumuman jadwal scrim rutin, dan analisis meta patch Free Fire.
          </p>
        </div>

        {/* Filter categories with horizontal touch scroll */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-[#0c111d] w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-medium transition-colors shrink-0 min-h-[44px] ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tournament Article Banner (Mobile Responsive) */}
      <div className="rounded-2xl border border-white/[0.1] bg-[#0c111d] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 relative h-48 sm:h-64 lg:h-auto min-h-[200px]">
          <img
            src="/src/assets/images/ff_tournament_trophy_1791470706597.jpg"
            alt="Trofi Juara Turnamen Free Fire"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0c111d] via-transparent to-transparent" />
        </div>

        <div className="lg:col-span-6 p-4 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="rounded bg-red-600/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[10px] font-mono font-bold">
                HIGHLIGHT PRESTASI
              </span>
              <span className="text-[11px] font-mono text-slate-400">04 Oktober 2026</span>
            </div>

            <h3 className="mt-2.5 text-lg sm:text-xl font-bold text-white font-display">
              Juara 1 Fast Tournament Clash Squad Season 14
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Squad 1 Nexus Prime berhasil membawa pulang piala kemenangan setelah mengalahkan BlackShadow dengan skor dramatis 4-3 di babak penentuan.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">Penulis: BH • V4NZ IGL</span>
            <button
              onClick={() => setActiveArticle(guildNewsData[0])}
              className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 min-h-[38px]"
            >
              <span>Baca Liputan</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* News Articles Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            onClick={() => setActiveArticle(news)}
            className="group cursor-pointer rounded-xl border border-white/[0.08] bg-[#0c111d] p-4 sm:p-5 transition-all hover:border-red-500/50 active:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                <span className="rounded bg-slate-800 text-slate-300 px-2 py-0.5 uppercase">
                  {news.category}
                </span>
                <span className="text-slate-500">{news.readTime}</span>
              </div>

              <h3 className="mt-2.5 text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                {news.title}
              </h3>

              <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {news.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>{news.date}</span>
              <span className="text-red-400 group-hover:underline flex items-center gap-1">
                Buka <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal (Touch & Mobile Friendly) */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setActiveArticle(null)} />
          <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/[0.12] bg-[#0d121f] p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white active:scale-95"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="rounded bg-red-600/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[10px] font-mono font-bold">
              {activeArticle.category}
            </span>

            <h3 className="mt-2.5 text-lg sm:text-xl font-bold text-white font-display pr-6">
              {activeArticle.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400 border-b border-white/[0.08] pb-3">
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span>{activeArticle.author}</span>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p className="font-medium text-white">{activeArticle.summary}</p>
              <p>{activeArticle.content}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 hover:bg-slate-200 min-h-[44px] active:scale-95"
              >
                Tutup Artikel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
