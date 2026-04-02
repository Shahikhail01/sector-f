'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-dark border-y border-white/5 py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center py-12 px-4
                         border-r border-b border-white/5 last:border-r-0
                         [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r
                         md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0
                         hover:bg-dark2 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
            >
              <div className="text-2xl mb-2 opacity-50 group-hover:opacity-80 transition-opacity">
                {s.icon}
              </div>
              <div className="font-serif text-3xl font-light text-gold-light leading-none mb-1">
                <Counter target={s.num} /> <span className="text-lg text-terra">{s.unit}</span>
              </div>
              <div className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-cream/30 mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
