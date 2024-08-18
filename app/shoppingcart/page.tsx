"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItemCard from "../components/product/CartItemCard";
import { useState } from "react";
import Image from "next/image";
import emptybag from "../components/images/emptybag.png";
import discounttag from "../components/icons/discount-tag.svg";
import dropdown from "../components/icons/dropdown.svg";
import Link from "next/link";
import useFetchDiscountCodes from "../hooks/useFetchDiscountCodes";
import Modal from "../components/Modal";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  const { discountCodes, loading, error } = useFetchDiscountCodes();

  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [savedAmount, setSavedAmount] = useState<number | null>(null);

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
      setDiscountMessage(
        `Success! ${foundDiscount.discount}% discount applied.`
      );
      const totalPrice = calculateTotalPrice();
      const discountAmount = totalPrice * (foundDiscount.discount / 100);
      setSavedAmount(discountAmount);
      setShowModal(true);
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
      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold text-center mb-4">Hurray!</h2>
        <p className="text-lg text-center mb-4">
          You have saved <strong>${savedAmount?.toFixed(2)}</strong> with the discount code{" "}
          <strong>{appliedCode}</strong>!
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </Modal>

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

          <div className="w-full lg:w-2/5 p-6 bg-white rounded-lg mt-8 lg:mt-0 shadow-md">
            <h1 className="font-extrabold text-2xl mb-8 text-gray-900">
              Order Summary
            </h1>

            <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
              <span className="text-lg font-semibold text-gray-800">
                Subtotal:
              </span>
              <span className="text-lg font-semibold text-gray-900">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>

            {appliedDiscount ? (
              <div className="mb-6 p-4 border border-green-300 rounded-lg bg-green-50">
                <p className="text-lg text-green-800">
                  <strong>{appliedDiscount}%</strong> discount applied with code{" "}
                  <strong>{appliedCode}</strong>.
                </p>
                <p className="text-sm text-green-700 mt-2">
                  You saved <strong>${savedAmount?.toFixed(2)}</strong>!
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
                      className="font-bold text-sm flex items-center justify-between w-full"
                    >
                      <div className="flex gap-2">
                        <Image src={discounttag} alt="discount-icon" />
                        <p>Apply Discount Code</p>
                      </div>
                      <Image src={dropdown} alt="dropdown-icon" />
                    </button>
                    {showDiscount && (
                      <div className="mt-4">
                        <div className="flex items-center mb-4 justify-between mt-8">
                          <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Enter discount code"
                            className="border border-gray-300 rounded-l-md px-3 py-2 w-3/4"
                          />
                          <button
                            onClick={() => handleApplyDiscount(discountCode)}
                            className="text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                          >
                            Apply
                          </button>
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold mb-2 mt-4">
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

            <div className="flex items-center justify-between border-t border-gray-300 pt-4 mt-4">
              <span className="text-lg font-semibold text-gray-800">
                Total:
              </span>
              <span className="text-lg font-semibold text-gray-900">
                ${calculateTotalPriceWithDiscount().toFixed(2)}
              </span>
            </div>

            <button className="w-full h-28 py-3 bg-themeBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-4">
              Continue to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
