'use client';
import { useEffect, useState } from 'react';
import { helpHttp } from '@/lib/utils/http';
import { Product } from '@/types/products/product.types';

type Filters = {
  [key: string]: string | number;
};

export const useFetchProducts = (filters: Filters = {}, reloadKey: number = 0) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(
      Object.entries(filters).reduce((acc, [key, val]) => {
        acc[key] = String(val);
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const endpoint = query ? `products/search?${query}` : 'products';
    setLoading(true);

    helpHttp()
      .get(endpoint)
      .then((res) => {
        if (!res.err) setProducts(res);
        else setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [filters, reloadKey]); 

  return { products, loading };
};
