"use client";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import ProductCard from "../components/product/ProductCard";

function Dashboard() {
  const searchParams = useSearchParams();
  let searchQuery = searchParams.get("q");

  const products = [
    {
      id: '1',
      name: 'Sample Product 1',
      price: 49.99,
      imageUrl: 'https://www.ikea.com/in/en/images/products/uppdatera-box-white__1215004_pe911802_s5.jpg?f=xl',
    },
    {
      id: '2',
      name: 'Sample Product 2',
      price: 59.99,
      imageUrl: '/images/sample-product-2.jpg',
    },
    // Add more products here
  ];

  if (!searchQuery) {
    return notFound;
  }

  return (
    <div>
      <p>{products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>

    </div>
  );
}

export default Dashboard;
