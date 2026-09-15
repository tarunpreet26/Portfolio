import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { education } from '../data/education';

function GPABadge({ gpa }) {
  const num = parseFloat(gpa);
  const color = num >= 9 ? '#22d3ee' : num >= 8 ? '#a855f7' : '#60a5fa';
  return (
    <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color }}>
      <Star size={13} fill={color} />
      GPA: {gpa}
    </div>
  );
}

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        badge="Education"
        title="Academic Journey"
        subtitle="Building a strong foundation in Computer Science & Engineering with a focus on AI/ML."
      />

      {/* Timeline */}
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-5 top-8 bottom-8 w-px hidden sm:block"
          style={{ background: 'linear-gradient(180deg, #22d3ee40, #a855f740, transparent)' }} />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-6 hidden sm:flex items-center justify-center">
                <motion.div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                  style={{
                    borderColor: edu.current ? '#22d3ee' : '#334155',
                    background: edu.current ? 'rgba(34,211,238,0.15)' : '#0A1628',
                  }}
                  animate={edu.current ? { boxShadow: ['0 0 0 0 rgba(34,211,238,0.4)', '0 0 0 8px rgba(34,211,238,0)', '0 0 0 0 rgba(34,211,238,0)'] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {edu.current && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                </motion.div>
              </div>

              {/* Card */}
              <div className={`glass-card p-6 transition-all duration-300 hover:border-white/10 ${edu.current ? 'border-cyan-400/15' : ''}`}>
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: edu.current ? 'rgba(34,211,238,0.1)' : 'rgba(96,165,250,0.07)', border: `1px solid ${edu.current ? 'rgba(34,211,238,0.2)' : 'rgba(96,165,250,0.12)'}` }}>
                      <GraduationCap size={17} className={edu.current ? 'text-cyan-400' : 'text-blue-400'} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">{edu.institution}</p>
                    </div>
                  </div>
                  {edu.current && (
                    <span className="self-start text-xs font-mono px-3 py-1 rounded-full text-cyan-400"
                      style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}>
                      Current
                    </span>
                  )}
                </div>

                {/* Info row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                  <GPABadge gpa={edu.gpa} />
                </div>

                {/* Highlights */}
                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span key={h} className="tag-blue text-xs">{h}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
