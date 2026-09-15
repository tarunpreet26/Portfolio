import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

const metrics = [
  { value: '55,500', label: 'Healthcare Records', sub: 'Analyzed & transformed' },
  { value: '15', label: 'Variables', sub: 'Across the dataset' },
  { value: '$1.4B+', label: 'Billing Analyzed', sub: 'Healthcare billing data' },
  { value: '~40K', label: 'Hospital Facilities', sub: 'Covered in dashboard' },
  { value: '6', label: 'KPIs', sub: 'Tracked in Power BI' },
  { value: '8', label: 'Visualizations', sub: 'Interactive charts' },
];

const tools = ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Tableau', 'Excel'];

const workItems = [
  'Analyzed and transformed 55,500 healthcare records across 15 variables using Python, Pandas, and NumPy to derive demographic, clinical, billing, and admission insights.',
  'Developed an interactive Power BI dashboard with 6 KPIs and 8 visualizations, analyzing $1.4B+ in healthcare billing across approximately 40,000 hospital facilities.',
  'Identified key trends across 6 medical conditions, 5 insurance providers, and 3 admission types using interactive filters and cross-highlighting to enable data-driven analysis.',
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        badge="Experience & Training"
        title="Professional Training"
        subtitle="Hands-on data analytics experience at Lovely Professional University's Centre of Professional Enhancement."
      />

      <div className="max-w-4xl">
        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Data Analytics Essentials with AI</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-cyan-400" />
                  Centre of Professional Enhancement
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" />
                  Lovely Professional University, Phagwara
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono whitespace-nowrap">
              <Calendar size={14} />
              June 2026 – July 2026
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tools.map(t => (
              <span key={t} className="tag text-xs">{t}</span>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 p-6 rounded-xl"
            style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-2xl font-black gradient-text leading-none mb-1">{m.value}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{m.label}</div>
                <div className="text-xs text-slate-500">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Work items */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <TrendingUp size={14} className="text-cyan-400" />
              Key Work Done
            </h4>
            <ul className="space-y-3">
              {workItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional stats */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/5">
            {[
              '6 Medical Conditions',
              '5 Insurance Providers',
              '3 Admission Types',
            ].map(s => (
              <span key={s} className="tag-purple text-xs">{s}</span>
            ))}
          </div>
        </motion.div>

        {/* Community activities teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 grid sm:grid-cols-2 gap-4"
        >
          {[
            { name: 'Launch Crew', org: 'Give My Certificate', period: 'Feb 2026 – Present', icon: '🚀' },
            { name: 'Hack With India', org: 'LPU Chapter', period: 'Jul 2026 – Present', icon: '💡' },
          ].map((a) => (
            <div key={a.name}
              className="glass-card p-5 flex items-center gap-4 hover:border-cyan-400/20 transition-all duration-300">
              <div className="text-2xl">{a.icon}</div>
              <div>
                <div className="text-sm font-semibold text-white">{a.name}</div>
                <div className="text-xs text-slate-400">{a.org}</div>
                <div className="text-xs text-cyan-400 font-mono mt-0.5">{a.period}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
