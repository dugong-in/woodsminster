'use client';

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-maroon-900 dark:bg-maroon-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-maroon-200 dark:text-maroon-300">Let's create your perfect space together</p>
          </motion.div>

          <motion.form 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-maroon-300 focus:outline-none focus:border-white/40"
              whileFocus={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-maroon-300 focus:outline-none focus:border-white/40"
              whileFocus={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
            />
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              className="md:col-span-2 px-6 py-4 rounded-3xl bg-white/10 border border-white/20 text-white placeholder-maroon-300 focus:outline-none focus:border-white/40"
              whileFocus={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
            />
            <motion.button
              type="submit"
              className="md:col-span-2 bg-white text-maroon-900 px-8 py-4 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: '#f5e6e6' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
