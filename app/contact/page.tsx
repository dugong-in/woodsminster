"use client";

import { motion } from "motion/react";

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-maroon-700 dark:text-maroon-300">
              We&apos;d love to hear from you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-maroon-900 dark:text-maroon-100 mb-6">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-maroon-200 dark:border-maroon-700 dark:bg-maroon-900 dark:text-maroon-100 focus:border-maroon-600 dark:focus:border-maroon-400 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-maroon-200 dark:border-maroon-700 dark:bg-maroon-900 dark:text-maroon-100 focus:border-maroon-600 dark:focus:border-maroon-400 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-maroon-200 dark:border-maroon-700 dark:bg-maroon-900 dark:text-maroon-100 focus:border-maroon-600 dark:focus:border-maroon-400 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-3xl border-2 border-maroon-200 dark:border-maroon-700 dark:bg-maroon-900 dark:text-maroon-100 focus:border-maroon-600 dark:focus:border-maroon-400 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="w-full bg-maroon-800 dark:bg-maroon-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: "#3d1515" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-maroon-900 dark:text-maroon-100 mb-4">
                  Corporate Office
                </h3>
                <p className="text-maroon-700 dark:text-maroon-300 mb-1">
                  78, Sector - 44
                </p>
                <p className="text-maroon-700 dark:text-maroon-300 mb-1">
                  Gurugram, Haryana - 122002
                </p>
                <p className="text-maroon-700 dark:text-maroon-300">India</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-maroon-900 dark:text-maroon-100 mb-4">
                  Contact Information
                </h3>
                <p className="text-maroon-700 dark:text-maroon-300 mb-2">
                  Phone: +91-9876543210
                </p>
                <p className="text-maroon-700 dark:text-maroon-300 mb-2">
                  Email: hello@woodsminster.com
                </p>
                <p className="text-maroon-700 dark:text-maroon-300">
                  Hours: Mon-Sat, 9AM-6PM
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-maroon-900 dark:text-maroon-100 mb-4">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {["Instagram", "Facebook", "Pinterest"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="px-4 sm:px-6 py-2 border-2 border-maroon-800 dark:border-maroon-300 text-maroon-800 dark:text-maroon-300 rounded-full text-sm sm:text-base"
                      whileHover={{ scale: 1.05, backgroundColor: "#faf5f5" }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
