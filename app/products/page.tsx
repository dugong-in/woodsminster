'use client';

import { motion } from 'motion/react';

const allProducts = [
  { id: 1, name: 'Minimal Chair', price: '$299', category: 'Seating', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80' },
  { id: 2, name: 'Oak Desk', price: '$599', category: 'Tables', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80' },
  { id: 3, name: 'Storage Unit', price: '$449', category: 'Storage', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
  { id: 4, name: 'Coffee Table', price: '$349', category: 'Tables', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80' },
  { id: 5, name: 'Bookshelf', price: '$399', category: 'Storage', img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80' },
  { id: 6, name: 'Dining Chair', price: '$249', category: 'Seating', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80' },
  { id: 7, name: 'Lounge Chair', price: '$399', category: 'Seating', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80' },
  { id: 8, name: 'Dining Table', price: '$799', category: 'Tables', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
  { id: 9, name: 'Wardrobe', price: '$899', category: 'Storage', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
];

export default function ProductsPage() {
  return (
    <>
      <main className="pt-24 min-h-screen bg-gradient-to-br from-maroon-50 to-white dark:from-maroon-950 dark:to-maroon-900">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-900 dark:text-maroon-100 mb-4">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-maroon-700 dark:text-maroon-300">
              Handcrafted furniture for every space
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="relative h-80 rounded-2xl overflow-hidden mb-4"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(93, 32, 32, 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                </motion.div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-maroon-600 dark:text-maroon-400 mb-1">{product.category}</p>
                    <h3 className="text-lg md:text-xl font-semibold text-maroon-900 dark:text-maroon-100">{product.name}</h3>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-maroon-800 dark:text-maroon-200">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
