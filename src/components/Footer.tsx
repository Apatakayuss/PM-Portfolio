import React from 'react';
import { NavSection } from '../types';
import { personalInfo } from '../data/profile';
import { Mail, Linkedin, Github, BookOpen, Twitter, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-100 dark:border-zinc-800">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold font-mono text-xs">
                AA
              </div>
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
              Product Manager operating at the intersection of fintech, payments, AI, and automation. Focused on evidence-driven impact, system workflows, and clear communication.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              <span>Evidence-Based Portfolio • Verified Metrics & Artifacts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('work')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Work & Case Studies</button></li>
              <li><button onClick={() => onNavigate('ai-automation')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">AI & Automation</button></li>
              <li><button onClick={() => onNavigate('writing')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Writing</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('resume')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">CV / Resume</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">
              Connect
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href={personalInfo.medium} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  Medium
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Twitter className="w-3.5 h-3.5" />
                  X / Twitter
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Clean Minimalism Design.
          </div>
          <div className="flex items-center gap-4">
            <span>Lagos, Nigeria</span>
            <span>/</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Let's Build Something Useful
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
