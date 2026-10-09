import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Cpu, 
  Maximize2,
  Clock,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

export function ProjectModal({ project, isOpen, onClose }) {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen || !project) return null;

  const currentScreenshot = project.screenshots && project.screenshots.length > 0
    ? project.screenshots[activeScreenshotIndex] || project.screenshots[0]
    : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-slate-900 dark:text-slate-100"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-900/90 shrink-0">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 font-semibold">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                My Role: <strong className="text-slate-800 dark:text-slate-200">{project.role}</strong>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Interactive Screenshot Gallery */}
            {project.hasScreenshots && project.screenshots.length > 0 ? (
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-inner flex items-center justify-center min-h-[260px] max-h-[440px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentScreenshot.id}
                      src={currentScreenshot.src}
                      alt={`${project.title} - ${currentScreenshot.label}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-auto max-h-[440px] object-contain rounded-xl"
                    />
                  </AnimatePresence>

                  {/* Screenshot Overlay Label & Zoom Action */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-mono text-white border border-slate-700/60 shadow-md">
                      {currentScreenshot.label}
                    </span>
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="pointer-events-auto bg-slate-900/90 hover:bg-slate-800 text-white p-2 rounded-xl border border-slate-700/60 text-xs flex items-center gap-1.5 cursor-pointer"
                      title="Toggle larger preview"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-mono hidden sm:inline">Zoom</span>
                    </button>
                  </div>
                </div>

                {/* Screenshot Switcher Thumbnails / Buttons */}
                {project.screenshots.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-mono text-slate-500 mr-1">Views:</span>
                    {project.screenshots.map((shot, idx) => (
                      <button
                        key={shot.id}
                        onClick={() => setActiveScreenshotIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          activeScreenshotIndex === idx
                            ? 'bg-indigo-600 text-white font-semibold shadow-xs ring-2 ring-indigo-500/20'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {shot.label}
                      </button>
                    ))}
                    {currentScreenshot.description && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 italic ml-auto hidden md:inline">
                        {currentScreenshot.description}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Consistent Placeholder Preview */
              <div className="p-6 rounded-2xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                    <Cpu className="w-4 h-4" />
                    <span>Architectural System Preview</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    Placeholder Preview
                  </span>
                </div>
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDesc}
                </p>
                {project.placeholderNote && (
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-indigo-900/50 text-xs text-indigo-300 flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{project.placeholderNote}</span>
                  </div>
                )}
              </div>
            )}

            {/* My Personal Contribution & Leadership (Key Focus) */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>What I Personally Did & Contributed</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            {/* Implemented vs Planned Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Implemented Features */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Implemented Capabilities</span>
                </h4>
                <div className="space-y-2">
                  {project.featuresImplemented.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Features (if any) or Operational Outcome */}
              {project.featuresPlanned && project.featuresPlanned.length > 0 ? (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Planned / In Roadmap</span>
                  </h4>
                  <div className="space-y-2">
                    {project.featuresPlanned.map((plan) => (
                      <div key={plan} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span>{plan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Operational Outcome</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.operationalOutcome}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies Strip */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:yosephhaile99@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}&body=Hi%20Yoseph%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20work%20on%20the%20${encodeURIComponent(project.title)}.%0A%0ABest%20regards%2C`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Inquire About System
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
