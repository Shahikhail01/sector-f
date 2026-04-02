'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fade = (dir, delay = 0) => ({
  initial: { opacity: 0, x: dir === 'left' ? -50 : dir === 'right' ? 50 : 0, y: dir === 'up' ? 40 : 0 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.2, 0, 0, 1] },
});

const highlights = [
  'Prime Sector‑F, DHA Phase 1 — Islamabad\'s gold-standard address',
  'Private garden backing directly onto an untouched natural reserve',
  '50×100 main plot + 50×25 extra land + open back area',
  'Mediterranean exterior with unique Islamic-inspired artistry inside',
  'Fully self-sufficient: solar, gas, PTCL, ISP fibre, bore water',
];

export default function Overview() {
  return (
    <section id="overview" className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* ── Text ── */}
        <motion.div {...fade('right')}>
          <p className="section-tag text-terra">The Property</p>
          <h2 className="section-title text-dark mb-6">
            Unparalleled &amp; Unique<br />
            <span className="italic text-terra">Location in DHA Phase 1</span>
          </h2>
          <p className="text-stone text-sm leading-relaxed mb-4">
            Nestled within the premium enclave of Sector‑F, DHA Phase 1, this extraordinary residence
            occupies a position that simply cannot be replicated. Behind its private walled garden lies
            an untouched natural reserve — delivering absolute privacy, breathtaking views, and cool
            mountain breezes year-round.
          </p>
          <p className="text-stone text-sm leading-relaxed mb-8">
            Spanning a ground floor, first floor, and basement — each with its own complete kitchen and
            lounge — complemented by extra purchased land and an open backyard, this home offers a rare
            combination of grand proportions and warm family intimacy.
          </p>

          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-dark text-sm font-light"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
              >
                <span className="mt-0.5 text-terra text-base flex-shrink-0">✦</span>
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── Image ── */}
        <motion.div {...fade('left')} className="relative">
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
            <Image
              src="/images/WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg"
              alt="Sector-F Villa front facade"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-dark text-gold-light font-serif text-sm
                       tracking-widest px-5 py-3 rounded-full border border-gold/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}
          >
            DHA Phase 1 · Sector‑F
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
