'use client';

import { FeaturedProductsCard } from './FeaturedProductsCard';

export const FeaturedProductsCarousel = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-6">
          {/* Duplicamos las tarjetas para efecto infinito */}
          {[...Array(2)].flatMap((_, outerIdx) =>
            Array.from({ length: 5 }).map((_, i) => (
              <FeaturedProductsCard key={`${outerIdx}-${i}`} index={i + 1} />
            ))
          )}
        </div>
      </div>
      </div>
  );
};

export default FeaturedProductsCarousel;
