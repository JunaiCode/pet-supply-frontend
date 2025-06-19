import { SectionTitle } from '@/components/common/SectionTitle';
import {TestimonialCarousel} from './TestimonialsCarrousel';

export const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <SectionTitle title='What Our Customers Say'></SectionTitle>
      <TestimonialCarousel />
    </section>
  );
}
