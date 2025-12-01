import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'Building scalable systems with ASP.NET Core, Angular/React, SQL Server, modular architecture, and optimized REST APIs.',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description:
      'Designing clean, responsive interfaces with reusable components, dashboards, charts, and intuitive workflows.',
  },
  {
    icon: Rocket,
    title: 'Performance & Reliability',
    description:
      'Delivering high-performance reporting engines, real-time dashboards, optimized database operations, and enterprise-ready solutions.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I’m Yoseph H/Mariam — a full-stack developer specializing in
            <span className="font-semibold"> ASP.NET Core, Angular, React, and SQL Server</span>.
            I build production-grade systems, high-performance reporting modules,
            and modern dashboards used by real organizations. I’ve contributed to
            large-scale projects like the Oromia Transport Management System and
            led development of the Water Utility Billing System presented to
            UNICEF officials. I focus on writing clean code, scalable architecture,
            and crafting seamless user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h3 className="mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
