import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Download, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-900 dark:text-slate-100"
        >
          {/* Header Banner */}
          <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800 bg-linear-to-r from-slate-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-200 dark:border-indigo-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Curriculum Vitae / Resume</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {personalInfo.name} • {personalInfo.role}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Verified Profile Highlights
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Technical Team Leadership:</strong> Directed full-stack development for municipal water utility billing platforms presented to UNICEF officials.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Enterprise Government Systems:</strong> Contributed to the Oromia Transport Management System (vehicle registry, driver licensing, freight logistics).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Core Stack:</strong> ASP.NET Core (.NET 8/7), C#, Angular, React 19, Microsoft SQL Server, SignalR, Docker, and IIS Web Server.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Integrations & Performance:</strong> Idempotent digital payment gateways (Telebirr/Banking APIs), high-throughput stored procedures, and offline-first field synchronization.
                  </span>
                </li>
              </ul>
            </div>

            {/* Download and Request Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`/${personalInfo.cvFilename}`}
                  download="Yoseph-H-Mariam-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Yoseph%20H%2FMariam&body=Hi%20Yoseph%2C%0A%0AI%20would%20like%20to%20request%20your%20latest%20technical%20resume%20for%20an%20engineering%20opportunity.%0A%0AOrganization%3A%0ARole%3A%0A%0ABest%20regards%2C`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Request Custom CV via Email
                </a>
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>
                  Direct PDF download looks for <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px]">public/resume.pdf</code>. You can also request an updated custom dossier directly via email.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
