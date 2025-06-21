'use client';

import { Filters } from "@/components/products/Filters";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { useRouter } from "next/navigation";
import { ProductsCrud } from "@/components/crud/ProductsView";

type DecodedToken = {
  roles?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Page() {
  const router = useRouter();

  const [filters, setFilters] = useState<Record<string, string | number>>({
    page: "1",
    limit: "8",
  });


  const [reloadKey, setReloadKey] = useState(0);

  const { products, loading } = useFetchProducts(filters, reloadKey);


  const handleReload = () => {
    setReloadKey((prev) => prev + 1);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      router.push('/');
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (decoded?.roles !== 'admin') {
        router.push('/');
      }
    } catch (err) {
      console.error("Error al decodificar el token:", err);
      router.push('/');
    }
  }, [router]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 w-full lg:sticky top-24">
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="lg:w-3/4 w-full">
          {loading ? (
            <p className="text-center text-gray-500">Cargando productos...</p>
          ) : (
            <ProductsCrud
              products={products}
              filters={filters}
              setFilters={setFilters}
              onReload={handleReload}
            />
          )}
        </div>
      </div>
    </section>
  );
}
