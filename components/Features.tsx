"use client";

import { motion } from "motion/react";

const features = [
  {
    icon: "🎨",
    title: "Minimal Design",
    description:
      "Clean lines and timeless aesthetics that complement any space",
  },
  {
    icon: "💰",
    title: "Economical Pricing",
    description: "Premium quality furniture at prices that respect your budget",
  },
  {
    icon: "🌱",
    title: "Sustainable Wood",
    description: "Responsibly sourced materials for eco-conscious living",
  },
  {
    icon: "🛠️",
    title: "Handcrafted",
    description: "Each piece meticulously crafted by skilled artisans",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-maroon-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 dark:text-maroon-100 mb-4">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, backgroundColor: "#faf5f5" }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-maroon-800 dark:text-maroon-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-maroon-700 dark:text-maroon-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
