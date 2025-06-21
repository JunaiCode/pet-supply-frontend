/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Product } from "@/types/products/product.types";
import { ProductCard } from "./ProductCard";

interface ProductCatalogProps {
  products: Product[];
  filters: Record<string, any>;
  limit: string | number;
  setFilters: (filters: Record<string, any>) => void;
}

export const ProductCatalog = ({
  products,
  filters,
  limit,
  setFilters,
}: ProductCatalogProps) => {
  const currentPage = filters.page || 1;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setFilters({ ...filters, page: currentPage - 1 });
    }
  };

  const goToNextPage = () => {
    if (products.length === Number(limit)) {
      setFilters({ ...filters, page: currentPage + 1 });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">Our Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-10 flex justify-center items-center gap-6 text-pink-600 text-xl">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-pink-100 disabled:opacity-30"
              aria-label="Previous Page"
            >
              <FaChevronLeft />
            </button>

            <span className="text-base font-medium">
              Página {currentPage}
            </span>

            <button
              onClick={goToNextPage}
              disabled={products.length < Number(limit)}
              className="p-2 rounded-full hover:bg-pink-100 disabled:opacity-30"
              aria-label="Next Page"
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </section>
  );
};
