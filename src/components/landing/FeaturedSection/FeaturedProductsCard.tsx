import { Product } from "@/types/products/product.types";
import Image from "next/image";

type Props = {
  product: Product;
};

export const FeaturedProductsCard = ({ product }: Props) => {
  console.log(product.imageUrls?.[0].toString());
  return (
    <div>
      <Image
        src={product.imageUrls?.[0] ?? "/placeholder.png"}
        alt={product.name}
        width={240}
        height={160}
        className="w-full h-40 object-cover"
        style={{ objectFit: "cover" }}
      />
      <h3 className="mt-2 font-bold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-1 text-pink-600 font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};
