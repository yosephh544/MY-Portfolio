import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const CATEGORY_ICONS = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'Tools & Deployment': Cloud,
  'Integrations & Engineering': Cpu,
};

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (selectedSkill?.name === skill.name) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
              <Terminal className="w-3.5 h-3.5" />
              <span>SKILLS & TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Core technical stack &{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">
                engineering competencies
              </span>.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Select any technology to see which enterprise systems I built with it.
            </p>
          </div>
        </div>

        {/* Selected Skill Banner (if any) */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800">
                  {selectedSkill.name}
                </span>
                <span className="text-slate-600 dark:text-slate-300">
                  Powers:{' '}
                  <strong className="text-slate-900 dark:text-white">
                    {selectedSkill.projects.join(' • ')}
                  </strong>
                </span>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>View in Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] || Terminal;

            return (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer text-left ${
                          isSelected
                            ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/25 ring-2 ring-indigo-500/30'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                        }`}
                        title={`Click to see projects built with ${skill.name}`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
