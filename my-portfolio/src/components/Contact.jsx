import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ArrowUpRight, 
  FileText,
  Sparkles,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Contact({ onOpenCv }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendViaMailClient = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Engineering Inquiry from ${formData.name || 'Collaborator'}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name || 'Not provided'}\nOrganization: ${
        formData.organization || 'Not provided'
      }\n\nMessage:\n${formData.message || 'I would like to discuss a potential engineering engagement.'}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${bodyContent}`;
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07 // CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's discuss{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              engineering opportunities
            </span>{' '}
            and systems architecture.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I am available for senior full-stack roles, technical team leadership, and enterprise software consulting.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Direct Contact Information
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Reach out directly via email or professional profiles.
                </p>
              </div>

              {/* Email with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Phone / Direct Line
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Status & Availability */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-3">
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 block font-semibold">
                    Current Availability
                  </span>
                  <span className="text-xs text-slate-700 dark:text-slate-300">
                    {personalInfo.status}
                  </span>
                </div>
              </div>

              {/* Profiles & Resume */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  onClick={onOpenCv}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 transition-colors cursor-pointer border border-indigo-200 dark:border-indigo-800"
                >
                  <FileText className="w-4 h-4" />
                  <span>View CV Document</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Direct Message Composer
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Reliable Direct Dispatch
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Draft your message below. Clicking submit opens your configured email client with all details formatted for immediate delivery.
                </p>
              </div>

              <form onSubmit={handleSendViaMailClient} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Bekele"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Tech Enterprise / Public Agency"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Senior Full-Stack Role / System Architecture Engagement"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                    Message / System Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical requirements, team needs, or project scope..."
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch in Email Client</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                    Delivers directly to {personalInfo.email}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}