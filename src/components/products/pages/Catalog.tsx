import { Cart } from "../Cart";
import { Filters } from "../Filters";
import { mockProducts } from "../MockProducts";
import { ProductCatalog } from "../ProductCatalog";

export const ProductsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 w-full lg:sticky top-24">
          <Filters />
        </div>
        <div className="lg:w-3/4 w-full">
          <ProductCatalog products={mockProducts} />
        </div>
        <Cart/>
      </div>
    </section>
  );
}
