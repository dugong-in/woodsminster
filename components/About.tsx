"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden py-20 bg-maroon-50 dark:bg-maroon-900"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <img
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
              alt="Wooden craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 dark:text-maroon-100 mb-6">
              Crafted with Purpose
            </h2>
            <p className="text-lg text-maroon-700 dark:text-maroon-300 mb-6">
              At WoodsMinster, we believe in the beauty of simplicity. Every
              piece is thoughtfully designed to blend functionality with
              minimalist aesthetics.
            </p>
            <p className="text-lg text-maroon-700 dark:text-maroon-300 mb-8">
              Our commitment to economical pricing doesn&apos;t compromise
              quality. We source sustainable wood and employ skilled craftsmen
              to create furniture that lasts generations.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Products" },
                { num: "10K+", label: "Happy Customers" },
                { num: "15+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-3xl font-bold text-maroon-800 dark:text-maroon-200 mb-2">
                    {stat.num}
                  </p>
                  <p className="text-maroon-600 dark:text-maroon-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
