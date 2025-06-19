import Image from "next/image";
import { ProductCardProps } from "@/types/products/product.types";
export const ProductCard = ({ name, price, imageUrl }: ProductCardProps)=>{
  return (
    <div>
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={192}
        className="h-48 w-full object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-pink-600 font-bold mt-1">${price.toFixed(2)}</p>
    </div>
  );
}
