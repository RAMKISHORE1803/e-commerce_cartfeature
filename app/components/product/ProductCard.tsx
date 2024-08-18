"use client";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";
import Image from "next/image";
import Link from "next/link";
import addtocart from "../icons/addtocart.svg";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

type ProductCardProps = {
  id: number;
  name: string;
  dimensions: string;
  price: number;
  reviews: number;
  images: string[];
};

const ProductCard = ({
  id,
  name,
  dimensions,
  price,
  reviews,
  images,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const { toast } = useToast();

  const handleAddToCart = () => {
    const product = { id, name, price, quantity: 1, dimensions, images };
    dispatch(addItem(product));
    //console.log("Cart items after adding:", cart);
    toast({
      title: `${name} added to your shopping cart`,
    });
  };

  useEffect(() => {
    console.log("Cart items after adding:", cart);
  }, [cart]);

  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={images[0]}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-2">{dimensions}</p>
        <span>({reviews})</span>
        <p className="text-gray-600 mt-2 mb-8">${price.toFixed(2)}</p>
        <Image
          className="cursor-pointer"
          src={addtocart}
          alt="addtocart-icon"
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
