import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-mono font-bold text-xs shadow-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Software Engineer & Technical Team Leader. Architecting resilient enterprise systems, 
              municipal water billing platforms, and transport management solutions.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Senior Engineering Engagements</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              System Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-white transition-colors">
                About Me
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills & Tech
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Featured Projects
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact & Connect
              </a>
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Verified Channels
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="ml-auto p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                title="Scroll back to top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] font-mono text-slate-500">
              Stack: React 19 • Tailwind CSS 4 • Motion • Vite
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Honest Engineering Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}