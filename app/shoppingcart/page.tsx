"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItemCard from "../components/product/CartItemCard";
import { useState } from "react";
import Image from "next/image";
import emptybag from "../components/images/emptybag.png";
import Link from "next/link";
import useFetchDiscountCodes from "../hooks/useFetchDiscountCodes";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  const { discountCodes, loading, error } = useFetchDiscountCodes();

  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [appliedCode, setAppliedCode] = useState<string | null>(null);

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotalPriceWithDiscount = () => {
    const totalPrice = calculateTotalPrice();
    if (appliedDiscount) {
      return totalPrice - totalPrice * (appliedDiscount / 100);
    }
    return totalPrice;
  };

  const handleToggleDiscount = () => {
    setShowDiscount(!showDiscount);
  };

  const handleApplyDiscount = (code: string) => {
    const foundDiscount = discountCodes.find(
      (discount) => discount.code === code.toUpperCase()
    );

    if (foundDiscount) {
      setAppliedDiscount(foundDiscount.discount);
      setAppliedCode(code);
      setDiscountMessage(`Success! ${foundDiscount.discount}% discount applied.`);
    } else {
      setDiscountMessage("Invalid discount code.");
    }

    setDiscountCode("");
    setShowDiscount(false);
  };

  const handleRemoveDiscount = () => {
    setAppliedDiscount(null);
    setAppliedCode(null);
    setDiscountMessage("Discount code removed.");
  };

  return (
    <div className="p-5 md:p-10 lg:p-10 flex flex-col lg:flex-row w-full">
      {cart.length === 0 ? (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-extrabold text-4xl mb-8">
              Your shopping bag is empty
            </h1>
            <p className="text-gray-600 mb-6">
              Looks like you have not added any items to your shopping bag yet.
            </p>
            <Link
              className="bg-black text-white rounded-xl p-6 text-center"
              href={"/"}
            >
              Go back to shopping
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={emptybag}
              alt="Empty shopping bag"
              width={500}
              height={500}
              className="object-contain"
            />
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

          <div className="w-full lg:w-2/5 p-6 bg-white rounded-lg mt-8 lg:mt-0">
            <h1 className="font-extrabold text-2xl mb-8 text-gray-900">
              Order Summary
            </h1>

            <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
              <span className="text-lg font-semibold text-gray-800">
                Products:
              </span>
              <span className="text-lg font-semibold text-gray-900">
                ${calculateTotalPriceWithDiscount().toFixed(2)}
              </span>
            </div>

            {appliedDiscount ? (
              <div className="mb-6">
                <p className="text-lg text-green-600">
                  {appliedDiscount}% discount applied with code{" "}
                  <strong>{appliedCode}</strong>.
                </p>
                <button
                  onClick={handleRemoveDiscount}
                  className="text-red-600 font-medium hover:underline mt-2"
                >
                  Remove Discount
                </button>
              </div>
            ) : (
              <div className="mb-6">
                {loading ? (
                  <p>Loading discount codes...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <>
                    <button
                      onClick={handleToggleDiscount}
                      className="text-blue-600 font-medium hover:underline focus:outline-none"
                    >
                      {showDiscount
                        ? "Hide Discount Code"
                        : "Apply Discount Code"}
                    </button>
                    {showDiscount && (
                      <div className="mt-4">
                        <div className="flex items-center mb-4">
                          <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Enter discount code"
                            className="border border-gray-300 rounded-l-md px-3 py-2 w-full"
                          />
                          <button
                            onClick={() => handleApplyDiscount(discountCode)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
                          >
                            Apply
                          </button>
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold mb-2">
                            Available Discount Codes:
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {discountCodes.map((code) => (
                              <button
                                key={code.code}
                                onClick={() => handleApplyDiscount(code.code)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                              >
                                {code.code} ({code.discount}% off)
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {discountMessage && (
                      <p
                        className={`text-sm mt-2 ${
                          appliedDiscount ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {discountMessage}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}

            <button className="w-full h-28 py-3 bg-themeBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Continue to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
