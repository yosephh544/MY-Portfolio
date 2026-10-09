import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, 
  Database, 
  Smartphone, 
  Laptop, 
  CreditCard, 
  Activity, 
  Layers, 
  Radio,
  CheckCircle,
  Cpu
} from 'lucide-react';

const NODES = [
  {
    id: 'clients',
    title: 'Client & Field Layer',
    subtitle: 'Municipal Portals & Offline Tablets',
    icon: Laptop,
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30',
    tags: ['Angular', 'React', 'Offline PWA', 'PrimeNG'],
    throughput: 'Concurrent municipal users & field readers',
    protocol: 'HTTPS / WSS / REST',
    desc: 'Multi-branch interfaces for transit operators, meter readers with offline caching, and administrative executives.',
  },
  {
    id: 'gateway',
    title: 'API Gateway & Security',
    subtitle: 'ASP.NET Core Web API',
    icon: Server,
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
    tags: ['C#', 'JWT / RBAC', 'Rate Limiting', 'Reverse Proxy'],
    throughput: 'Sub-50ms gateway latency',
    protocol: 'RESTful / JSON / gRPC',
    desc: 'Centralized authentication, claim-based authorization, request validation, and payload routing across services.',
  },
  {
    id: 'engines',
    title: 'Core Domain Engines',
    subtitle: 'Tariff, Logistics & Payment Logic',
    icon: Cpu,
    color: 'from-violet-500/20 to-pink-500/20 text-violet-400 border-violet-500/30',
    tags: ['Billing State Machine', 'Fleet Dispatch', 'Idempotent Webhooks', 'SignalR'],
    throughput: 'Tiered tariff calculation & transit verification',
    protocol: 'C# Business Services / MediatR',
    desc: 'Autonomous domain modules executing municipal water tariff policies, transit manifest rules, and payment settlement.',
  },
  {
    id: 'database',
    title: 'SQL Server High-Performance Cluster',
    subtitle: 'Relational Store & Stored Procedures',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    tags: ['SQL Server', 'T-SQL', 'Tuned Indexes', 'Temporal Audits'],
    throughput: 'Sub-second aggregations on 100k+ records',
    protocol: 'TDS / Strict ACID / Transactions',
    desc: 'Optimized stored procedures for bill generation, driver registry indexes, and immutable financial ledgers.',
  },
];

export function SystemVisualizer() {
  const [activeNode, setActiveNode] = useState(NODES[1]);
  const [isSimulating, setIsSimulating] = useState(true);

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-indigo-500/5 transition-all">
      {/* Visualizer Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSimulating ? 'bg-emerald-400' : 'bg-slate-400'}`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isSimulating ? 'bg-emerald-500' : 'bg-slate-400'}`} />
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-300">
            Enterprise Architecture Monitor
          </span>
        </div>
        <button
          onClick={() => setIsSimulating(!isSimulating)}
          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-slate-700/50"
        >
          {isSimulating ? 'Active Pulse' : 'Paused'}
        </button>
      </div>

      {/* System Topology Diagram */}
      <div className="py-5 relative">
        {/* Animated Conduits (SVG lines with pulsing particles) */}
        <div className="space-y-3 relative z-10">
          {NODES.map((node, index) => {
            const isSelected = activeNode.id === node.id;
            const Icon = node.icon;

            return (
              <div key={node.id} className="relative">
                <motion.div
                  onClick={() => setActiveNode(node)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-slate-800/90 border-indigo-500/50 dark:border-indigo-500/60 shadow-md ring-1 ring-indigo-500/20'
                      : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200/70 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl border bg-linear-to-br ${node.color} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {node.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                          L{index + 1}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {node.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {node.protocol.split('/')[0]}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-indigo-500 ring-2 ring-indigo-500/30' : 'bg-slate-300 dark:bg-slate-700'}`} />
                  </div>

                  {/* Flow Simulation Line */}
                  {isSimulating && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent"
                      initial={{ width: '0%', left: '0%' }}
                      animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>

                {/* Vertical connecting line to next node */}
                {index < NODES.length - 1 && (
                  <div className="flex justify-center my-0.5">
                    <div className="w-0.5 h-2 bg-slate-200 dark:bg-slate-800 relative">
                      {isSimulating && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-indigo-500 -left-0.5 absolute"
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Inspector Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/40 text-slate-800 dark:text-slate-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              Node Inspector: {activeNode.title}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-200/50 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300">
              {activeNode.protocol}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            {activeNode.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {activeNode.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
