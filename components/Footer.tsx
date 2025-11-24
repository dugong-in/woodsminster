import Link from "next/link";

const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-maroon-700 to-maroon-900 dark:from-maroon-600 dark:to-maroon-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-maroon-50"
                fill="currentColor"
              >
                <path
                  d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 2.2l6 3v5.3c0 4.5-3.1 8.8-6 10.2-2.9-1.4-6-5.7-6-10.2V7.2l6-3z"
                  opacity="0.3"
                />
                <path d="M8 10h2v8H8zm3-2h2v10h-2zm3 4h2v6h-2z" />
              </svg>
            </div>
            <p className="text-xl font-light tracking-wide text-maroon-800 dark:text-maroon-100 mt-1">
              Woods<span className="font-semibold">Minster</span>
            </p>
            <p className="text-maroon-300">
              Minimal design furniture for modern living
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-maroon-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Seating
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Tables
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Storage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-maroon-300">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-maroon-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-maroon-800 pt-8 text-center text-maroon-400">
          <p>&copy; {currentYear} WoodsMinster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
