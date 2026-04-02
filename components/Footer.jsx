'use client';
import { motion } from 'framer-motion';

const NAV = [
  { href: '#overview',  label: 'Overview' },
  { href: '#features',  label: 'Features' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#tour',      label: 'Video Tour' },
  { href: '#floorplan', label: 'Floor Plan' },
  { href: '#contact',   label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="max-w-xs"
          >
            <p className="font-serif text-2xl text-cream tracking-wider mb-1">SectorF Villa</p>
            <p className="text-stone text-xs font-light leading-relaxed">
              An extraordinary 1-Kanal luxury residence in the heart of DHA Phase 1, Islamabad.
              Reach out for private viewings and pricing.
            </p>
          </motion.div>

          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="text-stone hover:text-gold text-xs font-bold tracking-widest uppercase transition-colors"
              >
                {n.label}
              </a>
            ))}
          </motion.nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <a
              href="https://wa.me/923007010300"
              className="btn-gold text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </a>
            <a href="#contact" className="btn-outline text-xs">Send Enquiry →</a>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-stone text-xs">
          <p>© {year} Sector‑F Villa, DHA Phase 1, Islamabad. All rights reserved.</p>
          <p className="font-light italic text-stone/60">Private property — Price on request.</p>
        </div>
      </div>
    </footer>
  );
}
