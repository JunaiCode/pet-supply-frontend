import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-inner text-pink-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Pet Supply Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <h2 className="text-2xl font-extrabold text-pink-900">Pet Supply</h2>
          </div>
          <p className="text-sm leading-relaxed text-pink-700">
            Your one-stop shop for all your pet’s needs. We deliver quality, love, and care in every product.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-900">Quick Links</h3>
          <ul className="space-y-2 text-sm text-pink-700">
            <li><a href="/" className="hover:text-pink-500 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-pink-500 transition-colors">Products</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-pink-900">Contact Us</h3>
          <p className="text-sm text-pink-700">📍 123 Pet Street, Animal City</p>
          <p className="text-sm text-pink-700">📧 support@petsupply.com</p>
          <p className="text-sm text-pink-700 mb-4">📞 +1 (123) 456-7890</p>
          <div className="flex gap-4 text-2xl text-pink-600">
            <a href="#" aria-label="Facebook" className="hover:text-pink-400 transition"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-pink-500 border-t border-pink-200 py-4">
        © {new Date().getFullYear()} Pet Supply. All rights reserved.
      </div>
    </footer>
  );
};
