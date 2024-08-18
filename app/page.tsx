"use client";
import ProductCard from "./components/product/ProductCard";
import useFetchProducts from "./hooks/useFetchProducts";
import { Suspense } from "react";

function Dashboard() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            dimensions={product.dimensions}
            reviews={product.reviews}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <Dashboard />
    </Suspense>
  );
}
