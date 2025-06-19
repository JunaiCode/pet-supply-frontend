import { SectionTitle } from "@/components/common/SectionTitle";
import { FeaturedProductsCarousel } from "./FeaturedCarrousel";

export const FeaturedProducts = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Featured Products" />
        <FeaturedProductsCarousel />
      </div>
    </div>
  );
};
