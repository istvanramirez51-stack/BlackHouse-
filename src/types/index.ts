export type FFPlayerRole = 'Rusher' | 'Sniper' | 'Support' | 'In-Game Leader (IGL)' | 'Flex';
export type GuildDivision = 'Pengurus' | 'Roster Turnamen' | 'Member Regular' | 'Cadangan';
export type FFRankTier = 'Grandmaster' | 'Master' | 'Heroic';

export interface GuildMember {
  id: string;
  ign: string;
  ffId: string;
  role: FFPlayerRole;
  rank: FFRankTier;
  stars?: number;
  division: GuildDivision;
  kdRatio: number;
  headshotRate: number; // percentage, e.g. 68.5%
  favoriteWeapon: string;
  avatar: string;
  joinDate: string;
  status: 'Online' | 'In-Game' | 'Standby' | 'Offline';
  dogTagContribution: number;
  isCaptain?: boolean;
}

export interface GuildNews {
  id: string;
  title: string;
  category: 'Turnamen' | 'Jadwal Scrim' | 'Pengumuman' | 'Patch Meta';
  date: string;
  summary: string;
  content: string;
  readTime: string;
  author: string;
  image?: string;
  highlightBadge?: string;
}

export interface GuildRule {
  id: string;
  number: string;
  title: string;
  category: 'Dog Tag & Keaktifan' | 'Etika & Sportivitas' | 'Change Nick (CN)' | 'Turnamen & Scrim';
  description: string;
  sanction: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pendaftaran' | 'Aturan CN' | 'Dog Tag' | 'Scrim & Turnamen' | 'Sistem Website';
}

// export interface ScrimRequest {
//   id: string;
//   opponentGuild: string;
//   captainName: string;
//   whatsapp: string;
//   mode: '4v4 Clash Squad' | 'Battle Royale (BR) 12 Tim' | 'Fast Tournament';
//   date: string;
//   time: string;
//   crProvidedBy: 'Penantang' | 'NEXUS' | 'Patungan (1 CR Masing-Masing)';
//   notes?: string;
//   status: 'Menunggu Konfirmasi' | 'Diterima' | 'Jadwal Penuh';
// }

export interface MemberApplication {
  id: string;
  fullName: string;
  ign: string;
  ffId: string;
  rank: FFRankTier;
  role: FFPlayerRole;
  kdRatio: string;
  headshotRate: string;
  device: string;
  age: number;
  domicile: string;
  whatsapp: string;
  agreedCN: boolean;
  agreedRules: boolean;
  notes?: string;
  submittedAt: string;
}
