'use client';

import { useMemo } from "react";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { FeaturedProductsCard } from "./FeaturedProductsCard";

export const FeaturedProductsCarousel = () => {
  const filters = useMemo(() => ({ limit: 5, availability: "true" }), []);
  const { products, loading } = useFetchProducts(filters);

  if (loading) {
    return <p className="text-center text-gray-500 py-4">Cargando productos destacados...</p>;
  }

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-6">
          {[...Array(2)].flatMap((_, outerIdx) =>
            products.map((product) => (
              <FeaturedProductsCard
                key={`${outerIdx}-${product.id}`}
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;
