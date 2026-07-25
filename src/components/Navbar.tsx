import * as React from 'react';
import { NavSection } from '../types';
import { Search, Moon, Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  darkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'writing', label: 'Writing' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div 
          onClick={() => onNavigate('home')} 
          className="cursor-pointer flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 flex items-center justify-center font-bold font-mono text-xs shadow-sm group-hover:bg-zinc-800 transition-colors">
            AA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              Abdulazeez Apata
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
              Product Manager
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[12px] font-medium uppercase tracking-widest transition-colors relative py-1 ${
                activeSection === item.id
                  ? 'text-zinc-900 dark:text-zinc-50 font-bold border-b-2 border-zinc-900 dark:border-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Utilities & CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="px-3 py-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-1.5 text-xs font-mono"
            title="Search portfolio (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-zinc-400">Search</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200/80 dark:border-zinc-800"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onNavigate('work')}
            className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            View Work
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleDarkMode}
            className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 rounded-lg"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => { onOpenSearch(); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-between p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-400 font-mono"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search portfolio...
            </span>
            <span>Search</span>
          </button>

          <div className="grid grid-cols-2 gap-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left text-xs font-semibold ${
                  activeSection === item.id
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
            <button
              onClick={() => { onNavigate('work'); setMobileMenuOpen(false); }}
              className="flex-1 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-semibold rounded-lg text-center"
            >
              View My Work
            </button>
            <button
              onClick={() => { onNavigate('writing'); setMobileMenuOpen(false); }}
              className="flex-1 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-lg text-center"
            >
              Read Writing
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
