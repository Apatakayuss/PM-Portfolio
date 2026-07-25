import * as React from 'react';
import { personalInfo } from '../data/profile';
import { Mail, Linkedin, Github, BookOpen, Twitter, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 1000);
  };

  return (
    <div className="space-y-16 pb-20 max-w-4xl mx-auto">
      
      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700">
          <MessageSquare className="w-3.5 h-3.5" />
          Direct Channel
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Let's build something useful.
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Whether you have an open Product Management role, a complex fintech problem to solve, or want to discuss AI-enabled product workflows—I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Send a Direct Message
          </h2>

          {status === 'submitted' ? (
            <div className="p-6 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm space-y-3 text-center animate-in fade-in duration-200">
              <CheckCircle2 className="w-8 h-8 text-zinc-900 dark:text-zinc-100 mx-auto" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Message Sent Successfully
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Thank you for reaching out, {formData.name}. I have received your message and will respond to {formData.email} shortly.
              </p>
              <button
                onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }}
                className="mt-2 text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-bold underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                  Message / Inquiry
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the opportunity, project scope, or conversation topic..."
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm px-4 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Direct Channels & Details */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Direct Contact Details
            </h2>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-sm space-y-3 shadow-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200/80 dark:border-zinc-700/60"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <div>
                    <span className="font-bold block">Email</span>
                    <span className="text-zinc-500">{personalInfo.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200/80 dark:border-zinc-700/60"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <div>
                    <span className="font-bold block">LinkedIn</span>
                    <span className="text-zinc-500">Professional Profile</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200/80 dark:border-zinc-700/60"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <div>
                    <span className="font-bold block">GitHub</span>
                    <span className="text-zinc-500">Repositories & Code</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-zinc-800 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-sm border border-zinc-200/80 dark:border-zinc-700/60"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <div>
                    <span className="font-bold block">Medium</span>
                    <span className="text-zinc-500">Published Articles</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          <div className="p-4 bg-zinc-100 dark:bg-zinc-900/60 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 font-mono">
            📍 Based in Lagos, Nigeria • Working with Global Product Teams Across Timezones.
          </div>
        </div>

      </div>

    </div>
  );
};
