"use client";

import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/store/productsApi";

export default function ProductsPage() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            New collection
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            Featured products
          </h1>
        </div>

        {isLoading && <p className="text-slate-600">Loading products...</p>}
        {isError && <p className="text-red-600">Unable to load products.</p>}
        {!isLoading && !isError && products.length === 0 && (
          <p className="text-slate-600">No products found.</p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
