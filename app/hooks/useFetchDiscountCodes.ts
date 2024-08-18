import { useEffect, useState } from "react";
import axios from "axios";

interface DiscountCode {
  code: string;
  discount: number;
}

export default function useFetchDiscountCodes() {
  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDiscountCodes() {
      try {
        const response = await axios.get<DiscountCode[]>("/api/discounts");

        setDiscountCodes(response.data);
      } catch (error) {
        setError("Failed to fetch discount codes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDiscountCodes();
  }, []);

  return { discountCodes, loading, error };
}
