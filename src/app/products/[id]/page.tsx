import { ProductDetailPage } from '@/components/products/pages/ProductDetailPage';
import {use} from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return <ProductDetailPage productId={id} />;
}
