'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaCog } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { helpHttp } from '@/lib/utils/http';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAdminClick = () => {
    setShowAdminInput(!showAdminInput);
    setError('');
  };

  const verifyAdmin = async () => {
  try {
    const res = await helpHttp().post('auth/login', {
      body: { email },
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.err && res.access_token) {
      localStorage.setItem('jwt', res.access_token); // Save token
      router.push('/managment');
    } else {
      setError('Email Unauthorized');
    }
  } catch (err) {
    console.error("Error to verifyAdmin:", err);
    setError('Error to verify role');
  }
};



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
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li className="hover:text-pink-600"><Link href="/">Home</Link></li>
          <li className="hover:text-pink-600"><Link href="/products">Catalog</Link></li>
          <li className="hover:text-pink-600 cursor-pointer" onClick={handleAdminClick}>
            <FaCog className="text-purple-500 hover:text-purple-700 transition" />
          </li>
        </ul>

        {/* Admin Input */}
        {showAdminInput && (
          <div className="absolute top-20 right-4 bg-white border rounded p-3 shadow-lg z-50 hidden md:flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            />
            <button
              onClick={verifyAdmin}
              className="bg-purple-500 text-white text-sm px-2 py-1 rounded hover:bg-purple-600"
            >
              Verificar
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>
        )}

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
            <li><Link href="/products" onClick={toggleMenu}>Catalog</Link></li>
            <li><span onClick={handleAdminClick} className="cursor-pointer">⚙️</span></li>
          </ul>

          {/* Mobile Admin Input */}
          {showAdminInput && (
            <div className="flex flex-col space-y-2 mt-2">
              <input
                type="email"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-2 py-1 rounded text-sm"
              />
              <button
                onClick={verifyAdmin}
                className="bg-purple-500 text-white text-sm px-2 py-1 rounded hover:bg-purple-600"
              >
                Verify
              </button>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
