'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Brand Logo"
            width={40}
            height={40}
            className="h-auto w-auto"
          />
          <Link href="/" className="text-xl font-bold text-pink-600">
            Pet Supply
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-pink-600"><Link href="/">Home</Link></li>
          <li className="hover:text-pink-600"><Link href="/products">Featured Products</Link></li>
          <li className="hover:text-pink-600"><Link href="/testimonials">Testimonials</Link></li>
          <li className="hover:text-pink-600"><Link href="/contact">Contact</Link></li>
          <li className="hover:text-pink-600"><Link href="/">⚙️</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-pink-600 text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/products" onClick={toggleMenu}>Featured Products</Link></li>
            <li><Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/" onClick={toggleMenu}>⚙️</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};
