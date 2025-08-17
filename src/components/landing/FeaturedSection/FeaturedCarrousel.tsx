"use client";

import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useMemo } from "react";
import { FeaturedProductsCard } from "./FeaturedProductsCard";

export const FeaturedProductsCarousel = () => {
  const filters = useMemo(() => ({ limit: 5, availability: "true" }), []);
  const { products, loading } = useFetchProducts(filters);

  if (loading) {
    return (
      <p className="text-center text-gray-500 py-4">
        Loading Featured Products...
      </p>
    );
  }

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-6">
          {[...products, ...products].map((product, idx) => (
            <FeaturedProductsCard
              key={`${idx}-${product.id}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;
