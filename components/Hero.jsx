'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sentence splits into individual words for staggered reveal
const words = ['A', 'Nature‑Backed', 'Sanctuary', 'Unlike', 'Any', 'Other'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Video URLs: use Blob URL in prod (env var), fallback to local for dev
  const heroVideo =
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
    '/videos/untitled.webm';

  const stats = [
    { n: '6',    label: 'Bedrooms' },
    { n: '1+',   label: 'Kanal' },
    { n: 'G+1+B',label: 'Configuration' },
    { n: '10kW', label: 'Solar' },
    { n: '3–4',  label: 'Car Parking' },
  ];

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden">
      {/* ── Video background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay muted loop playsInline
          poster="/images/WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/webm" />
          {/* Fallback to tour video if hero blob not set */}
          <source src="/videos/Sector-F-DHA-Phase-1.webm" type="video/webm" />
        </video>
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(13,9,6,.55) 65%), linear-gradient(to bottom, rgba(13,9,6,.4) 0%, transparent 40%, rgba(13,9,6,.7) 75%, rgba(13,9,6,.97) 100%)'
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-20 text-center px-5 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 text-gold-light text-[0.65rem] font-bold tracking-[0.22em] uppercase
                     bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
          Exclusively Listed · DHA Phase 1 · Islamabad
        </motion.div>

        {/* Title — word by word */}
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-none tracking-tight text-cream mb-5">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-[0.25em] ${word === 'Sanctuary' ? 'italic shimmer-text' : ''}`}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 2.0 + i * 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-cream/55 text-xs md:text-sm font-light tracking-[0.2em] uppercase mb-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          Sector‑F &nbsp;·&nbsp; 1 Kanal+ Luxury Villa &nbsp;·&nbsp; Ground + First Floor + Basement
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
        >
          <a href="#gallery" className="btn-gold">
            <span>🖼</span> Explore Gallery
          </a>
          <a href="#tour" className="btn-outline">
            <span>▶</span> Watch Tour
          </a>
        </motion.div>
      </motion.div>

      {/* ── Stats bar ── */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 z-20 flex justify-center px-4"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.3, duration: 0.7 }}
      >
        <div className="flex flex-wrap justify-center backdrop-blur-xl bg-dark/65 border border-gold/20 rounded-xl overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-6 py-4 text-center border-r border-gold/15 last:border-r-0"
            >
              <span className="block font-serif text-2xl text-gold-light leading-none mb-1">{s.n}</span>
              <span className="block text-[0.58rem] font-bold tracking-[0.15em] uppercase text-cream/40">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-cream/25 text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
}
