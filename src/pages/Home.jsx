import React from "react";
import Form from "../components/Form";
import TrrendingCoins from "../components/TrrendingCoins";
import { useSelector } from "react-redux";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={
        theme
          ? "min-h-screen bg-gray-900 p-8 md:px-16"
          : "min-h-screen bg-white p-8 md:px-16"
      }
    >
      <h1 className="text-gray-500 font-bold text-4xl text-center">
        We Are World's Best Crypto Trading Market!
      </h1>
      <p className="my-4 text-sm font-semibold text-center text-gray-600">
        Now Search And Get Industry Insights Of Crypto World At Your Fingertips
        .
      </p>

      <Form />
      <TrrendingCoins />
    </div>
  );
};

export default Home;
