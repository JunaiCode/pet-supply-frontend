'use client';

import { useState } from "react";
import { Cart } from "../Cart";
import { Filters } from "../Filters";
import { ProductCatalog } from "../ProductCatalog";
import { useFetchProducts } from "@/hooks/useFetchProducts";

export const ProductsPage = () => {
  const [filters, setFilters] = useState<Record<string, string | number>>({ page: "1", limit: "8" });
  const { products, loading } = useFetchProducts(filters);
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 w-full lg:sticky top-24">
          <Filters setFilters={setFilters} filters={filters} />
        </div>
        <div className="lg:w-3/4 w-full">
          {loading ? (
            <p className="text-center text-gray-500">Cargando productos...</p>
          ) : (
            <ProductCatalog products={products} filters={filters} limit={filters.limit} setFilters={setFilters} />
          )}
        </div>
        <Cart />
      </div>
    </section>
  );
};
