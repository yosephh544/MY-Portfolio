import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitBranch, 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Cloud,
  FileCode2,
  Workflow
} from 'lucide-react';
import { architectureFlows, engineeringPrinciples } from '../data/portfolioData';

const LIFECYCLE_STEPS = [
  {
    step: '01',
    title: 'Domain Modeling & Requirements',
    desc: 'Translating complex municipal rules, tariff laws, and transit policies into rigorous domain entities and bounded contexts.',
    tag: 'Domain-Driven Design',
  },
  {
    step: '02',
    title: 'Clean Architecture & API Contracts',
    desc: 'Layering application logic with ASP.NET Core, MediatR, and CQRS. Designing typed, versioned RESTful endpoints and Swagger contracts.',
    tag: 'ASP.NET Core • Web APIs',
  },
  {
    step: '03',
    title: 'Database Schema & Query Optimization',
    desc: 'Designing normalized SQL Server schemas, indexing strategies, and authoring complex T-SQL stored procedures for high-volume billing.',
    tag: 'SQL Server • T-SQL Tuning',
  },
  {
    step: '04',
    title: 'Reactive Frontend Craftsmanship',
    desc: 'Building modular Angular and React interfaces with PrimeNG/Tailwind, RxJS reactive streams, and responsive administrative dashboards.',
    tag: 'Angular • React 19',
  },
  {
    step: '05',
    title: 'Resilient Integrations & Idempotency',
    desc: 'Integrating Telebirr and bank gateways with HMAC signatures, retry mechanisms, and offline-first synchronization protocols.',
    tag: 'Payment Rails • Webhooks',
  },
  {
    step: '06',
    title: 'Deployment & Multi-Branch Support',
    desc: 'Publishing builds to production IIS Web Servers and Docker containers, monitoring stability, and providing hands-on regional training.',
    tag: 'IIS • Docker • Production Support',
  },
];

export function Architecture() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);
  const activeFlow = architectureFlows[activeFlowIndex];
  const [selectedNodeId, setSelectedNodeId] = useState(activeFlow.nodes[0].id);

  const selectedNode = activeFlow.nodes.find((n) => n.id === selectedNodeId) || activeFlow.nodes[0];

  return (
    <section 
      id="architecture" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Workflow className="w-3.5 h-3.5" />
            <span>02 // HOW I BUILD SOFTWARE • TECHNICAL DEPTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            End-to-end engineering methodology &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">
              system architecture
            </span>.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise software requires deep discipline across both client interfaces and the foundational databases and servers that power them.
          </p>
        </div>

        {/* Part 1: Interactive System Architecture Flow Switcher */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Interactive Pipeline Explorer
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {activeFlow.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {activeFlow.subtitle}
              </p>
            </div>

            {/* Architecture Flow Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {architectureFlows.map((flow, idx) => (
                <button
                  key={flow.id}
                  onClick={() => {
                    setActiveFlowIndex(idx);
                    setSelectedNodeId(flow.nodes[0].id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                    activeFlowIndex === idx
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {flow.id === 'billing' ? 'Water Utility Flow' : flow.id === 'tms' ? 'Transport Flow' : 'Payment Pipeline'}
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline Node Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Flow Steps List */}
            <div className="lg:col-span-7 space-y-3">
              {activeFlow.nodes.map((node, idx) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md'
                        : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800/60'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        isSelected 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {node.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {node.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700">
                        {node.badge}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-indigo-500 translate-x-0.5' : 'text-slate-400'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Selected Node Detailed Breakdown Inspector */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                      Node Specification
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {selectedNode.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {selectedNode.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {selectedNode.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Technical Implementation
                    </span>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-xs text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700/60">
                      {selectedNode.tech}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Part 2: End-to-End Engineering Methodology Stages */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Delivery Pipeline
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              6-Stage Engineering Lifecycle
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              How I guide software projects from ambiguous domain problems to verified production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFECYCLE_STEPS.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50">
                    STAGE {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {step.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: Engineering Principles */}
        <div className="space-y-6 pt-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Core Tenets
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
