import { GuildMember, GuildNews, GuildRule, FaqItem, ScrimRequest } from '../types';
import guildRedEmblem from '../assets/images/ff_guild_red_emblem_1791474377909.jpg';

export const guildProfile = {
  name: 'BLACK HOUSE',
  tag: 'BH •',
  guildId: '698241029',
  level: 6,
  emblemUrl: guildRedEmblem,
  slogan: 'One Aim, One Clan, One Victory',
  establishedYear: '2024',
  homeBase: 'Jakarta & Nasional (Hybrid)',
  memberCount: 10,
  maxMember: 50,
  dogTagWeekly: '2.480 / 1.800 (Target Tercapai)',
  scrimTrophies: '28x Juara Fast Tournament & Scrim',
  winrateCS: '78.4%',
  leaderName: 'BH  Leader',
  coLeaderName: 'BH  CoLeader',
  discordUrl: 'https://discord.gg/blackhouse',
  whatsappGroup: 'https://chat.whatsapp.com/blackhouse-open-member',
  whatsappAdminNumber: '6281298765432',
  instagramHandle: 'blackhouse.esports',
  instagramUrl: 'https://instagram.com/blackhouse.esports'
};

export const guildMembersData: GuildMember[] = [
  {
    id: 'm-1',
    ign: 'BH • V4NZ IGL',
    ffId: '1049281742',
    role: 'In-Game Leader (IGL)',
    rank: 'Grandmaster',
    stars: 84,
    division: 'Pengurus',
    kdRatio: 6.42,
    headshotRate: 64.8,
    favoriteWeapon: 'Woodpecker / M1887',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Nov 2022',
    status: 'In-Game',
    dogTagContribution: 168,
    isCaptain: true
  },
  {
    id: 'm-2',
    ign: 'BH • RYNZO 77',
    ffId: '2084719204',
    role: 'Rusher',
    rank: 'Grandmaster',
    stars: 76,
    division: 'Pengurus',
    kdRatio: 7.15,
    headshotRate: 78.4,
    favoriteWeapon: 'M1887 (SG 2) / MP40',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Nov 2022',
    status: 'Online',
    dogTagContribution: 142
  },
  {
    id: 'm-3',
    ign: 'BH • QUEEN AURA',
    ffId: '3194827105',
    role: 'Support',
    rank: 'Master',
    stars: 42,
    division: 'Pengurus',
    kdRatio: 5.20,
    headshotRate: 58.2,
    favoriteWeapon: 'M4A1-III / Treatment Gun',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Jan 2023',
    status: 'Online',
    dogTagContribution: 155
  },
  {
    id: 'm-4',
    ign: 'BH • D4RK SNIPER',
    ffId: '4820194821',
    role: 'Sniper',
    rank: 'Grandmaster',
    stars: 68,
    division: 'Roster Turnamen',
    kdRatio: 6.88,
    headshotRate: 82.1,
    favoriteWeapon: 'AWM-Y / Barret M82B',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Mar 2023',
    status: 'In-Game',
    dogTagContribution: 130
  },
  {
    id: 'm-5',
    ign: 'BH • XZAYN 99',
    ffId: '5192847291',
    role: 'Rusher',
    rank: 'Master',
    stars: 55,
    division: 'Roster Turnamen',
    kdRatio: 6.30,
    headshotRate: 71.5,
    favoriteWeapon: 'Trogon / MP40 Sneaky Clown',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Agu 2023',
    status: 'Standby',
    dogTagContribution: 124
  },
  {
    id: 'm-6',
    ign: 'BH • ALDO IGL',
    ffId: '6291048291',
    role: 'In-Game Leader (IGL)',
    rank: 'Master',
    stars: 48,
    division: 'Roster Turnamen',
    kdRatio: 5.75,
    headshotRate: 61.2,
    favoriteWeapon: 'Scar Megalodon / Groza',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Okt 2023',
    status: 'Online',
    dogTagContribution: 136
  },
  {
    id: 'm-7',
    ign: 'BH • K4TANA',
    ffId: '7193820194',
    role: 'Rusher',
    rank: 'Master',
    stars: 38,
    division: 'Member Regular',
    kdRatio: 4.90,
    headshotRate: 64.0,
    favoriteWeapon: 'M1887 Rapper Underworld',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Feb 2024',
    status: 'Offline',
    dogTagContribution: 98
  },
  {
    id: 'm-8',
    ign: 'BH • SHADOW',
    ffId: '8294019283',
    role: 'Support',
    rank: 'Heroic',
    division: 'Member Regular',
    kdRatio: 4.45,
    headshotRate: 52.8,
    favoriteWeapon: 'Bizon / UMP',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    joinDate: 'Mei 2024',
    status: 'Online',
    dogTagContribution: 110
  }
];

export const guildNewsData: GuildNews[] = [
  {
    id: 'n-1',
    title: 'Juara 1 Fast Tournament Clash Squad Season 14: Rekap Kemenangan 4v4 vs BlackShadow',
    category: 'Turnamen',
    date: '04 Oktober 2026',
    readTime: '3 Menit Baca',
    author: 'BH • V4NZ IGL',
    summary: 'Roster Squad 1 Nexus Prime sukses mengamankan trofi juara setelah membalikkan keadaan dari skor 1-3 menjadi 4-3 di ronde final Clock Tower.',
    content: 'Pada pertandingan grand final malam Minggu kemarin, Squad 1 kami yang diperkuat oleh V4NZ, RYNZO, D4RK, dan XZAYN berhasil memenangkan pertarungan sengit 4v4 Clash Squad. Dominasi rotasi zona dan pemanfaatan Granat Flash Freeze menjadi kunci kemenangan. Terima kasih kepada seluruh member yang telah menonton live streaming dan memberikan dukungan!',
    highlightBadge: 'TROFI JUARA'
  },
  {
    id: 'n-2',
    title: 'Jadwal Scrim Tier 1 Battle Royale Malam Ini (20:30 WIB)',
    category: 'Jadwal Scrim',
    date: '07 Oktober 2026',
    readTime: '2 Menit Baca',
    author: 'BH • RYNZO 77',
    summary: 'Latihan rutin 6 match (Bermuda, Purgatory, Kalahari) bersama 11 guild partner ternama regional Indonesia.',
    content: 'Panggilan wajib untuk seluruh roster turnamen. Scrim akan dimulai tepat pukul 20:30 WIB. Format drop zone: Brasilia (Purgatory) & Peak (Bermuda). Harap standby di room Discord 15 menit sebelum Room ID dibagikan.',
    highlightBadge: 'MALAM INI'
  },
  {
    id: 'n-3',
    title: 'Analisis Patch Meta OB48: Strategi Drop Zone dan Pemilihan Karakter Aktif',
    category: 'Patch Meta',
    date: '29 September 2026',
    readTime: '4 Menit Baca',
    author: 'BH • QUEEN AURA',
    summary: 'Penyesuaian cooldown skill Tatsuya dan buff damage M1887 mempengaruhi taktik rotasi guild di mode Ranked & Turnamen.',
    content: 'Setelah update OB48 rilis, pengurus guild menetapkan kompisisi skill standar turnamen: 2 pemain wajib membawa skill Homer / Orion untuk inisiasi rush jarak dekat, sementara support belakang mengandalkan Dimitri dan Wolfrahh.'
  },
  {
    id: 'n-4',
    title: 'Apel Mingguan & Pengingat Dog Tag Guild Hari Jumat',
    category: 'Pengumuman',
    date: '25 September 2026',
    readTime: '2 Menit Baca',
    author: 'Pengurus Guild',
    summary: 'Target 1.800 Dog Tag wajib tercapai sebelum pukul 23:59 WIB untuk mengklaim Tiket Custom Room (CR) mingguan gratis.',
    content: 'Dihimbau kepada seluruh member untuk bermain minimal 8-10 match Clash Squad bersama sesama rekan guild pada hari Jumat. Member yang berhalangan hadir wajib mengajukan dispensasi di form request sebelum pukul 18:00 WIB.'
  }
];

export const guildRulesData: GuildRule[] = [
  {
    id: 'r-1',
    number: '01',
    title: 'Kewajiban Dog Tag Mingguan (Hari Jumat)',
    category: 'Dog Tag & Keaktifan',
    description: 'Setiap member wajib menyumbangkan minimal 80 Dog Tag pribadi pada hari push Dog Tag (Jumat 00:00 - 23:59 WIB) untuk memastikan guild membuka jatah Custom Room mingguan bagi semua anggota.',
    sanction: 'Peringatan 1 (SP1). Tiga kali berturut-turut tanpa izin dispensasi = Dikeluarkan dari Guild.'
  },
  {
    id: 'r-2',
    number: '02',
    title: 'Larangan Keras Cheat, Script & Config Ilegal',
    category: 'Etika & Sportivitas',
    description: 'Nexus Prime menjunjung tinggi 100% fair play. Penggunaan cheat auto headshot, antena, config bypass, maupun jasa joki akun ilegal dilarang keras tanpa pengecualian.',
    sanction: 'Auto-Kick permanen tanpa negosiasi dan dilaporkan ke blacklist guild turnamen se-Indonesia.'
  },
  {
    id: 'r-3',
    number: '03',
    title: 'Kewajiban Change Nick (CN) Guild Tag',
    category: 'Change Nick (CN)',
    description: 'Member baru yang telah dinyatakan lolos masa trial 7 hari wajib mengganti nama akun Free Fire menggunakan format identitas resmi: BH • [Nama Pilihan Anda].',
    sanction: 'Diberikan tenggat waktu toleransi maksimal 14 hari. Jika tidak berganti nama, slot dialihkan ke kandidat cadangan.'
  },
  {
    id: 'r-4',
    number: '04',
    title: 'Etika Komunikasi Tanpa Toxic Internal',
    category: 'Etika & Sportivitas',
    description: 'Kritik permainan dalam evaluasi scrim harus membangun dan solutif. Dilarang menghina fisik, keluarga, atau saling menyalahkan di grup WhatsApp maupun voice Discord.',
    sanction: 'Mute grup 3 hari untuk pelanggaran ringan; evaluasi pengurus untuk perilaku toxic berulang.'
  },
  {
    id: 'r-5',
    number: '05',
    title: 'Disiplin Waktu Scrim & Turnamen Resmi',
    category: 'Turnamen & Scrim',
    description: 'Roster yang ditunjuk mewakili guild dalam turnamen atau scrim wajib konfirmasi kehadiran H-2 jam sebelum room dibuka dan standby di voice Discord tepat waktu.',
    sanction: 'Pencopotan dari roster turnamen ke tim cadangan selama 2 pekan.'
  },
  {
    id: 'r-6',
    number: '06',
    title: 'Kekeluargaan & Gotong Royong Komunitas',
    category: 'Dog Tag & Keaktifan',
    description: 'Utamakan mabar bersama sesama member guild jika ruang squad masih tersedia. Saling bantu push rank bagi member yang mengejar tier Master atau Grandmaster.',
    sanction: 'Membangun kebiasaan positif dan solidaritas antar sesama anggota.'
  }
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa minimal Rank dan K/D Ratio untuk bisa mendaftar di Nexus Prime?',
    answer: 'Untuk pendaftaran reguler, syarat minimal adalah Rank Master bintang 5+ dengan K/D ratio minimal 4.0 dan Headshot rate minimal 55% di mode Ranked musim berjalan. Untuk kandidat role Sniper atau Support, kami juga menilai game sense dan komunikasi di atas sekadar K/D.',
    category: 'Pendaftaran'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya langsung wajib Change Nick (CN) saat diterima?',
    answer: 'Tidak langsung di hari pertama! Anda akan menjalani masa percobaan (trial) selama 7 hari terlebih dahulu. Setelah pengurus dan rekan squad menilai kecocokan bermain dan keaktifan Anda, barulah Anda diberikan waktu hingga 14 hari untuk mengganti nama dengan tag resmi "BH •".',
    category: 'Aturan CN'
  },
  {
    id: 'faq-3',
    question: 'Bagaimana jika saya berhalangan push Dog Tag di hari Jumat karena tugas/kerja?',
    answer: 'Kami mengerti kesibukan dunia nyata anggota adalah prioritas. Anda cukup mengirimkan form izin dispensasi ke pengurus atau mengisi di menu "Request" website ini sebelum hari Jumat pukul 18:00 WIB, maka ketidakhadiran Anda tidak akan dikenakan sanksi.',
    category: 'Dog Tag'
  },
  {
    id: 'faq-4',
    question: 'Apakah Nexus Prime menerima pemain PC / Emulator atau khusus Handphone?',
    answer: 'Nexus Prime 100% berfokus pada ekosistem turnamen resmi Free Fire (Garena), sehingga seluruh roster kompetitif kami wajib menggunakan device Handphone / Smartphone (Android / iOS). Pemain emulator hanya diperkenankan sebagai member komunitas kasual jika kuota masih tersedia.',
    category: 'Pendaftaran'
  },
  {
    id: 'faq-5',
    question: 'Kapan jadwal rutin mabar dan scrim guild diadakan?',
    answer: 'Mabar santai dan push rank bersama berlangsung setiap hari dari sore (16:00 WIB) hingga malam hari (23:00 WIB). Sedangkan jadwal Scrim kompetitif diadakan setiap hari Selasa, Kamis, dan Sabtu pukul 20:30 WIB.',
    category: 'Scrim & Turnamen'
  },
  {
    id: 'faq-6',
    question: 'Bagaimana sistem pembagian hadiah (prize pool) saat memenangkan turnamen?',
    answer: 'Hadiah kemenangan turnamen 90% langsung dibagikan merata kepada 4-5 pemain yang bertanding di turnamen tersebut. 10% dialokasikan ke kas operasional guild untuk membeli tiket Custom Room dan mendanai pendaftaran turnamen berikutnya secara transparan.',
    category: 'Scrim & Turnamen'
  },
  {
    id: 'faq-7',
    question: 'Bagaimana alur pesan tantangan scrim dan pendaftaran di website ini?',
    answer: 'Karena website ini beroperasi secara statis & responsif, setiap formulir yang Anda kirim (Tantang Scrim, Request Mabar, maupun Pendaftaran Calon Anggota Baru) secara otomatis disusun menjadi format pesan resmi dan langsung diteruskan ke WhatsApp Admin atau Instagram Official kami. Pengurus akan langsung membaca dan merespons chat Anda secara real-time!',
    category: 'Sistem Website'
  },
  {
    id: 'faq-8',
    question: 'Apakah pelajar SMP, SMA, atau mahasiswa kuliah boleh mendaftar?',
    answer: 'Sangat boleh dan dipersilakan! Mayoritas anggota dan roster Nexus Prime berusia 14 sampai 23 tahun (SMP, SMA/SMK, hingga mahasiswa perguruan tinggi). Komunitas kami mengedepankan atmosfer kekeluargaan, saling menghargai, dan tanpa toxic, asalkan mau taat aturan dan push dog tag di hari Jumat malam.',
    category: 'Pendaftaran'
  },
  {
    id: 'faq-9',
    question: 'Bagaimana jika sedang pekan ujian sekolah (PTS/PAS) atau ujian semester kuliah (UTS/UAS)?',
    answer: 'Pendidikan dan masa depan adalah prioritas utama. Jika sedang menghadapi ujian atau tugas sekolah/kuliah yang padat, Anda cukup mengabari pengurus di grup WhatsApp untuk izin dispensasi sementara. Tidak ada sanksi kick selama ada komunikasi yang baik.',
    category: 'Dog Tag'
  }
];

export const preloadedScrimRequests: ScrimRequest[] = [
  // {
  //   id: 'scrim-1',
  //   opponentGuild: 'VORTEX ESPORTS',
  //   captainName: 'VTX • Rexxar',
  //   whatsapp: '081299482910',
  //   mode: '4v4 Clash Squad',
  //   date: 'Besok (Kamis)',
  //   time: '21:00 WIB',
  //   crProvidedBy: 'Patungan (1 CR Masing-Masing)',
  //   notes: 'Rules no gren, armor lv 2, koin 1500 round 13.',
  //   status: 'Diterima'
  // },
  // {
  //   id: 'scrim-2',
  //   opponentGuild: 'BLACK RAVEN ID',
  //   captainName: 'BRV • Kenzo',
  //   whatsapp: '085718294019',
  //   mode: 'Battle Royale (BR) 12 Tim',
  //   date: 'Sabtu, 10 Okt 2026',
  //   time: '20:00 WIB',
  //   crProvidedBy: 'Penantang',
  //   notes: 'Scrim 4 match (Bermuda & Purgatory). Slot 10 tim sudah konfirmasi.',
  //   status: 'Menunggu Konfirmasi'
  // }
];
