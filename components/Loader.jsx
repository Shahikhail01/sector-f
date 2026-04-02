'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 28);

    const timer = setTimeout(() => setDone(true), 1800);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9997] bg-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            {/* Logo mark */}
            <div className="text-gold/25 text-7xl font-serif mb-4 select-none">⌂</div>
            <p className="font-serif text-4xl text-cream tracking-widest mb-1">Sector‑F Villa</p>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-10">DHA Phase 1 · Islamabad</p>

            {/* Progress bar */}
            <div className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-terra to-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                style={{ transformOrigin: 'left' }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>
            <p className="text-stone text-xs mt-3 tracking-widest tabular-nums">{count}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
