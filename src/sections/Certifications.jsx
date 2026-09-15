import { motion } from 'framer-motion';
import { Award, Calendar, Building } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { certifications } from '../data/certifications';

const colorMap = {
  cyan: { bg: 'rgba(34,211,238,0.06)', border: 'rgba(34,211,238,0.15)', text: '#22d3ee' },
  purple: { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.15)', text: '#c084fc' },
  blue: { bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.15)', text: '#60a5fa' },
};

function CertCard({ cert, index }) {
  const c = colorMap[cert.color] || colorMap.cyan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -3 }}
      className="glass-card p-5 flex flex-col gap-4 cursor-default transition-all duration-300"
      style={{ borderColor: c.border }}
    >
      {/* Icon + issuer */}
      <div className="flex items-start justify-between">
        <div className="text-2xl">{cert.icon}</div>
        <div className="flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded"
          style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
          <Award size={10} />
          {cert.issuer}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-sm font-bold text-white leading-snug">{cert.name}</h3>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mt-auto">
        <Calendar size={11} />
        {cert.date}
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const infosys = certifications.filter(c => c.issuer === 'Infosys Springboard');
  const iamneo = certifications.filter(c => c.issuer === 'IamNeo');

  return (
    <SectionWrapper id="certifications" className="bg-navy-950/50">
      <SectionHeader
        badge="Certifications"
        title="Professional Certifications"
        subtitle="Industry-recognized certifications demonstrating commitment to continuous learning and technical growth."
      />

      {/* By issuer */}
      <div className="space-y-10">
        {/* Infosys Springboard */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
              🏛️
            </div>
            <h3 className="text-sm font-bold text-slate-300">Infosys Springboard</h3>
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs text-slate-600 font-mono">{infosys.length} certificates</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infosys.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        </div>

        {/* IamNeo */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
              🎯
            </div>
            <h3 className="text-sm font-bold text-slate-300">IamNeo</h3>
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs text-slate-600 font-mono">{iamneo.length} certificates</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {iamneo.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
