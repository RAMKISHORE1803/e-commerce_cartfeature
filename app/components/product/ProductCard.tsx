import Image from 'next/image';
import Link from 'next/link';
import addtocart from '../icons/addtocart.svg';

type ProductCardProps = {
    id: number;
    name: string;
    dimensions: string;
    price: number;
    reviews: number;
    images: string[];
};

const ProductCard = ({ id, name, dimensions, price, reviews, images }: ProductCardProps) => {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-64">
          <Image
            src={images[0]}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {name} 
        </h3>
        <p className="text-gray-600 mt-2">{dimensions}</p>
        <span>({reviews})</span>
        <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
        <Image src={addtocart} alt='addtocart-icon'/>
        
      </div>
    </div>
  );
};

export default ProductCard;
