'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  { icon: '🌱', title: 'Kitchen Garden',   desc: 'A dedicated plot for herbs, vegetables, and seasonal produce — from garden to table.' },
  { icon: '⛲', title: 'Garden Fountain',  desc: 'A charming fountain in the private back patio — the gentle sound of water as your daily soundtrack.' },
  { icon: '🔥', title: 'BBQ & Pizza Oven', desc: 'Wood-fire oven with full BBQ space — perfect for family nights and outdoor feasts.' },
  { icon: '🌿', title: 'Private Patios',   desc: 'A welcoming front patio and a secluded back patio — spaces to relax, entertain, or simply breathe.' },
];

export default function Outdoor() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} className="relative py-36 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-[-15%] z-0"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/WhatsApp Image 2026-04-02 at 2.39.45 PM.jpeg')" }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(135deg, rgba(13,9,6,.88) 0%, rgba(20,45,18,.72) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Outdoor Living</p>
          <h2 className="section-title text-cream mb-3">Your Private Natural Retreat</h2>
          <p className="section-sub text-cream/50 mx-auto text-center">
            Lush gardens, open skies, and absolute privacy — backed by nature itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="card-glass rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h4 className="font-serif text-xl text-cream font-medium mb-2">{c.title}</h4>
              <p className="text-cream/55 text-xs leading-relaxed font-light">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
