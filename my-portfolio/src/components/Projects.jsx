import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = [
  'All',
  'Utility & Billing',
  'Transport & Fleet',
  'Healthcare & Retail',
  'Financial & Payments',
  'Government Enterprise',
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Real-world systems &{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                enterprise platforms
              </span>.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Discovered and documented from production deployments and repository assets.
            </p>
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const primaryPreview = project.screenshots && project.screenshots.length > 0
                ? project.screenshots[0].src
                : null;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-xs hover:shadow-xl transition-all overflow-hidden"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                      {primaryPreview ? (
                        <div className="w-full h-full relative group/img overflow-hidden">
                          <img
                            src={primaryPreview}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-mono text-xs font-semibold backdrop-blur-md shadow-md cursor-pointer"
                            >
                              <Maximize2 className="w-3.5 h-3.5 text-indigo-500" />
                              <span>View Gallery</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Clean Architectural Preview */
                        <div className="w-full h-full p-5 flex flex-col justify-between bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-900/40 border border-indigo-700/50">
                              {project.category}
                            </span>
                            <Cpu className="w-4 h-4 text-indigo-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold truncate">{project.title}</div>
                            <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                              {project.shortDesc}
                            </div>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            System Architecture Blueprint
                          </div>
                        </div>
                      )}

                      {/* Verified Badge */}
                      {project.badge && (
                        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1 shadow-xs">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{project.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content (Concise) */}
                    <div className="p-5 space-y-3">
                      <div>
                        <div className="flex items-center justify-between gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                          <span>{project.category}</span>
                          <span className="text-slate-400 dark:text-slate-500 text-[11px]">
                            {project.role}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>

                      {/* Tech Badges (Concise: 3-4 max) */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {project.hasScreenshots && (
                      <span className="text-[10px] font-mono text-slate-400">
                        {project.screenshots.length} screenshot{project.screenshots.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal with Animated Screenshots */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
