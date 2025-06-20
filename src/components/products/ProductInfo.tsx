'use client';
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/actions/cartActions";
import { Product } from "@/store/reducers/cartReducer";

export const ProductInfo = (product: Product) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {id,name,price,description} = product;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1, description }));
  };

  const goToProducts = () => {
    router.push('/products');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-pink-700">{name}</h1>
      <p className="text-xl text-gray-800 font-semibold">${price.toFixed(2)}</p>
      <p className="text-gray-600">{description}</p>
      <div className="flex gap-4 mt-6">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Button onClick={goToProducts} variant="secondary">
          Back to Products
        </Button>
      </div>
    </div>
  );
};
