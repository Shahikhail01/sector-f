'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { floorPlan } from '@/lib/data';

export default function FloorPlan() {
  const [active, setActive] = useState('basement');
  const current = floorPlan.find(f => f.id === active);

  return (
    <section id="floor-plan" className="bg-dark py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Floor Layout</p>
          <h2 className="section-title text-cream mb-3">Room‑by‑Room Overview</h2>
          <p className="section-sub text-stone mx-auto text-center">
            Four distinct levels — each with its own character, purpose, and privacy.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-dark2"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
        >
          {/* Tab buttons */}
          <div className="flex bg-dark border-b border-white/8" role="tablist">
            {floorPlan.map(f => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={`flex-1 py-4 text-[0.68rem] font-bold tracking-[0.12em] uppercase
                            transition-all duration-300 flex flex-col items-center gap-1.5
                            ${active === f.id
                              ? 'text-gold-light border-b-2 border-gold bg-dark2'
                              : 'text-cream/35 hover:text-cream/70 border-b-2 border-transparent'}`}
              >
                <span className="text-base">{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                  {current.rooms.map((r, i) => (
                    <motion.div
                      key={r.name}
                      className="flex items-center gap-2.5 bg-dark3 rounded-lg px-3.5 py-3
                                 border border-white/5 hover:border-gold/30 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <span className="text-sm">{r.icon}</span>
                      <span className="text-cream text-xs font-medium">{r.name}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-stone text-sm leading-relaxed border-t border-white/6 pt-5">
                  {current.note}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
