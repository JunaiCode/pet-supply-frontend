'use client';

import { useEffect, useState } from 'react';
import { ProductCrud } from "@/types/products/product.types";
import { ProductImage } from "../ProductImage";
import { ProductInfo } from "../ProductInfo";
import { RelatedProducts } from "../RelatedProducts";
import { Cart } from "../Cart";
import { helpHttp } from "@/lib/utils/http";

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const [product, setProduct] = useState<ProductCrud | null>(null);
  const [relateProducts, setRelateProducts] = useState<ProductCrud[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await helpHttp().get(`products/${productId}`);
        if (!res.err) {
          setRelateProducts(res.relatedProducts);
          setProduct(res.product);
        } else {
          console.error("Error fetching product:", res.status);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-center py-20">Loading product...</p>;

  if (!product) return <p className="text-center py-20 text-red-500">Product not found.</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage imageUrl={product.imageUrls?.[0] ?? ""} name={product.name} />
        <ProductInfo
          name={product.name}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      </div>
      <div className="mt-20">
        <RelatedProducts relateProducts={relateProducts ?? []} />
        <Cart />
      </div>
    </section>
  );
};
