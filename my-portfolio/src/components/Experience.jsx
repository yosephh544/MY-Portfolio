import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Professional trajectory &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              real-world contributions
            </span>.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A concise summary of my roles, software systems, and engineering leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-950 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experienceTimeline.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 group-hover:scale-125 transition-transform" />

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-xs transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold block">
                      {item.scope}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Scannable Highlights */}
                <div className="space-y-2 pt-1">
                  {item.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
