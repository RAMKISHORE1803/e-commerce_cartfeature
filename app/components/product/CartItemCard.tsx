"use client";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";
import Image from "next/image";
import deleteicon from "../icons/delete.svg";
import { useToast } from "../ui/use-toast";

type CartItemCardProps = {
  id: number;
  name: string;
  dimensions: string;
  price: number;
  quantity: number;
  images: string[]; 
};

const CartItemCard = ({
  id,
  name,
  dimensions,
  price,
  quantity,
  images,
}: CartItemCardProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const { toast } = useToast()

  const handleIncrement = () => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
    toast({
      title: `${name} removed from your shopping cart`,
    });
  }

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <div className="relative w-24 h-24 flex-shrink-0 mr-4">
        <Image
          src={images[0]}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          sizes="100vw"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{dimensions}</p>
        <p className="text-gray-600 mt-1 text-sm mb-4">${price.toFixed(2)}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-l-md">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 text-white bg-black rounded-l-md"
            >
              -
            </button>
            <p className="text-gray-800 text-sm px-4">{quantity}</p>
            <button
              onClick={handleIncrement}
              className="px-2 py-1 text-white bg-black rounded-r-md"
            >
              +
            </button>
          </div>
          <div><Image src={deleteicon} alt="delete icon" onClick={handleRemoveItem}/></div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
