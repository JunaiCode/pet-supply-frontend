"use client";
import Image from "next/image";

interface ProductImageProps {
  imageUrl?: string;
  name: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, name }) => {
  if (!imageUrl) {
    return (
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded">
        <span className="text-gray-400">Sin imagen</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover rounded"
        sizes="100%"
      />
    </div>
  );
};
