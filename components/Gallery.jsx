'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/lib/data';

const INITIAL = 12;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index or null

  const images = showAll ? galleryImages : galleryImages.slice(0, INITIAL);

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % galleryImages.length);
  }, []);

  // keyboard for lightbox
  const onKey = useCallback((e) => {
    if (e.key === 'Escape')     setLightbox(null);
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  }, [prev, next]);

  return (
    <section id="gallery" className="bg-dark py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Photo Gallery</p>
          <h2 className="section-title text-cream mb-3">Explore Every Corner</h2>
          <p className="section-sub text-stone mx-auto text-center">
            {galleryImages.length} photographs across interiors, gardens, and architecture
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="mb-2 break-inside-avoid overflow-hidden rounded cursor-pointer group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={img.alt}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
            >
              <div className="relative w-full overflow-hidden bg-dark2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/45 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">⤢</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {!showAll && galleryImages.length > INITIAL && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline text-terra border-terra hover:bg-terra hover:text-white hover:border-terra"
            >
              <span>🖼</span> Show All {galleryImages.length} Photos
            </button>
          </motion.div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[9000] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            onKeyDown={onKey}
            tabIndex={-1}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setLightbox(null)} aria-label="Close"
            >✕</button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous"
            >‹</button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={e => { e.stopPropagation(); next(); }} aria-label="Next"
            >›</button>

            <motion.div
              key={lightbox}
              className="relative max-w-[90vw] max-h-[88vh] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={1400}
                height={900}
                className="object-contain max-h-[80vh] rounded-lg shadow-2xl"
                priority
              />
              <p className="text-cream/60 text-sm font-serif italic mt-3">{galleryImages[lightbox].alt}</p>
              <p className="text-cream/30 text-xs tracking-widest mt-1">{lightbox + 1} / {galleryImages.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
