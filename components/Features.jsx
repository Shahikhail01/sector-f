'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { features } from '@/lib/data';

function TiltCard({ children, delay }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-xl border border-white/8 bg-dark2
                 cursor-default overflow-hidden group transition-shadow duration-300"
      style={{
        transform: hovered ? `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` : 'perspective(800px)',
        boxShadow: hovered ? '0 20px 60px rgba(197,150,58,0.12)' : '0 4px 24px rgba(0,0,0,0.2)',
        transition: 'transform 0.12s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        borderColor: hovered ? 'rgba(197,150,58,0.45)' : undefined,
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.55, ease: [0.2, 0, 0, 1] }}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 w-0.5 h-0 bg-gradient-to-b from-gold to-terra transition-all duration-500"
        style={{ height: hovered ? '100%' : '0' }}
      />
      {children}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-dark3 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag">What Sets It Apart</p>
          <h2 className="section-title text-cream mb-4">Premium Features Throughout</h2>
          <p className="section-sub text-stone mx-auto text-center">
            Every detail has been thoughtfully curated for exceptional living, comfort, and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <TiltCard key={i} delay={i * 0.06}>
              <div className="w-11 h-11 rounded-lg bg-terra/10 flex items-center justify-center
                              text-xl mb-5 group-hover:bg-terra/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl text-cream mb-2.5 font-medium">{f.title}</h3>
              <p className="text-stone text-xs leading-relaxed font-light">{f.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
