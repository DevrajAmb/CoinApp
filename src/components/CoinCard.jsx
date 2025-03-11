import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-md flex flex-col items-center justify-between space-y-5">
      <img className="h-36 rounded-full" src={coin.large} alt="" />
      <h1 className="text-xl text-gray-500 font-semibold">{coin.name}</h1>
      <Link to={"/coin/" + coin.id}>
        <button className="hover:bg-green-600 bg-green-500 py-2 px-4 text-sm font-bold rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CoinCard;
