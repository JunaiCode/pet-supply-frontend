import { ProductCrud } from "@/types/products/product.types";
import { ProductCard } from "../products/ProductCard";

interface RelatedProductsProps {
  relateProducts: ProductCrud[];
}

export const RelatedProducts = ({ relateProducts }: RelatedProductsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-pink-700 mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relateProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
