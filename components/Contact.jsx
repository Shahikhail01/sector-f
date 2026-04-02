'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONTACT_INFO = [
  { icon: '📞', label: 'Phone / WhatsApp', value: '+92 300 0000000' },
  { icon: '📧', label: 'Email',            value: 'info@sectorfvilla.pk' },
  { icon: '📍', label: 'Location',         value: 'Sector‑F, DHA Phase 1, Islamabad' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(res => setTimeout(res, 1400));
    setStatus('done');
  };

  return (
    <section id="contact" className="bg-dark py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-tag text-terra">Get In Touch</p>
          <h2 className="section-title text-cream">
            Enquire About<br />
            <span className="italic text-gold">This Residence</span>
          </h2>
          <p className="text-stone text-sm max-w-lg mx-auto font-light mt-3">
            Price available on request. Schedule a private viewing or ask us anything about this extraordinary property.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <div className="card-glass p-8 rounded-2xl">
              <p className="font-serif text-lg text-cream mb-6">Direct Contact</p>
              {CONTACT_INFO.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 py-4 border-b border-cream/10 last:border-b-0"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className="text-base flex-shrink-0 w-6 text-center mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-stone text-xs font-bold tracking-widest uppercase">{c.label}</p>
                    <p className="text-cream font-light mt-0.5">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <p className="font-serif text-lg italic text-gold mb-3">Price on Request</p>
              <p className="text-stone text-sm font-light leading-relaxed">
                This exclusive 1-kanal residence is available for serious inquiries only.
                Contact us for private viewings and pricing details.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
          >
            <AnimatePresence mode="wait">
              {status === 'done' ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-glass p-12 rounded-2xl text-center"
                >
                  <motion.div
                    className="text-5xl mb-4"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    ✅
                  </motion.div>
                  <p className="font-serif text-xl text-cream mb-2">Thank You</p>
                  <p className="text-stone text-sm font-light">
                    We will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="card-glass p-8 rounded-2xl space-y-5"
                >
                  {[
                    { id: 'name',    type: 'text',  label: 'Full Name', placeholder: 'Your Name' },
                    { id: 'phone',   type: 'tel',   label: 'Phone / WhatsApp', placeholder: '+92 300 …' },
                    { id: 'email',   type: 'email', label: 'Email Address', placeholder: 'you@example.com' },
                  ].map(f => (
                    <div key={f.id} className="float-group">
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        value={form[f.id]}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-5 pb-2 text-cream text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      />
                      <label htmlFor={f.id} className="text-stone text-xs">{f.label}</label>
                    </div>
                  ))}

                  <div className="float-group">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-5 pb-2 text-cream text-sm focus:outline-none focus:border-gold/60 transition-colors resize-none"
                    />
                    <label htmlFor="message" className="text-stone text-xs">Your Message</label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gold w-full justify-center text-sm font-semibold tracking-widest disabled:opacity-60"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-dark/40 border-t-dark rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      'Send Enquiry →'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
