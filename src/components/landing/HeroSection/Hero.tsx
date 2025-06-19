// src/components/landing/Hero.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-300 to-white flex flex-col items-center justify-center text-center px-6">
      {/* Logo centrado arriba */}
      <div className="mb-4">
        <Image
          src="/images/logo.png" // asegúrate de que este archivo existe en /public/images/
          alt="Brand Logo"
          width={200}
          height={120}
          className='mx-auto'
        />
      </div>

      {/* Texto principal */}
      <div className="px-4 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-6">
          Find Everything Your Pet Needs
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover quality and care for your beloved companions.
        </p>
        <Button className='px-6 py-3'>Shop Now</Button>
      </div>
    </section>
  );
}
