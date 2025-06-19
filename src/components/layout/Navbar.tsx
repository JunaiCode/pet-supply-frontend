'use client';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Brand Logo"
            width={60}
            height={80}
            className="h-auto w-auto m-0"
          />
          <Link href="/" className="text-xl font-bold text-pink-600">
            Pet Supply
          </Link>
        </div>

        <ul className="flex gap-6 text-gray-700">
          <li className='hover:text-pink-600'><Link href="/">Home</Link></li>
          <li className='hover:text-pink-600'><Link href="/products">Featured Products</Link></li>
          <li className='hover:text-pink-600'><Link href="/testimonials">Testimonials</Link></li>
          <li className='hover:text-pink-600'><Link href="/contact">Contact</Link></li>
          <li className='hover:text-pink-600'><Link href="/">⚙️</Link></li>
        </ul>
      </div>
    </nav>
  );
}
