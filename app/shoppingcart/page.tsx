"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItemCard from "../components/product/CartItemCard";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image component from next/image
import emptybag from "../components/images/emptybag.png";
import Link from "next/link";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  const handleToggleDiscount = () => {
    setShowDiscount(!showDiscount);
  };

  const handleApplyDiscount = () => {
    // Handle discount application logic here
    console.log("Discount code applied:", discountCode);
    // You might also want to reset the discount code or hide the input box after applying
    setDiscountCode("");
    setShowDiscount(false);
  };

  return (
    <div className="p-10 flex flex-col lg:flex-row">
      {cart.length === 0 ? (
        <div className="flex">
          <div className="flex flex-col justify-center w-1/2">
            <h1 className="font-extrabold text-4xl mb-8">
              Your shopping bag is empty
            </h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your shopping bag yet.
            </p>
            <Link className="bg-black text-white rounded-xl p-6 text-center" href={'/search?q=2'}>Go back to shopping</Link>
          </div>
          <div className="w-[50vw]">
          <Image src={emptybag} alt="Empty shopping bag" />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full lg:w-3/5">
            <h1 className="font-extrabold text-4xl mb-8">Shopping bag</h1>
            {cart.map((item) => (
              <CartItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                dimensions={item.dimensions}
                images={item.images}
              />
            ))}
          </div>

          <div className="w-full lg:w-2/5 p-6 bg-white shadow-md rounded-lg mt-8 lg:mt-0">
            <h1 className="font-extrabold text-2xl mb-8 text-gray-900">
              Order Summary
            </h1>

            <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
              <span className="text-lg font-semibold text-gray-800">
                Products:
              </span>
              <span className="text-lg font-semibold text-gray-900">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="mb-6">
              <button
                onClick={handleToggleDiscount}
                className="text-blue-600 font-medium hover:underline focus:outline-none"
              >
                {showDiscount ? "Hide Discount Code" : "Apply Discount Code"}
              </button>
              {showDiscount && (
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Enter discount code"
                    className="border border-gray-300 rounded-l-md px-3 py-2 w-full"
                  />
                  <button
                    onClick={handleApplyDiscount}
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Continue to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
