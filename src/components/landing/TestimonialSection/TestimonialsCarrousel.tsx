'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  { name: 'John Doe', quote: 'Amazing service! My dog is so happy.' },
  { name: 'Jane Smith', quote: 'Best pet shop experience ever.' },
  { name: 'Carlos López', quote: 'My cat loved the new toys!' },
];

export const  TestimonialCarousel = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged() {
      if (timer.current) clearInterval(timer.current);
      startAutoSlide();
    },
    created() {
      startAutoSlide();
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const startAutoSlide = () => {
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider py-10">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="keen-slider__slide">
          <TestimonialCard name={testimonial.name} quote={testimonial.quote} />
        </div>
      ))}
    </div>
  );
}
