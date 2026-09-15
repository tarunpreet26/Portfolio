import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';

const stats = [
  { value: '3', label: 'Major Projects', icon: '🚀', desc: 'Atmosphera, Finova Advisor, Real Estate UI' },
  { value: '55,500', label: 'Records Analyzed', icon: '📊', desc: 'Healthcare data across 15 variables' },
  { value: '22', label: 'ML Features', icon: '🧠', desc: 'Engineered features in Atmosphera' },
  { value: '6', label: 'Languages Supported', icon: '🌍', desc: 'Multilingual i18n + RTL in Atmosphera' },
  { value: '2', label: 'Publications', icon: '📄', desc: 'Research + Book Chapter, Taylor & Francis' },
  { value: '5', label: 'Certifications', icon: '🏆', desc: 'Infosys Springboard & IamNeo' },
];

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <SectionHeader
        badge="About Me"
        title="Building Intelligence, One Project at a Time"
        subtitle="A Computer Science & Engineering student with a clear focus on AI/ML and Data Analytics — turning academic foundations into practical, impactful applications."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Tarunpreet Singh Panesar</span>, a B.Tech CSE student at{' '}
            <span className="text-cyan-400 font-medium">Lovely Professional University</span>, Phagwara, Punjab — driven by a deep interest in
            how artificial intelligence and data analytics can solve real-world problems.
          </p>
          <p className="text-slate-400 leading-relaxed">
            My journey spans building ensemble ML pipelines (Random Forest, Gradient Boosting, Linear Regression) for weather intelligence,
            designing AI-powered investment platforms with Gemini 2.5 Flash, and analyzing{' '}
            <span className="text-white font-medium">55,500+ healthcare records</span> to surface actionable clinical and billing insights.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Beyond projects, I have contributed to academic knowledge — with a{' '}
            <span className="text-purple-400 font-medium">research paper accepted at ICTTI-2026</span> and a{' '}
            <span className="text-purple-400 font-medium">book chapter</span> in{' '}
            <em>Internet of Things and Wireless Communication: Principles and Architecture</em> — both to be published by{' '}
            <span className="text-white font-medium">Taylor &amp; Francis</span>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I am actively building, learning, and contributing — currently seeking opportunities to apply my skills in
            AI/ML engineering, data analytics, or intelligent full-stack application development.
          </p>

          {/* Key interests */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['AI / Machine Learning', 'Data Analytics', 'Python', 'Full-Stack Development', 'Research', 'Problem Solving'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerChild}
              className="glass-card-hover p-5 flex flex-col gap-2"
            >
              <div className="text-2xl">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text leading-none">{stat.value}</div>
              <div className="text-sm font-semibold text-white leading-tight">{stat.label}</div>
              <div className="text-xs text-slate-500 leading-snug">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
