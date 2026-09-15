import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X, Cpu, Layers, Zap } from 'lucide-react';
import { Github } from '../components/Icons';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { projects } from '../data/projects';

// ─── Detailed case study modal ──────────────────────────────────────────────

const caseStudies = {
  atmosphera: {
    problem: 'Accurate, real-time weather forecasting with multi-language accessibility is a challenge for end users — most apps lack integrated AQI data, meaningful ML-backed predictions, and export capabilities.',
    solution: 'Built a full-stack weather intelligence platform combining live OpenWeatherMap API data with an ensemble ML pipeline, multilingual i18n, and multiple data export options to make weather insights accessible and actionable.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'OpenWeatherMap API', 'Chart.js'],
    mlApproach: [
      'Ensemble pipeline combining Random Forest, Gradient Boosting, and Linear Regression',
      '22 engineered atmospheric features derived from raw weather data',
      'Task: temperature forecasting from historical atmospheric observations',
    ],
    keyFeatures: [
      'Real-time current weather conditions',
      '5-day forecast visualization with Chart.js',
      'Air Quality Index (AQI) integration',
      'ML temperature prediction using ensemble models',
      'Multilingual support: 6 languages with RTL layout',
      'Export: CSV, PDF, Excel formats',
    ],
    metrics: [
      { label: 'ML Models', value: '3 (Ensemble)' },
      { label: 'Atmospheric Features', value: '22 Engineered' },
      { label: 'Languages Supported', value: '6 + RTL' },
      { label: 'Export Formats', value: 'CSV / PDF / Excel' },
    ],
    challenges: '[To be filled in by you — e.g., handling API rate limits, feature engineering for temperature prediction, RTL layout compatibility]',
    future: '[To be filled in by you — e.g., deploying the ML model as an API endpoint, adding precipitation forecasting, expanding to more languages]',
  },
  'finova-advisor': {
    problem: 'Personal investment planning is complex and inaccessible to most individuals — existing tools lack personalization, real-time AI guidance, and reliable risk assessment for retail investors.',
    solution: 'Designed a 3-module AI-powered investment platform integrating Gemini 2.5 Flash for intelligent planning, a Decision Tree classifier for risk prediction, and a personalized portfolio allocation engine.',
    stack: ['Python', 'Gemini 2.5 Flash API', 'Decision Tree (scikit-learn)'],
    mlApproach: [
      'Decision Tree classifier trained on 6 financial input features',
      'Predicts one of 3 risk levels: Conservative, Moderate, Aggressive',
      'Gemini 2.5 Flash for conversational investment planning and chatbot responses',
      '3-tier AI architecture: Risk Prediction → Portfolio Allocation → AI Advisory',
    ],
    keyFeatures: [
      'AI risk prediction using 6 financial features',
      'Decision Tree classifier for 3-level risk categorization',
      'Personalized portfolio allocation recommendations',
      'Gemini 2.5 Flash-powered investment chatbot (1–3 sec response)',
      'Investment plan generation under 2 seconds',
      '100% API error-handling coverage across all modules',
    ],
    metrics: [
      { label: 'Risk Levels Predicted', value: '3 (Conservative / Moderate / Aggressive)' },
      { label: 'Financial Features', value: '6 Input Variables' },
      { label: 'Chatbot Response Time', value: '1–3 Seconds' },
      { label: 'Plan Generation', value: '< 2 Seconds' },
      { label: 'API Error Coverage', value: '100%' },
    ],
    challenges: '[To be filled in by you — e.g., prompt engineering for Gemini, balancing Decision Tree depth vs. overfitting, handling edge cases in financial inputs]',
    future: '[To be filled in by you — e.g., expanding to more asset classes, adding portfolio backtesting, deploying as a web app]',
  },
  'real-estate-frontend': {
    problem: 'House rental platforms often suffer from poor mobile experience, inconsistent UIs, and lack of dynamic interaction — creating friction for both tenants and landlords.',
    solution: 'Developed a fully responsive frontend for a house rental platform using HTML5, CSS3, and JavaScript — with dynamic interactions, backend API integration, and a visually consistent cross-device layout.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    mlApproach: null,
    keyFeatures: [
      'Responsive layout for desktop, tablet, and mobile',
      'JavaScript-driven dynamic UI interactions',
      'Backend API integration for property data',
      'Consistent visual design across all screen sizes',
    ],
    metrics: [
      { label: 'Tech Stack', value: 'HTML5 / CSS3 / JS' },
      { label: 'Responsiveness', value: 'Desktop + Tablet + Mobile' },
    ],
    challenges: '[To be filled in by you]',
    future: '[To be filled in by you — e.g., migrating to React, adding map integration, property search filters]',
  },
};

function CaseStudyModal({ project, onClose }) {
  const cs = caseStudies[project.id];
  if (!cs) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
      style={{ background: 'rgba(2,8,23,0.92)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="glass-card w-full max-w-3xl my-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: project.accentColor === 'purple'
            ? 'linear-gradient(90deg, #a855f7, #22d3ee)'
            : 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{project.icon}</span>
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              </div>
              <p className="text-slate-400 text-sm">{project.tagline}</p>
            </div>
            <button onClick={onClose}
              className="btn-ghost p-2 flex-shrink-0" aria-label="Close">
              <X size={20} />
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(t => <span key={t} className="tag text-xs">{t}</span>)}
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono mb-2">Problem</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{cs.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest font-mono mb-2">Solution</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{cs.solution}</p>
          </div>

          {/* ML Approach */}
          {cs.mlApproach && (
            <div>
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest font-mono mb-2 flex items-center gap-2">
                <Cpu size={13} />
                ML / AI Approach
              </h3>
              <ul className="space-y-2">
                {cs.mlApproach.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono mb-2 flex items-center gap-2">
              <Layers size={13} />
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {cs.keyFeatures.map((f, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-300 leading-snug">
                  <span className="mt-1 text-cyan-400 flex-shrink-0">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {cs.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.08)' }}>
              {cs.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-sm font-bold text-white mb-0.5">{m.value}</div>
                  <div className="text-xs text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Challenges */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">Challenges</h3>
            <p className="text-sm text-slate-500 italic">{cs.challenges}</p>
          </div>

          {/* Future */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">Future Improvements</h3>
            <p className="text-sm text-slate-500 italic">{cs.future}</p>
          </div>

          {/* GitHub link */}
          <div className="flex gap-3 pt-2 border-t border-white/5">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-sm">
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Featured Project Card ───────────────────────────────────────────────────

function FeaturedCard({ project, index, onCaseStudy }) {
  const isReversed = index % 2 === 1;
  const accentColors = {
    cyan: { text: '#22d3ee', glow: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.15)' },
    purple: { text: '#c084fc', glow: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.15)' },
    blue: { text: '#60a5fa', glow: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.15)' },
  };
  const accent = accentColors[project.accentColor] || accentColors.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-card overflow-hidden group hover:border-white/10 transition-all duration-500"
      style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.4)` }}
    >
      {/* Top accent bar */}
      <div className="h-1" style={{
        background: project.accentColor === 'purple'
          ? 'linear-gradient(90deg, #a855f7, #22d3ee)'
          : 'linear-gradient(90deg, #22d3ee, #a855f7)'
      }} />

      <div className="p-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
          {/* Project preview panel */}
          <div className="lg:w-2/5 flex-shrink-0">
            <motion.div
              className="rounded-2xl p-6 h-full flex flex-col justify-between min-h-[220px] relative overflow-hidden"
              style={{ background: accent.glow, border: `1px solid ${accent.border}` }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{project.icon}</div>

              {/* ML stats if applicable */}
              {project.mlApproach && (
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: accent.text }}>
                    ML Pipeline
                  </div>
                  {project.mlApproach.models.map(m => (
                    <div key={m} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent.text }} />
                      {m}
                    </div>
                  ))}
                  {project.mlApproach.features && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-xl font-black" style={{ color: accent.text }}>
                        {project.mlApproach.features}
                      </span>
                      <span className="text-xs text-slate-500 ml-1">features engineered</span>
                    </div>
                  )}
                </div>
              )}

              {/* Date badge */}
              <div className="mt-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{ background: `${accent.text}15`, color: accent.text, border: `1px solid ${accent.text}25` }}>
                  {project.date}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-5 flex-1">
            <div>
              {/* Featured badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ background: `${accent.text}10`, color: accent.text }}>
                  Featured Project
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {project.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300 leading-snug">
                    <span style={{ color: accent.text }} className="mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(148,163,184,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-sm">
                <Github size={15} />
                GitHub
              </a>
              <button
                onClick={() => onCaseStudy(project)}
                className="btn-ghost text-sm"
              >
                <ChevronRight size={15} />
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Small Project Card ──────────────────────────────────────────────────────

function SmallCard({ project, onCaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card-hover p-6 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between">
        <div className="text-3xl">{project.icon}</div>
        <span className="text-xs font-mono text-slate-500">{project.date}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map(t => (
          <span key={t} className="text-xs font-mono px-2 py-0.5 rounded"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(148,163,184,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-auto pt-2 border-t border-white/5">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="btn-secondary text-xs px-3 py-2">
          <Github size={13} />
          GitHub
        </a>
        <button onClick={() => onCaseStudy(project)} className="btn-ghost text-xs px-3 py-2">
          <ChevronRight size={13} />
          Details
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Projects Section ───────────────────────────────────────────────────

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-navy-950/30">
      <SectionHeader
        badge="Projects"
        title="What I've Built"
        subtitle="Intelligent applications that bridge machine learning, data analytics, and modern web development."
      />

      {/* Featured projects */}
      <div className="space-y-8 mb-16">
        {featured.map((project, i) => (
          <FeaturedCard
            key={project.id}
            project={project}
            index={i}
            onCaseStudy={setSelectedProject}
          />
        ))}
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Other Projects</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(p => (
              <SmallCard key={p.id} project={p} onCaseStudy={setSelectedProject} />
            ))}
          </div>
        </>
      )}

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/tarunpreet26"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex"
        >
          <Github size={16} />
          View All on GitHub
        </a>
      </motion.div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
