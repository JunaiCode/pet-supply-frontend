import { ProductCard } from "../products/ProductCard";

export const RelatedProducts = () => {
  const mockProducts = [
    {
      name: "Cat Scratcher",
      description:"dssds",
      price: 15.99,
      imageUrl: "/images/cat-toy.jpg",
      id:"2"
    },
    {
      name: "Chewy Bone",
      price: 8.49,
      description:"dsdsds",
      imageUrl: "/images/dog-chew.jpg",
      id:"4"
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-pink-700 mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
