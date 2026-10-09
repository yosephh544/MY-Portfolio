import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  Layout, 
  Cloud, 
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

const HIGHLIGHT_AREAS = [
  {
    icon: Server,
    title: 'Transport Management Systems',
    desc: 'Full-stack development for Oromia and Benishangul regional transport agencies, including driver licensing, public transit, and freight logistics modules.',
  },
  {
    icon: Database,
    title: 'Water Utility Billing Systems',
    desc: 'Team leadership and engineering for municipal billing platforms deployed across multiple cities and utilities, with offline meter sync and UNICEF presentation.',
  },
  {
    icon: ShieldCheck,
    title: 'Payment Gateway & Merchant Portal',
    desc: 'Merchant onboarding, business verification, API credentials, webhook configurations, and digital payment integrations.',
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
              I am a <strong className="text-slate-900 dark:text-white font-semibold">full-stack software developer and team leader</strong> with practical experience building, integrating, deploying, and supporting real-world software systems.
            </p>
            <p>
              My work spans the entire stack — designing normalized databases and optimized SQL queries, writing resilient backend APIs in <strong className="text-slate-900 dark:text-white font-medium">ASP.NET Core</strong>, building modern, responsive web applications in <strong className="text-slate-900 dark:text-white font-medium">Angular and React</strong>, and deploying solutions to production servers.
            </p>
            <p>
              I take pride in solving genuine operational challenges: enabling offline field data collection in low-connectivity areas, ensuring strict financial auditability in municipal utility billing, automating driver and vehicle workflows for regional government agencies, and delivering clean, maintainable code for teams.
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
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
