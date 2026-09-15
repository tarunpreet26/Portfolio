import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Name & tagline */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">Tarunpreet Singh Panesar</h3>
            <p className="text-sm text-slate-500 font-mono">AI/ML • Data Analytics • Software Development</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tarunpreet26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 border border-white/5"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarunpreet-singh-panesar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 border border-white/5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:tarunpreet2439@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 border border-white/5"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center">
            © {new Date().getFullYear()} Tarunpreet Singh Panesar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
