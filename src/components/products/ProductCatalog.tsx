'use client';

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/store/reducers/cartReducer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProductCatalogProps {
  products: Product[];
  itemsPerPage?: number;
}

export const ProductCatalog = ({
  products,
  itemsPerPage = 8,
}: ProductCatalogProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">Our Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {paginatedProducts.map((product) => (
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
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
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
