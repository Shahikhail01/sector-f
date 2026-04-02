'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoTour() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  const tourVideo =
    process.env.NEXT_PUBLIC_TOUR_VIDEO_URL ||
    '/videos/Sector-F-DHA-Phase-1.webm';

  return (
    <section id="tour" className="bg-cream2 py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag text-terra">Virtual Tour</p>
          <h2 className="section-title text-dark mb-3">Experience the Property</h2>
          <p className="section-sub text-stone mx-auto text-center">
            A complete walkthrough from front gate to natural-reserve garden
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream3 bg-dark"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Custom play overlay (shown until first play) */}
          {!playing && (
            <button
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4
                         bg-dark/60 backdrop-blur-sm group transition-all hover:bg-dark/40"
              onClick={togglePlay}
              aria-label="Play tour video"
            >
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center
                              shadow-[0_0_48px_rgba(197,150,58,0.45)]
                              group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl ml-1">▶</span>
              </div>
              <p className="text-cream/70 text-sm tracking-widest uppercase font-light">
                Play Full Property Tour
              </p>
            </button>
          )}

          <video
            ref={videoRef}
            poster="/images/WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg"
            className="w-full max-h-[600px] object-cover"
            controls={playing}
            preload="none"
            aria-label="Sector-F Villa property tour video"
          >
            <source src={tourVideo} type="video/webm" />
            Your browser does not support video playback.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
