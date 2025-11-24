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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-maroon-700 to-maroon-900 dark:from-maroon-600 dark:to-maroon-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-maroon-50" fill="currentColor">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 2.2l6 3v5.3c0 4.5-3.1 8.8-6 10.2-2.9-1.4-6-5.7-6-10.2V7.2l6-3z" opacity="0.3"/>
                <path d="M8 10h2v8H8zm3-2h2v10h-2zm3 4h2v6h-2z"/>
              </svg>
            </div>
            <span className="text-xl font-light tracking-wide text-maroon-800 dark:text-maroon-100">
              Woods<span className="font-semibold">Minster</span>
            </span>
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
