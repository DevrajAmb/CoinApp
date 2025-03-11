import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { getCoinDetails } from "../features/coins/coinSlice";
import { useParams } from "react-router-dom";
import { add } from "../features/cart/cartSlice";

const CoinDetails = () => {
  const { theme } = useSelector((state) => state.theme);
  const { coin, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.coin
  );

  const { coinid } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(getCoinDetails(coinid));
  }, [coinid]);

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
          ? "min-h-screen bg-gray-900 px-8 md:px-16 py-16"
          : "min-h-screen bg-white px-8 md:px-16 py-16"
      }
    >
      <BackButton />

      <div className="border border-gray-500 p-3 rounded-sm flex items-center flex-col space-y-2 md:flex-row md:space-y-0 space-x-0 md:space-x-2 ">
        <div className="flex items-center justify-center p-4 rounded-md w-full md:w-1/3">
          <img className="h-52" src={coin?.image?.large} alt="" />
        </div>
        <div className="relative  p-4 rounded-md w-full md:w-2/3">
          <h1 className="text-gray-400 text-3xl font-bold my-2">
            Name : {coin?.name}
          </h1>
          <h2 className="text-gray-400 text-2xl font-bold my-2">
            Symbol : {coin?.symbol}
          </h2>
          <h3 className="text-green-400 text-xl font-bold my-2">
            Price : {coin?.market_data?.current_price?.inr}
          </h3>
          <div className="bg-green-600 rounded-md text-center text-sm font-semibold text-white p-1 absolute top-3 right-3">
            <p>Rank #{coin?.market_cap_rank}</p>
          </div>
          <p className="text-gray-400 my-2 text-sm">{coin?.description?.en}</p>
          <button
            onClick={() => handleAddToCart(coin)}
            className="my-4 text-center bg-green-600 text-white p-2 w-full rounded-md hover:bg-green-800 duration-200 font-bold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
