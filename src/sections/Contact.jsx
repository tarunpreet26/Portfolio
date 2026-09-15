import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { SectionWrapper, SectionHeader } from '../components/SectionWrapper';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tarunpreet2439@gmail.com',
    href: 'mailto:tarunpreet2439@gmail.com',
    color: '#22d3ee',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'tarunpreet-singh-panesar',
    href: 'https://www.linkedin.com/in/tarunpreet-singh-panesar/',
    color: '#60a5fa',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'tarunpreet26',
    href: 'https://github.com/tarunpreet26',
    color: '#c084fc',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9877799838',
    href: 'tel:+919877799838',
    color: '#22d3ee',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: This form is FRONTEND ONLY. No messages are actually sent.
// To make it functional, connect it to one of:
//   - Formspree: https://formspree.io  (add your form endpoint to FORM_ACTION)
//   - EmailJS: https://www.emailjs.com
//   - Your own backend API
// Replace FORM_ACTION below with your Formspree endpoint, e.g.:
//   const FORM_ACTION = 'https://formspree.io/f/your-form-id';
// ─────────────────────────────────────────────────────────────────────────────
const FORM_ACTION = null; // ← Replace with your Formspree/EmailJS endpoint

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ACTION) {
      // Demo mode — no backend connected
      setStatus('demo');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-navy-950/30">
      {/* CTA headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="text-white">Let's Build Something </span>
          <span className="gradient-text">Intelligent.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Open to internships, research collaborations, and exciting opportunities in AI/ML and data analytics.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left — contact info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 glass-card-hover rounded-xl group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}25`,
                }}>
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">{item.label}</div>
                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />

            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            {/* Demo notice */}
            {!FORM_ACTION && (
              <div className="mb-5 p-3 rounded-xl text-xs text-amber-400 flex items-start gap-2"
                style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)' }}>
                <AlertCircle size={13} className="mt-0.5 flex-shrink-0" />
                <span>
                  Form is in demo mode. Connect Formspree or EmailJS to enable real submissions.
                  See the comment in <code className="font-mono">Contact.jsx</code>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-2">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-2">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
                id="contact-submit"
              >
                {status === 'sending' ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-400 text-center justify-center">
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'demo' && (
                <div className="flex items-center gap-2 text-sm text-amber-400 text-center justify-center">
                  <AlertCircle size={15} />
                  Demo mode — connect a backend to enable sending.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400 text-center justify-center">
                  <AlertCircle size={15} />
                  Something went wrong. Try emailing directly.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
