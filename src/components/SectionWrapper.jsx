import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ badge, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {badge && (
        <div className={`flex mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="tag font-mono text-xs tracking-widest uppercase">{badge}</span>
        </div>
      )}
      <h2 className="section-heading gradient-text-blue">{title}</h2>
      {subtitle && (
        <p className={`section-subheading ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
}
