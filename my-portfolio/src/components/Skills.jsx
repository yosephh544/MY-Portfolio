import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'PrimeNG / Tailwind', level: 90 },
      { name: 'ApexCharts / Leaflet Maps', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'ASP.NET Core', level: 95 },
      { name: 'Entity Framework Core', level: 90 },
      { name: 'SQL Server / Optimization', level: 90 },
      { name: 'REST API Design', level: 95 },
      { name: 'Authentication & Authorization', level: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Swagger', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'VS Code / Visual Studio', level: 95 },
      { name: 'Modular Architecture', level: 90 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A modern full-stack skillset centered on ASP.NET Core, Angular, React,
            SQL Server, modular architecture, real-time dashboards, and advanced
            reporting. I build scalable, production-ready systems from backend to UI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="mb-6 text-slate-900">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
