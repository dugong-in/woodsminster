'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-maroon-50 to-white dark:from-maroon-950 dark:to-maroon-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-maroon-900 dark:text-maroon-100 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Minimal Design.<br />Maximum Impact.
            </motion.h1>
            <motion.p 
              className="text-xl text-maroon-700 dark:text-maroon-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover economical wooden furniture that transforms your space with timeless elegance and modern simplicity.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a 
                href="/products"
                className="bg-maroon-800 text-white px-8 py-4 rounded-full text-lg inline-block text-center"
                whileHover={{ scale: 1.05, backgroundColor: '#3d1515' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.a>
              <motion.a 
                href="/about"
                className="border-2 border-maroon-800 dark:border-maroon-300 text-maroon-800 dark:text-maroon-300 px-8 py-4 rounded-full text-lg inline-block text-center"
                whileHover={{ scale: 1.05, backgroundColor: '#faf5f5' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" 
              alt="Modern furniture" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
