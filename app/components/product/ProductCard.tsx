// src/components/products/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
