import * as React from 'react';
import { NavSection, CaseStudy, Article, AutomationProject } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { CommandSearchModal } from './components/CommandSearchModal';

import { HomeView } from './views/HomeView';
import { WorkView } from './views/WorkView';
import { AiAutomationView } from './views/AiAutomationView';
import { WritingView } from './views/WritingView';
import { AboutView } from './views/AboutView';
import { ResumeView } from './views/ResumeView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeSection, setActiveSection] = React.useState<NavSection>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false);
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  // Sync dark class on root document
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Global Keyboard Shortcut (Cmd+K / Ctrl+K) for quick search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 flex flex-col justify-between selection:bg-zinc-800 selection:text-zinc-50">
      
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main View Render */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 w-full">
        {activeSection === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectCaseStudy={setSelectedCaseStudy}
            onSelectArticle={setSelectedArticle}
          />
        )}

        {activeSection === 'work' && (
          <WorkView
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        )}

        {activeSection === 'ai-automation' && (
          <AiAutomationView />
        )}

        {activeSection === 'writing' && (
          <WritingView
            onSelectArticle={setSelectedArticle}
          />
        )}

        {activeSection === 'about' && (
          <AboutView />
        )}

        {activeSection === 'resume' && (
          <ResumeView />
        )}

        {activeSection === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Modals */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <CommandSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCaseStudy={setSelectedCaseStudy}
        onSelectArticle={setSelectedArticle}
        onSelectAutomation={() => {
          handleNavigate('ai-automation');
        }}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
