import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  Layout, 
  GraduationCap, 
  Terminal,
  Languages,
  CheckCircle2,
  Users
} from 'lucide-react';
import { educationData, languagesData } from '../data/portfolioData';

const HIGHLIGHT_AREAS = [
  {
    icon: Server,
    title: 'Transport Management Systems (DPMS)',
    desc: 'Full-stack development for Oromia and Benishangul regional transport agencies, including driver licensing, public transit, and freight logistics modules.',
  },
  {
    icon: Database,
    title: 'Water Utility Billing Systems (BPS)',
    desc: 'Team leadership and engineering for municipal billing platforms deployed across multiple cities and utilities, with offline meter sync and UNICEF presentation.',
  },
  {
    icon: GraduationCap,
    title: 'BSc Software Engineering',
    desc: 'Hilcoe School of Computer Science and Technology graduate with deep foundation in software engineering, database design, and systems architecture.',
  },
  {
    icon: Layout,
    title: 'Pharmacy Inventory & POS Systems',
    desc: 'Dispensary inventory with multi-batch tracking, FEFO dispatch workflows, expiration alerts, and point-of-sale cashier functionality.',
  },
];

export function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Full-stack engineering &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              practical systems leadership
            </span>.
          </h2>
        </div>

        {/* Short & Focused Professional Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">full-stack software developer and team leader</strong> specializing in backend development with <strong className="text-slate-900 dark:text-white font-medium">C#, .NET, Java, and Python</strong>, with proven hands-on experience designing RESTful APIs, business logic, database systems, and responsive applications in <strong className="text-slate-900 dark:text-white font-medium">Angular and React</strong>.
            </p>
            <p>
              My background includes leading development teams, engineering enterprise Driver and Public transport Management Systems (DPMS) for <strong className="text-slate-900 dark:text-white font-medium">Oromia and Benishangul Transport Management Agencies</strong>, deploying nationwide municipal water utility billing platforms across Ethiopia, and building mission-critical inventory management solutions.
            </p>
            <p>
              I take pride in solving genuine operational challenges: enabling offline field data collection in low-connectivity areas, designing SSRS reports for complex government requirements, optimizing SQL databases for high concurrency, and delivering clean, maintainable architecture for engineering teams.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Core Strengths Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                <Users className="w-4 h-4" />
                <span>Core Strengths</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Full-stack ownership from database schema to user interface.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Leading development teams through sprints and code reviews.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>SQL Server query optimization, indexing, and stored procedures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Production server deployment (IIS/Docker) and on-the-ground support.</span>
                </li>
              </ul>
            </div>

            {/* Education & Languages Quick Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Languages className="w-3.5 h-3.5 text-indigo-500" />
                  <span>English & Amharic</span>
                </div>
              </div>
              {educationData.map((edu) => (
                <div key={edu.institution} className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Focused Experience Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {HIGHLIGHT_AREAS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-xs space-y-2 transition-colors"
              >
                <div className="p-2.5 w-fit rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
