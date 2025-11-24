"use client";

import { motion } from "motion/react";
import { formatPrice } from "@/utils/formatPrice";

const products = [
  {
    id: 1,
    name: "Minimal Chair",
    price: "5299",
    category: "Seating",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
  },
  {
    id: 2,
    name: "Oak Desk",
    price: "5599",
    category: "Tables",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
  },
  {
    id: 3,
    name: "Storage Unit",
    price: "5449",
    category: "Storage",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
  },
  {
    id: 4,
    name: "Coffee Table",
    price: "5349",
    category: "Tables",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80",
  },
  {
    id: 5,
    name: "Bookshelf",
    price: "5399",
    category: "Storage",
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
  },
  {
    id: 6,
    name: "Dining Chair",
    price: "5249",
    category: "Seating",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white dark:bg-maroon-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 dark:text-maroon-100 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-maroon-700 dark:text-maroon-300 max-w-2xl mx-auto">
            Handcrafted wooden furniture designed for modern living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <motion.div
                className="relative h-80 rounded-2xl overflow-hidden mb-4"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(93, 32, 32, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-maroon-600 dark:text-maroon-400 mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold text-maroon-800 dark:text-maroon-100">
                    {product.name}
                  </h3>
                </div>
                <p className="text-xl font-bold text-maroon-800 dark:text-maroon-200">
                  {formatPrice(parseFloat(product.price))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
