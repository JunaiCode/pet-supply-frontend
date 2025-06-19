'use client';
import {ContactStoreInfo} from '@/components/landing/ContactSection/ContactStoreInfo';
import { FeaturedProducts } from '@/components/landing/FeaturedSection/FeaturedProducts';
import {Hero} from '@/components/landing/HeroSection/Hero';
import {Testimonials} from '@/components/landing/TestimonialSection/Testimonials';



export default function LandingPage() {
  return (
    <main
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-white text-gray-900"
    >
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <FeaturedProducts />
      </section>
      <section className="snap-start">
        <Testimonials />
      </section>
      <section className="snap-start">
        <ContactStoreInfo />
      </section>
    </main>
  );
}
