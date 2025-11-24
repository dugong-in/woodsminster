"use client";

import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <>
      <main className="pt-18 min-h-screen">
        <section className="py-12 md:py-24 bg-gradient-to-br from-maroon-50 to-white dark:from-maroon-950 dark:to-maroon-900">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-800 dark:text-maroon-100 mb-4">
                About WoodsMinster
              </h1>
              <p className="text-lg md:text-xl text-maroon-700 dark:text-maroon-300 max-w-2xl mx-auto">
                Crafting timeless furniture with passion and precision since
                2009
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
                  alt="Workshop"
                  className="rounded-3xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-maroon-800 dark:text-maroon-100 mb-4">
                  Our Story
                </h2>
                <p className="text-maroon-700 dark:text-maroon-300 mb-4">
                  Founded in 2009, WoodsMinster began with a simple vision: to
                  create beautiful, functional furniture that everyone can
                  afford. Our journey started in a small workshop with just
                  three craftsmen and a passion for woodworking.
                </p>
                <p className="text-maroon-700 dark:text-maroon-300">
                  Today, we&apos;ve grown into a trusted name in minimal design
                  furniture, serving thousands of customers while maintaining
                  our commitment to quality, sustainability, and economical
                  pricing.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20">
              {[
                {
                  title: "Quality First",
                  desc: "Every piece undergoes rigorous quality checks",
                  img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
                },
                {
                  title: "Sustainable",
                  desc: "Eco-friendly materials and processes",
                  img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
                },
                {
                  title: "Handcrafted",
                  desc: "Made by skilled artisans with care",
                  img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-maroon-800 dark:text-maroon-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-maroon-700 dark:text-maroon-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
