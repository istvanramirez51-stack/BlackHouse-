import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data/guildData';

export const FaqView: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = faqData.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
            PUSAT INFORMASI ANGGOTA
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
            Tanya Jawab Seputar Guild (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Informasi lengkap mengenai seleksi masuk, aturan ganti nick, push dog tag, dan turnamen.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan (misal: CN, rank, dog tag)..."
            className="w-full rounded-lg border border-white/[0.1] bg-[#0c111d] pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500/50 focus:outline-none"
          />
        </div>
      </div>

      {/* Accordion list */}
      <div className="divide-y divide-white/[0.06] border-y border-white/[0.08]">
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-xs text-slate-500">
            Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
          </div>
        ) : (
          filtered.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-4">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-start justify-between text-left text-sm sm:text-base font-semibold text-white transition-colors hover:text-red-400"
                >
                  <span className="pr-6">{item.question}</span>
                  <span className="text-slate-500 text-xs font-mono mt-0.5 shrink-0">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pr-6 border-l-2 border-red-500/50 pl-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
