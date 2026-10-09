import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-300 font-sans transition-colors duration-200">
        <Navbar onOpenCv={() => setIsCvOpen(true)} />
        <main>
          {/* 1. Hero: Who I am and what I build */}
          <Hero onOpenCv={() => setIsCvOpen(true)} />

          {/* 2. About Me: Short professional introduction */}
          <About />

          {/* 3. Skills: Core technologies grouped by category */}
          <Skills />

          {/* 4. Featured Projects: The main focus of the portfolio */}
          <Projects />

          {/* 5. Experience: Concise summary of roles and contributions */}
          <Experience />

          {/* 6. Contact: Simple, accessible contact and social links */}
          <Contact onOpenCv={() => setIsCvOpen(true)} />
        </main>
        <Footer />
        <BackToTop />
        <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      </div>
    </ThemeProvider>
  );
}