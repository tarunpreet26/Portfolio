import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

// Animated neural network SVG
function NeuralNetworkViz() {
  const nodes = [
    // Input layer
    { id: 0, x: 60, y: 80 }, { id: 1, x: 60, y: 160 }, { id: 2, x: 60, y: 240 }, { id: 3, x: 60, y: 320 },
    // Hidden layer 1
    { id: 4, x: 200, y: 60 }, { id: 5, x: 200, y: 140 }, { id: 6, x: 200, y: 220 }, { id: 7, x: 200, y: 300 }, { id: 8, x: 200, y: 360 },
    // Hidden layer 2
    { id: 9, x: 340, y: 100 }, { id: 10, x: 340, y: 200 }, { id: 11, x: 340, y: 300 },
    // Output layer
    { id: 12, x: 460, y: 140 }, { id: 13, x: 460, y: 260 },
  ];

  const connections = [
    // input → h1
    [0,4],[0,5],[0,6],[1,4],[1,5],[1,6],[1,7],[2,5],[2,6],[2,7],[2,8],[3,6],[3,7],[3,8],
    // h1 → h2
    [4,9],[4,10],[5,9],[5,10],[5,11],[6,9],[6,10],[6,11],[7,10],[7,11],[8,10],[8,11],
    // h2 → output
    [9,12],[9,13],[10,12],[10,13],[11,12],[11,13],
  ];

  const colors = ['#22d3ee', '#a855f7', '#60a5fa'];

  return (
    <svg viewBox="0 0 520 420" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="nodeGlow0" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Connections */}
      {connections.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        return (
          <motion.line
            key={`c-${i}`}
            x1={from.x} y1={from.y} x2={to.x} y2={to.y}
            stroke={colors[i % 3]}
            strokeWidth="0.8"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0.15] }}
            transition={{ duration: 2, delay: i * 0.03, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Animated signal pulses */}
      {[0, 1, 2].map((i) => {
        const conn = connections[i * 5];
        if (!conn) return null;
        const from = nodes[conn[0]];
        const to = nodes[conn[1]];
        return (
          <motion.circle
            key={`pulse-${i}`}
            r="3"
            fill={colors[i]}
            filter="url(#blur)"
            animate={{
              cx: [from.x, to.x],
              cy: [from.y, to.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 1.2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const layer = i <= 3 ? 0 : i <= 8 ? 1 : i <= 11 ? 2 : 3;
        const color = colors[layer % 3];
        return (
          <g key={node.id}>
            {/* Glow */}
            <motion.circle
              cx={node.x} cy={node.y} r="14"
              fill={color}
              fillOpacity="0.06"
              animate={{ r: [14, 18, 14] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
            />
            {/* Node ring */}
            <circle cx={node.x} cy={node.y} r="6" fill="rgba(2,8,23,0.9)" stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
            {/* Node core */}
            <motion.circle
              cx={node.x} cy={node.y} r="3"
              fill={color}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2 + (i % 4) * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            />
          </g>
        );
      })}

      {/* Layer labels */}
      {[
        { x: 60, label: 'Input' },
        { x: 200, label: 'Hidden' },
        { x: 340, label: 'Hidden' },
        { x: 460, label: 'Output' },
      ].map((l, i) => (
        <text key={i} x={l.x} y="395" textAnchor="middle" fontSize="10" fill="rgba(148,163,184,0.4)" fontFamily="JetBrains Mono">
          {l.label}
        </text>
      ))}
    </svg>
  );
}

// Floating skill tag
function FloatingTag({ text, style, delay }) {
  return (
    <motion.div
      className="absolute tag text-xs whitespace-nowrap pointer-events-none"
      style={style}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {text}
    </motion.div>
  );
}

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.08) 0%, transparent 60%)' }}
      />
      <div className="glow-dot w-96 h-96 -top-20 -left-20"
        style={{ background: 'rgba(34,211,238,0.06)' }} />
      <div className="glow-dot w-80 h-80 top-1/2 -right-20"
        style={{ background: 'rgba(168,85,247,0.06)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* Left — Text content */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={stagger.item} className="flex mb-6">
              <span className="tag font-mono text-xs tracking-widest">
                B.Tech CSE • Lovely Professional University
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={stagger.item}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Tarunpreet</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Singh Panesar</span>
            </motion.h1>

            {/* Specialization */}
            <motion.p
              variants={stagger.item}
              className="text-lg sm:text-xl font-semibold text-slate-300 mb-4"
            >
              AI/ML Enthusiast &amp; Data Analytics Practitioner
            </motion.p>

            {/* Description */}
            <motion.p
              variants={stagger.item}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              I build <span className="text-cyan-400 font-medium">intelligent applications</span> using Python, machine learning, and modern web technologies.
              From ensemble ML pipelines to AI-powered investment platforms — and research published with{' '}
              <span className="text-purple-400 font-medium">Taylor &amp; Francis</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                id="hero-view-projects"
              >
                View My Projects
                <ArrowRight size={16} />
              </button>
              <a
                href={`${import.meta.env.BASE_URL}resume/Tarunpreet-Singh-Panesar.pdf`}
                download
                className="btn-secondary"
                id="hero-download-resume"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                id="hero-lets-connect"
              >
                <Mail size={16} />
                Let's Connect
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={stagger.item} className="flex items-center gap-4">
              <a
                href="https://github.com/tarunpreet26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Github size={18} className="group-hover:text-cyan-400 transition-colors" />
                <span>tarunpreet26</span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="https://www.linkedin.com/in/tarunpreet-singh-panesar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Linkedin size={18} className="group-hover:text-cyan-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Neural Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Card wrapper */}
            <div className="relative w-full max-w-md">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 70%)' }} />

              {/* Glass container */}
              <motion.div
                className="glass-card p-6 relative overflow-hidden"
                animate={{ boxShadow: ['0 0 30px rgba(34,211,238,0.1)', '0 0 60px rgba(34,211,238,0.2)', '0 0 30px rgba(34,211,238,0.1)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Header label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-cyan-400/70 tracking-widest">NEURAL NETWORK</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
                    <div className="w-2 h-2 rounded-full bg-purple-400/40" />
                    <div className="w-2 h-2 rounded-full bg-blue-400/40" />
                  </div>
                </div>

                {/* Neural network SVG */}
                <div className="aspect-[4/3]">
                  <NeuralNetworkViz />
                </div>

                {/* Stats row */}
                <div className="flex justify-around mt-4 pt-4 border-t border-white/5">
                  {[
                    { label: 'Models', value: '5+' },
                    { label: 'Features', value: '22' },
                    { label: 'Languages', value: '6' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-lg font-bold gradient-text">{s.value}</div>
                      <div className="text-xs text-slate-500 font-mono">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating tags */}
              <FloatingTag text="Python 🐍" style={{ top: '-16px', left: '10%' }} delay={0} />
              <FloatingTag text="Machine Learning" style={{ top: '-16px', right: '5%' }} delay={1.2} />
              <FloatingTag text="Taylor & Francis 📄" style={{ bottom: '-16px', left: '5%' }} delay={0.8} />
              <FloatingTag text="Power BI 📊" style={{ bottom: '-16px', right: '10%' }} delay={2} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll down"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
