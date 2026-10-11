import { motion } from 'motion/react';
import { 
  Briefcase, 
  CheckCircle2, 
  GraduationCap,
  Calendar,
  Building2,
  Award
} from 'lucide-react';
import { experienceTimeline, educationData } from '../data/portfolioData';

export function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-5xl mx-auto space-y-16">
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
              key={`${item.organization}-${item.period}`}
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
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 sm:text-right shrink-0 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
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

        {/* Education & Academic Foundation Card */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-indigo-50/50 via-slate-50 to-white dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-indigo-100/80 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-md shadow-indigo-600/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-0.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Academic Qualification</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {educationData[0].degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {educationData[0].institution}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0 self-start sm:self-auto">
                Degree Awarded
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {educationData[0].highlights.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
