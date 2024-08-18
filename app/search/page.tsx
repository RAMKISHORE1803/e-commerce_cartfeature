"use client";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/product/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";
import { Suspense } from "react";

function Dashboard() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { products, loading, error } = useFetchProducts();

  return (
    <div className="px-20">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default Dashboard;
