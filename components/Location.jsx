'use client';
import { motion } from 'framer-motion';

const locItems = [
  { icon: '📍', label: 'Address',        value: 'Sector‑F, DHA Phase 1, Islamabad' },
  { icon: '🛡', label: 'Society',        value: 'Defence Housing Authority — Pakistan\'s gold standard in secured, planned communities' },
  { icon: '🛣', label: 'Connectivity',   value: 'Well-connected to major arterials, hospitals, elite schools, and commercial centres' },
  { icon: '🌳', label: 'Environment',    value: 'Tree-lined streets, strong community, Islamabad\'s characteristic natural greenery' },
  { icon: '📡', label: 'Infrastructure', value: 'Gas, electricity, PTCL, multiple ISP fibre lines — all active and laid' },
  { icon: '✦',  label: 'Unique Edge',   value: 'This plot backs directly onto a protected natural reserve — one of a kind in DHA Phase 1' },
];

export default function Location() {
  return (
    <section id="location" className="bg-cream py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
          >
            <p className="section-tag text-terra">Prime Location</p>
            <h2 className="section-title text-dark mb-2">
              Sector‑F<br />
              <span className="italic text-terra">DHA Phase 1, Islamabad</span>
            </h2>
            <p className="text-stone text-sm mb-10 font-light">
              One of Pakistan's most prestigious and secure residential addresses.
            </p>

            <div className="space-y-6">
              {locItems.map((l, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start pb-5 border-b border-cream3 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <span className="text-terra text-base mt-0.5 flex-shrink-0 w-5 text-center">{l.icon}</span>
                  <div>
                    <p className="text-dark text-xs font-bold tracking-[0.08em] uppercase mb-0.5">{l.label}</p>
                    <p className="text-stone text-sm font-light leading-relaxed">{l.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map card */}
          <motion.div
            className="sticky top-28"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
          >
            <div className="bg-cream2 rounded-2xl border border-cream3 shadow-xl overflow-hidden">
              <div className="p-10 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 rounded-full bg-terra/10 flex items-center justify-center text-4xl">
                  📍
                </div>
                <div>
                  <p className="font-serif text-2xl text-dark mb-1">DHA Phase 1 · Sector‑F</p>
                  <p className="font-serif text-3xl font-light text-dark">Islamabad, Pakistan</p>
                </div>
                <p className="text-stone text-sm font-light max-w-xs">
                  Located in the heart of one of Pakistan's most exclusive and secured residential communities.
                </p>
                <a
                  href="https://maps.google.com/maps?q=DHA+Phase+1+Islamabad+Sector+F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center"
                >
                  <span>🗺</span> View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
