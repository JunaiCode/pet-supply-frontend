'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/actions/cartActions";
import { useRouter } from "next/navigation";
import { Product } from "@/store/reducers/cartReducer";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleViewProduct = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="bg-white border border-pink-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden max-w-xs mx-auto">
      <div className="relative w-full h-52">
        <Image src={product.imageUrl!} alt={product.name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-pink-600 font-bold text-base mt-1">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="w-full sm:w-auto text-pink-600 border-pink-600 hover:bg-pink-50"
            onClick={handleViewProduct}
          >
            View Product
          </Button>
          <Button className="w-full sm:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
