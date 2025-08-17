"use client";

import { useEffect, useState } from "react";
import { FeaturedProductsCard } from "./FeaturedProductsCard";
import { helpHttp } from "@/lib/utils/http";
import { ProductCrud } from "@/types/products/product.types";

export const FeaturedProductsCarousel = () => {
  useEffect(() => {
      const endpoint = "products";
      setLoading(true);
  
      helpHttp()
        .get(endpoint)
        .then((res) => {
          if (!res.err && Array.isArray(res)) setProducts(res);
          else setProducts([]);
        })
        .finally(() => setLoading(false));
    }, []);

  const [products, setProducts] = useState<ProductCrud[]>([]);
  const [loading, setLoading] = useState(true);

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
          {[...Array(2)].flatMap((_, outerIdx) =>
            (products || []).map((product) => (
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
