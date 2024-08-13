import { notFound } from 'next/navigation';
//import { getProductById } from '@/src/services/productService';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    query: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  //const product = await getProductById(params.query);

  // if (!product) {
  //   return notFound();
  // }

  return <h1>{params.query}</h1>
}
