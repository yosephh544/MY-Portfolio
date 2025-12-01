import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-purple-400">Yoseph H/Mariam</span>
          </motion.h1>
        </motion.div>

        <motion.h2
          className="mb-6 text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full-Stack Developer — ASP.NET Core, Angular & React
        </motion.h2>

        <motion.p
          className="mb-8 text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I design and build scalable web applications, high-performance APIs,
          enterprise dashboards, and advanced reporting systems. I’ve helped
          deliver real-world solutions for organizations across Ethiopia —
          including transport management platforms and full water-utility
          billing systems with real-time monitoring, offline/online workflows,
          and secure modular architecture.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/yosephh544"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yoseph-h-mariam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:yosephhaile99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
