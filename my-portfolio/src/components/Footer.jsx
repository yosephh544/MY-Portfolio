import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">
              <span className="text-purple-400">{"<"}</span>
              YourName
              <span className="text-purple-400">{" />"}</span>
            </h3>
            <p className="text-slate-400">
              Building beautiful and functional web experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by YourName © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}