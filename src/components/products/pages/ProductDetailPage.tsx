'use client';
import { Product } from "@/store/reducers/cartReducer";
import { Cart } from "../Cart";
import { ProductImage } from "../ProductImage";
import { ProductInfo } from "../ProductInfo";
import { RelatedProducts } from "../RelatedProducts";

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage imageUrl={product.imageUrl ?? ""} name={product.name} />
        <ProductInfo
          name={product.name}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      </div>
      <div className="mt-20">
        <RelatedProducts />
        <Cart/>
      </div>
    </section>
  );
};
