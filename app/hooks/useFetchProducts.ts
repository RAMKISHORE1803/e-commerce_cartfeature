import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  dimensions: string;
  price: number;
  reviews: number;
  images: string[];
}

export default function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>("/api/products");

        setProducts(response.data); 
      } catch (error) {
        setError("Failed to fetch products"); 
        console.error(error);
      } finally {
        setLoading(false); 
      }
    }
    fetchProducts();
  }, []); 
  
  return { products, loading, error }; 
}
