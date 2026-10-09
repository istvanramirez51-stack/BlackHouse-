import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { guildProfile } from '../data/guildData';
import { Flame, Shield } from 'lucide-react';

interface SplitScreenEntranceProps {
  onAnimationComplete?: () => void;
  isOpen: boolean;
}

export const SplitScreenEntrance: React.FC<SplitScreenEntranceProps> = ({ isOpen, onAnimationComplete }) => {
  const [phase, setPhase] = useState<'locked' | 'splitting' | 'gone'>('locked');

  const handleDismiss = () => {
    setPhase('gone');
    if (onAnimationComplete) onAnimationComplete();
  };

  useEffect(() => {
    if (isOpen) {
      setPhase('locked');
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleDismiss();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      const timer1 = setTimeout(() => {
        setPhase('splitting');
      }, 1200);

      const timer2 = setTimeout(() => {
        setPhase('gone');
        if (onAnimationComplete) onAnimationComplete();
      }, 2300);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setPhase('gone');
    }
  }, [isOpen, onAnimationComplete]);

  if (phase === 'gone' || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] select-none overflow-hidden">
      
      
      
      {/* ========================================================= */}
      {/* TOP HALF SHUTTER (TERBELAH KE ATAS)                       */}
      {/* ========================================================= */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: phase === 'splitting' ? '-100%' : 0 }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="pointer-events-auto absolute top-0 inset-x-0 h-1/2 bg-[#06080e] border-b-2 border-red-600 shadow-[0_10px_40px_rgba(220,38,38,0.5)] flex flex-col justify-end items-center pb-8 architectural-grid"
      >
        {/* Shutter Texture Details */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020307] to-[#0c0f1d] opacity-90" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 text-[10px] font-mono tracking-widest text-red-500 font-bold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
            <span>Black House · BATTLE PROTOCOL INITIATED</span>
          </div>
          <div className="h-1 w-36 rounded-full bg-red-600/60 blur-[1px]" />
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* BOTTOM HALF SHUTTER (TERBELAH KE BAWAH)                   */}
      {/* ========================================================= */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: phase === 'splitting' ? '100%' : 0 }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="pointer-events-auto absolute bottom-0 inset-x-0 h-1/2 bg-[#06080e] border-t-2 border-red-600 shadow-[0_-10px_40px_rgba(220,38,38,0.5)] flex flex-col justify-start items-center pt-8 architectural-grid"
      >
        {/* Shutter Texture Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020307] to-[#0c0f1d] opacity-90" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="h-1 w-36 rounded-full bg-red-600/60 blur-[1px]" />
          <div className="mt-2 text-[10px] font-mono tracking-widest text-slate-400 font-medium">
            GUILD ID: {guildProfile.guildId} · LEVEL 6
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* CENTERPIECE EMBLEM & HUD OVERLAY (FADES OUT ON SPLIT)     */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: phase === 'splitting' ? 0 : 1,
          scale: phase === 'splitting' ? 1.25 : 1
        }}
        transition={{ duration: 0.5 }}
        className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center z-20"
      >
        {/* Red Glow behind Emblem */}
        <div className="absolute h-44 w-44 rounded-full bg-red-600/30 blur-[60px] animate-pulse" />

        {/* Central Crimson Dragon Emblem */}
        <div className="relative flex flex-col items-center">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden ring-4 ring-red-500/80 shadow-[0_0_50px_rgba(239,68,68,0.7)] bg-black">
            <img
              src={guildProfile.emblemUrl}
              alt="Black House Clan Emblem"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-4 text-xl sm:text-2xl font-black text-white font-display tracking-tight text-glow-red">
            {guildProfile.name}
          </h2>
          <p className="text-xs font-mono text-red-400 font-bold tracking-widest mt-0.5">
            FREE FIRE ESPORTS INDONESIA
          </p>

          {/* Loading status bar */}
          <div className="mt-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-bounce" />
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.15s]" />
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.3s]" />
            <span className="text-[10px] font-mono text-slate-400 ml-1">MEMBUKA AKSES SISTEM</span>
          </div>
        </div>

        {/* Seam laser divider effect */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#ef4444]" />
      </motion.div>

    </div>
  );
};
