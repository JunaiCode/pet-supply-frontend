import { ProductDetailPage } from '@/components/products/pages/ProductDetailPage';
import { notFound } from 'next/navigation';

const mockProducts = [
  {
    id: '1',
    name: 'Dog Toy',
    price: 12.99,
    description: 'Fun squeaky toy for your dog.',
    imageUrl: '/images/dog-toy.jpg',
  },
  {
    id: '2',
    name: 'Cat Bed',
    price: 24.99,
    description: 'Cozy bed for your cat to rest.',
    imageUrl: '/images/cat-bed.jpg',
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({ id: product.id }));
}
