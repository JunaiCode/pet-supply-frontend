import Image from 'next/image';

export const FeaturedProductsCard = ({ index }: { index: number }) => {
  return (
    <div className="inline-block w-64 flex-shrink-0 bg-white rounded-xl shadow-md p-4 text-center">
      <div className="w-full h-40 bg-gray-200 rounded mb-4 relative">
        {/* Demo image */}
        <Image
          src={`/images/demo-${index}.jpg`} // asegúrate de tener imágenes en public/images
          alt={`Product ${index}`}
          fill
          className="object-cover rounded"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Product {index}</h3>
      <p className="text-sm text-gray-600">Short description of the product.</p>
    </div>
  );
};
