import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ExternalLink, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  MapPin, 
  Languages, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { personalInfo, educationData, languagesData, skillsCategories } from '../data/portfolioData';

export function CvModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('document'); // 'document' | 'highlights'

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      setActiveTab('document');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-slate-900 dark:text-slate-100"
        >
          {/* Top Header Bar */}
          <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-200 dark:border-indigo-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Curriculum Vitae</span>
                  <span className="hidden sm:inline-block text-xs font-mono font-normal px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                    Verified
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {personalInfo.name} • {personalInfo.role}
                </p>
              </div>
            </div>

            {/* View Switcher & Toolbar */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('document')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'document'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  CV Document
                </button>
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'highlights'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Key Highlights
                </button>
              </div>

              {activeTab === 'document' && (
                <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono px-1.5 text-slate-500 min-w-11 text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <a
                href={personalInfo.cvImage}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                title="Open high-resolution image in new tab"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Tab</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Area */}
          <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950/80 relative p-4 sm:p-6 flex justify-center items-start">
            {activeTab === 'document' ? (
              /* Visual CV Document Display */
              <div 
                className="transition-transform duration-200 origin-top flex justify-center w-full"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <img
                    src={personalInfo.cvImage}
                    alt={`${personalInfo.name} Curriculum Vitae`}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
              </div>
            ) : (
              /* Structured Summary Highlights View */
              <div className="max-w-3xl w-full space-y-6 py-2">
                {/* Contact & Profile Bar */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {personalInfo.name}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {personalInfo.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                        {personalInfo.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Phone className="w-3.5 h-3.5 text-indigo-500" />
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {personalInfo.shortBio}
                  </p>
                </div>

                {/* Education & Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Education */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4" />
                      <span>Education</span>
                    </div>
                    {educationData.map((edu) => (
                      <div key={edu.institution} className="space-y-1">
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          {edu.institution}
                        </h5>
                        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          {edu.degree}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {edu.period}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      <Languages className="w-4 h-4" />
                      <span>Languages</span>
                    </div>
                    <div className="space-y-2">
                      {languagesData.map((lang) => (
                        <div key={lang.language} className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {lang.language}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-mono text-[11px]">
                            {lang.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Competencies Matrix */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Skills by Specialization</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {skillsCategories.map((cat) => (
                      <div key={cat.name} className="space-y-1.5">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {cat.name}:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cat.skills.map((s) => (
                            <span
                              key={s.name}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Embedded CV Image (No database dependency for deployment)</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.cvImage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Regarding%20Curriculum%20Vitae%20-%20Yoseph%20Hailemariam`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Yoseph</span>
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
