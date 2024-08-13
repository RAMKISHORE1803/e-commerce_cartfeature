import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/src/services/productService';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return { title: product.name };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">${product.price}</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
            Add to Cart
          </button>
          <Link href="/products">
            <a className="mt-4 block text-blue-600 hover:underline">Back to Products</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
