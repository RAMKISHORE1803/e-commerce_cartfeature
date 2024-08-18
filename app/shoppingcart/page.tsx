"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItemCard from "../components/product/CartItemCard";
import { useEffect, useState } from "react";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const calculateTotalPrice = () => {
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    calculateTotalPrice();
  }, [cart]);

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
    <div className="p-10 flex">
      {/* Shopping bag section */}
      <div className="w-[60vw]">
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

      {/* Order details Section */}
      <div className="w-[40vw] p-6 bg-white shadow-md rounded-lg">
        <h1 className="font-extrabold text-2xl mb-8 text-gray-900">
          Order Summary
        </h1>

        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <span className="text-lg font-semibold text-gray-800">Products:</span>
          <span className="text-lg font-semibold text-gray-900">
            ${calculateTotalPrice().toFixed(2)}
          </span>
        </div>

        {/* Apply Discount Code Section */}
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

        {/* Continue to payment section */}
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}
