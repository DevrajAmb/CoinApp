import React from "react";
import BackButton from "../components/BackButton";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { theme } = useSelector((state) => state.theme);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div
      className={
        theme
          ? "min-h-screen bg-gray-900 px-8 md:px-16 py-16"
          : "min-h-screen bg-white px-8 md:px-16 py-16"
      }
    >
      <BackButton />
      <h1 className="text-center text-2xl font-bold text-gray-500 my-4">
        Your Cart
      </h1>

      <div className="p-4 border border-gray-300 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {cartItems.map((item) => (
            <CartItem key={cartItems.id} item={item} />
          ))}
        </div>
        <div className="border border-gray-600 p-4 rounded-md col-span-1">
          <h1 className="text-gray-400 text-xl font-bold">Your Bill : </h1>
          <h1 className="text-gray-400 text-2xl font-bold my-2">
            Your Items : {cartItems.length}
          </h1>
          <h1 className="text-gray-400 text-2xl font-bold my-2">
            Total Amount : INR{" "}
            {cartItems.reduce((p, c) => p + c.market_data.current_price.inr, 0)}
          </h1>
          <button className="hover:bg-emerald-500 duration-200 hover:cursor-pointer bg-emerald-400 py-2 px-6 rounded-md w-full my-4 text-sm font-bold text-white">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
