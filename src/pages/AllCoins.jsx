import React, { useState } from "react";
import CoinCard from "../components/CoinCard";
import BackButton from "../components/BackButton";
import { useSelector } from "react-redux";

const AllCoins = () => {
  const { theme } = useSelector((state) => state.theme);
  const { coins, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.coin
  );

  if (isError) {
    return (
      <div
        className={
          theme
            ? "min-h-screen bg-gray-900 px-8 md:px-16 py-8 "
            : "min-h-screen bg-white p-8"
        }
      >
        <h1 className="text-red-500 font-bold text-2xl text-center">
          404 Coin Not Found
        </h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        className={
          theme
            ? "min-h-screen bg-gray-900 px-8 md:px-16 py-8 "
            : "min-h-screen bg-white p-8"
        }
      >
        <h1 className="text-gray-500 font-bold text-2xl text-center">
          Searching...
        </h1>
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "min-h-screen bg-gray-900 px-8 md:px-16 py-8 "
          : "min-h-screen bg-white p-8"
      }
    >
      <BackButton />
      <h1 className="text-gray-500 font-bold text-2xl text-center">
        Your Search Result
      </h1>

      <div className="my-16 grid grid-col-1 md:grid-cols-4 gap-4">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default AllCoins;
