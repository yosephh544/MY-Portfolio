import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Water Utility Billing System (BPS)',
    description:
      'A full-stack billing & revenue management platform built with ASP.NET Core and Angular. Features include full bill lifecycle, advanced reporting, offline meter readings, real-time dashboards, HRM, CRM, and configuration modules. Presented to UNICEF officials.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
    tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'SignalR'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Oromia Transport Management System',
    description:
      'Enterprise transport management system including freight operations, fleet management, registration, logistics, and reporting. Developed backend REST APIs and Angular components for real-world deployment.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800',
    tags: ['ASP.NET Core', 'Angular', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive developer portfolio built using React and Vite. Designed clean UI components, animations, and fully deployed to Vercel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['React', 'Vite', 'Javascript', 'CSS'],
    liveUrl: 'https://yosephh.com',
    githubUrl: 'https://github.com/yosephh544',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of impactful systems I’ve built — from large-scale
            enterprise applications to personal projects that reflect my growth as
            a full-stack developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-slate-900 hover:bg-purple-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-slate-900 hover:bg-purple-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tag}
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
