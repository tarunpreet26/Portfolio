import { motion } from 'framer-motion';
import { BookOpen, FileText, ExternalLink, Award, Calendar } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';
import { research, bookChapters } from '../data/research';

function PublicationBadge({ label, type }) {
  const colors = {
    upcoming: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    published: 'text-green-400 bg-green-400/10 border-green-400/20',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors[type] || colors.upcoming}`}>
      {label}
    </span>
  );
}

function ResearchCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card overflow-hidden group"
    >
      {/* Top accent */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />

      <div className="p-8">
        {/* Icon + type */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
              <FileText size={18} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Conference Paper</div>
              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <Calendar size={11} />
                {item.date}
              </div>
            </div>
          </div>
          <PublicationBadge label={item.status} type={item.statusType} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-snug mb-4">
          "{item.title}"
        </h3>

        {/* Venue */}
        <div className="space-y-2 mb-5">
          <div className="flex items-start gap-2 text-sm text-slate-300">
            <Award size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
            <span><span className="font-semibold">{item.conference}</span></span>
          </div>
          <div className="flex items-start gap-2 text-sm text-slate-400">
            <span className="w-3.5 flex-shrink-0" />
            <span className="italic">{item.session}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <BookOpen size={14} className="text-cyan-400 flex-shrink-0" />
            <span>Publisher: <span className="font-semibold text-white">{item.publisher}</span></span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BookChapterCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card overflow-hidden"
    >
      {/* Top accent */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #a855f7, #60a5fa)' }} />

      <div className="p-8">
        {/* Icon + type */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
              <BookOpen size={18} className="text-purple-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase tracking-widest">Book Chapter</div>
              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <Calendar size={11} />
                {item.date}
              </div>
            </div>
          </div>
          <PublicationBadge label={item.status} type={item.statusType} />
        </div>

        {/* Chapter title */}
        <h3 className="text-lg font-bold text-white leading-snug mb-3">
          "{item.chapterTitle}"
        </h3>

        {/* Book info */}
        <div className="space-y-2 mb-5">
          <div className="flex items-start gap-2 text-sm text-slate-400">
            <span className="text-purple-400 flex-shrink-0 font-semibold">In:</span>
            <span className="italic text-slate-300">{item.bookTitle}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <BookOpen size={14} className="text-purple-400 flex-shrink-0" />
            <span>Publisher: <span className="font-semibold text-white">{item.publisher}</span></span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map(t => (
            <span key={t} className="tag-purple text-xs">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeader
        badge="Research & Publications"
        title="Academic Contributions"
        subtitle="Contributing to the intersection of AI, wireless communication, and the Internet of Things — published with Taylor & Francis."
      />

      {/* Publisher highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-12"
      >
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl"
          style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.12)' }}>
          <span className="text-2xl">📚</span>
          <div className="text-center">
            <div className="text-sm font-bold text-white">Published with Taylor & Francis</div>
            <div className="text-xs text-slate-400">International Academic Publisher</div>
          </div>
        </div>
      </motion.div>

      {/* Research Papers */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText size={16} className="text-cyan-400" />
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest font-mono">Conference Papers</h3>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <div className="grid gap-6">
          {research.map((item, i) => (
            <ResearchCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Book Chapters */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={16} className="text-purple-400" />
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest font-mono">Book Chapters</h3>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <div className="grid gap-6">
          {bookChapters.map((item, i) => (
            <BookChapterCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
