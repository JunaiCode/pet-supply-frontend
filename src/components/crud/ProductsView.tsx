/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductCrudCard } from "./productCrudCard";
import { Button } from "../ui/button";
import ProductForm from "./ProductForm";
import { ProductCrud } from "@/types/products/product.types";
import { helpHttp } from "@/lib/utils/http";

interface ProductCatalogProps {
  products: ProductCrud[];
  filters: Record<string, any>;
  setFilters: (filters: Record<string, any>) => void;
  limit?: number;
  onReload: () => void;
}

export const ProductsCrud = ({
  products,
  filters,
  setFilters,
  limit = 8,
  onReload,
}: ProductCatalogProps) => {
  const currentPage = filters.page || 1;
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductCrud | null>(null);

  const handleCreateClick = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleDelete = async (productId: string) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      const token = localStorage.getItem("jwt");

      const res = await helpHttp().del(`products/${productId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });

      if (!res.err) {
        onReload();
      } else {
        alert("Error al eliminar el producto");
      }
    }
  };

  const handleEditClick = (product: ProductCrud) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleFormClose = () => {
    setEditingProduct(null);
    setShowModal(false);
  };

  const handleFormSubmit = async (formData: FormData) => {
  const token = localStorage.getItem("jwt");
  const url = editingProduct ? `products/${editingProduct.id}` : 'products';
  const method = editingProduct ? 'put' : 'post';

  const res = await helpHttp()[method](url, {
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.err) {
    setShowModal(false);
    onReload();
    // Evita el duplicado al forzar recargar desde la primera página
    if (!editingProduct) {
      setFilters({ ...filters, page: 1 });
    }
  } else {
    alert("Error al guardar el producto");
  }
};

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setFilters({ ...filters, page: currentPage - 1 });
    }
  };

  const goToNextPage = () => {
    if (products.length === limit) {
      setFilters({ ...filters, page: currentPage + 1 });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-pink-700">Our Products</h2>
        <Button className="bg-pink-600 hover:bg-pink-700" onClick={handleCreateClick}>
          Create new product
        </Button>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCrudCard
                key={product.id}
                product={product}
                onEdit={() => handleEditClick(product)}
                onRemove={handleDelete}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center items-center gap-6 text-pink-600 text-xl">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-pink-100 disabled:opacity-30"
              aria-label="Previous Page"
            >
              <FaChevronLeft />
            </button>

            <span className="text-base font-medium">Page {currentPage}</span>

            <button
              onClick={goToNextPage}
              disabled={products.length < limit}
              className="p-2 rounded-full hover:bg-pink-100 disabled:opacity-30"
              aria-label="Next Page"
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl">
            <ProductForm
              initialData={editingProduct}
              onClose={handleFormClose}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </section>
  );
};
