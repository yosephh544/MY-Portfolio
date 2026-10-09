import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  FileText
} from 'lucide-react';
import { personalInfo, techBadges } from '../data/portfolioData';
import { SystemVisualizer } from './SystemVisualizer';

export function Hero({ onOpenCv }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden flex flex-col justify-center bg-slate-950 text-white"
    >
      {/* Background Ambience: Subtle engineering grid and radial glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Short & Impactful Headline, Concise Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Full-Stack Developer & Team Leader</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-white">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-violet-300 to-cyan-400">
                {personalInfo.role}
              </p>
            </motion.div>

            {/* One Concise Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View CV / Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 font-medium text-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-2 text-xs text-slate-400"
            >
              <span className="font-mono text-slate-500">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="font-mono text-slate-400 hidden sm:inline">
                {personalInfo.email}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Subtle Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full"
            >
              <SystemVisualizer />
            </motion.div>
          </div>
        </div>

        {/* Technology Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2"
        >
          <span className="text-xs font-mono uppercase text-slate-500 mr-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            Core Technologies:
          </span>
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
