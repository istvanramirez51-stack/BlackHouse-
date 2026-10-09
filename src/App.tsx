import React, { useState } from 'react';
import { GuildNavbar, ActiveTab } from './components/GuildNavbar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HomeView } from './components/HomeView';
import { MembersView } from './components/MembersView';
import { NewsView } from './components/NewsView';
import { RulesView } from './components/RulesView';
import { OriginsView } from './components/OriginsView';
import { FaqView } from './components/FaqView';
import { RequestView } from './components/RequestView';
import { RecruitmentView } from './components/RecruitmentView';
import { GuildFooter } from './components/GuildFooter';
import { MemberDetailModal } from './components/MemberDetailModal';
import { SplitScreenEntrance } from './components/SplitScreenEntrance';
import { QuickWhatsAppFab } from './components/QuickWhatsAppFab';
import { guildMembersData } from './data/guildData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('beranda');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [showEntrance, setShowEntrance] = useState<boolean>(true);

  const selectedMember = selectedMemberId
    ? guildMembersData.find((m) => m.id === selectedMemberId) || null
    : null;

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-20 sm:pb-24 lg:pb-8 relative">
      
      {/* 0. Split Screen Entrance Transition (Terbelah Atas Bawah Saat Masuk Web) */}
      <SplitScreenEntrance
        isOpen={showEntrance}
        onAnimationComplete={() => setShowEntrance(false)}
      />

      {/* 1. Official Guild Top Navbar */}
      <GuildNavbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onTriggerEntrance={() => setShowEntrance(true)}
      />

      {/* Main View Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8 pt-3 sm:pt-6">
        {activeTab === 'beranda' && (
          <HomeView
            onNavigate={handleTabChange}
            onSelectMember={(id) => setSelectedMemberId(id)}
          />
        )}

        {activeTab === 'anggota' && (
          <MembersView
            onSelectMember={(id) => setSelectedMemberId(id)}
          />
        )}

        {activeTab === 'berita' && (
          <NewsView />
        )}

        {activeTab === 'rules' && (
          <RulesView />
        )}

        {activeTab === 'alasan' && (
          <OriginsView />
        )}

        {activeTab === 'faq' && (
          <FaqView />
        )}

        {activeTab === 'request' && (
          <RequestView />
        )}

        {activeTab === 'pendaftaran' && (
          <RecruitmentView />
        )}
      </main>

      {/* 2. Official Guild Footer */}
      <GuildFooter onSelectTab={handleTabChange} />

      {/* 3. Floating Mobile & Android Bottom Dock Bar */}
      <MobileBottomBar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* 4. Interactive Member Detail Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMemberId(null)}
      />

      {/* 5. Floating Quick WhatsApp & Social FAB */}
      <QuickWhatsAppFab />

    </div>
  );
}
