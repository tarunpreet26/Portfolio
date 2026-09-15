import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { skills } from '../data/skills';

const colorMap = {
  cyan: {
    tag: 'tag',
    glow: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.15)',
    text: '#22d3ee',
  },
  purple: {
    tag: 'tag-purple',
    glow: 'rgba(168,85,247,0.06)',
    border: 'rgba(168,85,247,0.15)',
    text: '#c084fc',
  },
  blue: {
    tag: 'tag-blue',
    glow: 'rgba(96,165,250,0.06)',
    border: 'rgba(96,165,250,0.15)',
    text: '#60a5fa',
  },
};

function SkillBadge({ name, icon, note, color }) {
  const c = colorMap[color] || colorMap.cyan;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className="relative group flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 cursor-default text-center"
      style={{
        background: c.glow,
        borderColor: c.border,
      }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-semibold text-white leading-tight">{name}</span>
      {note && (
        <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: c.text }}>
          {note}
        </span>
      )}
    </motion.div>
  );
}

function SkillGroup({ group, delay = 0 }) {
  const c = colorMap[group.color] || colorMap.cyan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="glass-card p-6 space-y-5"
    >
      <div className="flex items-center gap-3">
        <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${c.text}40, transparent)` }} />
        <h3 className="text-sm font-bold tracking-widest uppercase font-mono" style={{ color: c.text }}>
          {group.label}
        </h3>
        <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${c.text}40)` }} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {group.items.map((item) => (
          <SkillBadge key={item.name} {...item} color={group.color} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-navy-950/50">
      <SectionHeader
        badge="Technical Skills"
        title="What I Work With"
        subtitle="Skills drawn from coursework, professional training, and hands-on project development. Hover badges to see context."
      />

      <div className="space-y-6">
        <SkillGroup group={skills.programming} delay={0} />
        <SkillGroup group={skills.web} delay={0.1} />
        <SkillGroup group={skills.dataAI} delay={0.15} />
        <SkillGroup group={skills.mlModels} delay={0.2} />
        <SkillGroup group={skills.tools} delay={0.25} />
      </div>

      {/* Disclaimer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-xs text-slate-600 text-center mt-8 font-mono"
      >
        * Data &amp; AI tools applied in professional training at CPE, LPU · ML models applied in project development
      </motion.p>
    </SectionWrapper>
  );
}
