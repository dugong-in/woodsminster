"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-maroon-50/95 dark:bg-maroon-950/95 backdrop-blur-sm z-50 border-b border-maroon-100 dark:border-maroon-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black text-maroon-800 dark:text-maroon-200"
          >
            WoodsMinster
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-maroon-700 dark:text-maroon-300 hover:text-maroon-800 dark:hover:text-maroon-100 transition"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-maroon-700 dark:text-maroon-300 hover:text-maroon-800 dark:hover:text-maroon-100 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-maroon-700 dark:text-maroon-300 hover:text-maroon-800 dark:hover:text-maroon-100 transition"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-maroon-100 dark:hover:bg-maroon-800 transition"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <Link
              href="/products"
              className="bg-maroon-800 text-white px-6 py-2 rounded-full hover:bg-maroon-800 hover:scale-105 transition-all"
            >
              Shop Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-maroon-800 dark:text-maroon-200"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-maroon-800 dark:text-maroon-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/products"
              className="text-maroon-700 dark:text-maroon-300"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-maroon-700 dark:text-maroon-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-maroon-700 dark:text-maroon-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
