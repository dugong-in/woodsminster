import Link from "next/link";

const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">WoodsMinster</h3>
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
