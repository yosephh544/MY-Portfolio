import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Database, 
  CreditCard, 
  Users, 
  CheckCircle2, 
  Terminal,
  Activity,
  Layers
} from 'lucide-react';

const IMPACT_CARDS = [
  {
    icon: Award,
    title: 'UNICEF & Government Demonstration',
    tag: 'International Recognition',
    desc: 'Led the technical development and live demonstration of the Water Utility Billing System (BPS) directly to UNICEF representatives and regional water bureau leadership.',
    detail: 'Validated as a scalable municipal digital infrastructure standard for public water revenue operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-Region Transport Deployment',
    tag: 'Government Platform',
    desc: 'Contributed to the multi-branch rollout of the Oromia Transport Management System across regional bureaus and passenger/freight transit hubs.',
    detail: 'Centralized vehicle registrations, driver documentation, and terminal inspection workflows.',
  },
  {
    icon: Database,
    title: 'SQL Performance & Sub-Second Queries',
    tag: 'Query Optimization',
    desc: 'Restructured SQL Server relational schemas, authored complex calculation stored procedures, and applied clustered/non-clustered index tuning.',
    detail: 'Eliminated bottlenecks during bulk municipal bill generation and heavy terminal peak hours.',
  },
  {
    icon: CreditCard,
    title: 'Idempotent Payment Rails (Telebirr & Banks)',
    tag: 'Fintech Integration',
    desc: 'Engineered resilient webhook listeners with HMAC cryptographic validation and idempotent database transitions.',
    detail: 'Prevented duplicate charges during network drops and automated merchant statement reconciliation.',
  },
  {
    icon: Users,
    title: 'Technical Team Leadership',
    tag: 'Engineering Stewardship',
    desc: 'Directed cross-functional developers through sprint execution, domain modeling, Clean Architecture enforcement, and code reviews.',
    detail: 'Mentored team members while maintaining strict delivery deadlines and high software standards.',
  },
  {
    icon: Layers,
    title: 'Offline-First Field Resilience',
    tag: 'Emerging Market Design',
    desc: 'Engineered client-side caching and batched synchronization for municipal meter readers operating in low-connectivity areas.',
    detail: 'Ensured zero data loss for field agents with conflict-free server synchronization.',
  },
];

export function Impact() {
  return (
    <section 
      id="impact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Activity className="w-3.5 h-3.5" />
            <span>06 // VERIFIED IMPACT & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Evidence-based outcomes &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">
              engineering milestones
            </span>.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Delivering software that withstands real operational pressure and serves critical public institutions.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{card.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
